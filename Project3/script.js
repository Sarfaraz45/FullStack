//Get DOM elements for JS code
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Create function for clicking on video
function toggleVideoStatus(){
   if(video.paused){
       video.play();
   } else{
       video.pause();
   }
}

// Create function for updating the play/pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }

}

//Create the function to update the Progress bar
function updateProgress(){
progress.value = (video.currentTime / video.duration)  * 100;

//Set the time for timestamp

let mins = Math.floor(video.currentTime / 60);

if(mins < 10){
    mins = '0' + String(mins);
}

let secs = Math.floor(video.currentTime % 60);
if(secs < 10){
    secs = '0' + String(secs);

}

timestamp.innerHTML = `${mins}:${secs}`


}

//Create function to update the video progress using slider
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;
}

//Create functon to stop the video

function stopVideo(){
   video.currentTime = 0;
   video.pause();
}
//Event Listeners

//1. Event Listener for vidoe player

video.addEventListener('click', toggleVideoStatus);

video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);



//2. Event Listener for play button
play.addEventListener('click', toggleVideoStatus);

//3. Event Listener for Stop Button
stop.addEventListener('click', stopVideo);

//4. Event Listener for Progress bar
progress.addEventListener('change', setVideoProgress)

