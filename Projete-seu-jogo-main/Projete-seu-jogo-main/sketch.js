var bg,bgImg,deyv,havertz
var r
var zombieGroup;
var t
var bola
var b
function preload(){
  

  bgImg = loadImage("../assets/coca2L.jpg")
  deyv  = loadImage("../assets/R.png")
  havertz  = loadImage("../assets/inimigo.png")
  bola= loadImage("../assets/b.png")
}


function setup() {
 createCanvas(windowWidth,windowHeight);
r= createSprite(110,350)
 r.addImage(deyv) 
 b=createSprite(680,350)
 b.addImage(bola) 
 t=createSprite(1260,350)
 t.addImage(havertz) 
 b.scale=0.2
 t.scale=0.1
 r.scale=0.1
b.debug=true
b.setCollider("circle",0,0,40)
}

function draw() {
  background(bgImg); 
if(keyDown("W")){
t.y-=5


}
if(keyDown("S")){
  t.y+=5
  
  
  }
  if(keyDown("A")){
    t.x-=5
    
    
    }
    if(keyDown("D")){
      t.x+=5
      
      
      }
      if(keyDown("up_arrow")){
        r.y-=5
        
        
        }
        if(keyDown("left_arrow")){
          r.x-=5
          
          
          }
          if(keyDown("right_arrow")){
            r.x+=5
            
            
            }
            if(keyDown("down_arrow")){
              r.y+=5
              
              
              }
      t.collide(b)        
      t.collide(r)
      r.collide(b)
drawSprites();
}

