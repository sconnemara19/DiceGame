


//Roll Dice, the object of the game is to sucessfully roll the # of level your on depending on what level your on. Example, your on level two, 
//so you have to try and get the # 2 twice. 

let score = 0

function Level1 (player1){
	let userinput = prompt ("Roll The Dice", "Roll")
	let dice1 = Math.floor((Math.random() * 4) + 1);
	console.log("You have rolled: " + dice1);
		if(dice1<=1){
    		console.log("you get a point");
    		score++;
    		Level2();
    		return;
		}

		Level1();
}


function Level2(){
	console.log("You have reached Level 2!")
let userinput2 = prompt ("Roll The Dice", "Roll")

let dice1 = Math.floor((Math.random() *6) + 1);  
let dice2 = Math.floor((Math.random() *6) + 1);  
	console.log( "You have rolled:" + dice1);
		if(dice1 ==2){
			console.log("Roll Again")
			

		}
  

}


	




Level1("userinput")