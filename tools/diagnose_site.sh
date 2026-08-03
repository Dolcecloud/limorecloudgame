#!/usr/bin/env bash
# diagnose_site.sh
# Usage: sudo bash diagnose_site.sh your.domain.tld
# Produces a diagnostics bundle in ./diagnostics_{domain}_{timestamp}.tgz

set -e
if [ -z "$1" ]; then
  echo "Usage: $0 your.domain.tld"
  exit 1
fi
DOMAIN=$1
TS=$(date +%Y%m%d_%H%M%S)
OUTDIR="diagnostics_${DOMAIN}_${TS}"
mkdir -p "$OUTDIR"

echo "1) Gathering cert details (openssl)"
openssl s_client -connect ${DOMAIN}:443 -servername ${DOMAIN} </dev/null 2>/dev/null | sed -n '1,200p' > "$OUTDIR/openssl_output.txt" || true

echo "2) HTTP headers"
curl -I -L --max-time 15 https://${DOMAIN} -o "$OUTDIR/curl_headers.txt" || true

echo "3) Basic domain check (whois)"
if command -v whois >/dev/null 2>&1; then
  whois ${DOMAIN} > "$OUTDIR/whois.txt" || true
fi

echo "4) Repo / webroot checks (if run from project root)"
# compute checksums of files (good for comparison)
if [ -d . ]; then
  find . -maxdepth 3 -type f \( -name '*.html' -o -name '*.js' -o -name '*.php' -o -name '*.py' -o -name '*.css' \) -print0 | xargs -0 sha256sum > "$OUTDIR/file_checksums.sha256" || true
fi

echo "5) Search for suspicious patterns"
PATTERNS=("eval(" "document.write" "data:text" "base64," "unescape(" "atob(" "iframe src" "window.location=")
for p in "${PATTERNS[@]}"; do
  echo "== pattern: $p ==" >> "$OUTDIR/suspicious_search.txt"
  grep -R --line-number -I --exclude-dir=.git --binary-files=without-match "$p" . 2>/dev/null >> "$OUTDIR/suspicious_search.txt" || true
done

echo "6) Check for mixed content requests (manual review recommended)"
# Collect external https resources from HTML/JS
grep -R --line-number -I --exclude-dir=.git -E "https://[^"]+" . 2>/dev/null | sed -n '1,200p' > "$OUTDIR/external_https_refs.txt" || true

echo "7) Save listing of web root files (top 200 lines)"
ls -la . | sed -n '1,200p' > "$OUTDIR/ls_root.txt" || true

echo "8) Environment info"
uname -a > "$OUTDIR/uname.txt" || true
if command -v lsb_release >/dev/null 2>&1; then lsb_release -a > "$OUTDIR/lsb_release.txt" 2>/dev/null; fi

# package diagnostics
tar -czf "${OUTDIR}.tgz" "$OUTDIR"
rm -rf "$OUTDIR"

echo "Diagnostics bundle created: ${OUTDIR}.tgz"
