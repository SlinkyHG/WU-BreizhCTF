FROM nimmis/apache-php7
#Remove Apache version in header
RUN echo ServerTokens Prod >> /etc/apache2/apache2.conf
RUN echo ServerSignature Off >> /etc/apache2/apache2.conf

RUN { \
  echo 'IncludeOptional conf.d/*.conf'; \
  echo 'TraceEnable off'; \
} >> /etc/apache2/apache2.conf

#Remove PHP version in headers
RUN sed -i 's/expose_php = On/expose_php = off/g' /etc/php/7.0/apache2/php.ini

## Create user with uid and basic rights
RUN useradd -rm -d /mnt/server/ -s /bin/bash -u 1000 counter 

RUN rm -rf /var/www/html/*

ADD ./src/ /var/www/html