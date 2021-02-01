// $(document).ready(function()) {
//   $("form#mr-robogers").submit(function(event) {
//     event.preventDefault();
//     var userInput = $("input#number").val()
//     $("#result").text(beepBoop(userInput));
//     $("#result").show();
//   });
// });
// let number = 0;
// let result = [];
// function beepBoop(number) { 
//   let number = 0;
//   let result = []
// for (let index = 0; index <= number; index++);
//   result.push(index);
// return result;

// }

//  beepBoop;



// for (let index = 0; index < 1; index +=1) { console.log(index);}

// function beepBoop() {
//   let result = [0];
//   return result;}

//   function beepBoop(number) {
//     let result = [];
//     if (number = 0) {result.push(0);}
//     else {result.push(0,"Beep");}

//     return result;}

  
function beepBoop(number) {
  let result = []
  for (let index = 0; index <= number; index++) {
    let numberString = index.toString();
    if (numberString.includes(1)) {
      result.push("Beep!");
    }
    else result.push(index);

  // }
  // return result;
  console.log(result);
};
};