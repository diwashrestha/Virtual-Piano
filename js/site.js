// Combination of keys and notes
const pianoKeys = { Backquote:"C3",KeyQ:"D3",KeyW:"E3",KeyE:"F3",KeyR:"G3",KeyT:"A3",KeyY:"B3",KeyU:"C4",KeyI:"D4",KeyO:"D4",KeyP:"F4",
    KeyZ:"G4",KeyX:"A4",KeyC:"B4",KeyV:"C5",KeyB:"D5",KeyN:"E5",KeyM:"F5",Comma:"G5",Period:"A5",Slash:"B5",Digit1:"C_3",Digit2:"D_3",
    Digit4:"F_3",Digit5:"G_3",Digit6:"A_3",Digit8:"C_4",Digit9:"D_4",KeyA:"F_4",KeyS:"G_4",KeyD:"A_4",KeyG:"C_5",KeyH:"D_5",KeyK:"F_5",KeyL:"G_5",Semicolon:"A_5"};


let audioObjs = {};


document.addEventListener("keypress", event =>{
    const letter = event.code
    if(pianoKeys.hasOwnProperty(letter)){
        loadAudio(pianoKeys[letter]) // loads the audio for th pressed key
        console.log(`The '${letter}' key is pressed.`)
        audioObjs[pianoKeys[letter]].play() // plays the required notes

        // print the key note
        let keynote = pianoKeys[letter].replace(/_/g, "#");
        document.getElementById('keynote-name').innerHTML = keynote;
    }
    else
    {
        console.warn(`Unexpected keypress: '${event.code}'`)
    }
});


// loads the mp3 file
function loadAudio(letter){
    audioObjs[letter] = new Audio(`./music/${letter}.mp3`);
    console.log(letter);
}


// function for highlighting the white keys on keyboard with key is pressed

document.addEventListener("keypress",event=>{
    let whiteKeys = ["Backquote","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU",
        "KeyI","KeyO","KeyP","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash"];
    if(whiteKeys.includes(event.code)){
        let pressKey = document.getElementById(event.code);
        pressKey.style.backgroundColor = "lightblue";
        pressKey.style.boxShadow = "none";
    }
});

document.addEventListener("keyup", event =>{
    let whiteKeys = ["Backquote","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU",
        "KeyI","KeyO","KeyP","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash"];

    whiteKeys.forEach(function(key){
        let upKey = document.getElementById(key);
        upKey.style.backgroundColor = "white";
        upKey.style.boxShadow ="0 5px rgb(161, 161, 161)";

    })
     
})


// function for black keys 
document.addEventListener("keypress",event =>{
    let pianoKeys = ["Digit1","Digit2","Digit4", "Digit5", "Digit6","Digit8","Digit9",
                    "KeyA","KeyS","KeyD","KeyG","KeyH","KeyK","KeyL","Semicolon"];

        if(pianoKeys.includes(event.code)){
            let pressKey = document.getElementById(event.code);
            pressKey.style.backgroundColor = "royalblue";
            pressKey.style.height = "7.2em";
            pressKey.style.boxShadow = "0 4px #333";
        };
});

document.addEventListener("keyup",event =>{
    let pianoKeys = ["Digit1","Digit2","Digit4", "Digit5", "Digit6","Digit8","Digit9",
        "KeyA","KeyS","KeyD","KeyG","KeyH","KeyK","KeyL","Semicolon"];
    
    
    pianoKeys.forEach(function(key) {
        console.log(key);
        let upKey = document.getElementById(key);
        upKey.style.backgroundColor = "black";
        upKey.style.height = "7em";
        upKey.style.boxShadow = "0 10px #444";
        });
});




  
