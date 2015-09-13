describe('pigLatin', function() {
  it("adds 'ay' to the end of the word", function() {
    expect(pigLatin("order")).to.equal("orderay");
  });

  it("moves the consonant to the end of the word with 'ay'", function() {
    expect(pigLatin("marker")).to.equal("arkermay");
  });

  it("moves multiple consonants at the start of a word to the end with 'ay'", function() {
    expect(pigLatin("start")).to.equal("artstay");
  });

  it("moves 'u' when it is following a 'q' at the start of the word", function() {
    expect(pigLatin("squeel")).to.equal("eelsquay");
  });

  it("handles y as a vowel when it is not the first letter", function() {
    expect(pigLatin("dyson")).to.equal("ysonday");
  });

  it("Translates a sentance/multiple words correctly to pig latin", function() {
    expect(pigLatin("translate this sentance")).to.equal("anslatetray isthay entancesay");
  } )
});

describe('isVowel', function() {
  it("returns true if the input is a vowel", function() {
    expect(isVowel("a")).to.equal(true);
  });

  it("returns false if the input is a not a vowel", function() {
    expect(isVowel("c")).to.equal(false);
  });
});