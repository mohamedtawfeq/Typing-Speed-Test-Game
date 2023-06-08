// Array Of Words
const words = [
    "Hello",
    "Code",
    "Town",
    "Gethub",
    "python",
    "Scala",
    "Coding",
    "Funny",
    "Task",
    "Roles",
    "Test",
    "Rust",
    "typing",
    "main",
    "playing"
];

    // Setting Levels
    const lvls = {
        "Easy" :5,
    };

    //  Default Level
    let defaultLevelName = "Easy"; // Change Level From Here
    let defaultLevelSeconds = lvls[defaultLevelName];

    // Catch Selectors 
    let startButton = document.querySelector(".start");
    let lvlNameSpan = document.querySelector(".message .lvl");
    let secondsSpan = document.querySelector(".message .seconds");
    let theword = document.querySelector(".the-word");
    let upcomingWords = document.querySelector(".upcoming-words");
    let input = document.querySelector(".input");
    let timeLeftSpan = document.querySelector(".time span");
    let scoreGot = document.querySelector(".score .got");
    let scoreTotal = document.querySelector(".score .total");
    let finishMessage = document.querySelector(".finish");
    let upcomingwordsdiv = document.querySelector(".upcoming-words div")
    let relode = document.querySelector(".fa-redo-alt")


    // Setting Level Name + Seconds + Score
    lvlNameSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    scoreTotal.innerHTML = words.length;

    // Disable Paste Event 
    input.onpaste = function () {
        return false
    }

    // Start Game 
    startButton.onclick = function () {
        this.remove();
        input.focus();
        // Generate Word Function
        genWords();

    }

    function genWords() {
        // Get Random Word From Array
        let randomWord = words[Math.floor(Math.random() * words.length)];
        // Get Word Index
        let wordIndex = words.indexOf(randomWord);
        // Remove WordFrom Array
        words.splice(wordIndex, 1);
        //Show The Random Word
        theword.innerHTML = randomWord;
        // Empty Upcoming Words
        upcomingWords.innerHTML = '';
        // Generate Words 
        // upcoming-words اي في ال upcomingwords نبدا باضافة الكلمات في ال
        for (let i = 0; i < words.length; i++){
            // Create Div Element
            let div = document.createElement("div");
            let txt = document.createTextNode(words[i])
            div.appendChild(txt);
            upcomingWords.appendChild(div)
        }
        // Call Start Play Function
        startPlay();
    }

    function startPlay() {
        // تقوم بعحديث الوقت عند كل كلمة جديدة
        timeLeftSpan.innerHTML = defaultLevelSeconds
        let start = setInterval(() => {
            timeLeftSpan.innerHTML--;
            if (timeLeftSpan.innerHTML === "0"){
                // Stop Time
                clearInterval(start)
                // Compare Words
                if (theword.innerHTML.toLowerCase() === input.value.toLowerCase()){
                    // Empty Input Field
                    input.value = '';
                    // Increase Score
                    scoreGot.innerHTML++;
                    if (words.length > 0){
                        // Call Generat Word Function
                        genWords();
                    }else{
                        let span = document.createElement("span");
                        span.className = "good";
                        let spanText = document.createTextNode("victory")
                        span.appendChild(spanText)
                        finishMessage.appendChild(span)
                        // Remove Upcoming Words Box
                        upcomingWords.remove();
                        document.getElementById("input").style.boxShadow = " inset 1px 3px 40px 2px #07d1ff ";
                        document.getElementById("input").style.transition = "all 0.4s cubic-bezier(1, 0.01, 1, 0.74) 0s";
                    }
                }else{
                    let span = document.createElement('span')
                    span.className = 'bad';
                    let spanText = document.createTextNode("Game Over")
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    document.getElementById("input").style.boxShadow = " inset 1px 3px 40px 2px #ff0000 ";
                    document.getElementById("input").style.transition = "all 0.4s cubic-bezier(1, 0.01, 1, 0.74) 0s";
                }
            }
        }, 1000);
    }

    relode.onclick = function () {
        window.location.reload();
    }

