noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function preload(){
}
function draw(){
background(	'#81B622');
fill('#1434A4');
stroke('#1434A4');
square(noseX,noseY,difference);
document.getElementById("square_side").innerHTML="width and height of the square will be"+difference+" px";
}
function setup(){
canvas=createCanvas(550,450)
video=createCapture(VIDEO);
video.size(550,500);
canvas.position(560,100);
poseNet=ml5.poseNet(video,modelloaded)
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
   
    if(results.length>0)
    {
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
      console.log("noseX= " + noseX + "nosey= "+noseY); 
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX= "+leftWristX+"rightWristX"+rightWristX+"difference "+difference);
    }

}
function modelloaded(){
  console.log('poseNet is loaded');  
}