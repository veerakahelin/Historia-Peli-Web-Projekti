console.log("script ladattu");

/* KYSYMYKSET */

const questions = [

    {
        question: "Tilanne on sekava vallankumouksen jälkeen. Miten varmistat Suomen itsenäistymisen?",
        answers: ["Julistat itsenäisyyden", "Pyydät Ruotsia hallitsemaan", "Liityt Saksaan"],
        correct: 0
    },
    {
        question: "Saat vastuun Suomen hallintomuodon päättämisestä, mitä valitset?",
        answers: ["Monarkia", "Tasavalta", "Sotilasjohto"],
        correct: 1
    },
    {
        question: "Uusi valtio tarvitsee johtajan. Kenet valitset ensimmäiseksi presidentiksi?",
        answers: ["Urho Kekkonen", "Mannerheim", "K.J. Ståhlberg"],
        correct: 2
    },
    {
        question: "Kuinka pitkään annat K.J. Stählbergin toimia presidenttinä?",
        answers: ["1919-1950", "1919-1925", "1919-1930"],
        correct: 1
    },
    {
        question: "Kansakuntasi tarvitsee symbolisen juhlapäivän. Minkä päivän valitset?",
        answers: ["6.12.", "1.1.", "24.6."],
        correct: 0
    },
    {
        question: "Valtion rakentaminen jatkuu. Mikä on tärkein ensimmäinen tavoite?",
        answers: ["Luoda hallinto", "Rakentaa armeija", "Laajentaa aluetta"],
        correct: 0
    },
    {
        question: "Itsenäisyys on saavutettu. Mitä teet seuraavaksi?",
        answers: ["Juhlit", "Luovutat vallan", "Rakennat valtion järjestelmän"],
        correct: 2
    }
];

/* PELIN TILA */

let currentQuestion = 0;
let score = 0;

/* SCREEN VAIHTO */

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

/* PELIN ALOITUS */

function startGame() {
    currentQuestion = 0;
    score = 0;

    showScreen('game');
    showQuestion();
}

/* KYSYMYS NÄYTTÖ */

function showQuestion() {
    const q = questions[currentQuestion];

    const questionEl = document.getElementById('question');
    const answersEl = document.getElementById('answers');

    if (!questionEl || !answersEl) return;

    questionEl.textContent = q.question;
    answersEl.innerHTML = '';

    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = "btn btn-outline-light m-1";
        btn.textContent = answer;

        btn.onclick = () => checkAnswer(index);

        answersEl.appendChild(btn);
    });

    updateScore();
}

/* VASTAUKSEN KÄSITTELY */

function checkAnswer(selected) {
    const correctIndex = questions[currentQuestion].correct;
    const buttons = document.querySelectorAll('#answers button');

    buttons.forEach((btn, index) => {
        if (index === correctIndex) {
            btn.classList.add('correct'); 
        } else if (index === selected) {
            btn.classList.add('wrong'); 
        }

        btn.disabled = true; 
    });

    if (selected === correctIndex) {
        score++;
    }

    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            endGame();
        }
    }, 1000);
}

/* PISTEET */

function updateScore() {
    const scoreEl = document.getElementById('score');
    if (scoreEl) {
        scoreEl.textContent = `Pisteet: ${score}/${questions.length}`;
    }
}

/* PELI LOPPUU */

function endGame() {
    showScreen('end');

    const finalScore = document.getElementById('finalScore');
    if (finalScore) {
        finalScore.textContent = `Sait ${score}/${questions.length} pistettä!`;
    }
}

/* UUSI PELI */

function restartGame() {
    startGame();
}

/* ETUSIVU */

function goHome() {
    currentQuestion = 0;
    score = 0;

    showScreen('home');
}

