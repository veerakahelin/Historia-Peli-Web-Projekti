//Käytin ChatGPT 5.4sta erikseen mainituissa kohdissa!
//PS. Olen kuitenkin kirjoittanut kaiken koodin tänne itse

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd=false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(figure) {
        let node = this.root;
        for (let char of figure) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    search(figure) {
        let node = this.root;
        for (let char of figure) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEnd;
    }
    
    //Luotu ChatGPT:n kanssa
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}

//ChatGPT:n muokkaama -->
const figurePool = [
    {
        figure: "MAO",
        hint: "Kiinan Kommunistisen puolueen johtaja vuosina 1943 - 76"
    },
    {
        figure: "ROOSEVELT",
        hint: "Yhdysvaltojen presidentti toisen maailmansodan aikana"
    },
    {
        figure: "CHURCHILL",
        hint: "Tunnetaan voiton merkistään"
    },
    {
        figure: "MANNERHEIM",
        hint: "Valittiin Suomen presidentiksi poikkeuslailla sodan aikana"
    },
    {
        figure: "HUSSEIN",
        hint: "Oleellinen osa ensimmäistä Persianlahden sotaa"
    },
    {
        figure: "KENNEDY",
        hint: "Salamurhattiin Dallas Texasissa 60-luvulla"
    },
    {
        figure: "HITLER",
        hint: "Melkein kohtasi loppunsa vierailessaan liittolaismaata"
    },
    {
        figure: "LENIN",
        hint: "Perusti Neuvosto-Venäjän ja myöhemmin Neuvostoliiton"
    },
    {
        figure: "CASTRO",
        hint: "Kuuban pääministeri 1959 - 76, ja presidentti 1976 - 2008. Kuoli 2016"
    },
    {
        figure: "STALIN",
        hint: "Aiheutti miljoonia nälkäkuolemia"
    },
    {
        figure: "KEKKONEN",
        hint: "Yksi tärkeimmistä Suomalaisen poliittisen kulttuurin henkilöistä"
    },
    {
        figure: "MUSSOLINI",
        hint: "Fasistisen ideologian isä, Hitlerin esikuva"
    },
    {
        figure: "NIXON",
        hint: "Yhdysvaltojen presidentti, joka erosi virastaan tekemänsä virkavirheen myötä"
    },
    {
        figure: "KOIVISTO",
        hint: "Vanhimmaksi elänyt Suomalainen presidentti. 1923 - 2017"
    },
    {
        figure: "GORBATSOV",
        hint: "Julisti Neuvostoliiton hajoamisen"
    },
    {
        figure: "HIROHITO",
        hint: "Hänen aikakautensa Japanin keisarina tunnetaan 'Shōwan' aikakautena"
    },
    {
        figure: "AHTISAARI",
        hint: "Tunnetuin Suomalainen rauhanturvaaja"
    },
    {
        figure: "EINSTEIN",
        hint: "Suhteellisuusteorian luoja"
    },
    {
        figure: "FRANCO",
        hint: "Vuosina 1892 - 1975 elänyt Espanjalainen kenraali sekä diktaattori"
    },
    {
        figure: "BISMARCK",
        hint: "Johtaja joka tunnettiin nimellä 'Rautakansleri'"
    },
    {
        figure: "STÅHLBERG",
        hint: "Suomen tasavallan ensimmäinen presidentti"
    },
    {
        figure: "MENGELE",
        hint: "Kuoleman enkeli"
    },
    {
        figure: "HÄYHÄ",
        hint: "Tunnetaan myös nimellä Valkoinen kuolema"
    }, //<--
    {
        figure: "DAVINCI",
        hint: "Tunnetuin renessanssinero"
    },
    {
        figure: "ELIZABETHII",
        hint: "Historian toiseksi pisimpään hallinnut monarkki. 1952 - 2022"
    },
    {
        figure: "LUDVIGXIV",
        hint: "Aurinkokuningas"
    },
    {
        figure: "NAPOLEON",
        hint: "Kärsi tappion Waterloon taistelussa"
    },
    {
        figure: "WASHINGTON",
        hint: "Yhdysvaltojen ensimmäinen presidentti"
    },
    {
        figure: "HIMMLER",
        hint: "Toimi Saksan sisäministerinä vuosina 1943 - 45. Yksi Holokaustin pääsyyllisistä"
    },
    {
        figure: "GALILEI",
        hint: "Katolilainen kirkko tuomitsi hänen ajatukset- ja hänet asetettiin 'kotiarestiin' loppuelämäkseen 1633"
    },
    {
        figure: "NEWTON",
        hint: "Englantilainen fyysikko ja matematiikko, loi klassisen mekaniikan perustan ja tutki myös valon luonnetta"
    },
    {
        figure: "TESLA",
        hint: "Vaihtovirran luoja"
    },
    {
        figure: "FERDINAND",
        hint: "Hänen murhansa johti ensimmäiseen maailmansotaan"
    },
    {
        figure: "MLK",
        hint: "Ajoi tummaihoisten tasa-arvoja väkivallattomin menetelmin 1950 - 60 luvulla. (Käytä tässä lyhennettyä nimeä)"
    },
    {
        figure: "GANDHI",
        hint: "Keskeinen hahmo Intian itsenäistymisessä 1947"
    },
    {
        figure: "KIVI",
        hint: "Suomalaisen kirjallisuuden edelläkävijä sekä kansalliskirjailija"
    },
    {
        figure: "CAESAR",
        hint: "Rooman viimeinen diktaattori, jonka toimet vauhdittivat Rooman tasavallan kukistumista"
    },
    {
        figure: "LINCOLN",
        hint: "Lakkautti orjuuden Yhdysvalloissa ensimmäinen Tammikuuta 1863"
    },
    {
        figure: "KOLUMBUS",
        hint: "Löysi Amerikan mantereen 1492"
    },
    {
        figure: "ELVIS",
        hint: "Rock N Rollin kuningas"
    },
    {
        figure: "LÖNNROT",
        hint: "Suomalainen kansanrunouden kerääjä, kielentutkija sekä lääkäri."
    },
    {
        figure: "BOBRIKOV",
        hint: "Suomen kenraalikuvernööri 1898 - 1904. Murhattiin Helsingissä 1904"
    },
    {
        figure: "DISNEY",
        hint: "Yhdysvaltalainen animaattori, elokuvatuottaja ja viihdealan edelläkävijä."
    },
    {
        figure: "OPPENHEIMER",
        hint: "Atomipommin isä"
    },
    {
        figure: "KALLIO",
        hint: "Kuoli Helsingin rautatieasemalla sydänkohtaukseen 1940"
    },
    {
        figure: "PALME",
        hint: "Ruotsin pääministeri 1969 - 76, ja 1982 - 86. Murhattiin elokuvateatterin edustalla 1986"
    },
    {
        figure: "TUTANKHAMON",
        hint: "Faarao, jonka hauta löydettiin lähes koskemattomana 1922"
    },
    {
        figure: "REAGAN",
        hint: "B-Luokan näyttelijä ennen uraansa Yhdysvaltojen presidenttinä"
    },
    {
        figure: "JELTSIN",
        hint: "Venäjän ensimmäinen presidentti"
    },
    {
        figure: "CANTH",
        hint: "Merkittävä suomalainen kirjailija, joka ajoi naisten oikeuksia, tasa-arvoa ja vähäosaisten asemaa"
    }
];
//ChatGPT:n lisäämä sekä muokkaama -->
const ROUND_SIZE = 15;

