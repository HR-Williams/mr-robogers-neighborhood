// $(document).ready(function()) {
//   $("form#mr-robogers").submit(function(event) {
//     event.preventDefault();
//     let userInput = $("input#number").val()
//     $("#result").text(beepBoop(number));
//     $("#result").show();
//   });
// });


  
function beepBoop(number) {
  let result = [];
  for (let index = 0; index <= number; index++) {
    let numberString = index.toString();
    if (numberString.includes(1)) {
      result.push("Beep!");
    } else if (numberString.includes(2))
    {result.push("Boop!");
  }else result.push(index)
  // return result;
  console.log(result);
};
};
