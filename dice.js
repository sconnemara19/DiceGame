


//Roll Dice, the object of the game is to sucessfully roll the # of level your on depending on what level your on. Example, your on level two, 
//so you have to try and get the # 2 twice. 



function GameManager(){
	let score = 0;
	Level1();
	Level2();
	Level3();
	Level4();
	Level5();
	Level6();
}

function rollDie(numberOfSides){

return Math.floor((Math.random() * numberOfSides) +1 );
}
rollDie();



function Level1(){
	let userinput = prompt ("Roll The Dice", "Roll")
	let dice1 = rollDie(4);
	let dice2 = rollDie(4);
	let dice3 = rollDie(4); 
	let score = 0
	console.log("You have rolled: " + dice1 + " & " + dice2 + " & " + dice3);
		if(dice1 == 1 && dice2 == 1 && dice3 == 1){
    		console.log("Amazing! You got 1 point!");
    		score++;
    		return;
		}
		Level1();
}


function Level2(){
	console.log("Level 2!")
	let userinput2 = prompt ("Roll The Dice", "Roll")
	let dice1 = rollDie(6);  
	let dice2 = rollDie(4);
	let dice3 = rollDie(4);
	let score = 0  
	console.log("You have rolled:" + dice1 + " & " + dice2 + " & " + dice3);
	

	if(dice1 == 2 && dice2 == 2 && dice3 == 2){
		console.log("Way to go! You got two points!");
	  	score++;
	  	return;
	} else {
		console.log("Keep trying");
		Level2();
	}		
}
  



function Level3(){
console.log("Level 3!")
let userinput = prompt ("Roll The Dice", "Roll")
let dice1 = rollDie(8);
let dice2 = rollDie(4);
let dice3 = rollDie(4);
let score = 0;
console.log("You have rolled:" + dice1 + " & " + dice2 + " & " + dice3);

	if(dice1 == 3 && dice2 == 3 && dice3 ==3){
		console.log("You're awesome!", "You get three points");
		score++;
		return;	

	} else {
		console.log("Keep trying")
		Level3();

	}

}

function Level4(){
console.log("Level 4!")
let userinput = prompt ("Roll The Dice", "Roll")
let dice1 = rollDie (10);
let dice2 = rollDie (4);
let dice3 = rollDie (4);
console.log("You have rolled:" + dice1 + " & " + dice2 + " & " + dice3);
	if (dice1 == 4 && dice2 == 4 && dice3 == 4){
		console.log("You did it!", "You got four points!");
		score++;
		return;

	} else {
		console.log("Keep trying")
		Level4()

	}






}

function Level5(){
console.log("Level 5!")
let userinput = prompt("Roll The Dice", "Roll")
let dice1 = rollDie (12);
let dice2 = rollDie (4);
let dice3 = rollDie (4);
console.log("You have rolled:" + dice1 + " & " + dice2 + " & " + dice3);
if (dice1 == 5 && dice2 == 5 && dice3 == 5){
	console.log ("you get 5 points")
	score++;
	return;

} else {
	console.log("Keep trying")
	Level5 ()

}





}


function Level6(){
console.log("Level 6!")
let userinput = prompt("Roll The Dice", "Roll")
let rollDie = (14);
let rollDie = (4);
let rollDie = (4);
let score = 0;
console.log("You have rolled:" + dice1 + " & " + dice2 + " & " + dice3);
if (dice1 == 6 && dice2 == 6 && dice3 == 6){
	console.log ("winner chicken dinner! You get 6 points!")
	score**;
	return;

} else {

	console.log ("Keep trying")
	Level6()	
}


}



	




GameManager();