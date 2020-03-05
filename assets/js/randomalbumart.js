
$(document).ready(function () {

    var api_request = new XMLHttpRequest();
    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var music_search_albumart = JSON.parse(the_response);
            displaydatainmyimagecaroucelpage(music_search_albumart);

        }
        else {
            console.log("this stuff is not working");
        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=*");
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();

    function displaydatainmyimagecaroucelpage(music_search_albumart) {

    
        for (var i = 0; i < music_search_albumart.data.length; i++) {
            
                

            albumart1 = music_search_albumart.data[0].album.cover_medium;
            albumart2 = music_search_albumart.data[1].album.cover_medium;
            albumart3 = music_search_albumart.data[2].album.cover_medium;
            albumart4 = music_search_albumart.data[3].album.cover_medium;
            albumart5 = music_search_albumart.data[4].album.cover_medium;
            albumart6 = music_search_albumart.data[5].album.cover_medium;
            albumart7 = music_search_albumart.data[6].album.cover_medium;;
            albumart8 = music_search_albumart.data[7].album.cover_medium;
            albumart9 = music_search_albumart.data[8].album.cover_medium;
            albumart10 = music_search_albumart.data[9].album.cover_medium;


            var albumart1 = document.getElementById("albumart1").src = albumart1;
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
// this.contact_number.value = Math.random() * 100000 | 0;
// var  randomalbumart = album[Math.floor(Math.random() * music_search_albumart)];


