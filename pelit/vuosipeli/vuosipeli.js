const questions = [
    {
        event: "Berliinin muuri kaatuu",
        answer: "1989",
        image: "images/analogicus-german-3504961_1920.jpg"
    },
    {
        event: "Ensimmäinen ihminen kuussa",
        answer: "1969",
        image: "images/wikiimages-space-station-60615_1920.jpg"
    },
    {
        event: "Columbus löytää Amerikan",
        answer: "1492",
        image: "images/andpon-christopher-columbus-3381359_1920.jpg"
    },
    {
        event: "Ensimmäinen maailmansota päättyy",
        answer: "1918",
        image: "images/tudorek-soldiers-7260679_1920.jpg"
    },
    {
        event: "Titanic uppoaa",
        answer: "1912",
        image: "images/noname_13-ship-3401500_1920.jpg"
    },
    {
        event: "Yhdysvaltain sisällissota alkaa",
        answer: "1861",
        image: "images/alexas_fotos-banner-3354565_1920.jpg"
    },
    {
        event: "Suomi itsenäistyy",
        answer: "1917",
        image: "images/kostiolavi-finland-2963755.jpg"
    },
    {
        event: "John F. Kennedyn murha",
        answer: "1963",
        image: "images/wikiimages-john-f-kennedy-63160.jpg"
    },
    {
        event: "Tšernobylin onnettomuus",
        answer: "1986",
        image: "images/reznik89-pripyat-1366165.jpg"
    },
    {
        event: "Ensimmäinen lentokone",
        answer: "1903",
        image: "images/wikiimages-plane-74020.jpg"
    }
];

const questionElement = document.getElementById("question");
const answerInput = document.getElementById("vastaus");
const nextButton = document.getElementById("next");
const imageElement = document.getElementById("question-image");
const feedbackElement = document.getElementById("feedback");
const scoreSofar = document.getElementById("score-sofar");
const vuosiLabel = document.getElementById("vuosi-label");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.event;
    imageElement.src = currentQuestion.image;
    feedbackElement.innerText = "";
    feedbackElement.className = "";
}

function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreSofar.innerText = "Pisteet: 0/" + questions.length;
    answerInput.style.display = "";
    answerInput.value = "";
    nextButton.style.display = "";
    imageElement.style.display = "";
    vuosiLabel.style.display = ""; 
    document.getElementById("try-again").remove(); 
    showQuestion();
}

document.getElementById("back").addEventListener("click", function() {
    window.location.href = "../../etusivu/index.html";
});

nextButton.addEventListener("click", function(e) {
    e.preventDefault();

    const userAnswer = answerInput.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        score++;
        scoreSofar.innerText = "Pisteet: " + score + "/" + questions.length;
        feedbackElement.innerText = "Oikea vastaus!";
        feedbackElement.className = "feedback-correct";
    } else {
        scoreSofar.innerText = "Pisteet: " + score + "/" + questions.length;
        feedbackElement.innerText = "Väärin meni! Oikea vastaus olisi ollut: " + correctAnswer;
        feedbackElement.className = "feedback-wrong";
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
       setTimeout(() => {
        showQuestion();
        answerInput.value = "";
       }, 3500);
    } else {
       setTimeout(() => {
        questionElement.innerText = "Peli loppui! Tässä pisteesi: " + score + "/" + questions.length;
        feedbackElement.innerText = "";
        answerInput.style.display = "none";
        nextButton.style.display = "none";
        imageElement.style.display = "none";
        vuosiLabel.style.display = "none";

        const tryAgainButton = document.createElement("button");
        tryAgainButton.innerText = "Yritä uudelleen!";
        tryAgainButton.id = "try-again";
        tryAgainButton.addEventListener("click", resetGame);
        questionElement.after(tryAgainButton);
        }, 2500);
    }
});

showQuestion();