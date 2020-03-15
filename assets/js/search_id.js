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

    let albums_tracks = [];
    let tracks_preview = [];
   
    let total_tracks = album_id_search.nb_tracks;
    let album_title_modal = album_id_search.title;
    let album_art_modal = album_id_search.cover_medium;

    for (let i = 0; i < album_id_search.tracks.data.length; i++) {

        let album_track = album_id_search.tracks.data[i].title;         
        let track_preview = album_id_search.tracks.data[i].preview;
console.log(tracks_preview)
// these if statments take the tracks and preview data and push them into the array and ignores duplicates.

        if (!albums_tracks.includes(album_track)) {
            albums_tracks.push(album_track);
        }
        if (!tracks_preview.includes(track_preview)) {
            tracks_preview.push(track_preview);
        }
    }
// when the specfic album art is clicked a modal pops up and is injected with the acurate album data taken from the album id.
    track_list.innerHTML += ""; 
    for (let i = 0; i < albums_tracks.length;  i++) {
        album_track_disp =`<div class="col track_name sm-12"><p> ${albums_tracks[i]}</p></div><audio controls source id="preview_music" src="${tracks_preview[i]}
        " class="preview_audio" type="audio/mpeg"></audio>`;   
        track_list.innerHTML += album_track_disp; 
    }
   
    document.getElementById("track_total").innerHTML = total_tracks;
    document.getElementById("album_title_modal").innerHTML = album_title_modal;
    document.getElementById("album_art_modal").src = album_art_modal;
}