let roundEntries = [];
let figures = [];
let trie = new Trie();
let foundFigures = new Set();
let roundStartTime = 0;
let roundCompleted = false;
let timerInterval = null;
let introClosed = false; //<--

const rows = 6;
const cols = 21;
let grid = []; //<-- ChatGPT:n muokkaama

const dirs = [
    [-1,-1], [-1,0], [-1,1],
    [0,-1],           [0,1],
    [1,-1], [1,0], [1,1]
];

function randomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

//Luotu ChatGPT:n kanssa -->
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function pickRoundEntries() {
    if (figurePool.length < ROUND_SIZE) {
        throw new Error("Hahmo valikoimassa on liian vähän hahmoja!");
    }

    return shuffle(figurePool).slice(0, ROUND_SIZE);
}

function setUpRoundData() {
    roundEntries = pickRoundEntries();
    figures = roundEntries.map(entry => entry.figure);

    trie = new Trie();
    figures.forEach(w => trie.insert(w));

    foundFigures = new Set();
}

function canUseCell(r, c, visited) {
    return (
        r >= 0 && r < rows &&
        c >= 0 && c < cols &&
        !visited.has(`${r},${c}`) &&
        grid[r][c] === ""
    );
} //<--

//Luotu ChatGPT:n kanssa -->
function placeFigure(figure) {
    const startCells = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            startCells.push([r, c]);
        }
    }

    function dfs(r, c, index, visited) {
        if (!canUseCell(r, c, visited)) return false;

        const key = `${r},${c}`;
        visited.add(key);
        grid[r][c] = figure[index];

        if (index === figure.length - 1) {
            return true;
        }

        for (const [dr, dc] of shuffle(dirs)) {
            const nr = r + dr;
            const nc = c + dc;

            if (dfs(nr, nc, index + 1, visited)) {
                return true;
            }
        }

        visited.delete(key);
        grid[r][c] = "";
        return false;
    }

    for (const [r, c] of shuffle(startCells)) {
        if (dfs(r, c, 0, new Set())) {
            return true;
        }
    }

    return false;
} //<--

