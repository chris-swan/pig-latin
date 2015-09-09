describe('pigLatin', function() {
  it("adds 'ay' to the end of the word", function() {
    expect(pigLatin("order")).to.equal("orderay");
  });

  it("moves the consonant to the end of the word with 'ay'", function() {
    expect(pigLatin("marker")).to.equal("arkermay");
  });


});
