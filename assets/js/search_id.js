
function displayalbumdatainmypage(album_id_search) {

     console.log(album_id_search);

    let albums_tracks = [];
    let tracks_preview = [];

    var total_tracks = album_id_search.nb_tracks;

    for (var i = 0; i < album_id_search.tracks.data.length; i++) {

        var album_track = album_id_search.tracks.data[i].title;         console.log(album_track)
        var track_preview = album_id_search.tracks.data[i].preview;

        if (!albums_tracks.includes(album_track)) {
            albums_tracks.push(album_track);
        }
        if (!tracks_preview.includes(track_preview)) {
            tracks_preview.push(track_preview);
        }

    }
    for (var i = 0; i < album_track.length; i++) {
         album_track_disp = album_track[i]; 
    }
            console.log(albumid);
   

    document.getElementById("track_list").innerHTML = album_track_disp + "<br>";
    document.getElementById("preview_track").innerHTML = track_preview + "<br>";
    document.getElementById("track_total").innerHTML = total_tracks;
    // console.log(tracks_preview);

}

function album_id() {
   
    var api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var album_id_search = JSON.parse(the_response);
            displayalbumdatainmypage(album_id_search);
        }
        else {
            console.log("this stuff is not working");
        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/album/" +  input_id);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();
}


