var pigLatin = function(userInput) {

  var words = userInput.split(" ");
  var translatedWords = [];
  words.forEach(function(word) {
    var wordStatic = word.slice();
    while (!isVowel(word[0])) {
      if (word.slice(0,2) === "qu") {
        word = word.slice(2) + word.slice(0,2);
      } else if (wordStatic[0] !== "y" && word[0] === "y"){
        break;
      } else {
        word = word.slice(1) + word[0];
      }
    }
    translatedWords.push(word + "ay");
  });

  return translatedWords.join(" ");
}

var isVowel = function(userInputLetter) {
  var vowels = ["a", "e", "i", "o", "u"]
  var vowelValue = false;
  vowels.forEach(function(vowel) {
    if (userInputLetter === vowel) {
      vowelValue = true;
    }
  });

  return vowelValue;
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
//       if ((userInput[0] != "a") && (userInput[0] != "e") && (userInput[0] != "i") && (userInput[0] != "o") && (userInput[0] != "u")) {
//         userInput = userInput.slice(1) + userInput[0];
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
//       userInput = userInput.slice(1) + userInput[0];
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
