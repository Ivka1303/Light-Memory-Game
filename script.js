// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


const nextClueWaitTime1 = 800; //how long to wait before starting playback of the clue sequence for the 2nd type of a game
const clueHoldTime1 = 800;  //how long to hold each clue's light/sound of the clue in the 2nd type of a game
const cluePauseTime1 = 250; //how long to pause in between clues in the 2nd type of a game


//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var progress1 = 0; 
var gamePlaying = false;
var gamePlaying1 = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;


function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

// Starting the game where PC playes a random sequence of buttons 
// and the user has to repeat them after the program
function start1Game(){
    // initialize game variables
    progress1 = 0;
    gamePlaying1 = true;
    // swap the Start and Stop buttons
    document.getElementById("start1Btn").classList.add("hidden");
    document.getElementById("stop1Btn").classList.remove("hidden");
    playClue1Sequence();
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function stop1Game(){
    //initialize game variables
    gamePlaying1 = false;
    // swap the Start and Stop buttons
    document.getElementById("start1Btn").classList.remove("hidden");
    document.getElementById("stop1Btn").classList.add("hidden");
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}


function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}


function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
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
  document.getElementById("button"+btn).classList.add("lit")
}


function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//function playSingleClue1(btn){
  //if(gamePlaying1){
    //lightButton(btn);
    //playTone(btn,clueHoldTime);
    //setTimeout1(clearButton,clueHoldTime1,btn);
  //}
//}


function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


// Playing the random sequence for the 2nd type of a game
//function playClue1Sequence(){
  //pattern1 = Array.from({length: 8}, () => Math.floor(Math.random() * 4));
  //guess1Counter = 0;
  //context1.resume()
  //let delay1 = nextClueWaitTime1; //set delay to the corresponding wait time
  //for(let i=0;i<=progress1;i++){ // for each clue that is revealed so far
    //console.log("play single clue: " + pattern1[i] + " in " + delay + "ms")
    //setTimeout1(playSingleClue1,delay,pattern1[i]) // set a timeout to play that clue
    //delay1 += clueHoldTime1 
    //delay1 += cluePauseTime1;
  //}



function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}


function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
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
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    loseGame();
  }
}


//function guess1(btn){
  //console.log("user guessed: " + btn);
  //if(!gamePlaying){
    //return;
  //}
  // Function that plays the sequence open so far should be here
  //if(pattern[guess1Counter] == btn){
    //Guess was correct!
    //if(guess1Counter == progress){
      //if(progress == pattern1.length - 1){
        //GAME OVER: WIN!
        //winGame();
      //}else{
        //Pattern correct. Add next segment
        //progress++;
        //playClue1Sequence();
      //}
    //}else{
      //so far so good... check the next guess
      //guess1Counter++;
    //}
  //}else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    //loseGame();
  //}
//}