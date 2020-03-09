
$(document).ready(function () {

    var api_request = new XMLHttpRequest();
    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var music_search = JSON.parse(the_response);
            displaydatainmyimagecaroucelpage(music_search);
        }
        else {
            console.log("this stuff is not working");
        }
    };

    var random_number = Math.floor(Math.random() * 100);           //random number generator for initial poulation of album art

    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + random_number);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();

    function displaydatainmyimagecaroucelpage(music_search) {


        let albums = [];
        let albums_name = [];

        for (var i = 0; i < music_search.data.length; i++) {

            for (i = 0; i < music_search.data.length; i++) {

                var album = music_search.data[i].album;
                var album_name = music_search.data[i].album.title;

                if (!albums_name.includes(album_name)) {

                    albums_name.push(album_name);
                    albums.push(album);
                }
            }
        }

        //console.log("Array 'albums_names:'");
        //console.log(albums_name);
        //console.log("Array 'albums:'");
        console.log(albums);

        var album_list = document.getElementById("album_list");

        for (i = 0; i < albums.length; i++) {
            this_album_string = `<div><img src="${albums[i].cover_big}" class="card-img-top" alt="Album art"><div class="card-body"><p class="card-text">${albums[i].title}</p></div>`;
            album_list.innerHTML += this_album_string;
        }
    }
    
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
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/artist/" + random_number);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();

    function displaydatainmyartistpage(music_search_artist) {

    artist_name_artistsearch = music_search_artist.name;
    picture_artistsearch = music_search_artist.picture_medium;
    number_of_albums = music_search_artist.nb_album;

    document.getElementById("artist_name_artistsearch").innerHTML = artist_name_artistsearch;
    document.getElementById("number_of_albums_artistsearch").innerHTML = number_of_albums;
    document.getElementById("picture_artistsearch").src = picture_artistsearch;
    console.log(music_search_artist + "did it work")
}
});