difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    canvas = createCanvas(560,500);
    canvas.position(560,80);

    video = createCapture(VIDEO);
    video.size(550,500)

    poseNet = ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose',gotposes);
}

function draw() {
    background("skyblue");
    textSize(difference);
    fill("#ffe787");
    text('Reuben',50,400)

    document.getElementById("square_size").innerHTML = "The size of the font is = "+difference+"px";
}

function ModelLoaded() {
    console.log("poseNet is initialized");
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("left wrist = "+ leftWristX);
        console.log("right wrist = "+ rightWristX);

        difference = floor(leftWristX-rightWristX);
        console.log("differece = "+ difference);
    }
}