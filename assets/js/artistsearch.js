
// artist search will find the exact artist and no others, the data returned in the array is artist name, artist id, artist artwork there is also a tracklist witch gives all the
// albums but its in an "https://api.deezer.com/artist/412/top?limit=50" not an array so no data is coming back if thet adress is input to the brower it is an array.
// i was hopeing to use this data to acuratly get the ablum id and then search that id to return the tracklistings.

function displaydatainmyartistpage(music_search_artist) {

    artist_name_artistsearch = music_search_artist.name;
    artistid_artistsearch = music_search_artist.id;
    picture_artistsearch = music_search_artist.picture_medium;
    number_of_albums = music_search_artist.nb_album;

    document.getElementById("artist_name_artistsearch").innerHTML = artist_name_artistsearch;
    document.getElementById("artistid_artistsearch").innerHTML = artistid_artistsearch;
    document.getElementById("number_of_albums_artistsearch").innerHTML = number_of_albums;
    document.getElementById("picture_artistsearch").src = picture_artistsearch;

    /*

        for (i = 0; i < music_search_artist.tracklist.data.album.length; i++) {
            album_ids = music_search_artist.tracklist.data.album[i].id;
            album_title_artist = music_search_artist.tracklist.data.album[i].title;
        }
        console.log(album_id);
        */
    //console.log(number_of_albums);

}

function artist_search() {
    var user_input_artist = document.getElementById("user_input_artist").value;
    var api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var music_search_artist = JSON.parse(the_response);
            displaydatainmyartistpage(music_search_artist);
        }
        else {
            console.log("this stuff is not working");
        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/artist/" + user_input_artist);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();
}
