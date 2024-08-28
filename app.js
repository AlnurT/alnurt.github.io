let tg = window.Telegram.WebApp;
let info = document.getElementById("info_btn");
let rules = document.getElementById("rules_btn");

info.addEventListener("click", () => {
    document.getElementById("info").style.display = "block";
    document.getElementById("rules").style.display = "none";
});

rules.addEventListener("click", () => {
    document.getElementById("info").style.display = "none";
    document.getElementById("rules").style.display = "block";
});
