
//===================================== Initial artist search ===============================
function InitalArtistsearch() {
    let user_input = document.getElementById("user_input").value;
    user_input = user_input.replace(" ", "-");
    let api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var music_search = JSON.parse(the_response);

            var artistList = [];

            for (let i = 0; i < music_search.data.length; i++) {
                var artistSearchNames = music_search.data[i].artist.name;
                if (artistSearchNames.toLowerCase().includes(user_input.toLowerCase())) {
                    if (artistList.includes(artistSearchNames) == false) {
                        artistList.push(artistSearchNames);
                    }
                }
            }
            for (let i = 0; i < artistList.length; i++) {
                var pickArtistSearch = `<p onclick="fillUserInput('${artistList[i]}');artist_search();totalPopulationsearch();clearArtistSearchList()">${artistList[i]}</p>`;
                pick_name.innerHTML += pickArtistSearch;
            }
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
    for (let i = 0; i < artistClickdOnName.length; i++) {
        artistClickdOnNameNospace = artistClickdOnName.replace(" ", "-");
        user_input.value = artistClickdOnNameNospace;
    }
};

//============= this function clears the input box and the main html page ==================

// when the text input box is clicked it clears the previouse data
function clear_html_input() {
    document.getElementById("user_input").value = "";
    album_list.innerHTML = "<div></div>";
    document.getElementById("picture_artistsearch").src = "../assets/images/black-and-gray-vinyl-record-2746823.jpg";
    document.getElementById("picture_artistsearch").className = "artist_inital_image_spin";
}

// clears all modal data on close
function clearModal() {
    track_list.innerHTML = " ";
}

// clears the data populated in the pickname html
function clearArtistSearchList() {
    pick_name.innerHTML = "";
}
