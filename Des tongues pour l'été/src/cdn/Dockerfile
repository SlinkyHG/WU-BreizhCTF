FROM nimmis/apache-php7

#Remove Apache version in header
RUN echo ServerTokens Prod >> /etc/apache2/apache2.conf
RUN echo ServerSignature Off >> /etc/apache2/apache2.conf
RUN echo "BZHCTF{1_b3re_p0ur_w0rty_svp_!?!}" > /flag.txt
RUN { \
  echo 'IncludeOptional conf.d/*.conf'; \
  echo 'TraceEnable off'; \
} >> /etc/apache2/apache2.conf

#Remove PHP version in headers
RUN sed -i 's/expose_php = On/expose_php = off/g' /etc/php/7.0/apache2/php.ini
RUN a2enmod ratelimit
RUN rm -rf /var/www/html/*

COPY ./files /