initialize();

function initialize () {
    setBro(GetURLParameter("bro"));
    $("#selectedGame").html(GetURLParameter("game"));
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