const levels = document.querySelectorAll(".level span");

// Loop On All Apans
levels.forEach(span => {

    // Chick On Evrey Span
    span.addEventListener("click", (e) => {
        // Remove Active Class From All Span
        e.target.parentElement.querySelectorAll(".active").forEach(Element => {
            Element.classList.remove("active");
        });
        // Add Active Class On self
        e.target.classList.add("active");

            if (e.target.dataset.background === "Easy"){ 
// Array Of Words
const words = [
    "Hello",
    "Code",
    "Town",
    "Gethub",
    "python",
    "Scala",
    "Coding",
    "Funny",
    "Task",
    "Roles",
    "Test",
    "Rust",
    "typing",
    "main",
    "playing"
];

    // Setting Levels
    const lvls = {
        "Easy" : 5,
    };

    //  Default Level
    let defaultLevelName = "Easy"; // Change Level From Here
    let defaultLevelSeconds = lvls[defaultLevelName];

    // Catch Selectors 
    let startButton = document.querySelector(".start");
    let lvlNameSpan = document.querySelector(".message .lvl");
    let secondsSpan = document.querySelector(".message .seconds");
    let theword = document.querySelector(".the-word");
    let upcomingWords = document.querySelector(".upcoming-words");
    let input = document.querySelector(".input");
    let timeLeftSpan = document.querySelector(".time span");
    let scoreGot = document.querySelector(".score .got");
    let scoreTotal = document.querySelector(".score .total");
    let finishMessage = document.querySelector(".finish");
    let upcomingwordsdiv = document.querySelector(".upcoming-words div")
    let relode = document.querySelector(".fa-redo-alt")


    // Setting Level Name + Seconds + Score
    lvlNameSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    scoreTotal.innerHTML = words.length;

    // Disable Paste Event 
    input.onpaste = function () {
        return false
    }

    // Start Game 
    startButton.onclick = function () {
        this.remove();
        input.focus();
        // Generate Word Function
        genWords();

    }

    function genWords() {
        // Get Random Word From Array
        let randomWord = words[Math.floor(Math.random() * words.length)];
        // Get Word Index
        let wordIndex = words.indexOf(randomWord);
        // Remove WordFrom Array
        words.splice(wordIndex, 1);
        //Show The Random Word
        theword.innerHTML = randomWord;
        // Empty Upcoming Words
        upcomingWords.innerHTML = '';
        // Generate Words 
        // upcoming-words اي في ال upcomingwords نبدا باضافة الكلمات في ال
        for (let i = 0; i < words.length; i++){
            // Create Div Element
            let div = document.createElement("div");
            let txt = document.createTextNode(words[i])
            div.appendChild(txt);
            upcomingWords.appendChild(div)
        }
        // Call Start Play Function
        startPlay();
    }

    function startPlay() {
        // تقوم بعحديث الوقت عند كل كلمة جديدة
        timeLeftSpan.innerHTML = defaultLevelSeconds
        let start = setInterval(() => {
            timeLeftSpan.innerHTML--;
            if (timeLeftSpan.innerHTML === "0"){
                // Stop Time
                clearInterval(start)
                // Compare Words
                if (theword.innerHTML.toLowerCase() === input.value.toLowerCase()){
                    // Empty Input Field
                    input.value = '';
                    // Increase Score
                    scoreGot.innerHTML++;
                    if (words.length > 0){
                        // Call Generat Word Function
                        genWords();
                    }else{
                        let span = document.createElement("span");
                        span.className = "good";
                        let spanText = document.createTextNode("victory")
                        span.appendChild(spanText)
                        finishMessage.appendChild(span)
                        // Remove Upcoming Words Box
                        upcomingWords.remove();
                        document.getElementById("input").style.boxShadow = " inset 1px 3px 40px 2px #07d1ff ";
                        document.getElementById("input").style.transition = "all 0.4s cubic-bezier(1, 0.01, 1, 0.74) 0s";
                    }
                }else{
                    let span = document.createElement('span')
                    span.className = 'bad';
                    let spanText = document.createTextNode("Game Over")
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    document.getElementById("input").style.boxShadow = " inset 1px 3px 40px 2px #ff0000 ";
                    document.getElementById("input").style.transition = "all 0.4s cubic-bezier(1, 0.01, 1, 0.74) 0s";
                }
            }
        }, 1000);
    }

    relode.onclick = function () {
        window.location.reload();
    }

        }else if (e.target.dataset.background === "Normal"){
            
// Array Of Words
const words = [
    "position",
    "content",
    "Country",
    "Youtube",
    "Linkedin",
    "pointer",
    "paradigm",
    "Styling",
    "Cascade",
    "transform",
    "Working",
    "margin",
    "facebook",
    "position",
    "Random",
];

// Setting Levels
const lvls = {
    "Normal" : 4,
};

//  Default Level
let defaultLevelName = "Normal"; // Change Level From Here
let defaultLevelSeconds = lvls[defaultLevelName];

// Catch Selectors 
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theword = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
let upcomingwordsdiv = document.querySelector(".upcoming-words div")
let relode = document.querySelector(".fa-redo-alt")


// Setting Level Name + Seconds + Score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// Disable Paste Event 
input.onpaste = function () {
    return false
}

// Start Game 
startButton.onclick = function () {
    this.remove();
    input.focus();
    // Generate Word Function
    genWords();

}

function genWords() {
    // Get Random Word From Array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // Get Word Index
    let wordIndex = words.indexOf(randomWord);
    // Remove WordFrom Array
    words.splice(wordIndex, 1);
    //Show The Random Word
    theword.innerHTML = randomWord;
    // Empty Upcoming Words
    upcomingWords.innerHTML = '';
    // Generate Words 
    // upcoming-words اي في ال upcomingwords نبدا باضافة الكلمات في ال
    for (let i = 0; i < words.length; i++){
        // Create Div Element
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i])
        div.appendChild(txt);
        upcomingWords.appendChild(div)
    }
    // Call Start Play Function
    startPlay();
}

function startPlay() {
    // تقوم بعحديث الوقت عند كل كلمة جديدة
    timeLeftSpan.innerHTML = defaultLevelSeconds
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0"){
            // Stop Time
            clearInterval(start)
            // Compare Words
            if (theword.innerHTML.toLowerCase() === input.value.toLowerCase()){
                // Empty Input Field
                input.value = '';
                // Increase Score
                scoreGot.innerHTML++;
                if (words.length > 0){
                    // Call Generat Word Function
                    genWords();
                }else{
                    let span = document.createElement("span");
                    span.className = "good";
                    let spanText = document.createTextNode("victory")
                    span.appendChild(spanText)
                    finishMessage.appendChild(span)
                    // Remove Upcoming Words Box
                    upcomingWords.remove();
                    document.getElementById("input").style.boxShadow = " inset 1px 3px 40px 2px #07d1ff ";
                    document.getElementById("input").style.transition = "all 0.4s cubic-bezier(1, 0.01, 1, 0.74) 0s";
                }
            }else{
                let span = document.createElement('span')
                span.className = 'bad';
                let spanText = document.createTextNode("Game Over")
                span.appendChild(spanText);
                finishMessage.appendChild(span);
                document.getElementById("input").style.boxShadow = " inset 1px 3px 40px 2px #ff0000 ";
                document.getElementById("input").style.transition = "all 0.4s cubic-bezier(1, 0.01, 1, 0.74) 0s";
            }
        }
    }, 1000);
}

