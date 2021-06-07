const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    async function getTime(){}
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();

    // write code slice the datetime
    var datetime = responseJSON.datetime; 

    // add conditions to change the background images from sunrise to sunset
    var hour = datetime.slice(11,13); 
    if(hour>=06 && hour<=8){
        bg = "sunrise1/bg1.png";
    } 
    else if(hour>=08 && hour<=09){
        bg = "sunrise2/bg2.png";
    }
    else if(hour>=09 && hour<10){
        bg = "sunrise3/bg3.png";
    }
    else if(hour>=10 && hour<=11){
        bg = "sunrise4/bg4.png";
    } 
    else if(hour>=11 && hour<=12){
        bg = "sunrise5/bg5.png";
    } 
    else if(hour>=12 && hour<=16){
        bg = "sunrise6/bg6.png";
    } 
    else if(hour>=16 && hour<=18){
        bg = "sunset7/bg7.png";
    } 
    else if(hour>=18 && hour<=19){
        bg = "sunset8/bg8.png";
    } 
    else if(hour>=19 && hour<=20){
        bg = "sunset9/bg9.png";
    }
    else if(hour>=20 && hour<=21){
        bg = "sunset10/bg10.png";
    }
    else if(hour>=21 && hour<=22){
        bg = "sunset11/bg11.png";
    }
    else{
        bg = "sunset12/bg12.png"
    };
    
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    }
