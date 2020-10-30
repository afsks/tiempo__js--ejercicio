var timing=0;
var myArray = ['0','1','2','3','4','5','6','7','8'];
var myNewArray = [];

function start (dificultad){
    document.getElementById("menu").style.display = "none"; 

    if(dificultad.value == 10000){
        timing = 1000
        // console.log(timing);
    } else if(dificultad.value == 5000){
        timing = 500
        // console.log(timing);
    }else{
        timing = 100
        // console.log(timing);
    }

    var i,j,k;
    for (i = myArray.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray[i - 1];
        myArray[i - 1] = myArray[j];
        myArray[j] = k;
    }
    console.log(myArray);


    for(var i = 0; i < 9; i++){

        let pop = myArray.pop()
        //-----vaciar array-----
        let push = myNewArray.push(pop)
        //-----llenar array-----
        // let myArrayAgain = myArray.push()
        // console.log(myArray);
        //-----preparar array-----
        


        if (pop == 0){
            setTimeout(() =>document.getElementById("a__opacity").style.backgroundColor = "transparent",i*timing)
            setTimeout(() =>document.getElementById("a__opacity").style.backgroundColor = "rgba(0, 0, 0, 0.5)", dificultad.value)
        }else if (pop == 1){
            setTimeout(() =>document.getElementById("b__opacity").style.backgroundColor = "transparent",i*timing)
            setTimeout(() =>document.getElementById("b__opacity").style.backgroundColor = "rgba(0, 0, 0, 0.5)", dificultad.value)
        }else if (pop == 2){
            setTimeout(() =>document.getElementById("c__opacity").style.backgroundColor = "transparent",i*timing)
            setTimeout(() =>document.getElementById("c__opacity").style.backgroundColor = "rgba(0, 0, 0, 0.5)", dificultad.value)
        }else if (pop == 3){
            setTimeout(() =>document.getElementById("d__opacity").style.backgroundColor = "transparent",i*timing)
            setTimeout(() =>document.getElementById("d__opacity").style.backgroundColor = "rgba(0, 0, 0, 0.5)", dificultad.value)
        }else if (pop == 4){
            setTimeout(() =>document.getElementById("e__opacity").style.backgroundColor = "transparent",i*timing)
            setTimeout(() =>document.getElementById("e__opacity").style.backgroundColor = "rgba(0, 0, 0, 0.5)", dificultad.value)
        }else  if (pop == 5){
            setTimeout(() =>document.getElementById("f__opacity").style.backgroundColor = "transparent",i*timing)
            setTimeout(() =>document.getElementById("f__opacity").style.backgroundColor = "rgba(0, 0, 0, 0.5)", dificultad.value)
        }else  if (pop == 6){
            setTimeout(() =>document.getElementById("g__opacity").style.backgroundColor = "transparent",i*timing)
            setTimeout(() =>document.getElementById("g__opacity").style.backgroundColor = "rgba(0, 0, 0, 0.5)", dificultad.value)
        }else  if (pop == 7){
            setTimeout(() =>document.getElementById("h__opacity").style.backgroundColor = "transparent",i*timing)
            setTimeout(() =>document.getElementById("h__opacity").style.backgroundColor = "rgba(0, 0, 0, 0.5)", dificultad.value)
        }else  if (pop == 8){
            setTimeout(() =>document.getElementById("i__opacity").style.backgroundColor = "transparent",i*timing)
            setTimeout(() =>document.getElementById("i__opacity").style.backgroundColor = "rgba(0, 0, 0, 0.5)", dificultad.value)
        }   
        
    }
    console.log(myNewArray.length);
}




// -----Funcion delete-----

    function delete_a(a){
        let first = myNewArray[0]
        if(first === '0'){
            myNewArray.shift(1) 
            console.log("borrado");
        }else if(first != '0') {
             console.log("error");
        }
        if(myNewArray.length === 0){
            document.getElementById("restar").style.display = "flex"
        }
        console.log(myNewArray.length);
    }
    function delete_b(a){
        let first = myNewArray[0]
        if(first === '1'){
            myNewArray.shift(1) 
            console.log("borrado");
        }else if(first != '1') {
             console.log("error");
        }
        if(myNewArray.length === 0){
            document.getElementById("restar").style.display = "flex"
        }
        console.log(myNewArray.length);
    }
    function delete_c(a){
        let first = myNewArray[0]
        if(first === '2'){
            myNewArray.shift(1) 
            console.log("borrado");
        }else if(first != '2') {
             console.log("error");
        }
        if(myNewArray.length === 0){
            document.getElementById("restar").style.display = "flex"
        }
        console.log(myNewArray.length);
    }
    function delete_d(a){
        let first = myNewArray[0]
        if(first === '3'){
            myNewArray.shift(1) 
            console.log("borrado");
        }else if(first != '3') {
             console.log("error");
        }
        if(myNewArray.length === 0){
            document.getElementById("restar").style.display = "flex"
        }
        console.log(myNewArray.length);
    }
    function delete_e(a){
        let first = myNewArray[0]
        if(first === '4'){
            myNewArray.shift(1) 
            console.log("borrado");
        }
        if(myNewArray.length === 0){
            document.getElementById("restar").style.display = "flex"
        }
        console.log(myNewArray.length);
    }
    function delete_f(a){
        let first = myNewArray[0]
        if(first === '5'){
            myNewArray.shift(1) 
            console.log("borrado");
        }else if(first != '5') {
             console.log("error");
        }
        if(myNewArray.length === 0){
            document.getElementById("restar").style.display = "flex"
        }
        console.log(myNewArray.length);
    }
    function delete_g(a){
        let first = myNewArray[0]
        if(first === '6'){
            myNewArray.shift(1) 
            console.log("borrado");
        }else if(first != '6') {
             console.log("error");
        }
        if(myNewArray.length === 0){
            document.getElementById("restar").style.display = "flex"
        }
        console.log(myNewArray.length);
    }
    function delete_h(a){
        let first = myNewArray[0]
        if(first === '7'){
            myNewArray.shift(1) 
            console.log("borrado");
        }else if(first != '7') {
             console.log("error");
        }
        if(myNewArray.length === 0){
            document.getElementById("restar").style.display = "flex"
        }
        console.log(myNewArray.length);
    }
    function delete_i(a){
        let first = myNewArray[0]
        if(first === '8'){
            myNewArray.shift(1) 
            console.log("borrado");
        }else if(first != '8') {
             console.log("error");
        }
        if(myNewArray.length === 0){
            document.getElementById("restar").style.display = "flex"
        }
        console.log(myNewArray.length);
    }
    // function delete_a(a){
    //     let first = myNewArray[0]
    //     if(first === '9'){
    //         myNewArray.shift(1) 
    //         console.log("borrado");
    //     }else if(first != '9') {
    //          console.log("error");
    //     }else{
    //         alert("ganaste")
    //     }
    //     console.log(myNewArray.length);
    // }
    
 
// -----Function delete-----

// -----Function restar-----

function restar() {
    document.getElementById("restar").style.display = "none"
    document.getElementById("menu").style.display = "flex"
}

// -----Function restar-----
