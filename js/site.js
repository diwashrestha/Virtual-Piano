
document.addEventListener("keydown", event =>{
    let pianoKeys = ["KeyA",
        "KeyS",
        "KeyD", "KeyF", "KeyG","KeyH","KeyJ"];
    if(pianoKeys.includes(event.code)){
        console.log(`The '${event.key}' key is pressed.`)
    }

    if(event.code.includes("KeyA"))
    {
        let audio = new Audio("music/A.mp3");
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