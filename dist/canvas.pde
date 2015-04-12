//// Global variables
float radius = 50.0;
int X, Y;
int nX, nY;
int delay = 10;

// Setup the Processing Canvas
void setup(){
	size( 400, 400 );
	strokeWeight( 2 );
	frameRate( 15 );
	X = width / 2;
	Y = height / 2;
	nX = X;
	nY = Y;  
}

// Main draw loop
void draw(){

	//radius = radius + sin( frameCount / 4 );

	// Track circle to new destination
	X+=(nX-X)/delay;
	Y+=(nY-Y)/delay;

	// Set fill-color to blue
	//fill( 0, 121, 184 );
	background(0, 0);
	
	// Set stroke-color white
	stroke(000); 

	// Draw circle
	ellipse( X, Y, radius, radius );
	line(50,50,X,Y);
	ellipse( Y, X, radius, radius );
	line(20, 200, Y,X);
}


// Set circle's next destination
void mouseMoved(){
	// nX = mouseX;
	// nY = mouseY;  
}