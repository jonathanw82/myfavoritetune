
//===================================== Initial artist search ===============================
function search() {
    var user_input = document.getElementById("user_input").value;
    var api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var music_search = JSON.parse(the_response);
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
            pickArtistSearch = `</p><p onclick="fillUserInput('${artistList[i]}');artist_search();search1();clearArtistSearchList()">${artistList[i]}</p>`;
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

//============= this function clears the input box and the main html page ==================
// when the text input box is clicked it clears the previouse data
function clear_html_input() {
    document.getElementById("user_input").value = "";
    album_list.innerHTML = "<div></div>";
    document.getElementById("picture_artistsearch").src = "../assets/images/black-and-gray-vinyl-record-2746823.jpg";
    document.getElementById("picture_artistsearch").className = "artist_inital_image_spin";
}

function clearModal() {
    track_list.innerHTML = " ";
}

function clearArtistSearchList() {
    pick_name.innerHTML = "";
}