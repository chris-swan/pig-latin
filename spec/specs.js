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
});
