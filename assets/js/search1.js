
//===================================== secondary artist search that populates the entire page ===============================
function search1() {
    var user_input = document.getElementById("user_input").value;
    var api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var music_search = JSON.parse(the_response);
            displaydatainmypage1(music_search);
        }
        else {
            //console.log("this stuff is not working");
        }

        var artistList = [];

        for (i = 0; i < music_search.data.length; i++) {
            var artistSearchNames = music_search.data[i].artist.name;
            if (artistSearchNames.toLowerCase().includes(user_input.toLowerCase())) {
                if (artistList.includes(artistSearchNames) == false) {
                    artistList.push(artistSearchNames);
                }
            }
        }

        for (i = 0; i < artistList.length; i++) {
            pickArtistSearch = `</p><p onclick="fillUserInput('${artistList[i]}');artist_search();clearArtistSearchList()">${artistList[i]}</p>`;
            pick_name.innerHTML += pickArtistSearch;
        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + user_input);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();

}
//===================================== passes the data to the user input ====================
// function will check to see if ther is any spaces and if ther is replace the space with a - https://www.developintelligence.com/blog/2016/02/replace-spaces-underscores-javascript/

function fillUserInput(artistClickdOnName) {
    let artistClickdOnNameNospace;
    strLength = artistClickdOnName.length;
    for (let i = 0; i < strLength; i++) {
        artistClickdOnNameNospace = artistClickdOnName.replace(" ", "-");
        user_input.value = artistClickdOnNameNospace;
    }
};

//===================================== Data to be displayed in the html ====================
function displaydatainmypage1(music_search) {

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
    //console.log(music_search);
    //console.log("Array 'albums_names:'");
    //console.log(albums_name);
    //console.log("Array 'albums:'");
    //console.log(albums);

    // Injects the album art and names into the html
    var album_list = document.getElementById("album_list");
    for (i = 0; i < albums.length; i++) {
        this_album_string = `<div class="col sm-4"><div class="card"><img src="${albums[i].cover_big}" class="card-img-top" alt="Album cover" onclick="album_id(${albums[i].id})" ${albums[i].id}"><div class="card-body"><p class="card-text">${albums[i].title}</p></div></div>`;
        album_list.innerHTML += this_album_string;
    }

}

