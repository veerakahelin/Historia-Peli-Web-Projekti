//Käytin ChatGPT 5.4sta erikseen mainituissa kohdissa!
//PS. Olen kuitenkin kirjoittanut kaiken koodin tänne itse

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
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
}

//ChatGPT:n hiukan muokkaama koodia -->
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
        hint: "Johtaja, joka tunnettiin nimellä 'Rautakansleri'"
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
const ROUND_SIZE = 10;

let roundEntries = [];
let figures = [];
let trie = new Trie();
let foundFigures = new Set();
let placedPaths = new Map();
let lockedCells = new Set();
let roundStartTime = 0;
let roundCompleted = false;
let timerInterval = null;
let introClosed = false; //<--

const rows = 7;
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
    placedPaths = new Map();
    lockedCells = new Set();
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

    function dfs(r, c, index, visited, path) {
        if (!canUseCell(r, c, visited)) return false;

        const key = `${r},${c}`;
        visited.add(key);
        path.push([r, c]);
        grid[r][c] = figure[index];

        if (index === figure.length - 1) {
            return true;
        }

        for (const [dr, dc] of shuffle(dirs)) {
            if (dfs(r + dr, c + dc, index + 1, visited, path)) {
                return true;
            }
        }

        visited.delete(key);
        path.pop();
        grid[r][c] = "";
        return false;
    }

    for (const [r, c] of shuffle(startCells)) {
        const path = [];
        if (dfs(r, c, 0, new Set(), path)) {
            placedPaths.set(figure, [...path]);
            return true;
        }
    }

    return false;
} //<--

//Luotu ChatGPT:n kanssa -->
function collectFigureOccurrences() {
    const counts = new Map(figures.map(figure => [figure, 0]));

    function dfs(r, c, node, currentWord, visited) {
        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols
        ) {
            return;
        }

        const key = `${r},${c}`;
        if (visited.has(key)) return;

        const char = grid[r][c];
        const nextNode = node.children[char];
        if (!nextNode) return;

        visited.add(key);
        const nextWord = currentWord + char;

        if (nextNode.isEnd && counts.has(nextWord)) {
            counts.set(nextWord, counts.get(nextWord) + 1);
        }

        for (const [dr, dc] of dirs) {
            dfs(r + dr, c + dc, nextNode, nextWord, visited)
        }

        visited.delete(key);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, trie.root, "", new Set());
        }
    }

    return counts;
}

function hasExactlyOneOccurrencePerFigure() {
    const counts = collectFigureOccurrences();
    return figures.every(figure => counts.get(figure) === 1);
}

function buildGrid() {
    const orderedFigures = [...figures].sort((a, b) => b.length - a.length);

    for (let boardAttempt = 0; boardAttempt < 2000; boardAttempt++) {
        grid = Array.from({ length: rows }, () => Array(cols).fill(""));
        placedPaths = new Map();

        let success = true;

        for (const figure of orderedFigures) {
            if (!placeFigure(figure)) {
                success = false;
                break;
            }
        }

        if (!success) continue;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (!grid[r][c]) {
                    grid[r][c] = randomLetter();
                }
            }
        }

        if (!hasExactlyOneOccurrencePerFigure()) continue;

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

//ChatGPT:n kanssa luotu -->
function sameCoord(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}

function matchesPathPrefix(path, selection) {
    if (!path || selection.length > path.length) return false;

    for (let i = 0; i < selection.length; i++) {
        if (!sameCoord(path[i], selection[i])) {
            return false;
        }
    }

    return true;
}

function isExactSelectedPath(figure) {
    const path = placedPaths.get(figure);
    return path && path.length === selected.length && matchesPathPrefix(path, selected);
}

function updateCurrentFigure() {
    currentFigure = selected.map(([r, c]) => grid[r][c]).join("");
    document.getElementById("currentFigure").textContent = currentFigure || "\u00A0";
}

function handleClick(r, c, el) {
    if (roundCompleted) return; //<-- ChatGPT:n lisäämä

    const key = `${r},${c}`; //<-- ChatGPT:n lisäämä

//ChatGPT:n lisäämä -->
    if (lockedCells.has(key)) return;

    const last = selected[selected.length - 1];

    if (last && sameCoord(last, [r, c])) {
        selected.pop();
        el.classList.remove("selected");
        updateCurrentFigure();
        playClickSound();
        return;
    } //<--

    if (selected.some(([sr, sc]) => sr === r && sc === c)) return;

    if (!isAdjacent(r, c)) return;

    selected.push([r, c]);
    el.classList.add("selected");
    updateCurrentFigure();
    playClickSound();

    //ChatGPT:n lisäämä pätkä -->
    if (
        !foundFigures.has(currentFigure) &&
        isExactSelectedPath(currentFigure)
    ) {
        foundFigures.add(currentFigure);
        markFound();
        renderHintList();
        playFoundSound();

        if (foundFigures.size === figures.length) {
            roundCompleted = true;
            const finalElapsed = Date.now() - roundStartTime;
            setTimeout(() => showVictoryScreen(finalElapsed), 450);
        }
    }
} //<--

