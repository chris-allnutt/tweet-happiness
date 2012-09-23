// depends on TweetSearch and HappyWords
var TweetHappiness = Class.extend({
  happinessSearch: null,
  
  init: function(happyWords) {
    this.happinessSearch = new HappyTweetSearch(happyWords);
    this._bindListeners();
  },
  
  _bindListeners: function() {
    var parentObject = this;
    
    $('.happiness-comparison-form').submit(function() {
      var city1 = $('#city1').val();
      var city2 = $('#city1').val();
      
      var city1Results = null;
      var city2Results = null;
      
      this.getHappyTweetsForCity(city1, function(results) {
        city1Results = results;
        this.getHappyTweetsForCity(city2, function(results) {
          city2Results = results;
          
          parentObject.computeHappiestCity(city1Results, city2Results);
        });  
      });
      
      return false;
    });
  },
  
  getHappyTweetsForCity: function(city) {
    happinessSearch.setCity(city);
    happinessSearch.doSearch(function(response) {
      console.log(response);
    });
  }
});