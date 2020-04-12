var minScrollIndex = 0;
var maxScrollIndex = $(".gameWrapper").length -1;
var currentScrollIndex = 0;

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