#!/usr/bin/env bash
# Helper: obtain Let's Encrypt cert for riocoffee.in using certbot (Ubuntu/Debian example)
# Run on the server as root or with sudo.

set -euo pipefail

if ! command -v certbot >/dev/null 2>&1; then
  echo "certbot not found. Install it: sudo apt install -y certbot python3-certbot-nginx"
  exit 1
fi

echo "Obtaining certificates for riocoffee.in and www.riocoffee.in"
sudo certbot --nginx -d riocoffee.in -d www.riocoffee.in

echo "Certbot finished. Verify with: sudo certbot certificates"
