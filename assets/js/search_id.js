
function displayalbumdatainmypage(album_search) {

     console.log(album_search);

};


function album_id() {
    var user_input_id = document.getElementById("album_id").innerHTML= `<img  id="albumart1" src="albumart1" alt="artist picture" onclick="album_id('${album_id}')" data-toggle="modal" data-target="#tracklistModal">`;
    var api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var album_search = JSON.parse(the_response);                 
            displayalbumdatainmypage(album_search);
        }
        else {
            console.log("this stuff is not working");
        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/album/" + user_input_id);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();
}


/*
    for (var i = 0; i < artist_search.data.length; i++) {
        artist_name = music_search.data[i].artist.name;
        song_name = music_search.data[i].title;
        album_name = music_search.data[i].album.title;
        picture = music_search.data[i].artist.picture_medium;
        preview = music_search.data[i].preview;

        var artist_name = document.getElementById("artist_name").innerHTML = artist_name;
        var song_name = document.getElementById("song_name").innerHTML = song_name;
        var album_name = document.getElementById("album_name").innerHTML = album_name;
        var picture = document.getElementById("picture").src = picture;
        var preview = document.getElementById("preview").src = preview;
    };
*/