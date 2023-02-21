let a = 0;
let timer = null;

$(document).ready(function(){
  $("#start-button").click(function() {
    timer = setInterval("timeCount()", 100);

    $(this).prop("disabled", true);
    $("#stop-button").prop("disabled", false);
    $("#reset-button").prop("disabled", true); 
  });

  $("#stop-button").click(function() {
    clearInterval(timer);

    $("#start-button").prop("disabled", false);
    $(this).prop("disabled", true);
    $("#reset-button").prop("disabled", false);
  });

  $("#reset-button").click(function() {
    a = 0;
    $("#stopwatch-time").text("00:00:00.0");

    $("#start-button").prop("disabled", false);
    $(this).prop("disabled", true);
  });
});

function timeCount() {
  a += 1;

  var miliSec = a % 10;
  var sec = Math.floor(a / 10) % 60;
  var min = Math.floor(a / 600) % 60;
  var hour = Math.floor(a / 36000) % 60;

  $("#stopwatch-time").text(`${(`0${hour}`).slice(-2)}:${(`0${min}`).slice(-2)}:${(`0${sec}`).slice(-2)}.${miliSec}`);
}