//====================================== albumInfoSearch ===============================

function albumInfoSearch() {
    var user_input = document.getElementById("user_input").value;
    let api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let the_response = api_request.responseText;
            let music_search = JSON.parse(the_response);
            displayDataInTheLowerPage(music_search);
        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + user_input);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();
}

//===================================== Data to be displayed in the html ====================
// displayDataInTheLowerPage uses the music search data to get the album data from the api then injecting it into the html

function displayDataInTheLowerPage(music_search) {

    let albums = [];
    let albums_name = [];

    for (let i = 0; i < music_search.data.length; i++) {

        let album = music_search.data[i].album;
        let album_name = music_search.data[i].album.title;
        let artist_name = music_search.data[i].artist.name;
        let temp_artist_name = user_input.value.replace("-", " ");    // take the user input and takes out the - that was needed for other type searches.

        if(artist_name != temp_artist_name){
        }
        else if (!albums_name.includes(album_name)) {

            albums_name.push(album_name);
            albums.push(album);
        }
    }
    // This for loop interates throught the music search array and output the album images to the html all will have an onclick that triggers 
    // an album id_search and opens a modal in html.

    let album_list = document.getElementById("album_list");
    album_list.innerHTML += "";                     // clears the html before adding more infomation
    for (let i = 0; i < albums.length; i++) {
        this_album_string = `<div class="col-md-4 card_image"><div class="card"><img src="${albums[i].cover_big}" class="card-img-top" alt="Album cover" 
        onclick="album_id(${albums[i].id})" ${albums[i].id}"></div>`;
        album_list.innerHTML += this_album_string;
    }
}

