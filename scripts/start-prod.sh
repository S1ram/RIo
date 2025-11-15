#!/usr/bin/env bash
# Start Next.js in production mode on port ${PORT:-3000}
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
PORT=${PORT:-3000}
# build if needed
if [ ! -d ".next" ]; then
  echo "No .next build found, building..."
  npm run build
fi
nohup npx next start -p "$PORT" > next.log 2>&1 &
echo $! > next.pid
echo "Started Next.js (pid=$(cat next.pid)) on port $PORT"
