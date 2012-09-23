// depends on TweetSearch and HappyWords
var TweetHappiness = Class.extend({
  happinessSearch: null,
  
  init: function(happyWords) {
    this.happinessSearch = new HappyTweetSearch(happyWords);
  }
});