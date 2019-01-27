var bossHp = 20
var sky = 1;
var sea = 1
var fish1x = 400
var fish1y = 400
var fish2x = 400
var fish2y = 450
var fish3x = 400
var fish3y = 500
var fishface1 = 1
var fishface2 = 0
var fishface3 = 1
var crabx = 400
var craby = 570
var crabmove = 0
var cloud1x = 0
var cloud2x = 400
var cloud3x = 250
var storm = false
var largecloud = 0
var spongex = 0
var spongemove = 1
var boatx = 0
var smokeonscreen = false
var smokex
var smokey
var trashonscreen = false
var trashx
var trashy
var person1x = 0
var person2x = 0
var person3x = 0
var person4x = 0
var person5x = 0
var movement1 = 1
var movement2 = 1
var movement3 = 1
var movement4 = 1
var movement5 = 1
var trashx2
var trashy2
var trashx3
var trashy3
var trashx4
var trashy4
var trashx5
var trashy5
var trashx6
var trashy6
var trashonscreen2 = false
var trashonscreen3 = false
var trashonscreen4 = false
var trashonscreen5 = false
var trashonscreen6 = false
var trashonscreen7 = false
var R = 101
var B = 235
var G = 255
var oceantrashx
var oceantrashx2
var sunx = 100
var suny = 100
var R2 = 255
var G2 = 255
var B2 = 75

