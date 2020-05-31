#!/usr/bin/env bash

envsubst '$PROXY_PROTOCOL,$PROXY_UPSTREAM' < nx/sites-available/default.template > /etc/nginx/sites-available/default
nginx -g 'daemon off;'