relode.onclick = function () {
    window.location.reload();
}
        }else {

            const words = [
                "Programming",
                "javascript",
                "Country",
                "transition",
                "Linkedin",
                "Destructuring",
                "paradigm",
                "box-shadow",
                "Comfortaa",
                "Documentation",
                "Working",
                "Dependencies",
                "facebook",
                "Backgrounds",
                "capitalize",
            ];
            
            // Setting Levels
            const lvls = {
                "Hard" : 4
            };
            
            //  Default Level
            let defaultLevelName = "Hard"; // Change Level From Here
            let defaultLevelSeconds = lvls[defaultLevelName];
            
            // Catch Selectors 
            let startButton = document.querySelector(".start");
            let lvlNameSpan = document.querySelector(".message .lvl");
            let secondsSpan = document.querySelector(".message .seconds");
            let theword = document.querySelector(".the-word");
            let upcomingWords = document.querySelector(".upcoming-words");
            let input = document.querySelector(".input");
            let timeLeftSpan = document.querySelector(".time span");
            let scoreGot = document.querySelector(".score .got");
            let scoreTotal = document.querySelector(".score .total");
            let finishMessage = document.querySelector(".finish");
            let upcomingwordsdiv = document.querySelector(".upcoming-words div")
            let relode = document.querySelector(".fa-redo-alt")
            
            
            // Setting Level Name + Seconds + Score
            lvlNameSpan.innerHTML = defaultLevelName;
            secondsSpan.innerHTML = defaultLevelSeconds;
            timeLeftSpan.innerHTML = defaultLevelSeconds;
            scoreTotal.innerHTML = words.length;
            
            // Disable Paste Event 
            input.onpaste = function () {
                return false
            }
            
            // Start Game 
            startButton.onclick = function () {
                this.remove();
                input.focus();
                // Generate Word Function
                genWords();
            
            }
            
            function genWords() {
                // Get Random Word From Array
                let randomWord = words[Math.floor(Math.random() * words.length)];
                // Get Word Index
                let wordIndex = words.indexOf(randomWord);
                // Remove WordFrom Array
                words.splice(wordIndex, 1);
                //Show The Random Word
                theword.innerHTML = randomWord;
                // Empty Upcoming Words
                upcomingWords.innerHTML = '';
                // Generate Words 
                // upcoming-words اي في ال upcomingwords نبدا باضافة الكلمات في ال
                for (let i = 0; i < words.length; i++){
                    // Create Div Element
                    let div = document.createElement("div");
                    let txt = document.createTextNode(words[i])
                    div.appendChild(txt);
                    upcomingWords.appendChild(div)
                }
                // Call Start Play Function
                startPlay();
            }
            
            function startPlay() {
                // تقوم بعحديث الوقت عند كل كلمة جديدة
                timeLeftSpan.innerHTML = defaultLevelSeconds
                let start = setInterval(() => {
                    timeLeftSpan.innerHTML--;
                    if (timeLeftSpan.innerHTML === "0"){
                        // Stop Time
                        clearInterval(start)
                        // Compare Words
                        if (theword.innerHTML.toLowerCase() === input.value.toLowerCase()){
                            // Empty Input Field
                            input.value = '';
                            // Increase Score
                            scoreGot.innerHTML++;
                            if (words.length > 0){
                                // Call Generat Word Function
                                genWords();
                            }else{
                                let span = document.createElement("span");
                                span.className = "good";
                                let spanText = document.createTextNode("victory")
                                span.appendChild(spanText)
                                finishMessage.appendChild(span)
                                // Remove Upcoming Words Box
                                upcomingWords.remove();
                                document.getElementById("input").style.boxShadow = " inset 1px 3px 40px 2px #07d1ff ";
                                document.getElementById("input").style.transition = "all 0.4s cubic-bezier(1, 0.01, 1, 0.74) 0s";
                            }
                        }else{
                            let span = document.createElement('span')
                            span.className = 'bad';
                            let spanText = document.createTextNode("Game Over")
                            span.appendChild(spanText);
                            finishMessage.appendChild(span);
                            document.getElementById("input").style.boxShadow = " inset 1px 3px 40px 2px #ff0000 ";
                            document.getElementById("input").style.transition = "all 0.4s cubic-bezier(1, 0.01, 1, 0.74) 0s";
                        }
                    }
                }, 1000);
            }
            
            relode.onclick = function () {
                window.location.reload();
            }
        }
    });
});




