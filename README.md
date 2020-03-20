<h1 align="center">
   <a href="https://jonathanw82.github.io/myfavoritetune/" target="_blank"><img src="https://github.com/jonathanw82/myfavoritetune/blob/a956383ee2fb09cbf721db47a6e9d60fac5f6852/assets/images/readmeimage.jpg" alt="logo image"/></a>
 </h1>
 
<div align="center">
    
[View  in GitHub Pages](https://github.com/jonathanw82/myfavoritetune)
</div>

A music lovers paradise, where the user can search and find their favoured artist and easily navigate to their favourite album or find an album they never knew existed, all the while being able to see the track listing and hear the samples.

The site is directed at music lovers and hobbyists rather than businesses.

#### The users goals of this website are:
* Searching for an artist of choice.
* Clearly displaying album art and tracklistings.
* Easy to navigate. 

#### The Business potentials of this website are:
* Selling advertising space to businesses with music related products.
* Currently, the tracks are only 30 seconds long - this is due to either Deezer the API in use only allows users with free accounts to listen to 30 seconds maximum, or because of the limited online music licence. More info can be found here: 
[Click me](https://www.prsformusic.com/-/media/files/prs-for-music/licensing/terms-and-conditions/loml-terms-and-conditions.ashx)
In the future, the site could possibly have a partnership with Deezer whereby the site made a percentage of the sign up fee for users directed towards the Deezer premium accounts.

#### Visitors to this website are searching for:
* Their favorite music artists.
* Albums and tracklisting.

#### This Website is the best way to help them achieve these things because:
* Other websites are too cluttered and hard to navigate.
* Other websites fail to have sound clips to listen to.

#### This website is:
* Uncluttered and has an intuitive search process.
* Providing clear artwork and tracklistings for the selected artist.

## Features:
A single page application.
* The branding logo top centre.
* A search box with a call to action button to the left.
* Below which, the artists' name is displayed and the number of albums that specific artist has.
* To the right, the artist image first will be a spinning vinyl then changes to the artist image during searching.
* When the initial search is complete a dropdown of artist names will appear.
* On selection of the artist name, the seach box will be populated and their album art is displayed in a section below.
* Clicking on the album art, a box, the tracks and sound samples are displayed. 

#### Home
The home page is made up of a hero image with branding logo, a search box and a call to action button.

#### Album track box
The album trackbox consists of the header "album tracklist" in the top left corner, the total number of tracks listed as a number in the top right corner, the title of the album below this followed by a spinning image of the album cover art and then each track on the album with a thirty second sample.

### Technology’s used will include:
HTML5, CSS3, Bootstrap, Javascripy, Gitpod, Sublime text and Balsamiq Mockup 3.

## WireFrame Mockups & Screenshots:
#### Desktop View:
- [Home](https://i.imgur.com/IIsGZdU.jpg).
- [Album View](https://i.imgur.com/1526eBx.jpg).
- [Tracks & Samples](https://i.imgur.com/RoPBZbA.jpg).

#### Mobile & Tablet View:
- [Mobile](https://i.imgur.com/TEbPE00.jpg).
- [Tablet](https://i.imgur.com/GvqQ1et.jpg).

#### WireFrames:
- [DeskTop Landing page](https://i.imgur.com/mRo7iCg.png).
- [DeskTop Album select](https://i.imgur.com/gXnc2bl.png).
- [DeskTop Tracks View](https://i.imgur.com/3jdNq41.png).
- [Mobile View](https://i.imgur.com/jvDD9qW.png).
- [Tablet View](https://i.imgur.com/ANvexHS.png).



### Nice to have: 
These features may be included in future releases of this application.

* Type ahead.
I found the type ahead function was not the best away to archive what I wanted in this version of the app but maybe in the future it would be a great addition.

* Image carousel. 
I wanted to incorporate an image carousel, but at this stage I felt it did not give the flexibility I required. However, this carousel created by, Basic 3D Carousel In Pure JavaScript author [loveneet4](https://github.com/internwt/3d-slider) would be a great addition to my future project.



## Testing:

Landing page
* To test user text input box, insert name and press go. The search gets the relevant artist names and displays them to be selected. This feature works as intended. 

Bug found if the user input is left empty and go is pressed. An error will apear in the console, cannot read length of undefined this bug will be removed at a later date.

* Select your artist, text appears and then the artist names dropdown below, works as intended.

Bug found depending on the artist name and whether it’s a single name or double. The search was erratic, either not finding the name at all, or even after the initial search or finding irrelevant artist names. The result was to hyphenate the names before the second search. Doing this helped the search function find and display the relevant data.

* Select the artist by clicking on their name and it populates the input box, hyphenated where necessary. Works as intended.

Bug found if the artist name is longer than 2 words. The "select your artist" option will be displayed with an empty pic selection list. Also, if the name is random, the same thing happens and does not display "no artist found." I have not yet fixed this bug but it will be in future releases of the application.

* Select the artist by clicking on their name. The dropdown clears when clicked. Works as intended.

* Search starts automatically works as intended.

* Artist name is displayed next to artist name. Works as intended.

* Number of albums is displayed next to number of albums. Works as intended.

Bug found when the search results bring back an artist that has 25 albums it only displays 5 or 6 of them. I have yet to find a solution to this problem however I’m sure in the evolution of the application one will be found.

* After the second search, the select your album heading appears and works as intended.

* Relevant album art is displayed in the page. Works as intended.

Bug found. Sometimes the album search would bring back albums not necessary relevant to the artist, for instance if another artist had a song called the artist name, then that album would be included even though it has no relevance. Also if an artist had a feature on a track, this would also be displayed. This could be confusing for a user as it could lead them to wrongly believe that a track was attributed to an incorrect artist.
The solution was, during the album search to remove the hyphen and include a space then compare if the album artist matched the user input and only find albums relevant to the name. This did exclude what was mentioned before but I felt it made for a better user experience.

* Click on the album art and a modal appears - works as intended.

* Modal displays album name - works as intended.

* Modal displays number of tracks - works as intended.

* Modal displays album art that spins - works as intended.

* Modal displays album tracks - works as intended.

* Modal displays samples of tracks to play - works as intended.

* Sample tracks play - works as intended.

Bug found. If the user selects a sample to listen to the sample, then selects another before pressing pause on the first both tracks play simultaneously more of an annoyance than a bug, however with future releases this can easily be fixed. 

* Close button on modal closes the modal clearing the data and stopping any preview track being played - works as intended.

Bug if the user clicks off the modal without pressing the close button, the modal will disappear and the music will continue to play. If the same or another album was selected, the modal would add the track to the list having both albums' track listings in one and the previous music playing. This was overcome by clearing the modal not only on pressing the close button but also by clicking the album art the data within is cleared first then repopulated after.
Also adding a on.hidden event helped if the modal was exited anyother way other then the button.

### Limitations & on going fixes:
* Some names that are searched for are either not found or do not populate the picartist list. This is a ongoing bug that is taking a fair bit of time to solve however I am confident this will be resoleved in future releases.
* Some albums displayed are not always directly related to selected artist.
* Atitist with more than 3 words in their names can cause errors in the console.
* If there are more than 50 tracks in an album the console will display ERR_INSUFFICIENT_RESOURCES or net::ERR_HTTP2_PROTOCOL_ERROR sometimes a 502 [Error](https://httpstatuses.com/504) and a 206 [Error](https://httpstatuses.com/206) this is caused by the free API limiting calls for mp3 sample URLs 50 calls in 5 seconds.  It's unlikely the user will experience this problem as most albums, excluding compilations, have less than 50 track anyway.


### Deployment:
To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

Log into GitHub.
From the list of repositories on the screen, select mtfavoritetune.
From the menu items near the top of the page, select Settings.
Scroll down to the GitHub Pages section.
Under Source click the drop-down menu labelled None and select Master Branch
On selecting Master Branch the page is automatically refreshed, the website is now deployed.
Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.

How to run this project locally
to clone this project from GitHub:

Follow this link to the Project GitHub repository.
Under the repository name, click "Clone or download".
In the Clone with HTTPs section, copy the clone URL for the repository.
In your local IDE open Git Bash.
Change the current working directory to the location where you want the cloned directory to be made.
Type git clone, and then paste the URL you copied in Step 3.
git clone https://github.com/USERNAME/REPOSITORY
Press Enter. Your local clone will be created.
Further reading and troubleshooting on cloning a repository from GitHub here.

Forking the repository.
If you would like to take a copy of this repository in its current state, this can be done by forking.
From the list of repositories on the screen, select mtfavoritetune.
From the menu items near the top of the page, select Fork.
On doing so the repository will added to your own gitHub account. From there you can follow the deployment 
details as stated above. You will also be able to make any changes you require that will not affect the 
original master from the original repository.


Deployment: The site will be deployed by 
https://pages.github.com/


### Credits:

##### Media:
The Photos used in this site were obtained from

favicon.ioc
Photo by Anton Hooijdonk from Pexels

Background image
unknown lens 
music-light-plant-white-photography-play-858499-pxhere.com.jpg

https://pxhere.com/

vinyl record
Brett Jordan from Pexels

https://www.pexels.com/

Logo Font
Punk Kid font by Chris Hansen.
urban_ninja4real@hotmail.com

Spinning artist image code https://stackoverflow.com/questions/16771225/css3-rotate-animation

Parts of the Deployment Section Written by myself and,  
AJGreaves
https://ajgreaves.github.io/portrait-artist/
