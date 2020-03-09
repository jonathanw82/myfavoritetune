function displaydatainmypage(music_search) {

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

    console.log("Array 'albums_names:'");
    console.log(albums_name);
    console.log("Array 'albums:'");    
    console.log(albums);

        var album_list = document.getElementById("album_list");                                     // get the album title and id and display just wrong ******data
    
    for (i = 0; i < albums.length; i++) {
        this_album_string = `<div><p>${albums[i].id}</p><br><p>${albums[i].title}</p><img src="${albums[i].cover}"></div>`;
        album_list.innerHTML += this_album_string;
    }
}

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