// // Setting Levels
// const lvls = {
//     "Easy" : 5,
//     "Normal" : 3,
//     "Hard" : 2
// };

// //  Default Level
// let defaultLevelName = "Easy"; // Change Level From Here
// let defaultLevelSeconds = lvls[defaultLevelName];

// // Catch Selectors 
// let startButton = document.querySelector(".start");
// let lvlNameSpan = document.querySelector(".message .lvl");
// let secondsSpan = document.querySelector(".message .seconds");
// let theword = document.querySelector(".the-word");
// let upcomingWords = document.querySelector(".upcoming-words");
// let input = document.querySelector(".input");
// let timeLeftSpan = document.querySelector(".time span");
// let scoreGot = document.querySelector(".score .got");
// let scoreTotal = document.querySelector(".score .total");
// let finishMessage = document.querySelector(".finish");
// let upcomingwordsdiv = document.querySelector(".upcoming-words div")
// let relode = document.querySelector(".fa-redo-alt")


// // Setting Level Name + Seconds + Score
// lvlNameSpan.innerHTML = defaultLevelName;
// secondsSpan.innerHTML = defaultLevelSeconds;
// timeLeftSpan.innerHTML = defaultLevelSeconds;
// scoreTotal.innerHTML = words.length;

// // Disable Paste Event 
// input.onpaste = function () {
//     return false
// }

