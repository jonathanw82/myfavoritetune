
//===================================== Initial artist search ===============================
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
//===================================== Data to be displayed in the html ====================
function displaydatainmypage(music_search) {

    let albums = [];
    let albums_name = [];

    for (i = 0; i < music_search.data.length; i++) {

        var album = music_search.data[i].album;
        var album_name = music_search.data[i].album.title;

        if (!albums_name.includes(album_name)) {

            albums_name.push(album_name);
            albums.push(album);
        }
    }
 console.log(music_search);
    //console.log("Array 'albums_names:'");
    //console.log(albums_name);
    //console.log("Array 'albums:'");
     console.log(albums);

    var album_list = document.getElementById("album_list");
    for (i = 0; i < albums.length; i++) {
        this_album_string = `<div class="col sm-4"><div class="card"><img src="${albums[i].cover_big}" class="card-img-top" alt="Album cover" onclick="album_id(${albums[i].id})" ${albums[i].id}"><div class="card-body"><p class="card-text">${albums[i].title}</p></div></div>`;
        album_list.innerHTML += this_album_string;
    }

}
//============= this function clears the input box and the main html page ==================

function clear_html_input() {
    document.getElementById("user_input").value = "";
    album_list.innerHTML = "<div></div>";
}






/*
           if (album_list == innerHTML){
               empty("album_list");
           }
           else{

           };
           */
/*
 var track_list = document.getElementById("track_list");
 for (i = 0; i < albums.length; i++) {

     album_track_listing = `<div><p>${albums.tracklist.data[i].title}<br><audio controls source id="preview" src="${albums.tracklist.data[i].preview}" class="preview_audio" type="audio/mpeg"></p></div>`;

     track_list.innerHTML += album_track_listing;
     console.log(album_track_listing);
 }
 */