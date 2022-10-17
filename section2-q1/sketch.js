// 小手調べ
function setup(){
  createCanvas(200, 200);
  strokeWeight(2);
  noFill();
  for(let i = 0; i < 10; i++){

    if(i < 5){
      stroke(255, 0, 0);
    }
    else{
      stroke(0, 0, 255);
    }
    
    let x = i * 10 + 10;
    ellipse(100, 100, x);
  }
 
  //Blank[1]
  }
  
