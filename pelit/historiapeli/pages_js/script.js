const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const factBox = document.getElementById("fact-box");
const factText = document.getElementById("fact-text");
const questionImage = document.getElementById("question-image"); // Added reference to image element

// Kertoo mikä kysymys on tällä hetkellä ja seuraa käyttäjän pisteitä oikeista vastauksista.
let currentQuestionIndex = 0;
let score = 0;

// Aloitus näkymä
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const quiz = document.getElementById("quiz");

// PIILOTA QUIZ JA NAPIT ALUSSA
quiz.classList.add("hidden");
nextBtn.classList.add("hidden");
resultEl.classList.add("hidden");
factBox.classList.add("hidden");
questionEl.classList.add("hidden");
questionImage.classList.add("hidden");
answersEl.innerHTML = "";

// KYSYMYKSET, VASTAUKSET JA FAKTAT
const questions = [
    {
        question: "Mikä voimanlähde pyöritti monia tehtaita teollisen vallankumouksen aikana?",
        fact: "Höyrykone mahdollisti tehtaiden toiminnan ilman vesivoimaa ja nopeutti tuotantoa merkittävästi.",
        image: "../images/kuva_kysymys_1.jpg",
        answers: [
            { text: "Höyrykone", correct: true },
            { text: "Aurinkopaneeli", correct: false },
            { text: "Bensiini", correct: false }
        ]
    },
    {
        question: "Tekstiilitehtaassa valmistettiin eniten mitä?",
        fact: "Tekstiilitehtaat valmistivat kangasta suuria määriä, mikä teki vaatteista halvempia ja helpommin saatavia.",
        image: "../images/kuva_kysymys_2.jpg",
        answers: [
            { text: "Kenkiä", correct: false },
            { text: "Työkaluja", correct: false },
            { text: "Kangasta", correct: true }
        ]
    },
    {
        question: "Kuinka pitkä työpäivä saattoi olla tehtaassa 1800-luvulla?",
        fact: "Kuinak työpäivät olivat usein erittäin pitkiä, jopa 10–14 tuntia, ja työolot olivat raskaat.",
        image: "../images/kuva_kysymys_3.jpg",
        answers: [
            { text: "8 tuntia", correct: false },
            { text: "4-6 tuntia", correct: false },
            { text: "10-14 tuntia", correct: true }
        ]
    },
    {
        question: "Mikä kuljetusväline yleistyi teollisen vallankumouksen aikana?",
        fact: "Höyryjunat mahdollistivat nopeamman tavaroiden ja ihmisten kuljetuksen pitkiä matkoja.",
        image: "../images/kuva_kysymys_4.jpg",
        answers: [
            { text: "Lentokone", correct: false },
            { text: "Höyryjuna", correct: true },
            { text: "Metro", correct: false }
        ]
    },
    {
        question: "Miksi monet ihmiset muuttivat kaupunkeihin?",
        fact: "Teollistuminen loi paljon työpaikkoja kaupunkeihin, mikä houkutteli ihmisiä muuttamaan maaseudulta.",
        image: "../images/kuva_kysymys_5.jpg",
        answers: [
            { text: "Kaupungeissa ei ollut sääntöjä", correct: false },
            { text: "Maaseudulla ei ollut ruokaa saatavilla", correct: false },
            { text: "Kaupungin tehtaissa oli töitä", correct: true }
        ]
    },
    {
        question: "Ketkä saattoivat työskennellä tehtaissa?",
        fact: "Tehtaissa työskentelivät usein miehet, naiset ja jopa lapset, koska työvoimaa tarvittiin paljon.",
        image: "../images/kuva_kysymys_6.webp",
        answers: [
            { text: "Vain miehet", correct: false },
            { text: "Naiset, miehet sekä lapset", correct: true },
            { text: "Vain naiset", correct: false }
        ]
    },
    {
        question: "Mikä kone auttoi valmistamaan lankaa nopeammin?",
        fact: "Kehruu-Jenny oli tärkeä keksintö, joka nopeutti langan valmistusta huomattavasti.",
        image: "../images/kuva_kysymys_7.jpg",
        answers: [
            { text: "Kehruu-Jenny", correct: true },
            { text: "Sorvi", correct: false },
            { text: "Kangaskone", correct: false }
        ]
    },
    {
        question: "Mikä ongelma oli yleinen teollisissa kaupungeissa?",
        fact: "Teollistuminen aiheutti paljon ilmansaasteita, koska tehtaat polttivat hiiltä ja päästivät savua ilmaan.",
        image: "../images/kuva_kysymys_8.jpg",
        answers: [
            { text: "Liikaa metsiä", correct: false },
            { text: "Liian hiljaista", correct: false },
            { text: "Ilmansaasteet", correct: true }
        ]
    }
];

