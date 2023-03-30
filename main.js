function setup(){
    canvas = createCanvas(400,400);
    canvas.position(800,130);

    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(100,80)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function modelLoaded(){
    console.log("Model is Initialized");
}

function draw(){
background("#969A97");
}