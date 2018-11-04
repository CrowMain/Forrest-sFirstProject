

function preloadintro()
{

}

function setupintro()
{

}

function drawintro()
{
	background(125,125,125);
	fill(0,0,0);
	text("This Is The Introduction Page\n\nClick Anywhere to Continue",10,50);

	if (mouseIsPressed)
	{
		canvasID = 2
	}

}
