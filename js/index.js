var broId;
var broInfos = {
    "kent-PictureName": "Kentyn",
    "kent-PictureDescription": "C'est le leader de notre équipe. La plupart du temps. Ca dépend parfois. Enfin en tout cas c'est lui " +
        "                qui supervise l'aspect graphique du jeu, mais il compose aussi certaines musiques et c'est un générateur de scénario. " +
        "                Vous pouvez retrouver tout son travail graphique sur son <a class=\"classicLink\" href=\"https://www.deviantart.com/kentyn\">deviantArt</a> !",
    "gaut-PictureName": "Gautier",
    "gaut-PictureDescription": "C'est le peintre musical de la team, et un pixel artist intermittent. " +
        "Il adore aussi dessiner des monstres, mais ça colle pas pour tous les projets. " +
        "Son enthousiasme et intarissable inspiration, fourmillant de petits détails, l'emportent parfois un peu loin, mais c'est la rançon " +
        "de ceux qui ont la passion et le plaisir de créer en eux !",
    "thib-PictureName": "Thibaut",
    "thib-PictureDescription": "C'est moi. Je suis le technicien en chef (je suis donc mon propre chef). " +
        "Je met tout en place sur notre moteur de jeu, Construct 3. Je touche à la programmation en général " +
        "et parfois j'aime bien faire un peu d'animation. Comme l'utilisation de la première personne vous l'indique, " +
        "j'ai fait le site."
}

broId = "kent-Picture";
$(`.broPicture[id=${broId}]`).css("filter", "none");
$(`.broPicture[id=${broId}]`).css("border", "dashed 4px red");
$("#broName").html(broInfos[`${broId}Name`]);
$("#broDescription").html(broInfos[`${broId}Description`]);

$(".broPicture").click(function () {
    $(this).css("filter", "none");
    $(this).css("border", "dashed 4px red");
    broId = $(this).attr("id");
    $(`.broPicture[id!=${broId}]`).css("filter", "blur(2px)");
    $(`.broPicture[id!=${broId}]`).css("border", "none");
    $("#broName").html(broInfos[`${broId}Name`]);
    $("#broDescription").html(broInfos[`${broId}Description`]);
});

var minScrollIndex = 0;
var maxScrollIndex = $(".gameWrapper").length -1;
var currentScrollIndex = 0;
var games = ["gob", "mod"];

setArrows();

$(".leftArrow").click(function () {
    if(!isMaxScrollLeft()) {
        currentScrollIndex -= 1;
        $(".gameWrapper").animate({
            left: `-${$(".gameWrapper").outerWidth() * currentScrollIndex}px`
        })
    }
    setArrows();
});

$(".rightArrow").click(function () {
    if(!isMaxScrollRight()) {
        currentScrollIndex += 1;
        $(".gameWrapper").animate({
            left: `-${$(".gameWrapper").outerWidth() * currentScrollIndex}px`
        })
    }
    setArrows();
});

function setArrows () {
    if(isMaxScrollLeft()) {
        $(".leftArrow").css("filter","grayscale(100%)");
        $(".leftArrow").css("opacity","50%");
    } else {
        $(".leftArrow").css("filter","grayscale(0%)");
        $(".leftArrow").css("opacity","100%");
    }

    if(isMaxScrollRight()) {
        $(".rightArrow").css("filter","grayscale(100%)");
        $(".rightArrow").css("opacity","50%");
    } else {
        $(".rightArrow").css("filter","grayscale(0%)");
        $(".rightArrow").css("opacity","100%");
    }
}

function isMaxScrollRight() {
    return (currentScrollIndex === maxScrollIndex);
}

function isMaxScrollLeft() {
    return (currentScrollIndex === minScrollIndex);
}


$("#arcadeLink img").click(function() {
    let selectedBro = broId.split("-")[0];
    let selectedGame = games[currentScrollIndex];
    window.location.href = `arcade.html?bro=${selectedBro}&game=${selectedGame}`;
});