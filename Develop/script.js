//Display current date in the p currenday id
var today=moment();
console.log(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
$("#currentDay").text(today);


//Add timeblocks for standard bussiness hours in HTML.

//Color code timeblock in reference to past,present,future times.
// Create an if statement that compares div id with hour in moment or moment format and chance styles accordingly.
var currentTime = today.format("H");
console.log (currentTime);

//create variables for each timeblock

var nine= document.getElementById("#9");
var ten= document.getElementById("#10");
var eleven= document.getElementById("#11");
var twelve= document.getElementById("#12");
var thirteen= document.getElementById("#13");
var fourteen= document.getElementById("#14");
var fifteen= document.getElementById("#15");
var sixteen= document.getElementById("#16");
var sixteen= document.getElementById("#17");
 console.log (typeof nine);
 
// function 
// var timeBlock = document.getElementById("#15");

// if (currentTime )

//Able to click into timeblock
//  -can enter an event into timeblock
//  -click save button and save event in timeblock
//      `text is saved into local storage
//      'refresh will keep events in local storage