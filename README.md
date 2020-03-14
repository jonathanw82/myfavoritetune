# Code Institute
Forking the repository 
If you would like to take a copy of this repository in its current state this can be done by forking, 
follow stepa as abouve to open github etc, log in to git hub follow the instuctions abouve to the intended repository
instead of cloning the repository simply click the fork button top right hand side of the page this will copy the repository 
to uor own gitHub account from there you can follow the deployment detals as as stated avouve.

Spinning artist image code https://stackoverflow.com/questions/16771225/css3-rotate-animation


Testing
Landing page
test user text input box, insert name and press go search gets the relvent artist names and displays them to be selected this featcher works as intended. 

Select your artist text appears and then the artist names dropdown below, works as intended.

Bug found depending on the artist name and wether its a single name or double the search was eratic either not finding the name at all, or even after the initial 
search or finding irrelvent artist names, the result was to hyphenate the names before the second search doing this help the seach function find and displasy the relevant data.

Select the artist by clicking on there name and it populates the inputbox hyphonatyed where nessasary Works as intended.

Select the artist by clicking on there name dropdown clears when clicked works as intended.

Search starts automaticaly works as intended.

Artist name is displayed next to artist name works as intended.

Number of albums is displayed next to number of albums works as intended.

Bug found the search results bring back that an artist has 25 albums but then only displays 5 i have yet to find a solution to this problem however im shure in the evolution of 
application later on a solution will be found.

After the second seach the select you album heading appears works as intended.

Relevent album art is displayed in the page works as intended.

Bug found sometimes the album search would bring back albums not nessasarly relevent to the artist, for instance if another artist had a sond called the artist name that album 
would be included even thow having no relevance also if an artist had a featuring this would also be displayed this was confusing to the user as people would look at it thinking why is that album there.
The solution was during the album search remove the hyphon and include a space then compare if the album artist matched the user input and only find albums relavent to the name, this 
did exclude what was mentioned before but i felt it made for a batter user experiance.

Click on the album art and a modal appears works as intended.

Modal displays album name works as intended.

Modal dispalys number of tracks works as intended.

Modal dispalys album art that spinns works as intended.

Modal diaplays album tracks works as intended.

Modal diaplays samples of tracks to play works as intended.

Bug found the tracks are only 30 seconds long this is due to either Deezer the api in use only allows users with free accounts to listen to 30 seconds maximum.
Or because of the limited online music licence more info can be found here: https://github.com/jonathanw82/myfavoritetune/blob/863d06046bad818efb900028930052330916c5e1/assets/documents/loml%20terms%20and%20conditions.pdf

Sample tracks play works as intended.

Bug if ther are more than 50 tracks in an ablum the console will display ERR_INSUFFICIENT_RESOURCES i am yet to find a solution to the problem but it unlikley the user will 
experiance this problem as most albums excluding compilations have less than 50 track anyway.

Close button on modal closes the modal clearing it data and stopping any preview track being played works as intended.

Bug if the user clicks off the modal without pressing the close button the modal will disapear bu the music will contimue to play 





 


nice to have 
type ahead.
I found they type a head function was not the best away to archede what i wanted my app to maybe in the future i would be a ghreat addion.
Image acrousel 
I wanted to incorporate an image carousel, as at this stage in my coding career i have not learnt enough to create one myself i felt the 
caroucel created by, Basic 3D Carousel In Pure JavaScript author loveneet4 https://github.com/internwt/3d-slider would be a great adition to my future projects.


typeahaed 0.11.1
this file is an example taken from https://github.com/twitter/typeahead.js

favicon.ioc
Photo by Anton Hooijdonk from Pexels

background image
concert-inside-concert-hall-2728557.jpg
Photo by Ronê Ferreira from Pexels

initial filler image,
unknonwn lens 
music-light-plant-white-photography-play-858499-pxhere.com.jpg

vinyl recored
Brett Jordan from Pexels

