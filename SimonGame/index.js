var ANIM_STEP_INTERVAL_MILLISEC = 2000;
var step;		//simon game step counter
	var moves;	//moves counter
	var arrSeq;	//Array for simon game
	var playSeq;	//Array for players move. It is empty at the start of each round
	var strictF;	//flag if strict mode is enabled

	var audio1 = new Audio('NFF-dwarf-laugh.wav');
	var audio2 = new Audio('NFF-girl-dumb-laugh.wav');
	var audio3 = new Audio('NFF-man-silly-laugh.wav');
	var audio4 = new Audio('NFF-mad-laughter-2.wav');
	var sounds=[audio1,audio2,audio3,audio4];	//an array with the 4 sounds for the 4 buttons
	

function init(){
	
	step=0;		//simon game step counter
	moves=0;	//moves counter
	arrSeq=[];	//Array for simon game
	playSeq=[];	//Array for players move. It is empty at the start of each round
	strictF=0;	//flag if strict mode is enabled
	document.getElementById('screen').innerHTML = "- -";

    audio1 = new Audio('NFF-dwarf-laugh.wav');
    audio2 = new Audio('NFF-girl-dumb-laugh.wav');
    audio3 = new Audio('NFF-man-silly-laugh.wav');
    audio4 = new Audio('NFF-mad-laughter-2.wav');
	sounds=[audio1,audio2,audio3,audio4];	//an array with the 4 sounds for the 4 buttons
} 

//init of game vars
function resetBoard(){
	init();
  step=0;
  moves=0;
  //strict mode deactivated
  strictF=0;
  document.getElementById("strictBtn").style.opacity = 0.6;
  document.getElementById("screen").innerHTML = "- -";
  //arr init
  arrSeq=[];
  playSeq=[];
  //deactivate buttons 
  disBtns(1);
} 

//disables buttons when simon shows the game sequence
function disBtns(val){
  for(var i=1;i<=4;i++){
    document.getElementById("w"+i).disabled=val;
  }
}

//starts the game
function start(){
	step=0;
	moves=0;
	arrSeq=[];
	playSeq=[];
	nextStep();
}

//prepare for next step and play
function nextStep(){
	step++;
	document.getElementById("screen").innerHTML = step;
	if(step===21){	//WIN!
		document.getElementById("screen").innerHTML = "WIN!";
		resetBoard();
	}		
	updateArrSeq(); //update ArrSeq    	
	playGame();
}

//main function
function playGame(){
	moves=0;
	playSeq=[]; //Empty player's move array 
	playSeqVis();	//visualize arrSeq  
}


function playSeqVis(){
  //deactivate buttons for playing visuals
  disBtns(1);
  
  // setTimeout: takes a no arg function as a first argument
  // and the milliseconds it has to wait until it will call it (thus timeout) as a second argument
  // we call it in the for loop arrSeq.length-1 times
  // and each time it will wait for an extra interval step (thus intervar * i)
  var animStepCounter = 0;
  for(var i=0;i<arrSeq.length;i++){
	  setTimeout(function every2SecCallback() {
      // i is probably gonna be equal to arrSeq.length when this is called
      // therefore we need another counter that will be raised inside the callback itself
      animateBtn(arrSeq[animStepCounter]);
    
      // case: last callback
      // action: activate buttons and wait for player's move 
      if (++animStepCounter === arrSeq.length) {
        disBtns(0);
      }
      
    }, ANIM_STEP_INTERVAL_MILLISEC*i);
  }
}

function animateBtn(val){
	var pl=val-1;
  
  //light btn animate btn
  $("#w"+val).fadeOut();
  $("#w"+val).fadeIn("slow");
  
  sounds[pl].play();	//play sound
}

function updateArrSeq(){
  var random=Math.floor(Math.random() * 4 +1);
  arrSeq.push(random);
}

//checks if player's move is ok
function checkMove(){	
  if(arrSeq.toString()===playSeq.toString()){
    setTimeout(nextStep, ANIM_STEP_INTERVAL_MILLISEC);
    return 1;
  }
  if(strictF==1){ //error and strict mode is on....reset.
        resetBoard();
        return resetBoard();
	}
	playGame();	//else play again the same steps
}

//change String Mode on and off
function chStrict(){
  if(strictF===1){
    strictF=0;
    document.getElementById("strictBtn").style.opacity = 0.6;
  }
  else{ 
    strictF=1;
    //update Button
    document.getElementById("strictBtn").style.opacity = strictF;
  }
}

//player pushes a button
function playerMove(val){
  animateBtn(val);
  playSeq.push(val);
  moves++;	//update moves so we can continue game...  
  if(moves===step){
    checkMove();
  }
}