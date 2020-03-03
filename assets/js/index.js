
function displaydatainmypage(music_search) {
     console.log(music_search);

    for (let i = 0; i < music_search.length; i++) {
      //  artist_name = music_search[1].artist.name;
      //  song_name = music_search[1].title;
       // album = music_search[1].album.title;
      //  picture = music_search[1].album.cover_medium;
      //  preview = music_search[1].preview;

        console.log(music_search.data[1].title);

      //  var artist_name = document.getElementById("artist_name").innerHTML = artist_name;
     //   var song_name = document.getElementById("song_name").innerHTML = song_names;
     //   var album = document.getElementById("album").innerHTML = album;
     //   var picture = document.getElementById("picture").innerHTML = picture;
     //   var preview = document.getElementById("preview").innerHTML = preview;

        
    };


}

function search() {

    var user_input = document.getElementById("user_input").value;
    var api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            
            var music_search = JSON.parse(the_response);
            displaydatainmypage(music_search);
            
        }
        else {
            console.log("this stuff is not working");
        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + user_input);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();
}




