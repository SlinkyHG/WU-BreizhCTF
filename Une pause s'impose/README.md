# Une pause s'impose ! 1/3 - Easy

## Description

```
Une pause s'impose ! Allons tenter de battre le record de Cabir sur Counter Strike Source, il a réussi à atteindre l'autre coté de la map en moins de 5 secondes... Une vrai fusée

Retrouvez le serveur dans l'onglet "LAN" sur Counter Strike: Source

Format du flag : BZHCTF{}
```

## Flag

BZHCTF{COURIR_C_EST_POUR_LES_FAIBLES}

## Solution

TODO: Cheat engine

# Une pause s'impose ! 2/3 - Easy

## Auteur

Slinky
# Une pause s'impose ! 3/3 - Medium

## Auteur

Slinky

## Description

```
Une pause s'impose ! Vous faites un break ? C'est parti pour une p'tite game sur Counter Strike: Source !
Rendez-vous sur le serveur une-pause-s-impose.ctf.bzh:<27015/27025/27035/27045>. 
D'ailleurs, il paraît que l'admin du serveur à développé un plugin sourcemod breizh.smx, Si vous mettez la main dessus, voyez ce que vous pouvez faire avec.
```

## Solution

Lors de la connexion, pas grand chose: on télécharge une map et on a un motd BreizhCTF. Pour les amateurs de ce jeu, une page web en motd, c'est rare car le jeu n'interprete pas les motd de plus de 1500 caractères... 
Si on intercepte les trames à la connexion du serveur, on observe que l'on se connecte au serveur web http://web.une-pause-s-impose:21009 qui n'a strictement rien a voir avec le jeu... et si on observe un peu plus, on vois également qu'on utilise le parametre ?file=rules pour afficher... le règlement ? 

On se rend donc sur ce service web pour voir ce qu'on peu faire...
`curl http://web.une-pause-s-impose:21009?file=../../../../../../../../etc/passwd`

OH! on l'a... et si on regarde le dernier user, on a counter avec comme homedir /mnt/server
Pour éviter le guessing, le serveur est installé à la racine... /mnt/server/cstrike
On sait que le plugin est un .smx pour source mod dans le dossier disabled ? d'acc... 
`wget http://web.une-pause-s-impose:21009?file=../../../../../../../../mnt/server/cstrike/addons/sourcemod/plugins/disabled/breizh.smx`
 
On a le plugin... Un petit coup de smx Decompiler sur internet ? 

Le plugin ne fait que quelques lignes, dont une qui affiche un truc au démarrage du serveur... mais la fonction CreateConVar, à quoi sert-elle ? 
Un petit tour sur la doc de sourcemod, on vois qu'elle permet de créer des entrées de configuration pour le serveur... on va donc chercher le fichier de configuration de ce dernier, nativement server.conf comme donné sur la documentation de steam.
`curl http://web.une-pause-s-impose:21009?file=../../../../../../../../mnt/server/cstrike/cfg/server.conf`

HOPE! On a le flag ! 
Maintenant, une p'tite pause :) 