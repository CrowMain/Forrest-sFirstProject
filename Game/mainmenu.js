

function preloadmainmenu()
{

}

function setupmainmenu()
{

}

function drawmainmenu()
{
	background(0,255,255);
	fill(0,0,0);
	textSize(20);
	text("Main Menu", 350, 20);
	if(mouseX > 50 && mouseX < 200 && mouseY > 350 && mouseY < 450)
	{
		fill(255,0,0);
		stroke(0,0,0);
		strokeWeight(1);
		rect(50,350,150,100);
		textSize(20);
		fill(0,0,0);
		text("Expert",75,400);
		if (mouseIsPressed == true)
		{
		fill(255,0,0);
		stroke(0,0,0);
		strokeWeight(1);
		rect(50,350,150,100);
		text("Expert",75,400);
		canvasID = 5	
		}
	}
	else
	{
		fill(255,87,87);
		stroke(0,0,0);
		strokeWeight(1);
		rect(50,350,150,100);
		fill(0,0,0);
		text("Expert",75,400);
	}

	if(mouseX > 50 && mouseX < 200 && mouseY > 200 && mouseY < 300)
	{
		fill(255,162,0);
		stroke(0,0,0);
		strokeWeight(1);
		rect(50,200,150,100);
		textSize(20);
		fill(0,0,0);
		text("Regular",75,250);
		if (mouseIsPressed == true)
		{
			fill(0,0,0);
			stroke(0,0,0);
			strokeWeight(1);
			rect(50,200,150,100);
			text("Regular",75,250);
			canvasID = 4
		}
	}
	else
	{
	fill(255,215,118);
	stroke(0,0,0);
	strokeWeight(1);
	rect(50,200,150,100)
	fill(0,0,0);
	text("Regular",75,250);	
	}
	if (mouseX > 50 && mouseX < 200 && mouseY > 50 && mouseY < 150)
	{
		fill(0,255,68);
		stroke (0,0,0);
		strokeWeight(1);
		rect(50,50,150,100);
		textSize(20);
		fill(0,0,0);
		text("Simple",75,105);
		if (mouseIsPressed == true)
		{
			fill(0,0,0);
			stroke(0,0,0);
			strokeWeight(1);
			rect(50,50,150,100);
			text("Simple",75,105);
			canvasID = 3
		}
	}
	else
	{
		fill(121,255,157);
		stroke(0,0,0);
		strokeWeight(1);
		rect(50,50,150,100)
		fill(0,0,0);
		text("Simple",75,105);

	}
}
