"use strict";
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//<p id="currentDay" is the element that will display the current day//
// let currentDayDisplay = document.querySelector('#currentDay');
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY")); // moment.js
    
const loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

}


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// WHEN I refresh the page


// THEN the saved events persist
