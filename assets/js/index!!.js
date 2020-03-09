function displaydatainmypage(music_search) {

    let albums = [];
    let albums_name = [];

    for (var i = 0; i < music_search.data.length; i++) {

        // artist_name = music_search.data[i].artist.name;
        // album_name_indentity = music_search.data[i].album.title;
        // artistid = music_search.data[i].artist.id;
        // picture = music_search.data[i].artist.picture_medium;
        // preview = music_search.data[i].preview;

        for (i = 0; i < music_search.data.length; i++) {

            var album = music_search.data[i].album;
            var album_name = music_search.data[i].album.title;

            if (!albums_name.includes(album_name)) {

                albums_name.push(album_name);
                albums.push(album);
            }
        }
    }

    console.log("Array 'albums_names:'");
    console.log(albums_name);
    console.log("Array 'albums:'");    
    console.log(albums);
    
            // console.log(music_search)

        // document.getElementById("artist_name").innerHTML = artist_name + "<br>";
        // document.getElementById("album_name").innerHTML = album_name_indentity + "<br>";
        // document.getElementById("artistid").innerHTML = artistid;
        // document.getElementById("picture").src = picture;
        // document.getElementById("preview").src = preview;


        // for (let i = 0; i < music_search.data.length; i++) {

        //     albumart1 = music_search.data[i].album.cover_medium;
        //     albumart2 = music_search.data[i].album.cover_medium;
        //     albumart3 = music_search.data[i].album.cover_medium;
        //     albumart4 = music_search.data[i].album.cover_medium;
        //     albumart5 = music_search.data[i].album.cover_medium;
        //     albumart6 = music_search.data[i].album.cover_medium;
        //     albumart7 = music_search.data[i].album.cover_medium;
        //     albumart8 = music_search.data[i].album.cover_medium;
        //     albumart9 = music_search.data[i].album.cover_medium;
        //     albumart10 = music_search.data[i].album.cover_medium;

        //     var albumart1Div = document.getElementById("albumart1").src = albumart1;           // caroucel artwork 
        //     var albumart2Div = document.getElementById("albumart2").src = albumart2;
        //     var albumart3Div = document.getElementById("albumart3").src = albumart3;
        //     var albumart4Div = document.getElementById("albumart4").src = albumart4;
        //     var albumart5Div = document.getElementById("albumart5").src = albumart5;
        //     var albumart6Div = document.getElementById("albumart6").src = albumart6;
        //     var albumart7Div = document.getElementById("albumart7").src = albumart7;
        //     var albumart8Div = document.getElementById("albumart8").src = albumart8;
        //     var albumart9Div = document.getElementById("albumart9").src = albumart9;
        //     var albumart10Div = document.getElementById("albumart10").src = albumart10;
        // }
    
    var album_list = document.getElementById("album_list");                                     // get the album title and id and display just wrong ******data
    
    for (i = 0; i < albums.length; i++) {
        this_album_string = `<div><p>${albums[i].id}</p><br><p>${albums[i].title}</p><img src="${albums[i].cover}"></div>`;
        album_list.innerHTML += this_album_string;
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


