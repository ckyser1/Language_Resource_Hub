
     var jobscontainerEl = document.querySelector('jobscontainer1');
     var languageButtonsEl = document.querySelector('#language-buttons');
     var ddEl=document.querySelector('#videos')
  

     var buttonClickHandler = function (event) {
      var language = event.target.getAttribute('data-language');
        console.log(language);
        displayjobs(language);
        //getyoutubevideo(language);
        localStorage.setItem("language", JSON.stringify(language));
       
    };



    async function displayjobs(language) {
        //var lang="css";
        var queryURL = "https://remotive.io/api/remote-jobs?search=%20" + language;
        console.log(language);
        var response = await $.ajax({
            url: queryURL,
            method: "GET"
          })
          
            console.log(response);


            var jobpostDiv = $("<div class=minicardjb id='jobscontainer1'>");
            var getCurrentjobcat = response.jobs[0].category;
                
            var getCurrentjobname = response.jobs[0].title;

            var getCurrentcompname = response.jobs[0].company_name;

            var blink = response.jobs[0].url;

            jobpostDiv.append($("<li>").text(getCurrentjobcat));
            jobpostDiv.append($("<li>").text(getCurrentjobname));
            jobpostDiv.append($("<li>").text(getCurrentcompname));
            jobpostDiv.append($("<li>").text(blink));
            
        
            $("#jobscontainer1").html(jobpostDiv);

            var jobpostDiv = $("<div class='minicardjb' id='jobscontainer2'>");
            var getCurrentjobcat2 = response.jobs[1].category;
                
            var getCurrentjobname2 = response.jobs[1].title;

            var getCurrentcompname2 = response.jobs[1].company_name;

            var blink2 = response.jobs[1].url;

            jobpostDiv.append($("<li>").text(getCurrentjobcat2));
            jobpostDiv.append($("<li>").text(getCurrentjobname2));
            jobpostDiv.append($("<li>").text(getCurrentcompname2));
            jobpostDiv.append($("<li>").text(blink2));
        
            $("#jobscontainer2").html(jobpostDiv);

            var jobpostDiv = $("<div class='minicardjb' id='jobscontainer3'>");
            var getCurrentjobcat = response.jobs[2].category;
                
            var getCurrentjobname = response.jobs[2].title;

            var getCurrentcompname = response.jobs[2].company_name;

            var blink = response.jobs[2].url;

            jobpostDiv.append($("<li>").text(getCurrentjobcat));
            jobpostDiv.append($("<li>").text(getCurrentjobname));
            jobpostDiv.append($("<li>").text(getCurrentcompname));
            jobpostDiv.append($("<li>").text(blink));
        
            $("#jobscontainer3").html(jobpostDiv);
            localStorage.setItem("link",JSON.stringify(blink));
        }



// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '220',
    width: '300',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


  
  if (languageButtonsEl){
    languageButtonsEl.addEventListener('click', buttonClickHandler); 
     
  };  

          
          
