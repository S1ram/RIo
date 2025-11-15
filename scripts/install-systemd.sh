#!/usr/bin/env bash
# Usage: sudo ./install-systemd.sh /abs/path/to/rio-coffee
set -euo pipefail
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root: sudo $0 /abs/path/to/rio-coffee"
  exit 1
fi
if [ "$#" -ne 1 ]; then
  echo "Usage: sudo $0 /abs/path/to/rio-coffee"
  exit 1
fi
REPO_PATH="$1"
UNIT_SRC="$(pwd)/scripts/rio-coffee.service"
UNIT_DST="/etc/systemd/system/rio-coffee.service"
if [ ! -f "$UNIT_SRC" ]; then
  echo "Unit template not found at $UNIT_SRC"
  exit 1
fi
# Replace placeholder with actual path
sed "s|__WORKDIR__|$REPO_PATH|g" "$UNIT_SRC" > /tmp/rio-coffee.service
mv /tmp/rio-coffee.service "$UNIT_DST"
chmod 644 "$UNIT_DST"
# reload and enable
systemctl daemon-reload
systemctl enable rio-coffee
systemctl start rio-coffee
systemctl status rio-coffee --no-pager

echo "Installed and started rio-coffee service using working directory: $REPO_PATH"
