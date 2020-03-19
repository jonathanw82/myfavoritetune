// album id search take the album id collected from album_id_search and collects the tracks and preview data.
function album_id(album_id_number) {

    let api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let the_response = api_request.responseText;
            let album_id_search = JSON.parse(the_response);
            displayAlbumdatainmypage(album_id_search);
        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/album/" + album_id_number);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();
}
// displayAlbumdatainmypage uses a for loop to iterate through the tracks and preview array 

function displayAlbumdatainmypage(album_id_search) {
    let tracks_preview = [];
    let albums_tracks = [];
    
    let total_tracks = album_id_search.nb_tracks;
    let album_title_modal = album_id_search.title;
    let album_art_modal = album_id_search.cover_medium;

    document.getElementById("track_total").innerHTML = total_tracks;
    document.getElementById("album_title_modal").innerHTML = album_title_modal;
    document.getElementById("album_art_modal").innerHTML = `<img  id="album_art_modal" src ="${album_art_modal}" alt="album picture">`;

    for (let i = 0; i < album_id_search.tracks.data.length; i++) {

        let album_track = album_id_search.tracks.data[i].title;
        let track_preview = album_id_search.tracks.data[i].preview;

        // these if statments take the tracks and preview data and push them into the array and ignores duplicates.
        
        console.log(tracks_preview)
        
        if (!albums_tracks.includes(album_track)) {
            albums_tracks.push(album_track);
        }
        if (!tracks_preview.includes(track_preview)) {
            tracks_preview.push(track_preview);
        }
    }
    // when the specfic album art is clicked a modal pops up and is injected with the acurate album data taken from the album id.
    track_list.innerHTML += "";
    for (let i = 0; i < albums_tracks.length; i++) {
        album_track_disp = `<div class="col track_name sm-12"><p> ${albums_tracks[i]}</p></div><audio controls source id="preview_music" src="${tracks_preview[i]}
        " class="preview_audio" type="audio/mpeg"></audio>`;
        track_list.innerHTML += album_track_disp;
    }

}
// clears all modal data on close or if the album has been selected without closing the first modal
function clearModal() {
    let audios = document.getElementsByTagName('audio');
    console.log("AM I HERE?" + audios);
    for (var i=0; i < audios.length; i++) {
        audios[i].remove();
    }
    track_list.innerHTML = " ";
}

//====================================== albumInfoSearch ===============================

function albumInfoSearch() {
    let user_input = document.getElementById("user_input").value;
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

        if (artist_name != temp_artist_name) {
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