var cruisex = 0
function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(800,600);
  
}
function end()
{
	sunx +=1;
	suny +=1;
	if (sunx <= 2000)
	{
		if (R2 < 255)
		{
			R2 +=0.2
		}
		if (R2 > 255)
		{
			R2 -=0.2
		}
		if (G2 < 0)
		{
			G2 +=0.2
		}
		if (G2 > 0)
		{
			G2 -=0.2
		}
		if (B2 < 0)
		{
			B2 +=0.2
		}
		if (B2 > 0)
		{
			B2 -=0.2
		}
	}
	fill(R2,G2,B2)
	ellipse(100,100,sunx,suny)
	console.log(sunx)
}
function humans()
{
	if (sky <= -2700 && sky >= -3700)
	{
		if (R > 40)
		{
			R -=1;
		}
		if (R < 40)
		{
			R +=1
		}
		if (G > 76)
		{
			G -=1
		}
		if (G < 76)
		{
			G +=1
		}
		if (B < 255)
		{
			B +=1;
		}
		if (B > 255)
		{
			B -=1;
		}
	}
	if (sky <= -5000 && sky >= -6000)
	{
		if (R > 34)
		{
			R -=1;
		}
		if (R < 34)
		{
			R +=1
		}
		if (G > 139)
		{
			G -=1
		}
		if (G < 139)
		{
			G +=1
		}
		if (B < 34)
		{
			B +=1;
		}
		if (B > 34)
		{
			B -=1;
		}
	}
	if (sky <= -7500 && sky >= -9500)
	{
		if (R > 168)
		{
			R -=1;
		}
		if (R < 168)
		{
			R +=1
		}
		if (G > 223)
		{
			G -=1
		}
		if (G < 223)
		{
			G +=1
		}
		if (B < 40)
		{
			B +=1;
		}
		if (B > 40)
		{
			B -=1;
		}
	}
	if (sky <= -10000 && sky >= -12500)
	{
		if (R > 70)
		{
			R -=1;
		}
		if (R < 70)
		{
			R +=1
		}
		if (G > 100)
		{
			G -=1
		}
		if (G < 100)
		{
			G +=1
		}
		if (B < 0)
		{
			B +=1;
		}
		if (B > 0)
		{
			B -=1;
		}
	}
	if (sky <= -3000)
	{
		fill(135,135,135)
		rect(0,580,800,10)
	}
	if (sky <= -3500)
	{
		fill(135,135,135)
		rect(0,570,800,20)
	}
	if (sky <= -4000)
	{
		fill(135,135,135)
		rect(0,560,800,30)
	}
	if (sky <= -4500)
	{
		fill(135,135,135)
		rect(0,550,800,40)
	}
	if (sky <= -5000)
	{
		fill(135,135,135)
		rect(0,540,800,50)
	}
	if (sky <= -5500)
	{
		fill(135,135,135)
		rect(0,530,800,60)
	}
	if (sky <= -6000)
	{
		fill(135,135,135)
		rect(0,520,800,70)
	}
	if (sky <= -6500)
	{
		fill(135,135,135)
		rect(0,510,800,80)
	}
	if (sky <= -7000)
	{
		fill(135,135,135)
		rect(0,500,800,90)
	}
	if (sky <= -7500)
	{
		fill(135,135,135)
		rect(0,490,800,100)
	}
	if (sky <= -8000)
	{
		fill(135,135,135)
		rect(0,480,800,110)
	}
	if (sky <= -8500)
	{
		fill(135,135,135)
		rect(0,470,800,120)
	}
	if (sky <= -9000)
	{
		fill(135,135,135)
		rect(0,460,800,130)
	}
	if (sky <= -9500)
	{
		fill(135,135,135)
		rect(0,450,800,140)
	}
	if (sky <= -10000)
	{
		fill(135,135,135)
		rect(0,450,800,150)
	}
	if (sky <= -3000)
	{
		cruisex +=1;
		if (cruisex >= 800)
		{
			cruisex = -100
		}
		fill(255,255,255)
		rect(cruisex,300,350,50)
		fill(97,55,0)
		rect(cruisex,300,350,10)
		fill(255,255,255)
		rect(cruisex+40,200,200,100)
		fill(131,252,255)
		rect(cruisex+50,210,180,25)
		rect(cruisex+50,250,180,25)
		rect(cruisex+50,290,180,10)
		fill(255,252,195)

		rect(cruisex + 50,280,15,20)
		rect(cruisex + 100,280,15,20)
		rect(cruisex +150,280,15,20)
		rect(cruisex + 200,280,15,20)
		rect(cruisex + 250,280,15,20)
		rect(cruisex + 300,280,15,20)
		if (trashonscreen4 == false)
		{
			trashx4 = cruisex + 150
			trashy4 = 300
			trashonscreen4 = true
		}
		if (trashonscreen4 == true)
		{
			fill(49,90,52)
			trashy4 += 2;
			rect(trashx4,trashy4,20,20)
			rect(trashx4+50,trashy4,20,20)
			rect(trashx4+100,trashy4,20,20)
			rect(trashx4+150,trashy4,20,20)
			textSize(5)
			fill(255,255,255)
			text('Trash',trashx4+5,trashy4+5)
			text('Trash',trashx4+55,trashy4+5)
			text('Trash',trashx4+105,trashy4+5)
			text('Trash',trashx4+150,trashy4+5)
			if (trashy4 >= 600)
			{
				rect(trashx4,580,10,10)
				trashonscreen4 = false
			}
		}
		if (trashonscreen3 == false)
		{
			trashx3 = cruisex + 100
			trashy3 = 300
			trashonscreen3 = true
		}
		if (trashonscreen3 == true)
		{
			fill(209,254,255)
			trashy3 += 0.5;
			rect(trashx3,trashy3,5,15)
			textSize(5)
			fill(255,255,255)
			if (trashy3 >= 600)
			{
				rect(trashx3,580,10,10)
				trashonscreen3 = false
			}
		}

		if (trashonscreen2 == false)
		{
			trashx2 = cruisex + 50
			trashy2 = 300
			trashonscreen2 = true
		}
		if (trashonscreen2 == true)
		{
			fill(255,90,90)
			trashy2 += 3;
			rect(trashx2,trashy2,5,10)
			textSize(5)
			fill(255,255,255)
			if (trashy2 >= 600)
			{
				rect(trashx2,580,10,10)
				trashonscreen2 = false
			}
		}

	}
	boatx +=2;
	if (boatx >= 820)
	{
		boatx = -50
	}
	fill(165,165,165)
	rect(boatx,330,100,20)
	fill(97,55,0)
	rect(boatx,330,100,5)
	fill(255,255,255)
	rect(boatx+10,290,40,40)
	fill(112,232,255)
	rect(boatx+17.5,300,25,25)
	fill(120,120,120)
	rect(boatx+15,280,5,10)
	fill(255,252,195)
	rect(boatx+70,310,15,20)
	if (smokeonscreen == false)
	{
		smokex = boatx + 17.5
		smokey = 280
		smokeonscreen = true
	}
	if (smokeonscreen == true)
	{
		fill(190,190,190)
		smokey -=5;
		ellipse(smokex,smokey,20,15)
		fill(0,0,0)
		text('Smoke',smokex-5,smokey)
		if (smokey <= -10)
		{
			smokeonscreen = false
		}
	}
	if (trashonscreen == false)
	{
		trashx = boatx
		trashy = 330
		trashonscreen = true
	}
	if (trashonscreen == true)
	{
		fill(49,90,52)
		trashy += 2;
		rect(trashx,trashy,20,20)
		textSize(5)
		fill(255,255,255)
		text('Trash',trashx+5,trashy+5)
		if (trashy >= 600)
		{
			rect(trashx,580,10,10)
			trashonscreen = false
		}
	}
}
function drawsky()
{
	fill(255,255,125)
	fill(245,245,245)
	cloud1x += int(random(-5,3))
	rect(cloud1x,75,150,50)
	cloud2x += int(random(-2,6))
	rect(cloud2x,50,100,25)
	if (cloud1x <= -10)
	{
		cloud1x = 810
	}
	if (cloud2x >= 810)
	{
		cloud2x = -120
	}
	if (storm == true)
	{
		largecloud +=1;
		rect(0,0,largecloud,50)
	}
}
function drawfish()
{
	if (sea >= -7500)
	{
		fill(255,160,77)
		if (spongemove == 0)
		{
			spongex += int(random(-4,2))
			if (spongex <= 10)
			{
				spongemove = 1;
			}
		}
		if (spongemove == 1)
		{
			spongex += int(random(-1,5))
			if (spongex >= 790)
			{
				spongemove = 0;
			}
		}
		fill(255,255,80)
		rect(spongex,570,15,20)
		if (crabmove == 0)
		{
			crabx += int(random(-4,2))
			if (crabx <= 10)
			{
				crabmove = 1;
			}
		}
		if (crabmove == 1)
		{
			crabx += int(random(-1,5))
			if (crabx >= 790)
			{
				crabmove = 0;
			}
		}
		fill(135,56,47)
		rect(crabx,craby,30,20)
		rect(crabx+30,craby-10,5,20)
		rect(crabx-5,craby-10,5,20)
		fill(0,0,0)
		ellipse(crabx+10,craby+5,2,2)
		ellipse(crabx+20,craby+5,2,2)
		fill(255,160,77)
		if (fish3y >= 360 && fish3y <= 580)
		{
			fish3y = fish3y + int(random(-2,2))
		}
		if (fish3y <= 360)
		{
			fish3y +=2;
		}
		if (fish3y >= 580)
		{
			fish3y -=2;
		}
		ellipse(fish3x,fish3y,25,15)
		ellipse(fish3x,fish3y+18,25,15)
		ellipse(fish3x,fish3y-23,25,15)
		ellipse(fish3x-50,fish3y+10,25,15)
		ellipse(fish3x-70,fish3y-10,25,15)
		ellipse(fish3x-50,fish3y-25,25,15)
		ellipse(fish3x+50,fish3y-25,25,15)
		ellipse(fish3x+50,fish3y+10,25,15)
		ellipse(fish3x+100,fish3y-10,25,15)
		fill(255,255,255)
		if (fishface3 == 1)
		{
			fish3x +=1.5;
			fill(0,0,0)
			ellipse(fish3x+3,fish3y-2,3,3)
			ellipse(fish3x+3,fish3y+16,3,3)
			ellipse(fish3x+3,fish3y-25,3,3)
			ellipse(fish3x-47,fish3y+8,3,3)
			ellipse(fish3x-67,fish3y-12,3,3)
			ellipse(fish3x-47,fish3y-27,3,3)
			ellipse(fish3x+53,fish3y-27,3,3)
			ellipse(fish3x+53,fish3y+8,3,3)
			ellipse(fish3x+103,fish3y-12,3,3)
			if (fish3x >= 790)
			{
				fishface3 = 0
			}
		}
		if (fishface3 == 0)
		{
			fish3x -=1.5;
			fill(0,0,0)
			ellipse(fish3x-3,fish3y-2,3,3)
			ellipse(fish3x-3,fish3y+16,3,3)
			ellipse(fish3x-3,fish3y-25,3,3)
			ellipse(fish3x-53,fish3y+8,3,3)
			ellipse(fish3x-73,fish3y-12,3,3)
			ellipse(fish3x-53,fish3y-27,3,3)
			ellipse(fish3x+47,fish3y-27,3,3)
			ellipse(fish3x+47,fish3y+8,3,3)
			ellipse(fish3x+97,fish3y-12,3,3)
			if (fish3x <= 10)
			{
				fishface3 = 1
			}
		}
		if (fish3y >= 360 && fish3y <= 580)
		{
			fish3y = fish3y + int(random(-2,2))
		}
		if (fish3y <= 360)
		{
			fish3y +=5;
		}
		if (fish3y >= 580)
		{
			fish3y -=5;
		}
		fill(255,232,114)


		fill(255,232,114)
		if (fish1y >= 360 && fish1y <= 580)
		{
			fish1y = fish1y + int(random(-2,2))
		}
		if (fish1y <= 360)
		{
			fish1y +=5;
		}
		if (fish1y >= 580)
		{
			fish1y -=5;
		}
		ellipse(fish1x,fish1y,50,25)
		fill(0,0,0)
		if (fishface1 == 1)
		{
			fish1x +=2.5;
			ellipse(fish1x+15,fish1y-4,2,2)
			if (fish1x >= 790)
			{
				fishface1 = 0
			}
		}
		if (fishface1 == 0)
		{
			fish1x -=2.5;
			ellipse(fish1x-15,fish1y-4,2,2)
			if (fish1x <= 10)
			{
				fishface1 = 1
			}
		}
		if (fish1y >= 360 && fish1y <= 580)
		{
			fish1y = fish1y + int(random(-2,2))
		}
		if (fish1y <= 360)
		{
			fish1y +=5;
		}
		if (fish1y >= 580)
		{
			fish1y -=5;
		}

		fill(0,0,0)

		fill(0,25,125)
		if (fish2y >= 360 && fish2y <= 580)
		{
			fish2y = fish2y + int(random(-2,2))
		}
		if (fish2y <= 360)
		{
			fish2y +=5;
		}
		if (fish2y >= 580)
		{
			fish2y -=5;
		}
		ellipse(fish2x,fish2y,75,25)
		fill(255,255,255)
		if (fishface2 == 1)
		{
			fish2x +=5;
			fill(0,0,0)
			ellipse(fish2x+15,fish2y-4,3,3)
			fill(0,25,125)
			line(fish2x+25,fish2y,fish2x+80,fish2y)
			if (fish2x >= 790)
			{
				fishface2 = 0
			}
		}
		if (fishface2 == 0)
		{
			fish2x -=5;
			fill(0,0,0)
			ellipse(fish2x-15,fish2y-4,3,3)
			fill(0,25,125)
			line(fish2x-25,fish2y,fish2x-80,fish2y)
			if (fish2x <= 10)
			{
				fishface2 = 1
			}
		}
		if (fish2y >= 360 && fish2y <= 580)
		{
			fish2y = fish2y + int(random(-2,2))
		}
		if (fish2y <= 360)
		{
			fish2y +=5;
		}
		if (fish2y >= 580)
		{
			fish2y -=5;
		}
	}
}
function drawsea()
{
	if (sea <= 801)
	{
		sea +=4;
	}
	fill(R,G,B)
	rect(0,350,sea,300)
	fill(219,209,180)
	rect(0,590,sea,10)
	if (sea >= 801 && sea >= -8000)
	{
		drawfish()
	}
}
function draw()
{
  //create a background using RGB values
  background(0,255,237)
  // change the paint brush to a specific color according to RGB values
  fill(0,0,0)
  fill(255,0,0)
  //rect(0,500,bossHp*40,100)
  if (sky <= 10)
  {
  	sky -=2;
  }
  fill(186,254,255)
  rect(0,0,800,sky)
  fill(255,255,75)
  ellipse(100,100,100,100)
  if (sky <= -600)
  {
  	drawsea();
  	fill(255,232,114)
 	fill(139,90,43)
  	rect(600,540,125,50)
  	rect(600,530,10,60)
  	rect(715,530,10,60)
  	fill(151,255,245)
  	rect(610,560,40,20)
  	rect(675,560,40,20)
  	rect(655,565,15,25)
  	fill(185,185,185)
  	rect(655,530,10,10)
  	fill(186,254,255)
  	fill(220,220,220)
  	rect(562,525,30,5)
  	rect(567,505,20,20)
  	fill(239,235,214)
  	rect(575,530,3,60)
  	fill(255,183,11)
  	rect(100,520,60,70)
  	fill(0,128,21)
  	rect(120,500,20,20)
  }
  fill(0,0,0)
  if (sky <= -2500)
  {
  	humans()
  }
  console.log(sky)
  drawsky();
  if (sky <= -11000)
	{
		end()
	}
}