
PVector bigCircleC;
float bigCircleR;
circle [] manyCircles;
int MANY=floor(random(4, 10));

boolean halt = false;
boolean aligned = false;

int runonce = 0;

int divPai=5;

char coordinate = 1998;

// function for returning coordinate to js
int getCoord() { return coordinate; }
 
void setup(){
	size(400, 400);
	smooth();
	strokeWeight( 5 );
	background(0, 0);
	setOption();
}
 
void draw(){}

void setOption(){
	int option = floor(random(6, 8));
	switch(option){
		case 1:
			//drawRuby();
			drawLines();
			break;
		case 2:
			drawTriangles();
			break;
		case 3:
			drawDots();
			break;
		case 4:
			drawCircles();
			break;
		case 5:
		//back
			drawBigCircles();
			break;
		case 6:
		//back
			drawZigzag();
			break;
		case 7:
			drawMandala();
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
}

void drawDots(){
	int rI = floor(random(1, 20));
	int rDist = floor(random(10, 50));
	int rStrokeWeight;
	for (int i=0; i < rI; i++ ) {
		rStrokeWeight = floor(random(3, 20));
		strokeWeight( rStrokeWeight );
		point(width/2, 150+rDist*i);
	}
	
	char c = char(rI);
	char a = char(rDist);
	char b = char(rStrokeWeight);
	coordinate = 'D-' + c + a + b;
}

void drawLines(){
	strokeWeight(2);
	int optionArrow = floor(random(1, 5));
	int rI = floor(random(3, 7));
	int rsI = floor(random(3, 5));
	int optionEnd = floor(random(1, 7));
	int length = floor(random(100, 150));
	int endPoint = floor(random(100, 200));

	char a = char(optionArrow);
	char b = char(rI);
	char c = char(rsI);
	char d = char(optionEnd);
	char e = char(length);
	char f = char(endPoint);
	coordinate = 'L-' + a + b + c + d + e + f;

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
}

void drawTriangles(){
	int optionTriangle = floor(random(1, 4));

	int top = floor(random(50, 100));
	int bottom = top+floor(random(50, 100));
	int trWidth = (bottom-top)/2;

	int rsI = floor(random(1, 4));
	noFill(rsI);
	strokeWeight(floor(random(2, 6)));

	char a = char(optionTriangle);
	char b = char(top);
	char c = char(rsI);
	char d = char(bottom);
	char e = char(trWidth);
	coordinate = 'T-' + a + b + c + d + e ;

	for (int i=0; i < rsI; i++ ) {
		bottom = bottom+rsI*10;
		top = top+rsI*10;
		noFill();
		if (i%2) {
			switch(optionTriangle){
				case 1:
					pushMatrix();
					translate(width, top*3.1);
					rotate(3.14);
					triangle(width/2, top, width/2-trWidth, bottom, width/2+trWidth, bottom );
				 	popMatrix();
					break;
				case 2:
					triangle(width/2, top, width/2-trWidth, bottom, width/2+trWidth, bottom );
			 		break;
			 	case 3:
			 		fill(#000000);
					triangle(width/2, top, width/2-trWidth, bottom, width/2+trWidth, bottom );
			 		break;
			}
		}
		triangle(width/2, top, width/2-trWidth, bottom, width/2+trWidth, bottom );
	}
}

void drawCircles(){
	int dia;
	int strWeight;
	noFill();
	int rsI = floor(random(1, 8));
	for (int i=0; i < rsI; i++ ) {
		int dia = floor(random(50, 100));
		strWeight = floor(random(2, 9));
		strokeWeight(strWeight);
		ellipse(width/2, height/2+rsI*10, dia/2, dia/2);
	}
	
	char a = char(dia);
	char b = char(strWeight);
	char c = char(rsI);
	coordinate = 'C-' + a + b + c;
}

void drawBigCircles(){
	int nCircle = floor(random(3, 10));
	int strWeight;
	noFill();
	for (int i=0; i < nCircle; i++ ) {
		int dia = floor(random(20, 400));
		strWeight = floor(random(2, 18));
		strokeWeight(strWeight);
		ellipse(width/2, height/2+nCircle*10, dia/2, dia/2);
	}
}

void drawZigzag(){
	float x =0;
	int nC = floor(random(50, 400));
	int strWeight;
	strWeight = floor(random(2, 5));
	strokeWeight(strWeight);
	while(x<width){
		point(x, height/2 + nC*noise(x/100));
		x=x+0.001;
	}
}

void drawMandala(){
	//rose curve
	float k = floor(random(0.0, 10.0))/random(-1.0, 8.0); //constant
	int strWeight;
	strWeight = floor(random(2, 5));
	strokeWeight(strWeight);
	noFill();
	float i = 0;
	while(i<100){

		float t = i;
		float x = map(cos(k*t)*sin(t), -1,1,0,400);
		float y = map(cos(k*t)*cos(t), -1,1,0,400);
		i = i + 0.01;
		point(x,y);
	}
}








