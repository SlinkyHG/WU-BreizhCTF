FROM httpd:2.4

COPY ./www/ /usr/local/apache2/htdocs/

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod u+x /entrypoint.sh

CMD ["/entrypoint.sh"]
