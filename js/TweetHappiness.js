// depends on TweetSearch and HappyWords
var TweetHappiness = Class.extend({
  happinessSearch: null,
  
  init: function(happyWords) {
    this.happinessSearch = new HappyTweetSearch(happyWords);
    this._bindListeners();
  },
  
  _bindListeners: function() {
    $('.happiness-comparison-form').submit(function() {
      var city1 = $('#city1').val();
      var city2 = $('#city1').val();
    });
  },
  
  getHappyTweetsForCity: function(city) {
    happinessSearch.setCity(city);
    happinessSearch.doSearch(function(response) {
      console.log(response);
    });
  }
});