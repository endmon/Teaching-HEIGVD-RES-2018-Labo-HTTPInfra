FROM php:7.0-apache

COPY apache2-foreground /usr/local/bin/
COPY templates /var/apache2/templates

COPY conf/ /etc/apache2

RUN a2enmod proxy proxy_http

RUN a2enmod proxy_balancer status lbmethod_byrequests

RUN a2ensite 000-* 001-*
