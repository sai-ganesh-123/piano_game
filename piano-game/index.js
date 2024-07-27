const pianokeys = document.querySelectorAll(".piano-keys .key"),
volumeslider = document.querySelector(".volume-slider input");
keyscheckbox =document.querySelector(".keys-checkbox input");

let allkeys = [],
audio = new Audio("tunes/a.wav");

const playtune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedkey = document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    setTimeout(()=>{
        clickedkey.classList.remove("active");
    },125);
}

pianokeys.forEach(key =>{
    allkeys.push(key.dataset.key);
    key.addEventListener("click",() => playtune(key.dataset.key));
});

const showhidekeys = ()=>{
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

const handlevolume = (e)=>{
    audio.volume = e.target.value;
}

const pressedkey = (e) =>{
    if(allkeys.includes) playtune(e.key);
}

keyscheckbox.addEventListener("click",showhidekeys);
volumeslider.addEventListener("input",handlevolume);
document.addEventListener("keydown",pressedkey);