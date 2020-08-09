var paddle;
var ball;
var bubble;

function preload(){
	
}

function setup() {
	createCanvas(1000, 1100);
	//Create object for paddle.
	paddle = new Paddle(400,900,100,30);

	//create object for ball.
	ball = new Ball(450,890,30);
	
	//create object for bubble

	bubble = new Bubble(400,200,80);
	
}


function draw() {
  background(0);

	paddle.display();
	ball.display();
	fill("blue");
	bubble.display();
 
}



