# PowerShell diagnostic script for Windows
# Usage: .\diagnose_site.ps1 -Domain your.domain.tld
param(
  [Parameter(Mandatory=$true)][string]$Domain
)
$ts = Get-Date -Format yyyyMMdd_HHmmss
$outdir = "diagnostics_${Domain}_$ts"
New-Item -ItemType Directory -Path $outdir | Out-Null

Write-Output "1) Gather TLS info (Test-NetConnection + openssl if available)"
try { Test-NetConnection -ComputerName $Domain -Port 443 | Out-File "$outdir\test-netconnection.txt" } catch { }
if (Get-Command openssl -ErrorAction SilentlyContinue) { & openssl s_client -connect "$Domain`:443" -servername $Domain > "$outdir\openssl_output.txt" 2>$null }

Write-Output "2) HTTP headers"
try { Invoke-WebRequest -Uri "https://$Domain/" -Method Head -UseBasicParsing -TimeoutSec 15 | Select-Object * > "$outdir\invoke_headers.txt" } catch { }

Write-Output "3) file checksums (webroot must be current dir)"
Get-ChildItem -Path . -Include *.html,*.js,*.css,*.php -Recurse -Depth 2 -ErrorAction SilentlyContinue | ForEach-Object { Get-FileHash $_.FullName -Algorithm SHA256 } | Out-File "$outdir\file_checksums.txt"

Write-Output "4) Search suspicious patterns"
$patterns = @('eval(','document.write','data:text','base64,','unescape(','atob(','iframe src','window.location=')
foreach ($p in $patterns) {
  Write-Output "== pattern: $p ==" | Out-File -FilePath "$outdir\suspicious_search.txt" -Append
  Select-String -Path .\* -Pattern $p -SimpleMatch -CaseSensitive:$false -List | Out-File -FilePath "$outdir\suspicious_search.txt" -Append
}

Write-Output "5) External https refs"
Select-String -Path .\* -Pattern 'https://\S+' -AllMatches | Select-Object Path, LineNumber, Matches | Out-File "$outdir\external_https_refs.txt"

Write-Output "Packaging..."
Compress-Archive -Path $outdir -DestinationPath "${outdir}.zip"
Write-Output "Diagnostics bundle: ${outdir}.zip"
