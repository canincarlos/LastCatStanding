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
        // $(".stage").css("background-color", "blue");
        $(".rounds").html(text).css("background-color", "blue").css("color", "white");
    } else if (count === 3) {
        let text = "Semi-Finals"
        // $(".stage").css("background-color", "orange");
        $(".rounds").html(text).css("background-color", "orange");
    } else if (count === 4) {
        let text = "THE FINAL ROUND !!!"
        // $(".stage").css("background-color", "red");
        $(".rounds").html(text).css("background-color", "red");
    } else if (count === 5) {
        let text = "VICTORIOUS !!!"
        // $(".stage").css("background-color", "green");
        $(".rounds").html(text).css("background-color", "green");
    }
};

function winRound(wHistory, winners){
    $(".rounds h2").html("WINNER")
    wHistory.push(winners[0]);
    localStorage.setItem("winners", JSON.stringify(wHistory));
    let winner = '<img class="winner" src="' + winners[0] + '"/>';
    $(".pic").remove();
    $(".stage").append(winner);
    $("#hold").append('<button type="button" class="bg-green-700 text-white font-bold py-2 px-4 rounded-full" id="reload">Play Again!</button>');
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

$(".rounds").html("Click the GIF to Choose Your Fighter !");
$(".stage").css("background-color", "white");

if (wHistory === null){
    $: wHistory = [];
} else {
    // console.log(wHistory);
    $("#champions").css("background-color", "white").append('<div class="gallery grid lg:grid-cols-2 md:grid-cols-1 justify-items-center"></div>');
    $("#champ-row")
        .append('<h1 class="text-6xl font-bold underline">Past Champions</h1>')
        .append('<button type="button" class="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full m-8" id="removeLS">Remove Past Champions</button>');
    for (var i=0;i < wHistory.length;i++){
        let string = '<img class="gphoto" src="'+wHistory[i]+'"/>'
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