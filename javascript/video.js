var button = document.getElementById("btn");
button.addEventListener("click", playPause);
myVideo = document.getElementById("videoplay");
function playPause() { 
    if (myVideo.paused) {
        myVideo.play();
        button.innerHTML = "Pause";
        $(".playbtn").hide();
        }
    else  {
        myVideo.pause(); 
        button.innerHTML = "Play";
        }
} 