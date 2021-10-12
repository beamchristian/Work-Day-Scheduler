'use strict';
$('#timeNow').text(moment().format('dddd, MMMM Do YYYY'));

// load saved data if any from LocalStorage for every hour

const getTime = function () {
  // get the current hour
  let hourNow = moment().hour();

  // remove classes when called
  const removeClass = function () {
    $(this).removeClass('future');
    $(this).removeClass('present');
    $(this).removeClass('past');
  };

  // loop over time blocks
  $('.time-block').each(function () {
    // divides the converted string into a list of substrings and loops through returned array.
    let blockHour = parseInt($(this).attr('id').split('time')[1]);

    // assign classes based on the time.
    if (blockHour < hourNow) {
      removeClass();
      $(this).addClass('past');
    } else if (blockHour === hourNow) {
      removeClass();
      $(this).addClass('present');
    } else {
      removeClass();
      $(this).addClass('future');
    }
  });
};

// loads user text from local storage
const loadTime = function () {
  $('#time9 .user-text').val(localStorage.getItem('time9'));
  $('#time10 .user-text').val(localStorage.getItem('time10'));
  $('#time11 .user-text').val(localStorage.getItem('time11'));
  $('#time12 .user-text').val(localStorage.getItem('time12'));
  $('#time13 .user-text').val(localStorage.getItem('time13'));
  $('#time14 .user-text').val(localStorage.getItem('time14'));
  $('#time15 .user-text').val(localStorage.getItem('time15'));
  $('#time16 .user-text').val(localStorage.getItem('time16'));
  $('#time17 .user-text').val(localStorage.getItem('time17'));
};

// click handler
$('.saveBtn').on('click', function () {
  // collect user-text value
  let content = $(this).siblings('.user-text').val();
  // parent html element
  let timeVal = $(this).parent().attr('id');
  localStorage.setItem(timeVal, content);
});
getTime();
loadTime();
