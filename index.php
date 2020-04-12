<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/main.css">
    <title>Bro7hers</title>
    <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>

</head>
<body>
<?php include("includes/header.php"); ?>
<nav id="languageNavbar"></nav>
<section id="introSection">
    <h2 class="sectionTitle">Qui sommes-nous ?</h2>
    <p class="kapsText bold">Nous sommes une fratrie. </p>
    <p class="kapsText">
        Depuis notre enfance, nous partageons sans doute comme vous une passion
        pour le jeu vidéo. Tout a commencé avec RPG Maker 95 qui ne marchait pas vraiment.
        Puis est venu l'âge d'or RPG Maker XP. C'est à partir de là que les choses sérieuses ont
        commencé. Depuis, notre parcours a été semé d'embuches, d'abandons, de souffles nouveaux.</p>
    <p class="kapsText">
        Mais le désir brûlant de créer un univers, de partager avec d'autres nos univers, ne nous a
        jamais quitté. C'est pour ça qu'on est là, qu'on essaye.</p>
    <p class="kapsText">On espère que vous serez avec nous sur la suite de cette aventure.</p>
    <p class="kapsText">Si oui, alors bienvenue, et merci !!</p>
</section>
<section id="gameSection">
    <h2 class="pixelTitle">SELECT THE LEVEL</h2>
    <div id="gameScroll">
        <div class="gameWrapper">
            <img class="gamePicture" src="img/gobBanner.png">
            <p class="gameDescription kapsText">
                Game of BOX a été créé pour le concours Game à Niaque 2015 sur le thème de la "boite".
                Entre quiz et mini-jeux, essayez de battre notre record de 3500 points, et postez vos screens
                sur notre page Facebook !
            </p>
        </div>
        <div class="gameWrapper">
            <img class="gamePicture" src="img/modBanner.png">
            <p class="gameDescription kapsText">
                Notre participation au "Underground Jam" sur le site Scirra (Construct 2 et 3) en 2015 !
                Le jeu ? Incarnez un Commando de Taupe dans un jeu de puzzle et de rapidité pour défaire votre pire
                ennemi,
                Mr Mecha, le fermier sans scrupules.
            </p>
        </div>
    </div>
    <nav id="gameNavbar"></nav>
</section>
<section id="broSection">
    <h2 class="pixelTitle">SELECT YOUR BRO</h2>
    <nav id="broNavbar">
        <img class="broPicture" id="kentPicture" src="img/broQuent.png"/>
        <img class="broPicture" id="gautPicture" src="img/broGaut.png"/>
        <img class="broPicture" id="thibPicture" src="img/broThib.png"/>
    </nav>
    <h3 class="smallTitle">Kentyn</h3>
    <p id="broDescription" class="kapsText">
        C'est le leader de notre équipe. La plupart du temps. Ca dépend parfois. Enfin en tout cas c'est lui
        qui supervise l'aspect graphique du jeu, mais il compose aussi certaines musiques et c'est un générateur de
        scénario.
        Vous pouvez retrouver tout son travail graphique sur son <a class="classicLink"
                                                                    href="https://www.deviantart.com/kentyn">deviantArt</a>
        !
    </p>
</section>
<script src="js/broSelection.js"></script>
<?php include("includes/footer.php"); ?>
</body>
</html>
