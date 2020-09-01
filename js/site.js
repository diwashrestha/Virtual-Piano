
document.addEventListener("keydown", event =>{
    let pianoKeys = ["KeyA",
                    "KeyS",
                    "KeyD", "KeyF", "KeyG","KeyH","KeyJ"];
    if(pianoKeys.includes(event.code)){
        console.log(`The '${event.key}' key is pressed.`)
    }
    else{
        console.warn("Unexpected keypress: '${event.key}")
    }
});