$: stage = [];
$: winners = [];
$: count = 1;
$: wHistory = JSON.parse(localStorage.getItem("winners"));

function processVote(winner){
    var target = $(winner).children("img").attr('src');
    var discard = $(this).parents("span").siblings("span").children('a').children('img').attr('src');
    winners.push(target);
};

function roundChange(count){
    if (count === 2) {
        let text = "Quarter Finals"
        $(".stage").css("background-color", "blue");
        $(".rounds").html(text)
    } else if (count === 3) {
        let text = "Semi-Finals"
        $(".stage").css("background-color", "orange");
        $(".rounds").html(text)
    } else if (count === 4) {
        let text = "THE FINAL ROUND !!!"
        $(".stage").css("background-color", "red");
        $(".rounds").html(text)
    } else if (count === 5) {
        let text = "VICTORIOUS !!!"
        $(".stage").css("background-color", "green");
        $(".rounds").html(text)
    }
};

function winRound(wHistory, winners){
    $(".rounds h2").html("WINNER")
    wHistory.push(winners[0]);
    localStorage.setItem("winners", JSON.stringify(wHistory));
    let winner = '<img class="winner" src="' + winners[0] + '"/>';
    $(".pic").remove();
    $(".stage").append(winner);
    $("#hold").append('<button type="button" class="btn btn-success btnchng" id="reload">Play Again!</button>');
    $("#champions").remove();
    $("#reload").on('click', function(){
        window.location.reload();
    });
}

$.get( "https://photo-voting.hiring.ipums.org/images/", function( data ) {
    stage = data.data
    $("#photo1").children("img").attr("src", stage[0]);
    $("#photo2").children("img").attr("src", stage[1]);
});

$(".rounds").html("Click to Choose Your Fighter !");
$(".stage").css("background-color", "black");

if (wHistory === null){
    $: wHistory = [];
} else {
    // console.log(wHistory);
    $("#champions").css("background-color", "green").append('<div class="gallery"></div>');
    $("#champ-row")
        .append('<h1 class="col">Past Champions</h1>')
        .append('<button type="button" class="btn btn-warning btnchng col" id="removeLS">Remove Past Champions</button>');
    for (var i=0;i < wHistory.length;i++){
        let string = '<img class="gphoto col rounded" src="'+wHistory[i]+'"/>'
        $(".gallery").append(string)
    }
}

$("#removeLS").on('click', function(){
    localStorage.removeItem("winners");
    $("#champions").remove()
    $(this).remove();
    window.location.reload();
});

$('.pic a').on('click', function(){
    processVote($(this))
    stage.splice(0, 2);
    $(this).children("img").attr('src', "")
    $(this).parents("span").siblings("span").children('a').children('img').attr('src', "");
    if (stage.length === 0) {
        count++
        if (winners.length === 1){
            winRound(wHistory, winners)
        }
        stage = winners;
        winners = [];
        roundChange(count);
    }
    // console.log("new photos loaded");
    $("#photo1").children("img").attr("src", stage[0]);
    $("#photo2").children("img").attr("src", stage[1]);
});