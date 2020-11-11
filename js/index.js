// -----Butons-----

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementById("f");
const g = document.getElementById("g");
const h = document.getElementById("h");
const i = document.getElementById("i");

// -----Butons-----

// -----Menu-----

const menuStart = document.getElementById("menu")

// -----Menu-----

// -----Difficulty-----

// var difficulty = document.getElementById("dificultad").value

// -----Difficulty-----



class Game {
    constructor(){
        this.inicializar()
        this.generateSequence()
        this.ilumineSequence()
    }

    inicializar(){
        menuStart.style.display = "none"
        this.level = difficulty
    }
    generateSequence(){
        this.secuence = new Array (9).fill(0).map(n => Math.floor(Math.random()*9))
    }
    ilumineSequence(){

    }
}

function start(value) {
    window.game = new Game ()
    console.log(value);
}