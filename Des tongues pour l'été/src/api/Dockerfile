FROM node:14

RUN mkdir /data && \
    adduser --home /data --shell /bin/bash --disabled-password app && \
    chown -R app /data


COPY --chown=app ./app /data/app

WORKDIR /data/app

RUN npm i && \
    npm run build

ENV PORT=3000
EXPOSE 3000

CMD node dist/index.js