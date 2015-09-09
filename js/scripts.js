var pigLatin = function(string) {
  while ((string.slice(0,1) != "a") && (string.slice(0,1) != "e") && (string.slice(0,1) != "i") && (string.slice(0,1) != "o") && (string.slice(0,1) != "u")) {
    string = string.slice(1) + string.slice(0,1);
  }

  return string + "ay";
}


// Other attempts in work process:
// var pigLatin = function(string) {
//   var letters = string.split("");
//     letters.forEach(function(letter)) {
//       if ((string.slice(0,1) != "a") && (string.slice(0,1) != "e") && (string.slice(0,1) != "i") && (string.slice(0,1) != "o") && (string.slice(0,1) != "u")) {
//         string = string.slice(1) + string.slice(0,1);
//       }
//     }
//
//   return string + "ay";
// }


// var pigLatin = function(string) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (var i = 0; i < 5; i++) {
//     if (string[i] === "a") {
//       break;
//     } else if (string[i] === "e") {
//       break;
//     } else if (string[i] === "i") {
//       break;
//     } else if (string[i] === "o") {
//       break;
//     } else if (string[i] === "u") {
//       break;
//     } else {
//       string = string.slice(1) + string.slice(0,1);
//     }
//   }

//   return string + "ay";
// }

// var pigLatin = function(string) {
//   var consonants = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "j", "h", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (var i = 0; i <= 4; i++) {
//     vowels.forEach(function(vowel) {
//       if (string.slice(i, i + 1) === vowel) {
//         debugger;
//         string = string + "ay";
//       } else {
//         consonants.forEach(function(consonant) {
//             if (string.slice(0, 1) === consonant) {
//               string = string.slice(1) + consonant;
//               console.log(string);
//             }
//
//         });
//       }
//     });
//   }
// }
