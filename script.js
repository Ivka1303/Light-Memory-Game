// global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakeCounter = 0;
var clueHoldTime = 800; 
var cluePauseTime = 400; //how long to pause in between clues


function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}


function stopGame(){
    //initialize game variables
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}


// Sound Synthesis Functions
const freqMap = {
  1: 130.81,
  2: 164.81,
  3: 196.00,
  4: 261.63,
  5: 246.94
}


function playTone(btn,len){ 
  if(btn != 5){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
    setTimeout(function(){
      stopTone()
    },len); 
  }
  else{
    o.frequency.value = 600
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
    setTimeout(function(){
      stopTone()
    },len); 
    
    
  }
}


function startTone(btn){
  if(!tonePlaying && btn != 5){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
  else{
    var audio = new Audio('https://www.myinstants.com/media/sounds/expedientes-secretos-x-musica22.mp3');
    audio.play();
    
  }
}


function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("Btn"+btn).classList.add("lit")
}


function clearButton(btn){
  document.getElementById("Btn"+btn).classList.remove("lit")
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function setDelay(i) {
  setTimeout(function(){
    console.log(i);
  }, 1000);
}

function playClueSequence(){ 
  guessCounter = 0;
  mistakeCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    setDelay(1500)
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}


function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  //var pattern = Array.from({length: 8}, () => Math.floor(Math.random() * 4))
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
    
  }

  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else {
        //Pattern correct. Add next segment
        progress++;
        cluePauseTime = cluePauseTime - 100;
        clueHoldTime = clueHoldTime - 50;
        playClueSequence(); 
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    mistakeCounter++
    if (mistakeCounter ==3){
      loseGame();}
    
  }
}