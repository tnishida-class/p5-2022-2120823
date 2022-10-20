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
  let x = 30
  while (x < 160){
    ellipse(x, 10, 15)
    x = x + 40
  }
  let y = 10
  while (y < 160){
    ellipse(y, 30, 15)
    y = y + 40
  }
  let a = 30
  while (a < 160){
    ellipse(a, 10, 15)
    a = a + 40
  }

  
}