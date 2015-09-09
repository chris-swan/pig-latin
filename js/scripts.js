var pigLatin = function(userInput) {
  while ((userInput.slice(0,1) != "a") && (userInput.slice(0,1) != "e") && (userInput.slice(0,1) != "i") && (userInput.slice(0,1) != "o") && (userInput.slice(0,1) != "u")) {
    userInput = userInput.slice(1) + userInput.slice(0,1);
  }

  return userInput + "ay";
}

$(document).ready(function() {
  $("form#pig_latin").submit(function(event) {
    var user_input_form = String($("input#user_input").val());
    var result = pigLatin(user_input_form);

    $(".result").text(result);

    event.preventDefault();

  });
});

// Other attempts in work process:
// var pigLatin = function(userInput) {
//   var letters = userInput.split("");
//     letters.forEach(function(letter)) {
//       if ((userInput.slice(0,1) != "a") && (userInput.slice(0,1) != "e") && (userInput.slice(0,1) != "i") && (userInput.slice(0,1) != "o") && (userInput.slice(0,1) != "u")) {
//         userInput = userInput.slice(1) + userInput.slice(0,1);
//       }
//     }
//
//   return userInput + "ay";
// }


// var pigLatin = function(userInput) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (var i = 0; i < 5; i++) {
//     if (userInput[i] === "a") {
//       break;
//     } else if (userInput[i] === "e") {
//       break;
//     } else if (userInput[i] === "i") {
//       break;
//     } else if (userInput[i] === "o") {
//       break;
//     } else if (userInput[i] === "u") {
//       break;
//     } else {
//       userInput = userInput.slice(1) + userInput.slice(0,1);
//     }
//   }

//   return userInput + "ay";
// }

// var pigLatin = function(userInput) {
//   var consonants = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "j", "h", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (var i = 0; i <= 4; i++) {
//     vowels.forEach(function(vowel) {
//       if (userInput.slice(i, i + 1) === vowel) {
//         debugger;
//         userInput = userInput + "ay";
//       } else {
//         consonants.forEach(function(consonant) {
//             if (userInput.slice(0, 1) === consonant) {
//               userInput = userInput.slice(1) + consonant;
//               console.log(userInput);
//             }
//
//         });
//       }
//     });
//   }
// }