//Luotu ChatGPT:n kanssa -->
function figureExists(figure) {
    function dfs(r, c, index, visited) {
        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            visited.has(`${r},${c}`) ||
            grid[r][c] !== figure[index]
        ) {
            return false;
        }

        if (index === figure.length - 1) {
            return true;
        }

        visited.add(`${r},${c}`);

        for (const [dr, dc] of dirs) {
            if (dfs(r + dr, c + dc, index + 1, visited)) {
                visited.delete(`${r},${c}`);
                return true;
            }
        }

        visited.delete(`${r},${c}`);
        return false;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === figure[0]) {
                if (dfs(r, c, 0, new Set())) {
                    return true;
                }
            }
        }
    }

    return false;
}

function allFiguresExist() {
    return figures.every(figure => figureExists(figure));
} //<--

//Luotu ChatGPT:n kanssa -->
function buildGrid() {
    const orderedFigures = [...figures].sort((a, b) => b.length - a.length);

    for (let boardAttempt = 0; boardAttempt < 2000; boardAttempt++) {
        grid = Array.from({ length: rows }, () => Array(cols).fill(""));

        let success = true;

        for (const figure of orderedFigures) {
            if(!placeFigure(figure)) {
                success = false;
                break;
            }
        }

        if (!success) continue;
        if(!allFiguresExist()) continue;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (!grid[r][c]) {
                    grid[r][c] = randomLetter();
                }
            }
        }

        return true;
    }

    return false;
} //<--

const gridDiv = document.getElementById("grid");
let selected = [];
let currentFigure = "";

function renderGrid() {
    gridDiv.innerHTML = "";

    for (let r = 0; r < rows; r++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row g-0";

        for (let c = 0; c < cols; c++) {
            const cell = document.createElement("div");
            cell.className = "col cell";
            cell.textContent = grid[r][c];
            cell.onclick = () => handleClick(r, c, cell);
            rowDiv.appendChild(cell);
        }

        gridDiv.appendChild(rowDiv);
    }
}

function renderHintList() {
    document.getElementById("progress").textContent =
        `Figuureja löydetty: ${foundFigures.size} / ${figures.length}`;

    const list = document.getElementById("hintList");
    list.innerHTML = "";

    roundEntries.forEach(({ figure, hint }) => {
        const span = document.createElement("div");
        span.textContent = hint;
        span.className = "hint-item";

        if (foundFigures.has(figure)) {
            span.classList.add("hint-found");
        }

        list.appendChild(span);
    });
}

function isAdjacent(r, c) {
    if (selected.length === 0) return true;
    let [lr, lc] = selected[selected.length - 1];
    return Math.abs(lr - r) <= 1 && Math.abs(lc - c) <= 1;
}

