var img = "";
var status="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload() {
   img = loadImage("dog_cat.jpg");
}

function setup() {
   canvas = createCanvas(640, 420);
   canvas.center();

   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML="Status: Detecting object";
   
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
   image(img, 0, 0, 640, 420);
   fill("green");
   stroke("green");
   text("Dog", 45, 75);
   noFill();
   rect(40, 60, 280, 300);
   fill("red");
   stroke("red");
   text("Cat", 400, 75);
   noFill();
   rect(300, 60, 280, 300);

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
   if(results>=0){
leftWristX=results[0].pose.leftWrist[0].x;
leftWristY=results[0].pose.leftWrist[0].y;
rightWristX=results[0].pose.rightWrist[0].x;
rightWristY=results[0].pose.rightWrist[0].y;

   }
}