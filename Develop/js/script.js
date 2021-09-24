"use strict";
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//<p id="currentDay" is the element that will display the current day//
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY")); // moment.js

// assign click listener for save.Btn 
$(".saveBtn").on("click", function () {
    console.log(this);
    // search through siblings of 'this' and capture the value of '.description'
    let text = $(this).siblings(".description").val();  
    // parent html element 
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// WHEN I refresh the page


// THEN the saved events persist
