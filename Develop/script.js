//Display current date in the p currenday id
var today=moment();
console.log(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
$("#currentDay").text(today);


//Add timeblocks for standard bussiness hours
//Color code each timeblock to indicte past,present,future
//Able to click into timeblock
//  -can enter an event into timeblock
//  -click save button and save event in timeblock
//      `text is saved into local storage
//      'refresh will keep events in local storage