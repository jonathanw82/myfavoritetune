
function displaydatainmypage(music_search) {
    
    for (var i = 0; i < music_search.data.length; i++) {
        artist_name = music_search.data[i].artist.name;
        //song_name = music_search.data[i].title;
        //album_name = music_search.data[i].album.title;
        picture = music_search.data[i].artist.picture_medium;
        preview = music_search.data[i].preview;

           // console.log(music_search)

        var artist_name = document.getElementById("artist_name").innerHTML += artist_name + "<br>";
        //var song_name = document.getElementById("song_name").innerHTML = song_name + "<br>";
        //var album_name = document.getElementById("album_name").innerHTML += album_name + "<br>";
        var picture = document.getElementById("picture").src = picture;
        var preview = document.getElementById("preview").src = preview;
    };
};

/* this.contact_number.value = Math.random() * 100000 | 0;

 function nameonce(music_search) {
            if (artist_name == artist_name < 1) {
                console.log(artist_name);
            }
            else {
               console.log("this did not work");
            }
        };
*/

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

    // Constructing the suggestion engine
    var user_input = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: music_search
    });
    // Initializing the typeahead
    $('.typeahead').typeahead({
        hint: true,
        highlight: true, /* Enable substring highlighting */
        minLength: 1 /* Specify minimum characters required for showing result */
    },
        {
            name: 'user_input',
            source: music_search
        });

}


