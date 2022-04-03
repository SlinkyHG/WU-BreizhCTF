FROM debian:buster-slim

#!/bin/bash
# steamcmd Base Installation Script
#
# Server Files: /mnt/server
# Image to install with is 'debian:buster-slim'
ENV HOME "/mnt/server"

RUN apt -y update && \
    apt -y --no-install-recommends install curl lib32gcc1 ca-certificates sudo

## download and install steamcmd
RUN cd /tmp && \
    mkdir -p /mnt/server/steamcmd && \
    curl -sSL -o steamcmd.tar.gz https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz && \
    tar -xzvf steamcmd.tar.gz -C /mnt/server/steamcmd

WORKDIR /mnt/server/steamcmd

# SteamCMD fails otherwise for some reason, even running as root.
# This is changed at the end of the install process anyways.
RUN chown -R root:root /mnt

## Create user with uid and basic rights
RUN useradd -rm -d /mnt/server/ -s /bin/bash -u 1000 container 

ADD ./src/ /mnt/src/
ADD ./entrypoint.sh /entrypoint.sh
RUN chmod u+x /entrypoint.sh

CMD [ "/entrypoint.sh" ]

