
function displaydatainmypage(music_search) {

    let albums = [];
    let albums_name = [];

    for (var i = 0; i < music_search.data.length; i++) {
        artist_name = music_search.data[i].artist.name;
        album_name_indentity = music_search.data[i].album.title;
        artistid = music_search.data[i].artist.id;
        picture = music_search.data[i].artist.picture_medium;
        preview = music_search.data[i].preview;

        for (i = 0; i < music_search.data.length; i++) {
            var album = music_search.data[i].album;
            var album_name = music_search.data[i].album.title;

            if (!albums_name.includes(album_name)) {

                albums_name.push(album_name);
                albums.push(album);
            }
        }


        var artist_name = document.getElementById("artist_name").innerHTML = artist_name + "<br>";
        var album_name_indentity = document.getElementById("album_name").innerHTML = album_name_indentity + "<br>";
        var artistid = document.getElementById("artistid").innerHTML = artistid;
        var picture = document.getElementById("picture").src = picture;
        var preview = document.getElementById("preview").src = preview;


        for (let i = 0; i < music_search.data.length; i++) {
            albumart1 = music_search.data[i].album.cover_medium;
            albumart2 = music_search.data[i].album.cover_medium;
            albumart3 = music_search.data[i].album.cover_medium;
            albumart4 = music_search.data[i].album.cover_medium;
            albumart5 = music_search.data[i].album.cover_medium;
            albumart6 = music_search.data[i].album.cover_medium;
            albumart7 = music_search.data[i].album.cover_medium;
            albumart8 = music_search.data[i].album.cover_medium;
            albumart9 = music_search.data[i].album.cover_medium;
            albumart10 = music_search.data[i].album.cover_medium;

            var albumart1 = document.getElementById("albumart1").src = albumart1;           // caroucel artwork 
            var albumart2 = document.getElementById("albumart2").src = albumart2;
            var albumart3 = document.getElementById("albumart3").src = albumart3;
            var albumart4 = document.getElementById("albumart4").src = albumart4;
            var albumart5 = document.getElementById("albumart5").src = albumart5;
            var albumart6 = document.getElementById("albumart6").src = albumart6;
            var albumart7 = document.getElementById("albumart7").src = albumart7;
            var albumart8 = document.getElementById("albumart8").src = albumart8;
            var albumart9 = document.getElementById("albumart9").src = albumart9;
            var albumart10 = document.getElementById("albumart10").src = albumart10;
        }
console.log(albums)
    }
    var album_list = document.getElementById("album_list").innerHTML += album_list;         // get the album title and id and display on html not working
    for (i = 0; i < albums.length; i++) {
        this_album_string = `<div>  ${album.title} ${album.id} </div>`;
        album_list += this_album_string;
        console.log(album_list);
    }
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



/*
 function albumlistnameonce() {
     let nameonce = 0;
     for (let i = 0; i <music_search.data.labum.title; i++) {
            if () {
                console.log(album_name);
            }
            else {
               console.log("this did not work");
            }
        };
    }
*/

/*
  let artistnameonce;
  for (let i = 0; i < music_search.data.artist.name; i++) {
      if (music_search.data.artist[i].name == music_search.data.artist[i].name) {
          music_search.data.artist[i].name = artistnameonce;
          console.log(artistnameonce);
      }
      else {
          console.log("this did not work");
      }
  };
*/


