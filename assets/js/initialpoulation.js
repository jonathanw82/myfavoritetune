
$(document).ready(function () {

    var api_request = new XMLHttpRequest();
    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var music_search = JSON.parse(the_response);
            displaydatainmyimagecaroucelpage(music_search);

        }
        else {
            console.log("this stuff is not working");
        }
    };

    var random_number = Math.random() * 1000 | 0;           //random number generator for initial poulation of album art

    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + random_number);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();

    function displaydatainmyimagecaroucelpage(music_search) {


        for (var i = 0; i < music_search.data.length; i++) {

            artist_name = music_search.data[i].artist.name;
            album_name = music_search.data[i].album.title;
            picture = music_search.data[i].artist.picture_medium;
            artistid = music_search.data[i].artist.id;


            var artist_name = document.getElementById("artist_name").innerHTML = artist_name;
            var album_name = document.getElementById("album_name").innerHTML = album_name;
            var picture = document.getElementById("picture").src = picture;
            var artistid = document.getElementById("artistid").innerHTML = artistid;

            albumart1 = music_search.data[0].album.cover_medium;
            albumart2 = music_search.data[1].album.cover_medium;
            albumart3 = music_search.data[2].album.cover_medium;
            albumart4 = music_search.data[3].album.cover_medium;
            albumart5 = music_search.data[4].album.cover_medium;
            albumart6 = music_search.data[5].album.cover_medium;
            albumart7 = music_search.data[6].album.cover_medium;;
            albumart8 = music_search.data[7].album.cover_medium;
            albumart9 = music_search.data[8].album.cover_medium;
            albumart10 = music_search.data[9].album.cover_medium;

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
        };
    };
});

