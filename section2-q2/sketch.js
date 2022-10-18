// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  background(255);
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 == 0 && j % 2 == 0){  
        fill(0);
      }
      else if(i % 2 == 0 && j % 2 == 1){  
        fill(255);
      }
      else if(i % 2 == 1 && j % 2 == 0){  
        fill(255);
      }
      else if(i % 2 == 1 && j % 2 == 1){  
        fill(0);
      }

      console.log(i , j);
      lect(i * 25, j * 25, 25, 25);
        
      
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      
    }
  }
}
