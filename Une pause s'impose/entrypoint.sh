#!/bin/bash
cd /mnt/server/steamcmd
./steamcmd.sh +force_install_dir /mnt/server +login anonymous +app_update 232330 validate +quit

## set up 32 bit libraries
mkdir -p /mnt/server/.steam/sdk32
cp -v linux32/steamclient.so ../.steam/sdk32/steamclient.so

mkdir -p /mnt/server/.steam/sdk64
cp -v linux64/steamclient.so ../.steam/sdk64/steamclient.so

cp -R /mnt/src/* /mnt/server/cstrike

cd /mnt/server
sudo -u container ./srcds_run -game cstrike -port 27015 +map de_dust +ip 0.0.0.0 -strictportbind -norestart
