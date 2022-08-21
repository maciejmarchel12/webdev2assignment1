
//reference to render graphics
window.onload=function() {

  canv=document.getElementById("GameCanvas");

  ctx=canv.getContext("2d");
  //for controls
  document.addEventListener("keydown",keyPush);
//15 times every second calls a interval, snake works on a low frame rate
setInterval(game,1000/15);

}   
//player start posistion
px=py=10;
//grid size
gs=tc=20;
//apple location
ax=ay=15;
//velocity
xv=yv=0;

trail=[];

tail = 5;
//border can continue through it 
function game() {

px+=xv;

py+=yv;

if(px<0) {

px= tc-1;

}

if(px>tc-1) {

px= 0;

}

if(py<0) {

py= tc-1;

}

if(py>tc-1) {

py= 0;

}
//background
ctx.fillStyle="lightgreen";

ctx.fillRect(0,0,canv.width,canv.height);


//snake
ctx.fillStyle="brown";

for(var i=0;i<trail.length;i++) {

ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);

if(trail[i].x==px && trail[i].y==py) {

tail = 5;

}

}

trail.push({x:px,y:py});

while(trail.length>tail) {

trail.shift();

}


//red apple
if(ax==px && ay==py) {

tail++;

ax=Math.floor(Math.random()*tc);

ay=Math.floor(Math.random()*tc);

}

ctx.fillStyle="red";

ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);

            }
//controls
function keyPush(evt) {

switch(evt.keyCode) {

 case 37:

xv=-1;yv=0;

break;

case 38:

xv=0;yv=-1;

break;

 case 39:

 xv=1;yv=0;

break;

 case 40:

xv=0;yv=1;

break;

      }

        }
