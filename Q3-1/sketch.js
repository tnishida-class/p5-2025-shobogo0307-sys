// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count = 0; // 何フレーム目か
let size = 50
let speed = 1
function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(160, 192, 255);
  
   // アニメーションの速さ
   // BLANK[2]
  count = (count + speed) % cycle;
  if (keyIsPressed){
    speed = 2
  } else { speed = 1;
  }
  if (count < cycle / 2){
    size = count + 50;
  } else{
    size = (cycle - count) + 50;
  }
   // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる
  ellipse(100 , 100, size);
}
