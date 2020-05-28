FROM debian:buster-slim

RUN apt-get update
RUN apt-get install -y nginx

COPY ./html/*.html /var/www/html/

CMD ["/usr/sbin/nginx","-g", "daemon off;"] 
