var canvasID;

/*
Canvas ID's
1 - Intro
2 - mainmenu
3 - easy
4 - Regular
5 - Hard
*/

function preload()
{

}

function setup()
{
	setupintro();
	setupmainmenu();
	setupEasy();
	setupRegular();
	setupHard();

	canvasID = 1;

	createCanvas(800,500);

}

function draw()
{
	background(125,125,125);

	if (canvasID == 1)
	{
		drawintro();
	}
	if (canvasID == 2)
	{
		drawmainmenu();
	}
	if (canvasID == 3)
	{
		drawEasy();
	}
	if (canvasID == 4)
	{
		drawRegular();
	}
	if (canvasID == 5)
	{
		drawHard();
	}
}