

function preloadRegular()
{

}

function setupRegular()
{

}

function drawRegular()
{
	background(255,215,118);
	fill(0,0,0);
	textSize(20);
	text("Regular", 350, 20);
	if (mouseX > 500 && mouseX < 650 && mouseY > 50 && mouseY < 150)
		{
		fill(255,162,0);
		stroke (0,0,0);
		strokeWeight(1);
		rect(500,50,150,100);
		textSize(20);
		fill(0,0,0);
		text("Back",550,105);
		if (mouseIsPressed == true)
		{
			fill(0,0,0);
			stroke(0,0,0);
			strokeWeight(1);
			rect(500,50,150,100);
			text("Back",550,105);
			canvasID = 2
		}
	}
	else
	{
		fill(255,215,118);
		stroke(0,0,0);
		strokeWeight(1);
		rect(500,50,150,100);
		fill(0,0,0);
		text("Back",550,105);

	}
}
