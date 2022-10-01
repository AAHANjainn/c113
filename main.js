function preload(){

}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    fill("red");
    circle(30,30,50);
    fill("red");
    circle(440,30,50);
    fill("green");
    rect(52,25,370,20);
    fill("red");
    circle(440,350,50);
    fill("green");
    rect(52,340,370,20);
    fill("red");
    circle(30,350,50);
    fill("green");
    rect(22,340,20,-300);
    rect(420,340,20,-300);
    image(video,47,47,370,290);
}

function take_snapshot(){
    save("selfie.png");
}