// // Start Game 
// startButton.onclick = function () {
//     this.remove();
//     input.focus();
//     // Generate Word Function
//     genWords();
// }

// function genWords() {
//     // Get Random Word From Array
//     let randomWord = words[Math.floor(Math.random() * words.length)];
//     // Get Word Index
//     let wordIndex = words.indexOf(randomWord);
//     // Remove WordFrom Array
//     words.splice(wordIndex, 1);
//     //Show The Random Word
//     theword.innerHTML = randomWord;
//     // Empty Upcoming Words
//     upcomingWords.innerHTML = '';
//     // Generate Words 
//     // upcoming-words اي في ال upcomingwords نبدا باضافة الكلمات في ال
//     for (let i = 0; i < words.length; i++){
//         // Create Div Element
//         let div = document.createElement("div");
//         let txt = document.createTextNode(words[i])
//         div.appendChild(txt);
//         upcomingWords.appendChild(div)
//     }
//     // Call Start Play Function
//     startPlay();
// }

// function startPlay() {
//     // تقوم بعحديث الوقت عند كل كلمة جديدة
//     timeLeftSpan.innerHTML = defaultLevelSeconds
//     let start = setInterval(() => {
//         timeLeftSpan.innerHTML--;
//         if (timeLeftSpan.innerHTML === "0"){
//             // Stop Time
//             clearInterval(start)
//             // Compare Words
//             if (theword.innerHTML.toLowerCase() === input.value.toLowerCase()){
//                 // Empty Input Field
//                 input.value = '';
//                 // Increase Score
//                 scoreGot.innerHTML++;
//                 if (words.length > 0){
//                     // Call Generat Word Function
//                     genWords();
//                 }else{
//                     let span = document.createElement("span");
//                     span.className = "good";
//                     let spanText = document.createTextNode("victory")
//                     span.appendChild(spanText)
//                     finishMessage.appendChild(span)
//                     // Remove Upcoming Words Box
//                     upcomingWords.remove();
//                     document.getElementById("input").style.boxShadow = " inset 1px 3px 40px 2px #07d1ff ";
//                     document.getElementById("input").style.transition = "all 0.4s cubic-bezier(1, 0.01, 1, 0.74) 0s";
//                 }
//             }else{
//                 let span = document.createElement('span')
//                 span.className = 'bad';
//                 let spanText = document.createTextNode("Game Over")
//                 span.appendChild(spanText);
//                 finishMessage.appendChild(span);
//                 document.getElementById("input").style.boxShadow = " inset 1px 3px 40px 2px #ff0000 ";
//                 document.getElementById("input").style.transition = "all 0.4s cubic-bezier(1, 0.01, 1, 0.74) 0s";
//             }
//         }
//     }, 1000);
// }

// relode.onclick = function () {
//     window.location.reload();
// }

