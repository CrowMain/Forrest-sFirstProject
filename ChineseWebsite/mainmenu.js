

function preloadmainmenu()
{

}

function setupmainmenu()
{

}

function drawmainmenu()
{
	background(193,255,248);
	fill(0,0,0);
	textSize(20);
	text("主頁", 450, 20);
	text('大家好，我是魯鎮咸亨酒店的小夥計，我今年十六歲，在酒店工作了幾年，\n\n有一些經驗，見識過形形色色的人，人生百態讓我感慨萬千。',25,250)
	text("我從十二歲時，邊開始在魯鎮裡的酒店工作，工作了四年，我除了在那裡工作\n\n，也沒有什麼其他工作的經驗。我也沒什麼上學，所以我的老闆便讓我做問酒人。我的工作很容易做，\n\n，我只是要幫來酒店光顧的人把他們的酒弄暖，讓他們喝。",25,750)
	text("我住在魯鎮裏南部的一條小街上的小屋子，我的家裡有五個人，我，我媽媽和爸爸\n\n，我的爺爺和我的奶奶。我的爸爸跟這一間酒店的老闆是好朋友，因為我沒什麼讀書\n\n，他便把我推薦給這間酒店的老闆，讓我有一份工作，可以賺到錢。",25,1500)
	if(mouseX > 450 && mouseX < 600 && mouseY > 50 && mouseY < 150)
	{
		fill(155,255,255);
		stroke(0,0,0);
		strokeWeight(1);
		rect(450,50,150,100);
		textSize(20);
		fill(0,0,0);
		text("有趣的東西",475,100);
		if (mouseIsPressed == true)
		{
		fill(193,255,248);
		stroke(0,0,0);
		strokeWeight(1);
		rect(450,50,150,100);
		text("有趣的東西",475,100);
		canvasID = 5	
		}
	}
	else
	{
		fill(193,255,248);
		stroke(0,0,0);
		strokeWeight(1);
		rect(450,50,150,100);
		fill(0,0,0);
		text("有趣的東西",475,100);
	}

	if(mouseX > 250 && mouseX < 400 && mouseY > 50 && mouseY < 150)
	{
		fill(155,255,255);
		stroke(0,0,0);
		strokeWeight(1);
		rect(250,50,150,100);
		textSize(20);
		fill(0,0,0);
		text("我的事業",275,100);
		if (mouseIsPressed == true)
		{
			fill(193,255,248);
			stroke(0,0,0);
			strokeWeight(1);
			rect(250,50,150,100);
			text("我的事業",275,100);
			canvasID = 4
		}
	}
	else
	{
	fill(193,255,248);
	stroke(0,0,0);
	strokeWeight(1);
	rect(250,50,150,100)
	fill(0,0,0);
	text("我的事業",275,100);	
	}
}
