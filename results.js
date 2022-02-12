var APIkey = "&key=AIzaSyB0hJGNmA5cC6nBDR_ZRCwORbzAtXeZEgw"
var language= document.querySelector(".videos")

var getyoutubevideos = function () {
    // Where is this value coming from?
    // TODO: Write your answer here the-  value is coming from 
    var queryString = document.location.search;
    var youtubevideos = queryString.split('=')[1];
  
    if (youtubevideos) {
      language.textContent = youtubevideos;
  
      getyoutubevideosapi(youtubevideos);

    } else {
      // Under what condition will this run?
      // TODO: Write your answer here if there is a repo with issue then it will display 
      document.location.replace('./index.html');
    }
  };

  var getyoutubevideosapi = function(language) {
    var apiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + language + APIkey; console.log(apiUrl); 
fetch(apiUrl, )
}
    getyoutubevideos()