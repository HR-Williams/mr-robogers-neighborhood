$(document).ready(function() {
  $("form#mr-robogers").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#number").val();
    // console.log(userInput);
    $("#result").text(beepBoop(userInput));
    // console.log(beepBoop)
    $("#result").show();
  });
});


  
function beepBoop(number) {
  let result = [];
  for (let index = 0; index <= number; index++) {
    let numberString = index.toString();
    if (numberString.includes(1)) {
      result.push("Beep!");
    } else if (numberString.includes(2))
    {
      result.push("Boop!");
    } else if (numberString.includes(3))
    {
      result.push("Won't you be my neighbor!");
    }
  else result.push(index)
  
};
return(result);
};
