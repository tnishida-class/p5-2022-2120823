// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(400, 400);
  count = 0;
  cycle = 45;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  console.log(count);
  // BLANK[1]
  let size = count + 50;
  fill(220, 20, 60)
  ellipse(width / 2, height / 2, size);
}
