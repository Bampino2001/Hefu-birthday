let sentences = [
    "HAPPY BIRTHDAY!",
    "CHÚC MỪNG SINH NHẬT!",
    "お誕生日おめでとう!",
    "JOYEUX ANNIVERSAIRE!",
    "FELIZ CUMPLEAÑOS!",
    "Happy Birthday Madlala Princess!"
];

let sentenceIndex = 0;
let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(64);
    fill(255);
}

function draw() {
    background(0);
    
    let sentence = sentences[sentenceIndex];
    text(sentence, width / 2, height / 2);

    // Create particles
    if (frameCount % 5 === 0) {
        particles.push(new Particle(width / 2, height / 2));
    }

    // Update and display particles
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }

    // Change sentence
    if (frameCount % 180 === 0) {  // Change every 3 seconds
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show() {
        noStroke();
        fill(255, this.alpha);
        ellipse(this.x, this.y, 16);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