function handleClick(r, c, el) {
    if (!isAdjacent(r, c)) return;
    if (selected.some(([sr, sc]) => sr === r && sc === c)) return;

    selected.push([r, c]);
    currentFigure += grid[r][c];
    el.classList.add("selected");

    document.getElementById("currentFigure").textContent = currentFigure;

    //ChatGPT:n lisäämä pätkä
    if (!trie.startsWith(currentFigure)) {
        resetSelection();
        return;
    }

    if (trie.search(currentFigure) && !foundFigures.has(currentFigure)) {
        foundFigures.add(currentFigure);
        markFound();
        renderHintList();

        if (foundFigures.size === figures.length && !roundCompleted) {
            roundCompleted = true;
            showVictoryScreen();
        }
    }
}

function markFound() {
    const cells = document.querySelectorAll(".cell");

    selected.forEach(([r, c]) => {
        const index = r * cols + c;
        cells[index].classList.remove("selected");
        cells[index].classList.add("found");
    });

    resetSelection();
}

function resetSelection() {
    selected = [];
    currentFigure = "";
    document.getElementById("currentFigure").textContent = "";

    document.querySelectorAll(".cell").forEach(c => {
        c.classList.remove("selected");
    });
}

//ChatGPT:n lisäämä -->
function formatElapsedTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
        return `${hours} h ${minutes} min ${seconds} s`;
    }

    return `${minutes} min ${seconds} s`;
}

function updateTimerDisplay() {
    const timerEl = document.getElementById("timer");
    if (!timerEl) return;

    if (roundStartTime === 0) {
        timerEl.textContent = "0 min 0 s";
        return;
    }

    const elapsed = Date.now() - roundStartTime;
    timerEl.textContent = formatElapsedTime(elapsed)
}

function startTimer() {
    roundStartTime = Date.now();

    clearInterval(timerInterval);
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        if (!roundCompleted) {
            updateTimerDisplay();
        }
    }, 1000);
}

function stopTimer () {
    clearInterval(timerInterval);
    timerInterval = null;
}

function showIntroScreen() {
    const overlay = document.getElementById("introOverlay");
    if (!overlay) return;

    overlay.classList.remove("hidden");
    overlay.setAttribute("aria-hidden", "false");
}

function hideIntroScreen() {
    const overlay = document.getElementById("introOverlay");
    if (!overlay) return;

    overlay.classList.add("hidden");
    overlay.setAttribute("aria-hidden", "true");

    showHints();

    if (!introClosed) {
        introClosed = true;
        startTimer();
    }
}

function showVictoryScreen() {
    const overlay = document.getElementById("victoryOverlay");
    const timeEl = document.getElementById("victoryTime");

    if (!overlay || !timeEl) return;

    stopTimer();

    const elapsed = Date.now() - roundStartTime;
    timeEl.textContent = `Aikasi ${formatElapsedTime(elapsed)}`;

    overlay.classList.remove("hidden");
    overlay.setAttribute("aria-hidden", "false");
}

function hideVictoryScreen() {
    const overlay = document.getElementById("victoryOverlay");
    if (!overlay) return;

    overlay.classList.add("hidden");
    overlay.setAttribute("aria-hidden", "true");
}

function startNewRound(startClock = true) {
    selected = [];
    currentFigure = "";
    roundCompleted = false;
    roundStartTime = 0;

    stopTimer();

    document.getElementById("currentFigure").textContent = "";
    hideVictoryScreen();
    updateTimerDisplay();

    for (let roundAttempt = 0; roundAttempt < 1000; roundAttempt++) {
        setUpRoundData();

        if (buildGrid()) {
            renderGrid();
            renderHintList();

            if (startClock) {
                startTimer();
            }

            return;
        }
    }

    throw new Error("Kierrosta ei saatu luotua!");
}

function showHints() {
    const hintSection = document.getElementById("hintSection");
    if(!hintSection) return;

    hintSection.classList.remove("hidden");
}

function hideHints() {
    const hintSection = document.getElementById("hintSection");
    if(!hintSection) return;

    hintSection.classList.add("hidden");
}

startNewRound(false);
hideHints();
showIntroScreen();

//ChatGPT:n lisäämät -->
document.getElementById("closeIntroBtn")?.addEventListener("click", hideIntroScreen);
document.getElementById("newRoundBtn")?.addEventListener("click", () => startNewRound(true));
document.getElementById("closeVictoryBtn")?.addEventListener("click", hideVictoryScreen);