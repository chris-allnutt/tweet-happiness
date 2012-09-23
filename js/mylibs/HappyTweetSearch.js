var HappyTweetSearch = Class.extend({
  happyWords: [],
  city: '',
  twitterBaseUri: 'http://search.twitter.com/search.json?',
  
  init: function(happyWords) {
    this.setHappyWords(happyWords);
  },
  
  setHappyWords: function(happyWords) {
    this.happyWords = happyWords;
  },
  
  setCity: function(city) {
    this.city = city;
  },
  
  getCity: function(city) {
    return this.city;
  },
  
  generateSearchURI: function(callback) {
    var parentObject = this;
    this._getCityGeocode(function(geocoded_location) {
      var uri = parentObject.twitterBaseUri+'geocode='+encodeURIComponent(geocoded_location);
      
      // prime our query string;
      uri = uri + '&q=' + parentObject.happyWords[0];
      
      for(var x = 1; x < parentObject.happyWords.length; x++) {
        uri = uri + 'OR' + parentObject.happyWords[x];
      }
      
      callback(uri);
    });
  },
  
  _getCityGeocode: function(callback) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': this.city}, 
      function(results, status) {          
        callback(results[0].geometry.location);
      }
    );
  },
  
  doSearch: function(searchCallback) {
    this.generateSearchURI(function(uri) {
      $.ajax({
	url: uri, 
	dataType: 'jsonp',
	success: function(result) {
	  console.log(result);
	}
      });
    });
  }
});
