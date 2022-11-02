// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(400, 400);
  count = 0;
  cycle = 60;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  console.log(count);
  if(count < 10){
    let size = count * 3 + 50;
  }
  else if(count > 10 && count < 40){
    let size = (count - 10) * (-1) + 80;
  }
  else if(count > 40 && count < 60){
    let size = 50;
  }
  // BLANK[1]
  let size = count + 50;
  fill(220, 20, 60)
  ellipse(width / 2, height / 2, size);
}
