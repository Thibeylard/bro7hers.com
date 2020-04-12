var broId;
var broInfos = {
    "kentPictureName": "Kentyn",
    "kentPictureDescription": "C'est le leader de notre équipe. La plupart du temps. Ca dépend parfois. Enfin en tout cas c'est lui " +
        "                qui supervise l'aspect graphique du jeu, mais il compose aussi certaines musiques et c'est un générateur de scénario. " +
        "                Vous pouvez retrouver tout son travail graphique sur son <a class=\"classicLink\" href=\"https://www.deviantart.com/kentyn\">deviantArt</a> !",
    "gautPictureName": "Gautier",
    "gautPictureDescription": "C'est le peintre musical de la team, et un pixel artist intermittent. " +
        "Il adore aussi dessiner des monstres, mais ça colle pas pour tous les projets. " +
        "Son enthousiasme et intarissable inspiration, fourmillant de petits détails, l'emportent parfois un peu loin, mais c'est la rançon " +
        "de ceux qui ont la passion et le plaisir de créer en eux !",
    "thibPictureName": "Thibaut",
    "thibPictureDescription": "C'est moi. Je suis le technicien en chef (je suis donc mon propre chef). " +
        "Je met tout en place sur notre moteur de jeu, Construct 3. Je touche à la programmation en général " +
        "et parfois j'aime bien faire un peu d'animation. Comme l'utilisation de la première personne vous l'indique, " +
        "j'ai fait le site."
}

$(".broPicture").click(function () {
    if($(this).attr("id") === broId) {
        $(this).css("filter", "blur(2px)");
        $(this).css("border", "none");
        $("#broName").html('');
        $("#broDescription").html('');
        broId = "";
    } else {
        $(this).css("filter", "none");
        $(this).css("border", "dashed 4px red");
        broId = $(this).attr("id");
        $(`.broPicture[id!=${broId}]`).css("filter", "blur(2px)");
        $(`.broPicture[id!=${broId}]`).css("border", "none");
        $("#broName").html(broInfos[`${broId}Name`]);
        $("#broDescription").html(broInfos[`${broId}Description`]);
    }

});
