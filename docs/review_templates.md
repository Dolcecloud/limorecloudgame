# Templates: Request Review / Remediation Messages

## Google Search Console - Request Review (sample)
Subject: Request review - phishing/malware warning for https://YOUR_DOMAIN/

We have investigated and remediated the reported security issue on https://YOUR_DOMAIN/. Actions performed:

- Took the site offline (maintenance page) on TIMESTAMP.
- Restored files from a known clean backup (COMMIT/UPLOAD details) and removed any injected files.
- Rotated all admin/hosting/API credentials and disabled compromised keys.
- Added security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options) and fixed mixed-content issues.
- Scanned site and verified no obfuscated scripts or malicious redirects remain.

Please re-evaluate https://YOUR_DOMAIN/ and remove any Safe Browsing warnings. Attached: screenshots, diagnostics bundle, and list of changed files.

Thank you,
Your Name / Team
Contact: you@example.com

---

## Host / Render support - support request (sample)
Subject: Urgent: Security warning (phishing) on my Render app limorecloudgame-1.onrender.com

Hello,

Our app at https://limorecloudgame-1.onrender.com is currently showing a 'Dangerous site' / phishing warning in browsers. We need assistance to determine whether this is due to a hosting-level issue or upstream blacklist. We have:

- Placed the site in maintenance mode and created a diagnostics bundle.
- Verified source repository and restored clean files.

Please investigate any server-level compromises, TLS misconfiguration, or blacklisting on your platform. We can provide the diagnostics bundle on request.

Regards,

---

## Apple / Safari guidance
If the warning appears on Safari, it likely stems from Safe Browsing lists or certificate issues. Provide the same remediation summary and request review via Apple support channels or through the hosting provider.

---


Paste values (timestamps, filenames) into these templates before submitting requests.
