

var playDrum = function(keyId){           
    var audio = new Audio(playList[keyId]);    
    audio.play();
    // buttonId = this.innerHTML
    // var audio = new Audio(playList[buttonId]);
    // audio.play();        
}




noOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i<noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function(){new Audio(playList[this.innerHTML]).play() 
        document.querySelector("."+this.innerHTML).classList.toggle("pressed")  })
}

document.addEventListener("keypress", function(evnt){ 
    keyId = evnt.key.toLowerCase();
    if(keyId=='w' || keyId=='a'|| keyId=='s' ||  keyId=='d' ||  keyId=='j' ||  keyId=='k' ||  keyId=='l' ){
        document.querySelector(".msg").innerHTML="" ;
        document.querySelector("."+keyId).classList.toggle("pressed")
        playDrum(keyId)
    }else{
    document.querySelector(".msg").innerHTML="Wrong Keypress" ; }    

}); 



    var playList = {
    'w': './sounds/crash.mp3',
    'a': './sounds/kick-bass.mp3',
    's': './sounds/snare.mp3',
    'd': './sounds/tom-1.mp3',    
    'j': './sounds/tom-2.mp3',
    'k': './sounds/tom-3.mp3',
    'l': './sounds/tom-3.mp3'
}
