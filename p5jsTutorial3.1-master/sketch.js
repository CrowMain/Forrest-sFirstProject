var buttonNothing;
var buttonHoverOver;
var buttonClick;
var imgCatInMug;
var button2X;
var button2Y;

function preload()
{
	imgCatInMug = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/p5jsTutorial3.1-master/Sushi.jpg');

	buttonClick = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/buttonClick.png');
	buttonHoverOver = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/buttonHoverOver.png');
	buttonNothing = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/buttonNothing.png');
}

function setup()
{
	createCanvas(800,600);

	button2X = 1;
	button2Y = 1;
  
}

function draw()
{
	background(125,125,125)


	// Example 1: easy to understand - Start

	image(imgCatInMug,10,150,2048/5,1537/5);

	// Example 1: easy to understand - End




	// Example 2: less code but harder to understand - Start

	strokeWeight(3);



	if (mouseX > button2X && mouseX < button2X + 200 && mouseY > button2Y && mouseY < button2Y+50)
	{
		image(buttonHoverOver,button2X,button2Y);
		if (mouseIsPressed)
		{
			image(buttonClick,button2X,button2Y);
		}
	}
	else
	{
		image(buttonNothing,button2X,button2Y);
	}


	// Example 2: less code but harder to understand - End


}