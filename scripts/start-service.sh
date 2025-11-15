#!/usr/bin/env bash
# Start service script for Rio Coffee Next.js app
# Usage: ./scripts/start-service.sh [PORT]
# - kills any running processes using the project dir or the port
# - builds if no .next exists
# - starts `npx next start` in background, writes next.pid and next.log

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${1:-3000}"

echo "Project dir: $PROJECT_DIR"
echo "Port: $PORT"

# Find PIDs listening on the port (try lsof, ss), or node processes running from the project dir
PIDS=""
if command -v lsof >/dev/null 2>&1; then
  PIDS="$(lsof -ti tcp:"$PORT" || true)"
fi

if [ -z "$PIDS" ] && command -v ss >/dev/null 2>&1; then
  PIDS="$(ss -ltnp sport = :$PORT 2>/dev/null | awk 'NR>1 {match($0,/pid=([0-9]+)/,a); if(a[1]) print a[1]}')"
fi

if [ -z "$PIDS" ]; then
  # look for node processes running from this project dir
  PIDS="$(pgrep -f "node.*$PROJECT_DIR" || true)"
fi

if [ -n "$PIDS" ]; then
  echo "Found running processes: $PIDS"
  echo "Attempting graceful shutdown..."
  for pid in $PIDS; do
    if kill "$pid" 2>/dev/null; then
      echo "Sent SIGTERM to $pid"
    fi
  done
  sleep 3
  for pid in $PIDS; do
    if kill -0 "$pid" 2>/dev/null; then
      echo "Process $pid still alive, sending SIGKILL"
      kill -9 "$pid" 2>/dev/null || true
    fi
  done
else
  echo "No existing processes found for port $PORT or project dir"
fi

# Ensure working dir
cd "$PROJECT_DIR"

# Build if necessary
if [ ! -d ".next" ]; then
  echo "No .next folder found — running build"
  npm run build
fi

# Start Next.js in background
echo "Starting Next.js (production) on port $PORT"
nohup npx next start -p "$PORT" > next.log 2>&1 &
NEW_PID=$!
echo $NEW_PID > next.pid
sleep 1

# Wait a moment and confirm process started
if kill -0 "$NEW_PID" 2>/dev/null; then
  echo "Started Next.js (pid=$NEW_PID)"
else
  echo "Failed to start Next.js. Check next.log for details."
  exit 1
fi

# Determine local IP for LAN access
HOST_IP=""
if command -v hostname >/dev/null 2>&1; then
  HOST_IP="$(hostname -I 2>/dev/null || true)"
fi
if [ -z "$HOST_IP" ] && command -v ip >/dev/null 2>&1; then
  HOST_IP="$(ip route get 1.1.1.1 2>/dev/null | awk '{for(i=1;i<=NF;i++) if($i=="src"){print $(i+1); exit}}')"
fi

echo "Application is running and should be accessible at:"
echo "  http://localhost:$PORT"
if [ -n "$HOST_IP" ]; then
  echo "  http://$HOST_IP:$PORT"
fi

echo "Logs: $PROJECT_DIR/next.log"
echo "PID file: $PROJECT_DIR/next.pid"

echo "To stop this instance: kill \$(cat next.pid) or run ./scripts/stop-prod.sh"
