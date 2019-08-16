# Hip Hop Concert Event Recommender
An Event Recommender to assist you in picking concerts from the top Hip Hop Artist right now! Filter through concerts by: Date, Artist, Ticket Price

**Live Site!!  https://alicia-event-hiphop-recommender.netlify.com/**


## Featured Artist
![Main Wu-Tang Clan Image](http://synonymous-group.surge.sh/Wu%20tang.jpg)


## Motivation
The Motivation for this project is to have a place to buy tickets from only Hip Hop Artist. 
**The page will only display top Hop Hop Artist and nothing else**

## Code style
Standard HTML, CSS, JavaScript and JQuery

## Features
Neverseen before footage of concerts by Artist! Search Concerts by Date, Price! Add User Name and Concert, change your mind and Delete!

## Code Example

JS & JQuery Input Box Function for Filter (filter concerts, artist, price)

``` <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
```

## Tests: Jasmine
**How to Run Your Jasmine Test**

1. Open Your Terminal
2. Navigate to the project’s directory
3. Enter the follow command to install the Jasmine Node module:
```npm install jasmine -g ```
4. If the jasmine will not install, add the suedo infront
``` sudo npm install jasmine -g ```
5. Once installed, go into the ```scripts.js``` file and ***uncomment*** ```module.exports = EventRecommender;```
6. Go back to your terminal **(make sure you are still in the project file)** and enter ```jasmine``` and hit Enter
7. Your test should run successfully! Please see picture of successful test below
