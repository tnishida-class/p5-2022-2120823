// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      fill(i + j % 2 == 0 ? 255 : 0)
      console.log(i , j);
      lect(i * 8, j * 8, 10, 10);
        
      
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      
    }
  }
}
