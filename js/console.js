initialize();

function initialize () {
    setBro(GetURLParameter("bro"));
    setGame(GetURLParameter("game"));
}

function setBro(broName) {
    if(broName === "kent") {
        $("#selectedBroName").html("Kentyn")
        $("#selectedBroPicture").attr("src","img/broKent.png")
    }

    if(broName === "gaut") {
        $("#selectedBroName").html("Gautier")
        $("#selectedBroPicture").attr("src","img/broGaut.png")
    }

    if(broName === "thib") {
        $("#selectedBroName").html("Thibaut")
        $("#selectedBroPicture").attr("src","img/broThib.png")
    }
}

function setGame (gameName) {
    if(gameName === "gob") {
        $("#consoleSection").html("<iframe src=\"https://itch.io/embed-upload/117126?color=f28112\" allowfullscreen=\"\" width=\"640\" height=\"500\" frameborder=\"0\"><a href=\"https://bro7hers.itch.io/game-of-box\">Play GAME OF BOX on itch.io</a></iframe>")
        $("#gameCartridge img").attr("src","img/gobCartridge.png")
    }

    if(gameName === "mod") {
        $("#consoleSection").html("<iframe src=\"https://itch.io/embed-upload/1796782?color=0b450b\" allowfullscreen=\"\" width=\"640\" height=\"500\" frameborder=\"0\"><a href=\"https://bro7hers.itch.io/mole-of-duty\">Play MOLE OF DUTY on itch.io</a></iframe>")
        $("#gameCartridge img").attr("src","img/modCartridge.png")
    }
}

$("#consoleNavbar img").click(function() {
    window.location.href = "index.html";
});

/**
 * @return {string}
 */
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    var sParameterName;
    for (let i = 0; i < sURLVariables.length; i++) {
        sParameterName= sURLVariables[i].split('=')
        if(sParameterName[0] === sParam) {
            return sParameterName[1];
        }
    }
}