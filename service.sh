#!/bin/bash
# Service manager for Rio Coffee Next.js app

APP_NAME="riocoffee"
APP_DIR="/home/ubuntu/RIo"
LOG_FILE="$APP_DIR/app.log"

cd $APP_DIR || exit

case "$1" in
  start)
   # echo "👉 Installing dependencies..."
   # sudo npm install

    echo "👉 Building Next.js app..."
    npm run build

    echo "👉 Starting $APP_NAME in background..."
    nohup npm run start > $LOG_FILE 2>&1 &

    echo "👉 Reloading Nginx..."
    sudo nginx -t && sudo systemctl reload nginx

    echo "✅ $APP_NAME started. Logs: $LOG_FILE"
    ;;
  
  stop)
    echo "👉 Stopping $APP_NAME..."
    pkill -f "npm run start"
    echo "✅ $APP_NAME stopped."
    ;;
  
  restart)
    echo "👉 Restarting $APP_NAME..."
    $0 stop
    sleep 2
    $0 start
    ;;
  
  status)
    echo "👉 Checking if $APP_NAME is running..."
    pgrep -af "npm run start" || echo "❌ $APP_NAME is not running."
    ;;
  
  enable)
    echo "👉 Enabling auto-start on reboot..."
    (crontab -l 2>/dev/null; echo "@reboot cd $APP_DIR && nohup npm run start > $LOG_FILE 2>&1 &") | crontab -
    echo "✅ Auto-start enabled via crontab."
    ;;
  
  *)
    echo "Usage: $0 {start|stop|restart|status|enable}"
    ;;
esac
