var on = false

var person1 = {
		xpos: 100,
		ypos: 450,
		Jspeed: 10,
		wid: 70,
		hight: 90	
}
var obst = {
		ballPosx: [200, 400, 600, 800, 1000],
		ballPosy: [480,480, 480, 480, 480],
		xSpid: [5,5,5,5,5],
}

var bgImage1;
var SpImage;
var ballImage;

function setup(){
		createCanvas(1200,800);		
		bgImage1 = loadImage("background.png");
		SpImage = loadImage("man.png");
		ballImage = loadImage("stone.png");
		

}

function draw(){
		background(bgImage1);		
		man()
		obstacles()

}

function man(){
				image(SpImage, person1.xpos, person1.ypos, person1.wid, person1.hight);
			
			if(on)	{
					person1.ypos -= person1.Jspeed;
						if(person1.ypos > 450 || person1.ypos < 300){								
										person1.Jspeed *= -1							
								
						}
					if(person1.ypos == 450){
						on = !on
					}					
				
			}

				/*person1.ypos = 450
				if(on){
						person1.ypos -= person1.Jspeed;
						if(person1.ypos <= 300){
										person1.ypos += person1.Jspeed					
						}

				}
				
				person1.ypos += person1.Jspeed;

				if(person1.ypos > 450 || person1.ypos < 300){								
										person1.Jspeed *= -1							
								
				}*/
}


function obstacles(){

				for(var i = 0; i < obst.ballPosx.length; i++){
							image(ballImage, obst.ballPosx[i], obst.ballPosy[i], 50, 70)

										obst.ballPosx[i] -= obst.xSpid[i]

						if(obst.ballPosx[i] == 0){
										obst.ballPosx[i] = width
							}
				}
}

function mousePressed(){		
				

						if(person1.ypos == 450){
						on = !on
					}
			
}


