$(".gamePicture").click(function () {
    $(".gameWrapper").animate({
        left: `-${$(".gameWrapper").outerWidth()}px`
    })
})