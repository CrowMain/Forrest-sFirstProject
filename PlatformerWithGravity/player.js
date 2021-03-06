var platforms;
var maxPlatforms;
var playerX;
var playerY;
var jump;
var jumpCounter;
var falling;
var maxHeight;
var moveLR;
var leftActive;
var rightActive;
var goToNextQuestion;
var countDownToNextQuestion;
var prepAnimation;


function preloadPlatforms()
{

}

function setupPlayer()
{
	// setup player variables
	playerX = 30;
	playerY = 180;

	// left and right movement speed of player
	playerSpeed = 10;

	falling = true;

	jumpMaxHeight = 500;
	jump = 0;
	jumpCounter = 0;
	prepAnimation = 0;
	goToNextQuestion = false;
	moveLR = "stop";
	leftActive = false;
	rightActive = false;

	// setup player variables
}

function showControls()
{
	fill(255,255,255);
	text("'A' Move Left",50,50);
	text("'D' Move Right",50,75);
	text("'W' Jump",50,100);
}



function drawPlayer()
{
	// draw player
	fill(255,0,0);
	ellipse(playerX,playerY,10,10);

}

function manageMoveLR()
{
	if (moveLR == "left")
	{
		playerX = playerX - playerSpeed;
	}
	else if (moveLR == "right")
	{
		playerX = playerX + playerSpeed;
	}

}

function playerTouchTop()
{
	for (var c = 0; c < maxPlatforms; c++)
	{
		if (platforms[c][4] == 1 && platforms[c][6] == 1)
		{
			if (playerY > platforms[c][1] + platforms[c][3] - 5 && playerY < (platforms[c][1] + platforms[c][3] + 5) && playerX > platforms[c][0] && playerX < platforms[c][0] + platforms[c][2])
			{
				jump = 2;
				falling = true;

				platforms[c][6] = 0;

				if (platforms[c][5] == 1)
				{
					goToNextQuestion = true;
				}
				return true;
			}			
		}
	}
	return false;
}

function initiateNextQuestion()
{
	if (goToNextQuestion == true)
	{
		if (prepAnimation == 0)
		{
			countDownToNextQuestion = frameCount + 60;
			prepAnimation = 1;
		}
		else if (prepAnimation == 1)
		{
			if (frameCount >= countDownToNextQuestion)
			{
				prepAnimation = 0;
				canvasID++;
			}
		}
	}
}

function manageJumpAndFall()
{
	// character jump
	if (jump == 1)
	{
		// up movement
		if (jumpCounter == 0)
		{
			maxHeight = playerY - jumpMaxHeight;
			jumpCounter = 1;
		}

		if (jumpCounter == 1)
		{
			// rate of up movement
			playerY -= 10;


			// maximum jump height
			if (playerY < maxHeight || playerTouchTop())
			{
				falling = true;
				jump = 2;
			}
		}
	}

	if (falling == true)
	{
		// rate of down movement
		playerY += 6;
		playerOnPlatform();	
	}
}

function playerOnPlatform()
{
	// check if character is on platform
	for (var c = 0; c < maxPlatforms; c++)
	{
		if ((platforms[c][4] == 0 || platforms[c][4] == 1) && platforms[c][6] == 1)
		{
			if (playerY > platforms[c][1] - 5 && playerY < (platforms[c][1] + 5) && playerX > platforms[c][0] && playerX < platforms[c][0] + platforms[c][2])
			{
				playerY = platforms[c][1] - 5;
				jump = 0;
				jumpCounter = 0;
				break;
			}
		}
	}
}

function keyPressed()
{
	if (key == 'w' || key == 'W' && jump == 0)
	{
		jump = 1;
		falling = false;
	}
	if (key == 'a' || key == 'A')
	{
		moveLR = "left";
		leftActive = true;
	}
	if (key == 'D' || key == 'D')
	{
		moveLR = "right";
		rightActive = true;
	}

}

function keyReleased()
{
	if (key == 'a' || key == 'A' && leftActive == true)
	{
		leftActive = false;
	}
	if (key == 'D' || key == 'D' && rightActive == true)
	{
		rightActive = false;
	}
	if (leftActive == false && rightActive == false)
	{
		moveLR = "stop";
	}
}

