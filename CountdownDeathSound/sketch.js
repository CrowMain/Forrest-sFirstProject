let timer = 5

function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(900,700);
  
}

function draw()
{
	background(220);
	textAlign(CENTER, CENTER);
	textSize(100);
	text(timer, width/2, height/2);
	if (frameCount % 60 == 0 && timer > 0)
		{
			timer --;
		}
	if (timer == 0)
	{
		timer = 5
	}
}