function markFound() {
    const cells = document.querySelectorAll(".cell");

    selected.forEach(([r, c]) => {
        const key = `${r},${c}`;
        lockedCells.add(key);

        const index = r * cols + c;
        cells[index].classList.add("found");
    });

    resetSelection();
}

function resetSelection() {
    selected = [];
    currentFigure = "";
    document.querySelectorAll(".cell").forEach(c => {
        c.classList.remove("selected");
    });
    updateCurrentFigure();
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
    timerEl.textContent = formatElapsedTime(elapsed);
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

function stopTimer() {
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

    if (!introClosed) {
        introClosed = true;
        startTimer();
    }
}

function playVictorySound() {
    const audio = document.getElementById("victorySound");
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0.8;

    audio.play().catch(err => {
        console.warn("Voitto musiikkia ei voitu toistaa:", err);
    });
}

function playClickSound() {
    const audio = document.getElementById("clickSound");
    if (!audio) return;

    audio.currentTime = 0;
    audio.volume = 0.5;

    audio.play().catch(err => {
        console.warn("Painamisääntä ei voitu toistaa:", err);
    });
}

function playFoundSound() {
    const audio = document.getElementById("foundSound");
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0.8;

    audio.play().catch(err => {
        console.warn("Löytöääntä ei voitu toistaa:", err);
    });
}

function showVictoryScreen(elapsedOverride = null) {
    const overlay = document.getElementById("victoryOverlay");
    const timeEl = document.getElementById("victoryTime");

    if (!overlay || !timeEl) return;

    stopTimer();
    resetSelection();
    gridDiv.classList.add("grid-locked");

    const elapsed = elapsedOverride ?? (Date.now() - roundStartTime);
    timeEl.textContent = `Aikasi ${formatElapsedTime(elapsed)}`;

    overlay.classList.remove("hidden");
    overlay.setAttribute("aria-hidden", "false");

    playVictorySound();
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
    gridDiv.classList.remove("grid-locked");

    document.getElementById("currentFigure").textContent = "\u00a0";
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
    const openBtn = document.getElementById("openHintsBtn");
    if (!hintSection) return;

    hintSection.classList.remove("hidden");
    hintSection.setAttribute("aria-hidden", "false");
    openBtn?.setAttribute("aria-expanded", "true");
}

function hideHints() {
    const hintSection = document.getElementById("hintSection");
    const openBtn = document.getElementById("openHintsBtn");
    if (!hintSection) return;

    hintSection.classList.add("hidden");
    hintSection.setAttribute("aria-hidden", "true");
    openBtn?.setAttribute("aria-expanded", "false");
}

function toggleHints() {
    const hintSection = document.getElementById("hintSection");
    if (!hintSection) return;

    if (hintSection.classList.contains("hidden")) {
        showHints();
    } else {
        hideHints();
    }
}

function initializeHintPanel() {
    const panel = document.getElementById("hintSection");
    const header = document.getElementById("hintPanelHeader");

    if (!panel || !header) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;

    header.addEventListener("pointerdown", (e) => {
        if (e.target.closest("button")) return;

        const rect = panel.getBoundingClientRect();

        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = rect.left;
        startTop = rect.top;

        panel.style.left = `${rect.left}px`;
        panel.style.top = `${rect.top}px`;
        panel.style.right = "auto";
        panel.style.bottom = "auto";

        header.setPointerCapture?.(e.pointerId);
    });

    header.addEventListener("pointermove", (e) => {
        if (!isDragging) return;

        const nextLeft = startLeft + (e.clientX - startX);
        const nextTop = startTop + (e.clientY - startY);

        const maxLeft = Math.max(12, window.innerWidth - panel.offsetWidth - 12);
        const maxTop = Math.max(12, window.innerHeight - panel.offsetHeight - 12);

        panel.style.left = `${Math.min(Math.max(12, nextLeft), maxLeft)}px`;
        panel.style.top = `${Math.min(Math.max(12, nextTop), maxTop)}px`;
    });

    function stopDragging(e) {
        if (!isDragging) return;
        isDragging = false;

        if (e && header.hasPointerCapture?.(e.pointerId)) {
            header.releasePointerCapture(e.pointerId);
        }
    }

    header.addEventListener("pointerup", stopDragging);
    header.addEventListener("pointercancel", stopDragging);
}

function leaveGame() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "./index.html";
    }
}

startNewRound(false);
hideHints();
showIntroScreen();

//ChatGPT:n lisäämät -->
document.getElementById("closeIntroBtn")?.addEventListener("click", hideIntroScreen);
document.getElementById("newRoundBtn")?.addEventListener("click", () => startNewRound(true));
document.getElementById("closeVictoryBtn")?.addEventListener("click", hideVictoryScreen);

document.getElementById("openHintsBtn")?.addEventListener("click", toggleHints);
document.getElementById("closeHintsBtn")?.addEventListener("click", hideHints);

document.getElementById("leaveGameBtn")?.addEventListener("click", leaveGame);

initializeHintPanel();