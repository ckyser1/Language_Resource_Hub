//


function selectVideo(){
    var urlString = "http://www.youtube.com/";
    var languages = document.getElementById('languages');
    var selectedlanguage = videos.options[videos.selectedIndex];
    if (selectedlanguage.value != "nothing"){
            window.location = urlString + selectedlanguage.value;
    }
}


//var keywords = [];
//function keywordsearch() {
