/*
function clearModal(){
    track_list.innerHTML = <div></div>;
    document.getElementById("track_total").innerHTML = <div></div>;
    document.getElementById("album_title_modal").innerHTML = <div></div>;

}
*/
function displayAlbumdatainmypage(album_id_search) {

console.log(album_id_search)
    let albums_tracks = [];
    let tracks_preview = [];
   

    var total_tracks = album_id_search.nb_tracks;
    var album_title_modal = album_id_search.title;

    for (var i = 0; i < album_id_search.tracks.data.length; i++) {

        var album_track = album_id_search.tracks.data[i].title;         
        var track_preview = album_id_search.tracks.data[i].preview;

        if (!albums_tracks.includes(album_track)) {
            albums_tracks.push(album_track);
        }
        if (!tracks_preview.includes(track_preview)) {
            tracks_preview.push(track_preview);
        }
    }
        // injects the album modal with data
    for (var i = 0; i < albums_tracks.length;  i++) {
        album_track_disp =`<div class="col sm-12"><p> ${albums_tracks[i]}</p></div><audio controls source id="preview_music" src="${tracks_preview[i]}" class="preview_audio" type="audio/mpeg"></audio>`;   
        track_list.innerHTML += album_track_disp; 
    }
    
    document.getElementById("track_total").innerHTML = total_tracks;
    document.getElementById("album_title_modal").innerHTML = album_title_modal;
}

function album_id(album_id_id) {
    //console.log(album_id_id);
   
    var api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var album_id_search = JSON.parse(the_response);
            displayAlbumdatainmypage(album_id_search);
        }
        else {
         //   console.log("this stuff is not working");
        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/album/" + album_id_id);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();
}
