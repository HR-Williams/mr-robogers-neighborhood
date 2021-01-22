$(document).ready(function()) {
  $("form#mr-robogers").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number").val()
    $("#result").text(beepBoop(userInput));
    $("#result").show();
  });
});