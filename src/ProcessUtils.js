// import React from "react";
// import { render } from "react-dom";
import natural from "natural";
import polarity from "polarity";
import emotion from "emoji-emotion";

export default class ProcessUtils {
  constructor() {}

  processData(Data) {
    var data;
    // var string1 = "The quick brown fox jumps over the lazy dog";
    // var string2 = "I can see that we are going to be worst friends";
    // var string3 = ["😎", "😎"];
    var tokenizer = new natural.WordTokenizer();

    //Tokenization - create the array of words;
    //tokenizer.tokenize(string1)

    //Stemming - get the root words and remove stop words;
    natural.PorterStemmer.attach();

    //data = Data.tokenizeAndStem();

    //Polarity uses afinn-165 and/or emoji-emotion - https://github.com/words/polarity
    data = polarity(Data.tokenizeAndStem());

    console.log(data);

    // //Emoji-emotion - https://github.com/words/emoji-emotion
    // console.log(emotion.slice(0, 5));

    // //Spell check -
    // var corpus = ["something", "soothing"];
    // var spellcheck = new natural.Spellcheck(corpus);
    // console.log(spellcheck.getCorrections("soemthing", 1));
    // console.log(spellcheck.getCorrections("soemthing", 2));
  }
}
