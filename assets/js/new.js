"use strict";


$(document).ready(function () {

    document.getElementById("picture_artistsearch").innerHTML = `<img  class="artist_inital_image_spin" id="picture_artistsearch" 
 src="./assets/images/black-and-gray-vinyl-record-2746823.jpg" alt="artist picture"></img>`;
});



// BUG
let overlay = document.getElementById("overlayBox"); // check this
let lastArtist;
let cleanArtistName;


// call the Api
function callDeezerApi(searchType, enq, album_id){
    let API_KEY = "4nn4q8p71138ufz8n7sqs2n081p11q24206orafw440291c6o6".keyHelper();
    const user_input = document.getElementById("user_input").value;
    const api_request = new XMLHttpRequest();
    let apiResults;
    const recall = searchType;
    const enqType = enq;
    const album_ID = album_id;

    
    if(searchType === "albumTracks"){
        api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/album/" + album_ID);
    }
    else if(searchType === "artist"){
        api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/artist/" + user_input);
    }
    else{
        api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + user_input);
    }

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let the_response = api_request.responseText;
            apiResults = JSON.parse(the_response);
           
            if(apiResults.error){
                callDeezerApi(recall, enqType, album_ID);
            }
            else if(enqType === 'initial'){
                firstSearch(apiResults, user_input);
            }
            else if(enqType === 'artistData'){
                artistDataSearch(apiResults);
            }
            else if(enqType === 'albumData'){
                albumData(apiResults);
            }
            else if(enqType === 'albumTracksEnq'){
                displayAlbumTracks(apiResults);
            }
        }
    }
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", API_KEY);
    api_request.send();
}

// BUG
function over(){
    overlay.innerHTML = `<div id="overlay"><div class="spinner" id="spinner"><div class="preloader1">
    <div class="loader loader-inner-1"><div class="loader loader-inner-2"><div class="loader loader-inner-3">
    </div></div></div></div></div>`;
}

function removeOverlay(){
    overlay.innerHTML = '';
}


/* artist_search then sends the correctly hyphonated search to the api 
   and data returned then populates the artist name and number of albums and the artist image. 
   clearArtistSearchList then clears any other not clicked on 
   data from the pick_name list, albumInfoSearch is then activated 
*/
function handleArtistClickEvent(passArtistData) {
    fillUserInput(passArtistData);
    callDeezerApi("artist", "artistData");
    callDeezerApi("albumSearch", "albumData");
    clearArtistSearchList();
    insertSelectHeading();
    over();
    lastArtist = passArtistData;
    let lastAtistDisp = document.getElementById("last_artist");
    lastAtistDisp.innerHTML = lastArtist;
}

// allows the enter button to be pressed when entering an artist
document.addEventListener('keydown', function(e){
    const goButton = document.getElementById('trigger_function');
    if (e.key === 'Enter'){
        goButton.click();
        over();
    } 
});


function firstSearch(dataFromApi, user_input){
    
    if (dataFromApi.data.length == 0) {
        no_artist_found.innerHTML = `<span>Oops No Artist Found Try Another!</span>`;
        removeOverlay();
    }
    else {
        let artistList = [];
       
        for (let i = 0; i < dataFromApi.data.length; i++) {
            let artistSearchNames = dataFromApi.data[i].artist.name;
            if (artistSearchNames.toLowerCase().includes(user_input.toLowerCase())) {
                if (artistList.includes(artistSearchNames) == false) {
                    artistList.push(artistSearchNames);
                }
            }
        }
        // The artist name are injected in to the html below the userinput, when an artist name is clicked the name then populates 
        // the user input field and handleArtistClickEvent is activated.

        if(artistList.length === 0 ){
            no_artist_found.innerHTML = `<span>Oops No Artist Found Try Another!</span>`;
            removeOverlay();
        }else{
            insertStlectArtistHeading();
            removeOverlay();
        }
        for (let i = 0; i < artistList.length; i++) {
            cleanArtistName = artistList[i].replace("'", " ");
            let pickArtistSearch = `<p onclick="handleArtistClickEvent('${cleanArtistName}')">${artistList[i]}</p>`;
            pick_name.innerHTML += pickArtistSearch;
        }
    }
}

// get the artist info
function artistDataSearch(dataFromApi){

    if(!dataFromApi.error){
        const picture_artistsearch = dataFromApi.picture_medium;
        document.getElementById("artist_name_artistsearch").innerHTML = dataFromApi.name;
        document.getElementById("picture_artistsearch").innerHTML = `<img  class="artist_inital_image" id="picture_artistsearch" 
        src="${picture_artistsearch}" onerror="if (this.src != 'error.jpg') this.src = './assets/images/trackslogo.png';" alt="artist picture">`;
        callDeezerApi("search", "albumData");
        runOnce = false;
    }
}


