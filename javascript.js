let text = document.getElementById('text');
let Btn = document.getElementById('SpeechBtn');

function TextToSpeech(txt){
    let speech = new SpeechSynthesisUtterance(txt);

    speechSynthesis.speak(speech);
}

Btn.addEventListener("click",()=>{
    if(text.value !==""){
        TextToSpeech(text.value);
    }
})


function disableRightClick() {
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Prevent the default right-click menu
    });
}

// Call the function to disable right-click
disableRightClick();
