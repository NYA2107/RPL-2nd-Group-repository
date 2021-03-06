var canvas;
var ratio = 20;
var clippingStatus = false;
var vectorController = new VectorController(ratio);
var pointController = new PointController(ratio);
var lineController = new LineController(ratio);
var circleController = new CircleController(ratio);
var shape = new Shape(pointController,ratio);
var grid = new Grid(ratio);
var scalarMultiply = new ScalarMultiply(vectorController,ratio);
var sumVector = new SumVector(vectorController,ratio);
var crossProduct = new CrossProuct(vectorController,ratio);
var dotProduct = new DotProduct(vectorController,ratio);

var translation = new Translation(pointController,lineController,circleController);
var dilation = new Dilation(pointController,lineController,circleController);
var rotation = new Rotation(pointController,lineController,circleController);
var reflection = new Reflection(pointController,lineController,circleController,ratio);
var shear = new Shear(pointController);

function generateShape(){
  shape.callShape();
  reflection.toogleShape();
}

function setup() {
  // put setup code here
  canvas = createCanvas(720, 480);
  canvas.parent('app');
}

function draw() {
  // put drawing code here
  background(32, 50, 66);
  fill(255);
  
  grid.drawGrid(10);
  translation.loop();
  dilation.loop();
  rotation.loop();
  shear.loop();
  
  push();
  translate(width/2,height/2);
  dotProduct.drawResult();
  crossProduct.drawResult();
  stroke(255);
  
  vectorController.drawResult();
  //shape.drawResult();
  
  lineController.drawResult();
  pointController.drawResult();
  shape.drawResult();
  circleController.drawResult();
  sumVector.drawResult();
  scalarMultiply.drawResult();
  reflection.loop();
  
  pop();

  

}