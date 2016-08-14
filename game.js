var obst = [];
var person1 = {
		xpos: 100,
		ypos: 450,
		Jspeed: 100,
		wid: 70,
		hight: 90,	
}
var time = 60;
var bgImage2, bgImage;
var SpImage;
var ballImage;

var score = 0;
//var bgImg;

function setup(){
		createCanvas(1200,800);
		bgImage2 = loadImage("over.png");
		bgImage = loadImage("background.png");			
		
		SpImage = loadImage("man.png");
		ballImage = loadImage("stone.png");
		for(var i = 0; i < 5; i++){
		
			obst[i] = {

				x: random(300, width),
				y: 480,
	
				display: function(){
				  if(time<0 || s >= 11){
				    background(bgImage2);
				    
				  }
				  
					image(ballImage, this.x, this.y, 50, 70);
					
				},
	
				move: function(){
				  if(s == 10){
					this.x -= 20;
					}else{
					  this.x += 0
					  this.x = 1300;
					}
					if(this.x < -51){
						this.x = width;
				  }
	
				}
			}		
		}
}

function draw(){
		
		background(bgImage);		

		bunt();
		
		colorSpot = get();
		
		textSize(20);

		if (frameCount % 5 == 0){
		  time-=1;
		}
		
		text("Time=" + time, 950, 40, 100, 100);
		if (time <= 0 || s > 10){		   
		  background(bgImage2);
		      
		}
		
		text("Score=" + Math.floor(score), 950, 60, 100, 100);
		if (person1.ypos >= 450){
		  score += 0.05;     
		}		

		man();
	  obstacles();	  
	  bunt();	  
	
}


function man(){
  image(SpImage, person1.xpos, person1.ypos, person1.wid, person1.hight);
 
  
	if(keyIsDown(UP_ARROW)){
	  person1.ypos -= person1.Jspeed;
		if(person1.ypos <= 300){
		  person1.ypos += person1.Jspeed;
		}
	}else if(person1.ypos != 450){
    person1.ypos += person1.Jspeed;
  }	
}


function obstacles(){
	for(var i = 0; i < obst.length; i++){
    obst[i].move();
		obst[i].display();			
	}				
}

function over(x){

 var gameOver = x;
  
}

var s = 10;
function bunt(){
  var colorLegRight = get(person1.xpos+50,person1.ypos+80);

if (colorLegRight[0]  == 153 && colorLegRight[1]  == 153 && colorLegRight[2]  == 153){
  person1.xpos = 1200;  
  s=11;
  clear();
  //background(bgImage2);

  }
}


