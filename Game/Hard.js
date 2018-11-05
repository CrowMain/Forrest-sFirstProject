

function preloadHard()
{

}

function setupHard()
{

}

function drawHard()
{
	background(255,87,87);
	fill(0,0,0);
	textSize(20);
	text("Expert", 350, 20);
	if (mouseX > 500 && mouseX < 650 && mouseY > 50 && mouseY < 150)
		{
		fill(255,0,0);
		stroke (0,0,0);
		strokeWeight(1);
		rect(500,50,150,100);
		textSize(20);
		fill(0,0,0);
		text("Back",550,105);
		if (mouseIsPressed == true)
		{
			fill(255,0,0);
			stroke(0,0,0);
			strokeWeight(1);
			rect(500,50,150,100);
			text("Back",550,105);
			canvasID = 2
		}
	}
	else
	{
		fill(255,87,87);
		stroke(0,0,0);
		strokeWeight(1);
		rect(500,50,150,100);
		fill(0,0,0);
		text("Back",550,105);

	}
}
