

function preloadEasy()
{

}

function setupEasy()
{

}

function drawEasy()
{
	background(193,255,248);
	fill(0,0,0);
	textSize(20);
	text("背景資料", 450, 20);
	if (mouseX > 800 && mouseX < 950 && mouseY > 50 && mouseY < 150)
		{
		fill(165,255,248);
		stroke (0,0,0);
		strokeWeight(1);
		rect(800,50,150,100);
		textSize(20);
		fill(0,0,0);
		text("回到主頁",850,105);
		if (mouseIsPressed == true)
		{
			fill(165,255,248);
			stroke(0,0,0);
			strokeWeight(1);
			rect(800,50,150,100);
			text("回到主頁",850,105);
			canvasID = 2
		}
	}
	else
	{
		fill(193,255,248);
		stroke(0,0,0);
		strokeWeight(1);
		rect(800,50,150,100);
		fill(0,0,0);
		text("回到主頁",850,105);

	}
}
