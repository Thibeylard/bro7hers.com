var broId;
var kentName = "Kentyn";
var kentDescription = ;

$(".broPicture").click(function () {
    $(this).css("filter","none");
    broId = $(this).attr("id");
    $(`.broPicture[id!=${broId}]`).css("filter","blur(2px)")
});
