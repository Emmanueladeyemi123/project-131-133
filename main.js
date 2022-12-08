var img = "";
var status="";
function preload() {
   img = loadImage("tj.jpeg");
}

function setup() {
   canvas = createCanvas(640, 420);
   canvas.center();

   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML="Status: Detecting object";
}

function draw() {
   image(img, 0, 0, 640, 420);
   fill("green");
   stroke("green");
   text("Steve", 45, 75);
   noFill();
   rect(40, 50, 280, 350);
   fill("red");
   stroke("red");
   text("Alex", 400, 75);
   noFill();
   rect(300, 50, 280, 350);

}
function modelLoaded(){
   console.log("Model has loaded");
   status="true";
   objectDetector.detect(img , gotResult);
}
function gotResult(error,results){
   if(error){
      console.log(error);
   }
   console.log(results);
}