let speech = new SpeechSynthesisUtterance;
let voices = [];
let voiceSelect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = function(){
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice , i)=>(voiceSelect.options[i]=new Option(voice.name,i)))
};





/*This is the main object that will be used to create and manipulate all of the other objectsin this program.
 Next, it creates an array called voices which will hold all of the different voice options for this program.
 It then uses document.querySelector('select') to get a select element on the page and sets its options attribute with an array containing each voice name as well as its index number (0).
 Finally, it registers itself to listen for changes in window.speechSynthesis's onvoiceschanged event so that when new voices are added or removed from window.speechSynthesis, it can update its own code accordingly
 The code creates a new SpeechSynthesisUtterance object and sets the voice property to the first voice in the list.
 The code also calls window.speechSynthesis.onvoiceschanged which is a function that is called when there are changes to voices or when you change your current voice.
 The onvoiceschanged function iterates through all of the voices and adds them as options to select, which is where we can choose our preferred voice by clicking on it.

*/






const button = document.querySelector('button');
button.addEventListener('click',function(){
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech)
})


