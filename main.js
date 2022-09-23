//Grab the sound div container
const soundButton = document.getElementById("buttonContainer")






const soundSrc = "memeSounds/" //storing the folder source in a const for later use
const soundFiles = [ //array for the available sounds
    "anime-wow-sound-effect.mp3",
    "bonk.mp3",
    "bruh.mp3",
    "cute-uwu.mp3",
    "epic.mp3",
    "fbi-open-up.mp3",
    "god-damn.mp3",
    "hellNo.mp3",
    "jesus.mp3",
    "johnCena.mp3",
    "knockKnock.mp3",
    "legoYoda.mp3",
    "nooo.mp3",
    "nut.mp3",
    "okay.mp3",
    "sadge.mp3"
]

function createButton(soundFile) { //Create button elements, fill the text content with the name of the file it links to
    const addAudioButton = document.createElement("button")
    addAudioButton.textContent = soundFile
    
    //makes the buttons clickable, and plays the audiofile linked to the specific button clicked
    addAudioButton.addEventListener("click", () => {
        new Audio(soundSrc + soundFile).play()
    })

    soundButton.append(addAudioButton)

    

}

//create buttons for every sound file in the array
soundFiles.forEach(soundFile => createButton(soundFile) )


//input field part

//stores the input field div
const inputField = document.getElementById("inputFieldEl")

//creates an input element
const inputText = document.createElement("input")

inputField.append(inputText)

//creates button elements
const addTextBtn = document.createElement("button")

//changes the textcontent of the buttons
addTextBtn.textContent = "add"

inputField.append(addTextBtn)

addTextBtn.addEventListener("click", () => {
    
    //stops you from being able to spam the button with no content in the text field
    if (!inputText.value) return
    
    //Creates paragraphs
    const showText = document.createElement("p")
    
    //Sets the text content in the paragraph to whatever is written in the input field
    showText.textContent = inputText.value
    
    //appends the content of the input text in a paragraph
    inputField.append(inputText.value)
    
    //resets the content of the input text field
    inputText.value = ""

})
console.log(soundSrc)
console.log(soundFiles)