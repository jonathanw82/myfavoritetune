
//===================================== Initial artist search ===============================
// inital artist search takes the user input calls the api with the search criteria, the results are then passed through JSON.parse and passed to music search variable.

function InitalArtistsearch() {
    let user_input = document.getElementById("user_input").value;
    let api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var the_response = api_request.responseText;
            var music_search = JSON.parse(the_response);

// music search is then passed through a for loop that creates an array called artistList whitch is then when called by another for loop displayed on the html.

            var artistList = [];

            for (let i = 0; i < music_search.data.length; i++) {
                var artistSearchNames = music_search.data[i].artist.name;
                if (artistSearchNames.toLowerCase().includes(user_input.toLowerCase())) {
                    if (artistList.includes(artistSearchNames) == false) {
                        artistList.push(artistSearchNames);
                    }
                }
            }
// The artist name are injected in to the html below the userinput, when an artist name is clicked the name then populates the user input field and handleArtistClickEvent is activated.
            for (let i = 0; i < artistList.length; i++) {
                var pickArtistSearch = `<p onclick="handleArtistClickEvent('${artistList[i]}')">${artistList[i]}</p>`;
                pick_name.innerHTML += pickArtistSearch;
            }
        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + user_input);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "ef9686a9b9msh4dbce73327763a8p14d988jsn38434b35145a");
    api_request.send();
}
/* artist_search then sends the correctly hyphonated search to the api 
   and data returned then populates the artist name and number of albums and the artist image. clearArtistSearchList then clears any other not clicked on 
   data from the pick_name list, albumInfoSearch is then activated 
*/ 
function handleArtistClickEvent(passArtistData) {
    fillUserInput(passArtistData);
    artist_search();
    albumInfoSearch();
    clearArtistSearchList();
    insertSelectHeading(); 
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

function insertSelectHeading() {
    let click_on_album_heading = `<h4 class="album_select_heading">Select Your Album By Clicking On The Album Cover</h4>`;
    click_on_album.innerHTML = click_on_album_heading;
}

function insertStlectArtistHeading() {
    let select_your_artist_text = `<span>Select Your Artist</span>`;
    select_your_artist_heading.innerHTML = select_your_artist_text;
}

//============= this function clears the input box and the main html page ==================

// when the text input box is clicked it clears the previouse data
function clear_html_input() {
    document.getElementById("user_input").value = "";
    album_list.innerHTML = "<div></div>";
    document.getElementById("picture_artistsearch").src = "../assets/images/black-and-gray-vinyl-record-2746823.jpg";
    document.getElementById("picture_artistsearch").className = "artist_inital_image_spin";
    click_on_album.innerHTML = "<div></div>";
}

// clears all modal data on close
function clearModal() {
    track_list.innerHTML = " ";
}

// clears the data populated in the pickname html
function clearArtistSearchList() {
    pick_name.innerHTML = "";
    select_your_artist_heading.innerHTML = " ";
}
