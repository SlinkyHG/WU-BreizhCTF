<?php 
if(!empty($_GET["file"])){
    if(preg_match(['file']) != "rules"){
        header("Cache-Control: no-cache");
        header("Expires: -1");
        header("Content-Type: application/octet-stream;");
        header("Content-Disposition: attachment; filename=\"" . basename($file) . "\";");
        header("Content-Transfer-Encoding: binary");
        header("Content-Length: " . filesize($file));
        echo file_get_contents($file);
    } else { 
echo '<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>CSS BreizhCTF</title>
        <link rel="stylesheet" href="css/style.css">
    </head>

    <body>
        <!!-- simple first page with a title, an image and text-->
        <div class="container">
            <div class="title">
                <h1>BreizhCTF CSS Server</h1>
            </div>
            <div class="image">
                <img class="image" src="assets/logo.png" alt="logo">
            </div>
            <div class="text">
                <p>
                    Bienvenue sur le serveur Counter Strike Source du BreizhCTF 2022 !
                </p>
            </div>' . file_get_contents("./files/".$_GET["file"]) . '
        </div>
    </body>
</html>';
    }
} 
?>