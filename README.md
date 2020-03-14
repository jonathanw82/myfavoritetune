# Code Institute
<div align="center">
    
[View  in GitHub Pages](https://github.com/jonathanw82/)
</div>

A music lovers paradise, where the user can search and find there favoured artist and easily navigate to their favourite album or find an album they never knew existed, all the while being able to see the track listing and hear the samples.

The sight is directed at music lovers and hobbyist’s rather than business.

#### The users goals of this website are:
* Searching for artist of choice.
* Clearly displayed album art and traclistings.
* Easy to navigate. 

#### The Business potentials of this website are:
* Potential advertisers of music related products.

#### Visitors to this website are searching for:
* There favorite music artists.
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
* Below the artist name is displayed and the number of albums that specific artist has.
* To the right the artist image first will be a spinning vinyl then changes to the artist image during searching.
* When the initial search is complete a dropdown of artist names will appear.
* On selection of the artist name, the seach box will be populated and there album art is displayed in a section below.
* Clicking on the album art a box the tracks and sound samples are displayed. 

#### Home
The home page is made up of a hero image with branding logo, a search box and a call to action button.

#### Album track box
The album track box consists of total track and the number displayed to the top right the album title below centre, the album image rotating centre followed by the track listings with sound sample with play/pause volume controls in-between each, with a call to action button bottom right to close the box. 

### Technology’s used will include:
HTML5, CSS3, Bootstrap, Javascripy, Gitpod, Sublime text and Balsamiq Mockup 3.

## WireFrame Mockups & Screenshots:


### Nice to have 
These features may be included in future releases of this application.

* Type ahead.
I found the type a head function was not the best away to archive what I wanted this version of the app but maybe in the future it would be a great addition.

* Image carousel. 
I wanted to incorporate an image carousel, as at this stage I felt it did not give the flexibility I required however this carousel created by, Basic 3D Carousel In Pure JavaScript author [loveneet4](https://github.com/internwt/3d-slider) would be a great addition to my future project.

## Testing:

Landing page
* Test user text input box, insert name and press go search gets the relevant artist names and displays them to be selected this feature works as intended. 

* Select your artist text appears and then the artist names dropdown below, works as intended.

Bug found depending on the artist name and whether it’s a single name or double the search was erratic either not finding the name at all, or even after the initial 
Search or finding irrelevant artist names, the result was to hyphenate the names before the second search doing this help the search function find and displays the relevant data.

* Select the artist by clicking on there name and it populates the input box hyphenated where necessary Works as intended.

* Select the artist by clicking on there name dropdown clears when clicked works as intended.

* Search starts automatically works as intended.

* Artist name is displayed next to artist name works as intended.

* Number of albums is displayed next to number of albums works as intended.

Bug found the search results bring back that an artist has 25 albums but then only displays 5 i have yet to find a solution to this problem however I’m sure in the evolution of 
Application later on a solution will be found.

* After the second search the select you album heading appears works as intended.

* Relevant album art is displayed in the page works as intended.

Bug found sometimes the album search would bring back albums not necessary relevant to the artist, for instance if another artist had a song called the artist name that album 
would be included even though having no relevance also if an artist had a featuring this would also be displayed this was confusing to the user as people would look at it thinking why is that album there.
The solution was during the album search remove the hyphen and include a space then compare if the album artist matched the user input and only find albums relevant to the name, this 
did exclude what was mentioned before but I felt it made for a batter user experience.

* Click on the album art and a modal appears works as intended.

* Modal displays album name works as intended.

* Modal displays number of tracks works as intended.

* Modal displays album art that spins works as intended.

* Modal displays album tracks works as intended.

* Modal displays samples of tracks to play works as intended.

Bug found the tracks are only 30 seconds long this is due to either Deezer the api in use only allows users with free accounts to listen to 30 seconds maximum.

Or because of the limited online music licence more info can be found here: 
[Click me](https://www.prsformusic.com/-/media/files/prs-for-music/licensing/terms-and-conditions/loml-terms-and-conditions.ashx)

* Sample tracks play works as intended.

Bug if there are more than 50 tracks in an album the console will display ERR_INSUFFICIENT_RESOURCES i am yet to find a solution to the problem but it unlikely the user will 
experience this problem as most albums excluding compilations have less than 50 track anyway.

* Close button on modal closes the modal clearing it data and stopping any preview track being played works as intended.

Bug if the user clicks off the modal without pressing the close button the modal will disappear and the music will continue to play, if the same or another album was selected 
the model would add the track to the list having both albums track listings in one and the previous music playing. this was overcome by clearing the modal not only on pressing 
the close button but also by clicking the album art the data within is cleared first then repopulated after.


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
If you would like to take a copy of this repository in its current state this can be done by forking,
From the list of repositories on the screen, select mtfavoritetune.
From the menu items near the top of the page, select Fork.
On doing so the repository will added to your own gitHub account from there you can follow the deployment 
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
concert-inside-concert-hall-2728557.jpg
Photo by Ronê Ferreira from Pexels

vinyl record
Brett Jordan from Pexels

https://www.pexels.com/

Initial filler image,
unknown lens 
music-light-plant-white-photography-play-858499-pxhere.com.jpg

https://pxhere.com/

Spinning artist image code https://stackoverflow.com/questions/16771225/css3-rotate-animation

Parts of the Deployment Section Written by myself and,  
AJGreaves
https://ajgreaves.github.io/portrait-artist/
