// 最終課題を制作しよう
let balls;
let lastShotTime = 0;
let shootInterval = 30;
let targets;

function setup() {
    createCanvas(windowWidth, windowHeight);
    balls = [];
    targets = []
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(160, 192, 255);


    for (let i = 0; i < targets.length; i++) {
        let t = targets[i];
        fill(t.color);
        ellipse(t.x, t.y, t.size);
        t.life--;
    }

    for (let i = 0; i < balls.length; i++) {
        let b = balls[i];
        fill(255);
        ellipse(b.x, b.y, b.size);
        b.x += b.vx;
        b.y += b.vy;
    }

    if (random() < 0.05) {
        const t = {
            x: random(width),
            y: height / 4,
            size: random(30, 100),
            life: 100,
            color: color(0)
        };
        targets.push(t);
    }

    const activeTargets = []; // 生き残った的を一時的に保持する配列
    for (let i = 0; i < targets.length; i++) {
        let t = targets[i];
        if (t.life > 0) activeTargets.push(t); // 衝突していなければ生き残る// 生き残った的だけを残す
        for (let j = 0; j < balls.length; j++) { // すべてのボールと衝突判定
            let b = balls[j];
            let d = dist(t.x, t.y, b.x, b.y);
            if (d < (t.size / 2 + b.size / 2)) { t.color = color(255, 0, 0) };// BLANK[2]
        }
    }
    targets = activeTargets;

    if (frameCount - lastShotTime > shootInterval) {
        const b = {
            x: mouseX,
            y: mouseY,
            vx: 0,
            vy: -10, // 真上に向かって一定の速さ
            size: 20
        };
        balls.push(b);
        lastShotTime = frameCount;
    }

    const ballsInCanvas = [];
    for (let i = 0; i < balls.length; i++) {
        let b = balls[i];
        if (b.x > 0 && b.x < width && b.y > 0 && b.y < height) {
            ballsInCanvas.push(b);
        }
    }
    balls = ballsInCanvas;
}






