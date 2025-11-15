#!/usr/bin/env bash
# Stop Next.js started by start-prod.sh
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
if [ -f next.pid ]; then
  PID=$(cat next.pid)
  if kill "$PID" 2>/dev/null; then
    echo "Stopped process $PID"
  else
    echo "Process $PID not running; attempting pkill..."
    pkill -f 'next start' || true
  fi
  rm -f next.pid
else
  echo "No next.pid found; attempting pkill..."
  pkill -f 'next start' || true
fi
