var c,ci,r,ri,cif,rif,cim,rit;
var bi
var impor = "1"
function preload() {
    ci=loadAnimation("images/cat1.png")
    cif=loadAnimation("images/cat4.png")

    bi = loadImage("images/garden.png")
    cim = loadAnimation("images/cat2.png","images/cat3.png")
    ri=loadAnimation("images/mouse1.png")
    rit=loadAnimation("images/mouse2.png","images/mouse3.png")
    rif = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    c=createSprite(900,700)
    c.addAnimation("ci",ci)
    c.scale=0.1

    r=createSprite(100,700)
    r.addAnimation("ri",ri)

    r.scale=0.1

  
}

function draw() {

    background(bi);
    if(r.isTouching(c)){
        impor = "0"
         r.addAnimation("rif",rif)
         c.addAnimation("cif",cif)
         r.changeAnimation("rif",rif)
         c.changeAnimation("cif",cif)
        }
    console.log(c.x)
   if(impor==1){
    keyPressed()
   }
    drawSprites();
}


function keyPressed(){
    
    if(!keyDown("left")){
    r.changeAnimation("ri",ri)
    c.changeAnimation("ci",ci)
}    
if(!keyDown("right")){
    r.changeAnimation("ri",ri)
    c.changeAnimation("ci",ci)
   
}    
if(keyDown("right")&&impor == "1"){
    c.x=c.x+10
    r.addAnimation("rit",rit)
    r.changeAnimation("rit",rit)
    c.addAnimation("cim",cim)
    c.changeAnimation("cim",cim)
    if(c.x<=0){
        c.x=900
        }
        if(c.x>=1000){
            c.x=900
                    }
            
                }
if(keyDown("left")&&impor == "1"){
c.x=c.x-10
r.addAnimation("rit",rit)
    r.changeAnimation("rit",rit)
    c.addAnimation("cim",cim)
    c.changeAnimation("cim",cim)
    
    if(c.x<=0){
        c.x=900
        }
        if(c.x>=1000){
            c.x=900
                    }
            
}


}
