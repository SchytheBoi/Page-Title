 $(".liver").hide();
$(".two-days").hide();

$(".reply-yes").click(function() {
    $(".homer-reply").text("You have accepted that Mario steals your liver and see you in three days.");
    $(".reply-yes").css("background-color", "yellow");
});


$(".reply-no").click(function() {
    $(".homer-reply").text("No that is not an option Try that again one more time and see what happens");
    $("h1").css("color", "black");
});

$(".reply-no").click(function() {
    $(".liver").hide();
    $(".two-days").hide();
    $(".three-days").hide();
});

