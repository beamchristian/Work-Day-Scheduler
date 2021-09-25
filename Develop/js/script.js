"use strict";
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY")); // moment.js

// assign click listener for save.Btn 
$(".saveBtn").on("click", function () {
    
    // search through siblings of 'this' and capture the value of '.description'
    let text = $(this).siblings(".description").val();  
    // parent html element 
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})
// load saved data if any from LocalStorage for every hour
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


function timeTracker() {
    // get the current hour
    let currentTime = moment().hour();
    

    // loop over time blocks
    $(".time-block").each(function () {
        let timeBlockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(timeBlockHour, currentTime)
    

    // check current time and assign css to indicated if time is past, present or future
    if (timeBlockHour < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
        
    } else if (timeBlockHour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }

    })

}
timeTracker();


