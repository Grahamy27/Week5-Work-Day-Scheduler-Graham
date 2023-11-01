$(document).ready(function () {
  var saveBtn = document.querySelector(".saveBtn");
  var today = dayjs()
  $('#currentDay').text(today.format('D MMM  YYYY'));
  $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    // TODO: Add code to display the current date in the header of the page.
  });
  // ## User Story
  // WHEN I click into a timeblock
  // THEN I can enter an event
  // WHEN I click the save button for that timeblock
  // THEN the text for that event is saved in local storage
  // WHEN I refresh the page
  // THEN the saved events persist
  var currentHour = dayjs().hour();
  function hourTracker() {
    $('.time-block').each(function () {
        var scheduleHour = $(this).attr("id").split("hour-")[1];
        console.log("currentHour " + currentHour)
        console.log("scheduleHour " + scheduleHour)
        if (scheduleHour < currentHour) {
            $(this).addClass("past");
        }
        else if (scheduleHour == currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
  }
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  })

  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  hourTracker();
  });