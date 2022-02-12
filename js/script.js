var APIkey = "AIzaSyB0hJGNmA5cC6nBDR_ZRCwORbzAtXeZEgw"
//var youtubeURL = "https://www.googleapis.com/youtube/v3/search" + language + APIkey;


function selectVideo(){
    

    var urlString = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
    var languages = document.getElementById('languages');
    var selectedlanguage = videos.options[videos.selectedIndex];
    if (selectedlanguage.value != "nothing"){
            window.location = urlString + selectedlanguage.value;
    }
}


var buttonClickHandler = function (event) {
    var language = event.target.getAttribute('data-language');
  
    if (language) {
      getFeaturedRepos(language);
  
      repoContainerEl.textContent = '';
    }
  };

  var getyoutubevideo = function (user) {
    var apiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + language + APIkey ;
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayRepos(data, user);
          });
        } else {
         
        }
      })
      .catch(function (error) {
        
      });
  };

 // repoEl.setAttribute('href', './results.html?repo=' + );

const select = document.querySelector(".videos")


   
select.addEventListener('change',function(event){console.log(event.target.value)
    window.location.assign("results.html?language="+ event.target.value)}) 
    





  //https://www.googleapis.com/youtube/v3/search?part=snippet&q="language"&key="api key"


//var keywords = [];
//function keywordsearch() {
   
    //{
        //"kind": "youtube#searchListResponse",
       // "etag": AIzaSyAAiiNpKLu_ed2azaqlVIAApm_yno3teOY,
      //  "nextPageToken": string,
      //  "prevPageToken": string,
       // "regionCode": string,
       // "pageInfo": {
       //   "totalResults": 4,
       //   "resultsPerPage": 4
        //},
       // "items": [
       //   search Resource
     //   ]
     // }
