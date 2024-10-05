
for(i=0;i<7;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHtml = this.innerHTML;
    playMusic(buttonInnerHtml)
    keyAnimation(buttonInnerHtml)
    document.addEventListener("keypress",function(event){
        playMusic(event.key)
        keyAnimation(event.key)
    })
})}


function playMusic(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
       case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
       case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
       case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;                       
        default:console.log(buttonInnerHtml)
            break;
    }
}
function keyAnimation(keypr) {
    var activebutton = document.querySelector("."+keypr)
    activebutton.classList.add("pressed");
    
setTimeout(function() {
    activebutton.classList.remove("pressed");
  }, 100);
  
}