<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/main.css">
    <title>Bro7hers</title>
  </head>
  <body>
    <?php include("includes/header.php");?>
    <nav id="languageNavbar"></nav>
    <section id="introSection">
        <h2 class="sectionTitle">Qui sommes-nous ?</h2>
        <p>Nous sommes une fratrie. <br>
            Depuis notre enfance, nous partageons sans doute comme vous une passion
            pour le jeu vidéo. Tout a commencé avec RPG Maker 95 qui ne marchait pas vraiment.
            Puis est venu l'âge d'or RPG Maker XP. C'est à partir de là que les choses sérieuses ont
            commencé. Depuis, notre parcours a été semé d'embuches, d'abandons, de souffles nouveaux.</p>
        <p>Mais le désir brûlant de créer un univers, de partager avec d'autres nos univers, ne nous a
            jamais quitté. C'est pour ça qu'on est là, qu'on essaye.</p>
        <p>On espère que vous serez avec nous sur la suite de cette aventure.</p>
        <p>Si oui, alors bienvenue, et merci !!</p>
    </section>
    <section id="gameSection">
        <h2 class="pixelTitle">SELECT THE LEVEL</h2>
        <div>
            <div class="gameWrapper">
                <img class="gamePicture">
                <p class="gameDescription"></p>
            </div>
        </div>
        <nav id="gameNavbar"></nav>
    </section>
    <section id="broSection">
        <h2 class="pixelTitle">SELECT YOUR BRO</h2>
        <nav id="broNavbar">
            <img class="broPicture" id="kentPicture"/>
            <img class="broPicture" id="gautPicture"/>
            <img class="broPicture" id="thibPicture"/>
        </nav>
        <h3 class="smallTitle"></h3>
        <p id="broDescription"></p>
    </section>
    <?php include("includes/footer.php");?>
  </body>
</html>
