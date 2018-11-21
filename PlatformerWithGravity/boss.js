
var rad = 60; // Width of the shape
var xpos, ypos; // Starting position of shape

var xspeed = 0; // Speed of the shape
var yspeed = 5; // Speed of the shape

var xdirection = 0; // Left or Right
var ydirection = 1; // Top to Bottom

var IceBeam
var IceBeamOn
var IceBeamTick
var IceCharge
var attack = 2
var iceCubeIsOnScreen = false
var icecubey = 50
var icecubex = 50
var icecubemove = 1
var icecubex2 = -150
var icespeed = 10
var icecubey2 = 50
var iceCubeIsOnScreen2 = false
var icespeed2 = 7.5
var icespeed3 = 25
var icecubex3 = 25
var icecubey3 = 25
var iceCubeIsOnScreen3 = false
var icex = 50
var icey = 50
var icebounce = 10
var icecubemovey =1
var icecubemovex =2
var IcePower = 1
var gatex = 50
var gatey = 0
var gatedirection
var gatespeed

function setupBoss() {
  noStroke();
  frameRate(30);
  ellipseMode(10,10);
  // Set the starting position of the shape
  xpos = 50;
  ypos = 100;
  IceBeam = false
  IceBeamOn = true
  IceBeamTick = 1
  IceCharge = 2
}

function playerDamage()
{
  var dist = sqrt((playerX - icecubex2)*(playerX - icecubex2) + (playerY - icecubey2)*(playerY - icecubey2));


  if (dist < 50)
  {
    deductHealth(50,30);
  }
}

function drawBoss() {

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  attack1();
  attack2();
  attack3();
  fill(0,0,0)
  // Draw the shape
  fill(0,0,255)
  ellipse(xpos, ypos, rad, rad);
  fill(165,242,243)
  textSize(25)
  text(IceBeamTick, 50, 50)
  text(IceCharge, 50,100)
}
function attack3()
{
    // Update the position of the shape
  icex = icex + IcePower + icebounce * icecubemovex;
  icey = icey + IcePower + icebounce * icecubemovey;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (icex > width - rad || icex < rad) {
    icecubemovex *= -1;
  }
  if (icey > height - rad || icey < rad) {
    icecubemovey *= -1;
  }
  fill(162,247,255)
  ellipse(icex,icey,25,25)
  IcePower = int(random())

}
function attack1()
{
  if (iceBeamOn = true)
  {
    yspeed = 2
    if (frameCount % 60 == 0 && IceBeamTick > 0)
    {
      IceBeamTick --;
      IceCharge = int(random(1,3))
    }
    if (IceBeamTick == 0)
    {
      IceBeamOn = false
    }
  }
  if (IceBeamOn == false)
  {
    yspeed = 10
    if (frameCount % 60 == 0 && IceCharge < 5)
    {
      IceCharge ++;
    }
    if (IceCharge >= 5)
    {
      IceBeamOn = true
      IceBeamTick = int(random(0,3))
    }
  }

  if (IceBeamTick > 0)
  {
    fill(0,222,255)
    rect(xpos,ypos-25,1000,50)
  }
}
function attack2()
{
  if (iceCubeIsOnScreen == false)
  {
    icecubex = 50;
    iceCubeIsOnScreen = true;
    icecubey = ypos - 25;
    fill(165,242,243)
    ellipse(icecubex,icecubey,50,50)              
  }
  else
  {
    icecubex = icecubex + icespeed * icecubemove
    fill(165,242,243)
    ellipse(icecubex,icecubey,50,50);  
    if (icecubex > 1000)
    {
      iceCubeIsOnScreen = false;
    }
  }
  if (iceCubeIsOnScreen2 == false)
  {
    icecubex2 = 50;
    icecubey2 = ypos -50;
    iceCubeIsOnScreen2 = true;
    fill(165,242,243)
    ellipse(icecubex2,icecubey2,100,100)
  }
  else
  {
    icecubex2 = icecubex2 + icespeed2 * icecubemove
    fill(165,242,243)
    ellipse(icecubex2,icecubey2,100,100);
    if (icecubex2 > 1000)
    {
      iceCubeIsOnScreen2 = false
    }
  }
  if (iceCubeIsOnScreen3 == false)
  {
    icecubex3 = 50;
    icecubey3 = ypos -10;
    iceCubeIsOnScreen3 = true;
    fill(165,242,243)
    ellipse(icecubex3,icecubey3,25,25)
  }
  else
  {
    icecubex3 = icecubex3 + icespeed3 * icecubemove
    fill(165,242,243)
    ellipse(icecubex3,icecubey3,25,25);
    if (icecubex3 > 1000)
    {
      iceCubeIsOnScreen3 = false
    }
  }
}