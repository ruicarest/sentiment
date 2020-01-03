// import React from "react";
// import { render } from "react-dom";
import natural from "natural";
import polarity from "polarity";
import emotion from "emoji-emotion";

var string1 = "The quick brown fox jumps over the lazy dog";
var string2 = "I can see that we are going to be worst friends";
var string3 = ["😎", "😎"];
var tokenizer = new natural.WordTokenizer();

//Tokenization - create the array of words;
console.log(tokenizer.tokenize(string1));

//Stemming - get the root words and remove stop words;
natural.PorterStemmer.attach();
console.log(string2.tokenizeAndStem());

//Classification - Using BayesClassifier
// var classifier = new natural.BayesClassifier();
// classifier.addDocument('i am long qqqq', 'buy');
// classifier.addDocument('buy the q\'s', 'buy');
// classifier.addDocument('short gold', 'sell');
// classifier.addDocument('sell gold', 'sell');
// classifier.train();
// console.log(classifier.classify('i am short silver'));
// console.log(classifier.classify('i am long copper'));

//NOT WORKING - Sentiment analysis - opinion mining or emotion AI
// var Analyzer = natural.SentimentAnalyzer;
// var stemmer = natural.PorterStemmer;
// var analyzer = new Analyzer("English", stemmer, "pattern");
// getSentiment expects an array of strings
// console.log(
//   analyzer.getSentiment(["I", "don't", "want", "to", "play", "with", "you"])
// );

//Polarity uses afinn-165 and/or emoji-emotion - https://github.com/words/polarity
console.log(polarity(string2.tokenizeAndStem()));

//Emoji-emotion - https://github.com/words/emoji-emotion
console.log(emotion.slice(0, 5));

//Spell check -
var corpus = ["something", "soothing"];
var spellcheck = new natural.Spellcheck(corpus);
console.log(spellcheck.getCorrections("soemthing", 1));
console.log(spellcheck.getCorrections("soemthing", 2));
