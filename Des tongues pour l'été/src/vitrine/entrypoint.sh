#!/bin/sh
set -e
sed -i "s/EDITPORT/${CDN_PORT}/g" /usr/local/apache2/htdocs/index.html
sed -i "s/EDITPROTO/${CDN_PROTO}/g" /usr/local/apache2/htdocs/index.html

# Apache gets grumpy about PID files pre-existing
rm -f /usr/local/apache2/logs/httpd.pid

httpd -DFOREGROUND "$@"