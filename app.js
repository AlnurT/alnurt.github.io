let tg = window.Telegram.WebApp;
let info = document.getElementById("info_btn");
let rules = document.getElementById("rules_btn");
let address = document.getElementById("address");
let tel = document.getElementById("tel");

info.addEventListener("click", () => {
    document.getElementById("info").style.display = "block";
    document.getElementById("rules").style.display = "none";
});

rules.addEventListener("click", () => {
    document.getElementById("info").style.display = "none";
    document.getElementById("rules").style.display = "block";
});

address.addEventListener("click", () => {
    tg.openLink("https://yandex.ru/maps/org/klub_voinskogo_iskusstva_teskao_bely_volk/1694603185/?ll=30.339000%2C59.967488&z=18");
});

tel.addEventListener("click", () => {
    document.execCommand("copy", true, "+79006200637")

    tel.style.background = "var(--tg-theme-secondary-bg-color)";
    setTimeout(() => {
        tel.style.background = "var(--tg-theme-button-color)";
    }, 1000);

});

