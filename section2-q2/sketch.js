// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 == 1){  
        fill(180);
      }
      else {  
        fill(255);
      }
      rect(i * 20, j * 20, 20, 20);
        
      
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      
    }
  }
}

function draw(){
  fill(255, 0, 0);
  ellipse(30, 10, 15);
  ellipse(70, 10, 15);
  ellipse(110, 10, 15);
  ellipse(150, 10, 15);
  ellipse(10, 30, 15);
  ellipse(50, 30, 15);
  ellipse(90, 30, 15);
  ellipse(130, 30, 15);
  ellipse(30, 50, 15);
  ellipse(70, 50, 15);
  ellipse(110, 50, 15);
  ellipse(150, 50, 15);

  fill(0);
  ellipse(10, 110, 15);
  ellipse(50, 110, 15);
  ellipse(90, 110, 15);
  ellipse(130, 110, 15);
  ellipse(30, 130, 15);
  ellipse(70, 130, 15);
  ellipse(110, 130, 15);
  ellipse(150, 130, 15);
  ellipse(10, 150, 15);
  ellipse(50, 150, 15);
  ellipse(90, 150, 15);
  ellipse(130, 150, 15);
}