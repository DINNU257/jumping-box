var canvas;
var music;
var surface1 , surface2 , surface3 , surface4 , surface5;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
surface1 = createSprite(300 , 600 , 120 ,50);
surface1.shapeColor = "blue";
surface2 = createSprite(430 , 600 , 120 , 50);
surface2.shapeColor = "green";
surface3 = createSprite(560, 600 , 120 , 50);
surface3.shapeColor = "red";
surface4 = createSprite(170 , 600 , 120 , 50);
surface4.shapeColor = "orange";
surface5 = createSprite(40 ,600 , 120 , 50);
surface5.shapeColor = "darkblue";
surface6 = createSprite(690 , 600 , 120 , 50);
surface6.shapeColor = "darkgreen";

ball = createSprite(200,200,50,50);
ball.shapeColor = "white";
ball.velocityY = 10;
ball.velocityX = 10;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
  // music.loop();
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();
    ball.bounceOff(edges);
    drawSprites();

    if(surface1.isTouching(ball)&& ball.bounceOff(surface1)){
        ball.shapeColor = "blue";
    }
    if(surface2.isTouching(ball)&& ball.bounceOff(surface2)){
        ball.shapeColor = "green";
    }

    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = "red";
        music.play();
    }

    if(surface4.isTouching(ball)&& ball.bounceOff(surface4)){
        ball.shapeColor = "orange";
    }
    /*if(surface5.isTouching(ball)&& ball.bounceOff(surface5)){
        ball.shapeColor = "darkblue";
    }*/
    if(surface6.isTouching(ball)&& ball.bounceOff(surface6)){
        ball.shapeColor = "darkgreen";
    }

    if(surface5.isTouching(ball)){
        ball.shapeColor = "darkblue";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    //add condition to check if box touching surface and make it box
}