// Aloita-nappi
startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    quiz.classList.remove("hidden");

    currentQuestionIndex = 0;
    score = 0;

    showQuestion();
});

// KYSYMYKSIEN NÄYTTÄMINEN
function showQuestion() {
    resetState(); // Piilotetaan edellisen kysymyksen napit ja fact box

    const currentQuestion = questions[currentQuestionIndex]; // haetaan nykyinen kysymys taulukosta

    // Näytetään kysymys html:ässä
    questionEl.innerText = `${currentQuestionIndex + 1}/${questions.length}: ${currentQuestion.question}`;
    questionEl.classList.remove("hidden"); // näytetään kysymys

    // Päivitetään kysymykseen liittyvä kuva
    questionImage.src = currentQuestion.image || "";
    questionImage.alt = currentQuestion.question;
    questionImage.classList.remove("hidden");
    questionImage.style.opacity = 0;
    setTimeout(() => { questionImage.style.opacity = 1; }, 50);

    // sekoitetaan taulukko satunnaiseen järjestykseen.
    const shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

    // käydään läpi kaikki sekoitetut vastaukset
    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button"); //luodaan uusi nappi jokaiselle vastaukselle
        button.innerText = answer.text; // asetetaan napin tekstiksi vastausvaihtoehto
        button.classList.add("answer-btn"); //lisätään nappiin CSS-luokka

        //merkitään oikea vastaus dataksi
        if (answer.correct) button.dataset.correct = "true";

        button.addEventListener("click", selectAnswer);
        answersEl.appendChild(button);
    });

    if (currentQuestionIndex === questions.length - 1) {
    nextBtn.innerText = "Lopeta";
} else {
    nextBtn.innerText = "Seuraava";
}

    // Vaihdetaan nextBtn tekstiksi "Lopeta" viimeisellä kysymyksellä
    nextBtn.innerText = (currentQuestionIndex === questions.length - 1) ? "Lopeta" : "Seuraava";
}

// tilojen resetointi, aina ennen uutta kysymystä.
function resetState() {
    nextBtn.classList.add("hidden");
    answersEl.innerHTML = "";
    factBox.classList.add("hidden");
    resultEl.classList.add("hidden");

    questionEl.classList.add("hidden");
    questionImage.classList.add("hidden");
}

// Käyttäjä valitsee vastauksen
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        score++;
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("wrong");
        factText.innerText = questions[currentQuestionIndex].fact;
        factBox.classList.remove("hidden");
    }

    Array.from(answersEl.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") button.classList.add("correct");
    });

    // ✅ Näytetään next-btn vasta nyt
    nextBtn.classList.remove("hidden");
}

// Seuraava kysymys / Lopetus / Aloita alusta
nextBtn.addEventListener("click", () => {
    if (nextBtn.innerText === "Aloita alusta") {
        startScreen.classList.remove("hidden");
        quiz.classList.add("hidden");

        score = 0;
        currentQuestionIndex = 0;

        resultEl.classList.add("hidden");
        return;
    }

    if (currentQuestionIndex === questions.length - 1) {
        showResult();
    } else {
        currentQuestionIndex++;
        showQuestion();
    }
});
// Lopputulos
function showResult() {
    questionEl.classList.add("hidden");
    answersEl.innerHTML = "";
    factBox.classList.add("hidden");
    questionImage.classList.add("hidden");

    resultEl.classList.remove("hidden");
    resultEl.innerText = `Pisteesi: ${score} / ${questions.length}`;

    nextBtn.classList.remove("hidden");
    nextBtn.innerText = "Aloita alusta";
}

// navbarin ja footerin linkitys
function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error("Error loading:", err));
}

loadComponent("navbar", "navbar.html");
loadComponent("footer", "footer.html");