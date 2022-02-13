// var APIkey = "AIzaSyB0hJGNmA5cC6nBDR_ZRCwORbzAtXeZEgw"
// //var youtubeURL = "https://www.googleapis.com/youtube/v3/search" + language + APIkey;


// function selectVideo(){
//     var urlString = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
//     var languages = document.getElementById('languages');
//     var selectedlanguage = videos.options[videos.selectedIndex];
//     if (selectedlanguage.value != "nothing"){
//             window.location = urlString + selectedlanguage.value;
//     }
// }

//     var urlString = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
//     var languages = document.getElementById('languages');
//     var selectedlanguage = videos.options[videos.selectedIndex];
//     if (selectedlanguage.value != "nothing"){
//             window.location = urlString + selectedlanguage.value;
//     }



// var buttonClickHandler = function (event) {
//     var language = event.target.getAttribute('data-language');
  
//     if (language) {
//       getFeaturedRepos(language);
  
//       repoContainerEl.textContent = '';
//     }
//   };

//   var getyoutubevideo = function (user) {
//     var apiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + language + APIkey ;
  
//     fetch(apiUrl)
//       .then(function (response) {
//         if (response.ok) {
//           response.json().then(function (data) {
//             displayRepos(data, user);
//           });
//         } else {
         
//         }
//       })
//       .catch(function (error) {
        
//       });
//   };

//  // repoEl.setAttribute('href', './results.html?repo=' + );

// let buttons = document.querySelectorAll(".dropbtn")
// for (let i = 0; i < buttons.length; i++) {
//     console.log(buttons[i])
// buttons[i].addEventListener( 'click',function(){console.log("here")
//     window.location.assign("results.html")}) }
    





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

    

      

            async function displayjobs() {
                //var lang="java"
                var queryURL = "https://remotive.io/api/remote-jobs?search=%20" + language;
            
                var response = await $.ajax({
                    url: queryURL,
                    method: "GET"
                  })
                    console.log(response);

                    var jobpostDiv = $("<div class='minicardjb' id='jobscontainer'>");
                    var getCurrentjobcat = response.jobs[0].category;
                        
                    var getCurrentjobname = response.jobs[0].title;

                    var getCurrentcompname = response.jobs[0].company_name;

                    var blink = response.jobs[0].url;

                    var currentjpEl = $("<div>");
                    currentjpEl.append($("<li>").text(getCurrentjobcat));
                    currentjpEl.append($("<li>").text(getCurrentjobname));
                    currentjpEl.append($("<li>").text(getCurrentcompname));
                    currentjpEl.append($("<li>").text(blink));

                    jobpostDiv.append(currentjpEl);
                
                    $("#jobscontainer").html(jobpostDiv);

                    var jobpostDiv = $("<div class='minicardjb' id='jobscontainer2'>");
                    var getCurrentjobcat = response.jobs[1].category;
                        
                    var getCurrentjobname = response.jobs[1].title;

                    var getCurrentcompname = response.jobs[1].company_name;

                    var blink = response.jobs[1].url;

                    var currentjpEl = $("<div>");
                    currentjpEl.append($("<li>").text(getCurrentjobcat));
                    currentjpEl.append($("<li>").text(getCurrentjobname));
                    currentjpEl.append($("<li>").text(getCurrentcompname));
                    currentjpEl.append($("<li>").text(blink));

                    jobpostDiv.append(currentjpEl);
                
                    $("#jobscontainer2").html(jobpostDiv);

                    var jobpostDiv = $("<div class='minicardjb' id='jobscontainer3'>");
                    var getCurrentjobcat = response.jobs[2].category;
                        
                    var getCurrentjobname = response.jobs[2].title;

                    var getCurrentcompname = response.jobs[2].company_name;

                    var blink = response.jobs[2].url;

                    var currentjpEl = $("<div>");
                    currentjpEl.append($("<li>").text(getCurrentjobcat));
                    currentjpEl.append($("<li>").text(getCurrentjobname));
                    currentjpEl.append($("<li>").text(getCurrentcompname));
                    currentjpEl.append($("<li>").text(blink));

                    jobpostDiv.append(currentjpEl);
                
                    $("#jobscontainer3").html(jobpostDiv);
                  

                }

displayjobs();
