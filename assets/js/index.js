
// On page start the artist picture is populated with a record.jpg and class name artist_inital_image_spin is initalty set to spin the image.
"user strict"
$(document).ready(function () {

    document.getElementById("picture_artistsearch").innerHTML = `<img  class="artist_inital_image_spin" id="picture_artistsearch" 
 src="./assets/images/black-and-gray-vinyl-record-2746823.jpg" alt="artist picture"></img>`;


});

//===================================== Initial artist search ===============================
// inital artist search takes the user input calls the api with the search criteria, the results are then passed 
// through JSON.parse and passed to music search variable.

function InitalArtistsearch() {
    let user_input = document.getElementById("user_input").value;
    let api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let the_response = api_request.responseText;
            let music_search = JSON.parse(the_response);

            // music search is then passed through a for loop that creates an array called artistList whitch is then 
            // when called by another for loop displayed on the html.
            if (music_search.error){
                // no_artist_found.innerHTML = `<span>Looks like we have hit the Api limit please call back later.</span>`;
                InitalArtistsearch();
            }
            else if (music_search.data.length == 0) {
                no_artist_found.innerHTML = `<span>No Artist Found</span>`;
            }
            else {
                let artistList = [];
               
                for (let i = 0; i < music_search.data.length; i++) {
                    let artistSearchNames = music_search.data[i].artist.name;
                    if (artistSearchNames.toLowerCase().includes(user_input.toLowerCase())) {
                        if (artistList.includes(artistSearchNames) == false) {
                            artistList.push(artistSearchNames);
                        }
                    }
                }

                if(artistList.length === 0 ){
                    no_artist_found.innerHTML = `<span>Oops No Artist Found Try Another!</span>`;
                }else{
                    insertStlectArtistHeading();
                }

                // The artist name are injected in to the html below the userinput, when an artist name is clicked the name then populates 
                // the user input field and handleArtistClickEvent is activated.
                for (let i = 0; i < artistList.length; i++) {
                    let cleanArtistName = artistList[i].replace("'", " ");
                    let pickArtistSearch = `<p onclick="handleArtistClickEvent(\'${cleanArtistName}\')">${artistList[i]}</p>`;
                    pick_name.innerHTML += pickArtistSearch;
                }
            }

        }
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + user_input);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "80a2fdf7a8msh83117c8d4aa46b6p192044jsneb60242d11c1");
    api_request.send();

}
/* artist_search then sends the correctly hyphonated search to the api 
   and data returned then populates the artist name and number of albums and the artist image. 
   clearArtistSearchList then clears any other not clicked on 
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
// function will check to see if ther is any spaces and if ther is replace the space with a 
//- https://www.developintelligence.com/blog/2016/02/replace-spaces-underscores-javascript/

function fillUserInput(artistClickdOnName) {
    let artistClickdOnNameNospace;
    for (let i = 0; i < artistClickdOnName.length; i++) {
        artistClickdOnNameNospace = artistClickdOnName.replace(" ", "-");
        user_input.value = artistClickdOnNameNospace;
    }
}

function insertSelectHeading() {
    let click_on_album_heading = `<h4 class="album_select_heading">Select Your Album By Clicking On The Album Cover</h4>`;
    click_on_album.innerHTML = click_on_album_heading;
}


function insertStlectArtistHeading() {
    let select_your_artist_text = `<span>Select Your Artist</span>`;   // Select your artist is displayed before you pic an artist from the list.
    select_your_artist_heading.innerHTML = select_your_artist_text;
}


//============= this function clears the input box and the main html page ==================

// when the text input box is clicked it clears the previouse data
function clear_html_input() {
    document.getElementById("user_input").value = "";
    album_list.innerHTML = "<div></div>";
    document.getElementById("picture_artistsearch").innerHTML = `<img  class="artist_inital_image_spin" id="picture_artistsearch" 
    src="./assets/images/black-and-gray-vinyl-record-2746823.jpg" alt="artist picture"></img>`;
    click_on_album.innerHTML = "<div></div>";
    select_your_artist_heading.innerHTML = "";
    no_artist_found.innerHTML = "";
    clearArtistSearchList();
    artist_name_artistsearch.innerHTML = "";
    number_of_albums_artistsearch.innerHTML = "";
}



// clears the data populated in the pickname html
function clearArtistSearchList() {
    pick_name.innerHTML = "";
    select_your_artist_heading.innerHTML = " ";
}


// Artist search takes the corrently hyphontaed name from the user input to get the correct artist image, number of albums and picture.
function artist_search() {
    let user_input = document.getElementById("user_input").value;
    let api_request = new XMLHttpRequest();

    api_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let the_response = api_request.responseText;
            let music_search_artist = JSON.parse(the_response);
            displaydatainmyartistpage(music_search_artist);
        }
       
    };
    api_request.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/artist/" + user_input);
    api_request.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    api_request.setRequestHeader("x-rapidapi-key", "80a2fdf7a8msh83117c8d4aa46b6p192044jsneb60242d11c1");
    api_request.send();
}


function displaydatainmyartistpage(music_search_artist) {

    let picture_artistsearch = music_search_artist.picture_medium;
    let number_of_albums = music_search_artist.nb_album;

    document.getElementById("artist_name_artistsearch").innerHTML = music_search_artist.name;
    document.getElementById("number_of_albums_artistsearch").innerHTML = number_of_albums;
    document.getElementById("picture_artistsearch").innerHTML = `<img  class="artist_inital_image" id="picture_artistsearch" 
    src="${picture_artistsearch}" onerror="if (this.src != 'error.jpg') this.src = './assets/images/trackslogo.png';" alt="artist picture">`;
}

