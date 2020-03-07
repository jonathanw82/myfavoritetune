
function displayalbumdatainmypage(album_search) {

    console.log(album_search);

/*
    let album = []
    let album_name = []

    for (i = 0; i < album_search.length; i++) {

       // var album_name = album_search[i].album.title;
            console.log(album_name);
         var album =  album_search[i].album;
        
         if (!album_name.includes(album_name)) {
             
             album_name.push(album_name);
             album.push(album);

         }
         
    }
*/
};

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



function album_search() {
    var user_input_album = document.getElementById("user_input_album").value;
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
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/album/" + user_input_album);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();
}
console.log(user_input_artist)

