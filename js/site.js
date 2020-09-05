
document.addEventListener("keypress", event =>{
    let pianoKeys = ["KeyA",
        "KeyS",
        "KeyD", "KeyF", "KeyG","KeyH","KeyJ"];
 

    if(event.code.includes("KeyA"))
    {
        let audio = new Audio("music/A.mp3");
        console.log("A");
        audio.play();
    }
    else if(event.code.includes("KeyS"))
    {
        let audio = new Audio("music/S.mp3");
        audio.play();
    }
    else if(event.code.includes("KeyD"))
    {
        let audio = new Audio("music/D.mp3");
        audio.play();
    }
    else if(event.code.includes("KeyF"))
    {
        let audio = new Audio("music/F.mp3");
        audio.play();
    }
    else if(event.code.includes("KeyG"))
    {
        let audio = new Audio("music/G.mp3");
        audio.play();
    }
    else if(event.code.includes("KeyH"))
    {
        let audio = new Audio("music/H.mp3");
        audio.play();
    }
    else if(event.code.includes("KeyJ"))
    {
        let audio = new Audio("music/J.mp3");
        audio.play();
    }
    else if(event.code.includes("KeyW"))
    {
        let audio = new Audio("music/W.mp3");
        audio.play();
    }
    else if(event.code.includes("KeyE"))
    {
        let audio = new Audio("music/E.mp3");
        audio.play();
    }
    else if(event.code.includes("KeyT"))
    {
        let audio = new Audio("music/T.mp3");
        audio.play();
    }
    else if(event.code.includes("KeyY"))
    {
        let audio = new Audio("music/Y.mp3");
        audio.play();
    }
    else if(event.code.includes("KeyU"))
    {
        let audio = new Audio("music/U.mp3");
        audio.play();
    }
    else{
        console.warn("Unexpected keypress: '${event.key}")
    }
});

// function for highlighting the key on keyboard with key is pressed

document.addEventListener("keypress",event=>{
    let whiteKeys = ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","KeyC","KeyV","KeyB","KeyN","KeyM"];
    if(whiteKeys.includes(event.code)){
        let pressKey = document.getElementById(event.code);
        pressKey.style.backgroundColor = "royalblue";
        pressKey.style.boxShadow = "none";
    }
});

document.addEventListener("keyup", event =>{
    let whiteKeys = ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","KeyC","KeyV","KeyB","KeyN","KeyM"];

    whiteKeys.forEach(function(key){
        let upKey = document.getElementById(key);
        upKey.style.backgroundColor = "white";
        upKey.style.boxShadow ="0 5px rgb(161, 161, 161)";

    })
     
})


// function for black keys 
document.addEventListener("keypress",event =>{
    let pianoKeys = ["KeyQ","KeyW","KeyE", "KeyR", "KeyT","KeyY","KeyU",
                    "KeyI","KeyI","KeyO","KeyP"];
        if(pianoKeys.includes(event.code)){
            console.log(`The '${event.key}' key is pressed.`)
        }
        if(pianoKeys.includes(event.code)){
            let pressKey = document.getElementById(event.code);
            pressKey.style.backgroundColor = "royalblue";
            pressKey.style.boxShadow = "none";
        };
});

document.addEventListener("keyup",event =>{
    let pianoKeys = ["KeyQ","KeyW","KeyE", "KeyR", "KeyT","KeyY","KeyU",
    "KeyI","KeyI","KeyO","KeyP"];
    
    
    pianoKeys.forEach(function(key) {
        console.log(key);
        let upKey = document.getElementById(key);
        upKey.style.backgroundColor = "black";
        upKey.style.boxShadow = "0 5px #444";
        });
});



document.onkeypress = function(e) {
    if ((e.which || e.keyCode) == 113) { //this is the number code for the letter "S"
  let keyS = document.getElementById('first');
  keyS.style.backgroundColor ="royalblue";
  keyS.style.boxShadow = "none";
}
};
  
  document.onkeyup = function(e) {
    let keyS = document.getElementById('first');
    keyS.style.backgroundColor = "black";
    keyS.style.boxShadow = "0 5px #444";
};
  
