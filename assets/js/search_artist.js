/*
function displaydatainmypage(artist_search) {

     console.log(artist_search);
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

};




function search_artist() {
    var user_input_artist = document.getElementById("user_input_artist").value;
    var api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var artist_search = JSON.parse(the_response);                 
            displaydatainmypage(artist_search);
        }
        else {
            console.log("this stuff is not working");
        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/artist/" + user_input_artist);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();
}
console.log(user_input_artist)

*/