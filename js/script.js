// var APIkey = "AIzaSyB0hJGNmA5cC6nBDR_ZRCwORbzAtXeZEgw";
// var youtubeURL = "https://www.googleapis.com/youtube/v3/search" + language + APIkey;


// function selectVideo(){
//     var urlString = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
//     var languages = document.getElementById('languages');
//     var selectedlanguage = videos.options[videos.selectedIndex];
//     if (selectedlanguage.value != "nothing"){
//             window.location = urlString + selectedlanguage.value;
//     }
// }

// function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     gapi.client.setApiKey("AIzaSyB0hJGNmA5cC6nBDR_ZRCwORbzAtXeZEgw");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }



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

    var lang = "css";
    var remotiveURL = "https://remotive.io/api/remote-jobs?search=%20";
    var jbContainerEl = document.getElementById('#jobs-container');

        fetch(remotiveURL + lang, {
            method: 'GET', //GET is the default.
            credentials: 'same-origin', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
        })
        .then(function (response) {
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById('jobscontainer').innerHTML = data; 
            })
    
            

        function displayjobs(data){
            var jobscontainer = data;
            const jobsDiv = document.getElementById("jobscontainer");

            const heading = document.createElement("h2")
            heading.innerHTML=postName;

            jobsDiv.appendChild(postName);
        };
        
    



    
