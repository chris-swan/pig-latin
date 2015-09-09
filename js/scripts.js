var pigLatin = function(string) {
  var consonants = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "j", "h", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  consonants.forEach(function(consonant) {
    if (string.slice(0, 1) === consonant) {
      string = string.slice(1) + consonant;
    }
  });
  string = string + "ay";
  return string;


}
