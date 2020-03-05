function displaydatainmyartistpage(music_search_artist){

    //console.log(music_search_artist);
}


function gotoartist() {
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