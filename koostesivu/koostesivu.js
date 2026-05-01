document.getElementById("g1").textContent = sessionStorage.getItem("tehdas_score") ?? "-";
document.getElementById("g2").textContent = sessionStorage.getItem("itsenäistyminen_score") ?? "-";
document.getElementById("g3").textContent = sessionStorage.getItem("figuurit_score") ?? "-";
document.getElementById("g4").textContent = sessionStorage.getItem("vuosipeli_score") ?? "-";