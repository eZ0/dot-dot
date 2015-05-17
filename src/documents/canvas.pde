// choose randomly which image pattern to paint
int option = floor(random(1, 4));


PVector bigCircleC;
float bigCircleR;
circle [] manyCircles;
int MANY=floor(random(4, 10));

// int butWide = 80;
boolean halt = false;
boolean aligned = false;

int runonce = 0;

int divPai=5;

void setup() {
	size(400, 400);
	// rectMode(CORNER);
	// imageMode(CORNER);
	smooth();
	strokeWeight( 5 );


	// scrShot = createImage(width, height, 1);
	bigCircleC = new PVector ((width)/2, height/2);
	bigCircleR = min((width), height);
	background(0, 0);
	divPai = floor(random(3, 9));
	manyCircles = new circle[MANY];

	// if not aligned every circle has different numbers of petals
	if (!aligned) {
		for (int i=0; i < MANY; i++) {
			manyCircles[i] = new circle(random(20, bigCircleR/2.5), bigCircleC, random(bigCircleR*(2/3), bigCircleR), 
			TWO_PI/divPai, 0.02);
		}
	}else{
		int thFactor = floor(random(6, 13));
		for (int i=0; i < MANY; i++) {
			manyCircles[i] = new circle(random(20, bigCircleR/2.5), 
			bigCircleC, random(bigCircleR*(2/3), bigCircleR), 
			TWO_PI/divPai, 0.02, thFactor);
		}
	}

}

void draw() {
	

	switch(option){
		case 1:
			//drawRuby();
			drawLines();
			break;
		case 2:
			drawDots();
			break;
		case 3:
			drawDots();
			// if(runonce <= 1280){ 
			// 	runonce = runonce+1;
			// 	for (int i=0; i < MANY; i++) {
			// 		manyCircles[i].drawit();
			// 		manyCircles[i].update();
			// 	}
			// }
		break;
	}

}


