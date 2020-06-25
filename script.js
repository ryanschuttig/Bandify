
var mainBandsContainer = $("#mainBandsContainer");
var bandsTableContainer = $("<div>").attr("class", "bandsTableContainer");

var mainDeezerContainer = $("#mainDeezerContainer");
var deezerTableContainer = $("<div>").attr("class", "deezerTableContainer");

$("button").on("click", function (e) {
    var artist = $("#searchInput").val();
    console.log(artist);


    var queryURL = "https://cors-anywhere.herokuapp.com/rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })

    var deezerURL = "https://cors-anywhere.herokuapp.com/api.deezer.com/search?q=" + artist + "&secret=575cd86916cf1a434b588d36676b3ef8";
    console.log(deezerURL);
    $.ajax({
        url: deezerURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })
});




