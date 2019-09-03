# Database Migration
Here is the link to the assignment [Link](https://github.com/Techtonica/curriculum/blob/master/databases/database-migrations.md)



## Independent Practice Activity #1
Create your own table with at least four columns. One of the columns should be type VARCHAR(5). Populate the table with three entries.




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