void drawRuby(){
	int h = 20;
	int w = 40;
	strokeWeight(2);
	stroke(#000000);
	noFill();
	
	beginShape();
	rect(width/2, height/2, w, h);
	line(height/2, height/2, height/2-h, height/2+h);
	line(height/2+w, height/2, height/2+w+h, height/2+h);
	line(height/2-h, height/2+h, height/2+w+h, height/2+h);
	line(height/2, height/2+h, height/2+w/2, height/2);
	line(height/2+w, height/2+h, height/2+w/2, height/2);

	line(height/2+w+h, height/2+h, height/2+w/2, height/2+h*3);
	line(height/2-h, height/2+h, height/2+w/2, height/2+h*3);

	line(height/2+w, height/2+h, height/2+w/2, height/2+h*3);
	line(height/2, height/2+h, height/2+w/2, height/2+h*3);
	endShape();

	stroke(#0594cf);
	point(height/2+w/2,height/2+h+100);

	exit();
}

void drawDots(){
	//int rNumber = floor(random(10, 200));
	int rI = floor(random(1, 20));
	int rDist = floor(random(10, 50));
	int rStrokeWeight;
	for (int i=0; i < rI; i++ ) {
		rStrokeWeight = floor(random(3, 20));
		strokeWeight( rStrokeWeight );
		point(width/2, 150+rDist*i);
	}
	exit();//function stops here, otherwise draw will call it every sec
}

void drawLines(){
	strokeWeight(2);
	int optionArrow = floor(random(1, 5));
	int rI = floor(random(3, 7));
	int rsI = floor(random(3, 5));
	int optionEnd = floor(random(1, 7));
	int length = floor(random(100, 150));
	int endPoint = floor(random(100, 200));

	line(width/2 ,endPoint, width/2, endPoint+length);
	switch(optionArrow){
		case 1:
			//black triangle
			fill(#000000);
			triangle(width/2, endPoint-8, width/2-6,endPoint, width/2+6,endPoint );
			break;
		case 2:
			//no-fill triangle
			noFill();
			stroke(#000000);
			triangle(width/2, endPoint-8, width/2-6,endPoint, width/2+6,endPoint );
			break;
		case 3:
			// /\ 
			line(width/2 ,endPoint, width/2+5, endPoint+5);
			line(width/2 ,endPoint, width/2-5, endPoint+5);
			break;
		case 4:
			// black triangle with the line under
			fill(#000000);
			triangle(width/2, endPoint-8, width/2-6,endPoint, width/2+6,endPoint );
			line(width/2+5, endPoint+6, width/2-6, endPoint+6);
			break;
	}
	switch(optionEnd){
		case 1:
			//tree
			for (int i=0; i < rI; i++  ) {
				int teller = 5*i;
				line(width/2 ,endPoint+length+teller, width/2+5, endPoint+length+teller+5);
				line(width/2 ,endPoint+length+teller, width/2-5, endPoint+length+teller+5);
			}
			break;
		case 2:
			//cross
			int dist = 5;
			line(width/2+dist ,endPoint+length-2, width/2-dist, endPoint+length+dist+2);
			line(width/2-dist ,endPoint+length-2, width/2+dist, endPoint+length+dist+2);
			break;
		case 3:
			//dark triangles
			int dist = 6;
			fill(#000000);
			for (int i=1; i < rsI; i++  ) {
				int teller = 8*i;
				triangle(width/2, endPoint+length-dist+2, width/2-dist, endPoint+length+teller, width/2+dist, endPoint+length+teller );
			}
			break;
		case 4:
			//dots
			int rDist = floor(random(1, 10));
			int rStrokeWeight;
			for (int i=0; i < rsI; i++ ) {
				rStrokeWeight = floor(random(3, 7));
				strokeWeight( rStrokeWeight );
				point(width/2, endPoint+length+6+rDist*i);
			}
			break;
		case 5:
			//circle
			int rr = floor(random(5, 10));
			noFill();
			ellipse(width/2, endPoint+length+rr/2+1, rr, rr);
			break;
		case 6:
			//quadrangle
			quad(width/2 ,endPoint+length, width/2+5, endPoint+length+5, width/2 ,endPoint+length+10,width/2-5, endPoint+length+5);
			break;
	}
	exit();
}


class circle {
	PVector center;
	float radius;
	PVector spot; // the brush tip
	PVector bigC; // center of big circle
	float bigR; // big circle radius
	float theta;
	float acc;

	int thFactor;

	// each circle has it's own number of petals
	circle(float r, PVector bc, float bigr, float th, float ac) {
		theta = th;
		acc = ac;
		center = new PVector(0.0, 0.0);
		radius = r;
		spot = new PVector(0.0, 0.0);
		bigC = new PVector(bc.x, bc.y);
		bigR = bigr;

		thFactor = floor(random(6, 13));
		// update();
	}

	// all circle have the same number of petals
	circle(float r, PVector bc, float bigr, float th, float ac, int tfactor) {
		theta = th;
		acc = ac;
		center = new PVector(0.0, 0.0);
		radius = r;
		spot = new PVector(0.0, 0.0);
		bigC = new PVector(bc.x, bc.y);
		bigR = bigr;

		thFactor = tfactor;
		// update();
	}

	void update() {
		theta+=acc;
		PVector moveto = new PVector(cos(theta), sin(theta), 0);
		//moveto.normalize();
		//sets the arc
		moveto.mult((bigR-radius)/2);
		//changes the center
		center= PVector.add(bigC, moveto);
		//actually paints
		moveto.set(cos(theta*thFactor), sin(theta*thFactor));
		
		//moveto.normalize();
		moveto.mult(-(radius/2));
		spot = PVector.add(center, moveto);
	}

	void drawit() {
		pushStyle();

		noFill();
		strokeWeight(1);
		// stroke(R, G, B, 50);
		// stroke(#0594cf);
		//line(center.x, center.y, spot.x, spot.y);
		//ellipse(spot.x, spot.y, 1, 1);
		point(spot.x, spot.y);
		popStyle();
	}
}

// float dia = 40;
//   angle += 0.01;
//   translate(width/2, height/2);
 
//   for (int i = 0; i < width; i = i+30 ) {
//     rotate(angle);
//     scale(0.95);
//     noFill();
//     stroke(10, 255, 120, 80);
//     strokeWeight(random(7, 10));
//     ellipse(i, i, dia/3, dia/3);
//     ellipse(-i, -i, dia/3, dia/3);
//     ellipse(i, i, dia/2, dia/2);
//     ellipse(-i, -i, dia/2, dia/2);
//     fill(30);
//     strokeWeight(random(1,5));
//     line(width, height, dia, dia);
//     rectMode(CENTER);
//     rect(0, 0, dia*6, dia*6);

// int linha = 0;
// int coluna = 0;
 
// int tamanho = 20;
 
// void setup () {
//     size(500, 500);
//     background(255);
//     stroke(#FF0000);
//     strokeWeight(5);
// }
 
// void draw() {
//   int sorte = round(random(0,1));
//   println(sorte);
   
//   frameRate(random(1,60));
   
//   if (sorte == 0) {
//     line((linha * tamanho), coluna * tamanho, tamanho + (linha * tamanho), tamanho + (coluna * tamanho));
//   }
   
//   if (sorte == 1) {
//     line(linha * tamanho + tamanho, coluna * tamanho, linha * tamanho, tamanho + (coluna * tamanho));
//   }
//   linha++;
   
//   if (linha * tamanho > width) {
//    coluna++;
//    linha = 0;
//     stroke(random(0,255), random(0,255), random(0,255));
//   }
 
//   if (coluna * tamanho > height) {
//     coluna = 0;
//     background(255);
    
//   }
// }

