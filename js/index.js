// -----Butons-----

const azulCeleste        =document.getElementById("azulCeleste");
const naranjaZanaoria    =document.getElementById("naranjaZanaoria");
const azulBaya           =document.getElementById("azulBaya");
const amarillo           =document.getElementById("amarillo");
const rojo               =document.getElementById("rojo");
const magenta            =document.getElementById("magenta");
const verdeLima          =document.getElementById("verdeLima");
const naranjaSalamandra  =document.getElementById("naranjaSalamandra");
const azulCeruleo        =document.getElementById("azulCeruleo");

// -----Butons-----

// -----Opacity-----

const a__opacity=document.getElementById("a__opacity");
const b__opacity=document.getElementById("b__opacity");
const c__opacity=document.getElementById("c__opacity");
const d__opacity=document.getElementById("d__opacity");
const e__opacity=document.getElementById("e__opacity");
const f__opacity=document.getElementById("f__opacity");
const g__opacity=document.getElementById("g__opacity");
const h__opacity=document.getElementById("h__opacity");
const i__opacity=document.getElementById("i__opacity");

// -----Opacity-----

// -----Menu-----

const menuStart = document.getElementById("menu")

// -----Menu-----

// -----Difficulty-----

var difficulty = document.getElementById("dificultad")

// -----Difficulty-----




class Game {
    constructor(){
        this.inicializar()
        this.generateSequence()
        this.ilumineSequence()
        this.addEventsClick()
        // this.callOpacity()
    }

    inicializar(){
        menuStart.style.display = "none"
        this.level = difficulty.value
        this.attempts = 0
        this.subLevel = 0
        this.error = 0
        this.levelOff = difficulty.value - 100
        this.colors = {
            azulBaya,
            azulCeleste,
            azulCeruleo,
            magenta,
            rojo,
            naranjaSalamandra,
            naranjaZanaoria,
            amarillo,
            verdeLima
        }
        this.opacitys = {
            a__opacity,
            b__opacity,
            c__opacity,
            d__opacity,
            e__opacity,
            f__opacity,
            g__opacity,
            h__opacity,
            i__opacity
        }
    }
    generateSequence(){
        this.secuence = new Array (9).fill(0).map(n => Math.floor(Math.random()*9))
    }
    transformNumberToColor(num){
        switch(num){
            case 0:
                return "azulCeleste"
            case 1:
                return "naranjaZanaoria"
            case 2:
                return "azulBaya"
            case 3:
                return "amarillo"
            case 4:
                return "rojo"
            case 5:
                return "magenta"
            case 6:
                return "verdeLima"
            case 7:
                return "naranjaSalamandra"
            case 8:
                return "azulCeruleo"
        }
    }

    callOpacity(num){
        switch(num){
            case 0:
                return "a__opacity"
            case 1:
                return "b__opacity"
            case 2:
                return "c__opacity"
            case 3:
                return "d__opacity"
            case 4:
                return "e__opacity"
            case 5:
                return "f__opacity"
            case 6:
                return "g__opacity"
            case 7:
                return "h__opacity"
            case 8:
                return "i__opacity"
        }
    }
   
    ilumineSequence(){
        for (let i = 0; i < 9; i++){
            const color = this.transformNumberToColor(this.secuence[i])
            const opacity = this.callOpacity(this.secuence[i])
            setTimeout(() => this.iluminateColor(opacity), this.level * i )
        }
    }
    
    iluminateColor(opacity){
        this.opacitys[opacity].style.background = "transparent"
        setTimeout(() => this.turnOffColor(opacity), this.levelOff)
    }
    turnOffColor(opacity){
        this.opacitys[opacity].style.background = "rgba(0, 0, 0, 0.6)"
    }
    addEventsClick(){
        this.opacitys.a__opacity.addEventListener('click', this.selectColor.bind(this));
        this.opacitys.b__opacity.addEventListener('click', this.selectColor.bind(this));
        this.opacitys.c__opacity.addEventListener('click', this.selectColor.bind(this));
        this.opacitys.d__opacity.addEventListener('click', this.selectColor.bind(this));
        this.opacitys.e__opacity.addEventListener('click', this.selectColor.bind(this));
        this.opacitys.f__opacity.addEventListener('click', this.selectColor.bind(this));
        this.opacitys.g__opacity.addEventListener('click', this.selectColor.bind(this));
        this.opacitys.h__opacity.addEventListener('click', this.selectColor.bind(this));
        this.opacitys.i__opacity.addEventListener('click', this.selectColor.bind(this));
    }
    selectColor(click){
        const numColor = click.target.dataset.number
        // console.log(click);
        // console.log(numColor);


        if(numColor == this.secuence[this.subLevel]){
           this.changePosition()
           this.attemptCount()
        //    this.eliminateClickEvents()

           if(this.attempts === 9){
            this.youWin()
            }

        }else{
            this.error++
            if(this.error===9){
                this.youLost()
            }
        }
        
    }
    changePosition(){
        this.subLevel++
    }
    attemptCount(){
        this.attempts++
    }
    youWin(){

    }
    youLost(){

    }
}



function start() {
    window.game = new Game ()
}