let runOnce = false; // only allow the albums to be itterated once or album art gets doubled up.
function albumData(dataFromApi){
    if(!runOnce){
        runOnce = true;
        let albums = [];
        let albums_name = [];

        for (let i = 0; i < dataFromApi.data.length; i++) {

            let album = dataFromApi.data[i].album;
            let album_name = dataFromApi.data[i].album.title;
            let artist_name = dataFromApi.data[i].artist.name;
            let temp_artist_name = user_input.value.replace("-", " ");    // take the user input and takes out the - that was needed for other type searches.

            if (artist_name != temp_artist_name) {
            }
            else if (!albums_name.includes(album_name)) {

                albums_name.push(album_name);
                albums.push(album);
            }
        }
    
        const number_of_albums = document.getElementById("number_of_albums");
        number_of_albums.innerHTML = albums.length;


        if(albums.length > 0) removeOverlay();
        // This for loop interates throught the music search array and output the album images to the html all will have an onclick that triggers 
        // an album id_search and opens a modal in html.

        let album_list = document.getElementById("album_list");
        album_list.innerHTML += "";                     // clears the html before adding more infomation
    
        for (let i = 0; i < albums.length; i++) {
            let this_album_string = `<div class="col-md-4 card_image"><div class="card"><img src="${albums[i].cover_big}" onerror="if (this.src != 'error.jpg') this.src = './assets/images/trackslogo.png';" class="card-img-top" alt="Album cover" 
            onclick="getAlbumTracks(${albums[i].id})" ${albums[i].id}"></div>`;
            album_list.innerHTML += this_album_string;
        }
    }
}

// getts the album tracks from the album ID
function getAlbumTracks(album_id){
    callDeezerApi('albumTracks', 'albumTracksEnq', album_id);
}

// displays thealbum tacks on the modal
function displayAlbumTracks(dataFromApi){

    if(!dataFromApi.error){
        let tracks_preview = [];
        let albums_tracks = [];
        
        let total_tracks = dataFromApi.nb_tracks;
        let album_title_modal = dataFromApi.title;
        let album_art_modal = dataFromApi.cover_medium;

        document.getElementById("track_total").innerHTML = total_tracks;
        document.getElementById("album_title_modal").innerHTML = album_title_modal;
        document.getElementById("album_art_modal").innerHTML = `<img  id="album_art_modal" src ="${album_art_modal}" 
        onerror="if (this.src != 'error.jpg') this.src = './assets/images/trackslogo.png';" alt="album picture">`;

        for (let i = 0; i < dataFromApi.tracks.data.length; i++) {

            let album_track = dataFromApi.tracks.data[i].title;
            let track_preview = dataFromApi.tracks.data[i].preview;

            // these if statments take the tracks and preview data and push them into the array and ignores duplicates
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
            let album_track_disp = `<div class="col track_name sm-12"><p> ${albums_tracks[i]}</p></div><audio source controls
            id="preview_music" src="${tracks_preview[i]}" onclick="togglePlay" class="preview_audio" type="audio/mpeg"></audio>`;
            track_list.innerHTML += album_track_disp;
        }
    }
}

// check if a sound is playing and if so pause it when another play button is pressed
// https://stackoverflow.com/questions/19790506/multiple-audio-html-auto-stop-other-when-current-is-playing-with-javascript

document.addEventListener('play', function(e){
    const audios = document.getElementsByTagName('audio');
    for(let i = 0; i < audios.length; i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);


// clears all modal data on close or if the album has been selected without closing the first modal
function clearModal() {
    let audios = document.getElementsByTagName('audio');
    for (var i=0; i < audios.length; i++) {
        audios[i].remove();
    }
    track_list.innerHTML = " ";
    let closeButton = document.getElementById("closeBut");
    closeButton.click();
}

$('#tracklistModal').on('click', clearModal);


function insertStlectArtistHeading() {
    let select_your_artist_text = `<span>Select Your Artist</span>`;   // Select your artist is displayed before you pic an artist from the list.
    select_your_artist_heading.innerHTML = select_your_artist_text;
}


//===================================== passes the data to the user input ====================
// function will check to see if ther is any spaces and if ther is replace the space with a 
//- https://www.developintelligence.com/blog/2016/02/replace-spaces-underscores-javascript/

function fillUserInput(artistClickdOnName) {
    let artistClickdOnNameNospace;
    for (let i = 0; i < artistClickdOnName.length; i++) {
        artistClickdOnNameNospace = artistClickdOnName.replace(" ", "-");
        user_input.value = artistClickdOnNameNospace;
    }
}

function insertSelectHeading() {
    let click_on_album_heading = `<h4 class="album_select_heading">Select Your Album By Clicking On The Album Cover</h4>`;
    click_on_album.innerHTML = click_on_album_heading;
}

// clears the data populated in the pickname html
function clearArtistSearchList() {
    pick_name.innerHTML = "";
    select_your_artist_heading.innerHTML = " ";
}

//============= this function clears the input box and the main html page ==================
// when the text input box is clicked it clears the previouse data

function clearHtmlInput() {
    document.getElementById("user_input").value = "";
    album_list.innerHTML = "<div></div>";
    document.getElementById("picture_artistsearch").innerHTML = `<img  class="artist_inital_image_spin" id="picture_artistsearch" 
    src="./assets/images/black-and-gray-vinyl-record-2746823.jpg" alt="artist picture"></img>`;
    click_on_album.innerHTML = "<div></div>";
    select_your_artist_heading.innerHTML = "";
    no_artist_found.innerHTML = "";
    clearArtistSearchList();
    artist_name_artistsearch.innerHTML = "";
    number_of_albums.innerHTML = "";
}

