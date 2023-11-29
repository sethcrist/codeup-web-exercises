"use strict";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d") //video used 2D
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class symbolObject {
    constructor (x, y, fontSize, canvasHeight) {
        this.characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = "";
        this.canvasHeight = canvasHeight;
    }
    draw (context) {
        this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length));
        context.fillStyle = "hotpink"
        context.fillText(this.text, this.x *this.fontSize, this.y *this.fontSize);
        if (this.y * this.fontSize > this.canvasHeight) {
            this.y = 0;
        } else {
            this.y += 1;
        }
    }
}

class Effect {
    constructor (canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontsize = 25;
        this.columns = this.canvasWidth/this.fontsize;
        this.symbols = [];
        this.#initialize();
        console.log(this.symbols);
    }
    #initialize () {
        for (let i = 0; i < this.columns; i++) {
            this.symbols[i] = new symbolObject(i, 0, this.fontsize, this.canvasHeight);
        }
    }
}
const effect = new Effect(canvas.width, canvas.height)

function animate () {
    ctx.font = effect.fontsize + "px monospace";
    effect.symbols.forEach(symbol => symbol.draw(ctx));
    requestAnimationFrame(animate);
}
animate();