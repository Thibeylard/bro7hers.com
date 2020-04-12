initialize();

function initialize () {
    $("#selectedBro").html(GetURLParameter("bro"));
    $("#selectedGame").html(GetURLParameter("game"));
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