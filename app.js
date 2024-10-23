let tg = window.Telegram.WebApp;
let info = document.getElementById("info_btn");
let rules = document.getElementById("rules_btn");
let address = document.getElementById("address");
let tel_admin = document.getElementById("tel_admin");
let tel_capt = document.getElementById("tel_capt");
let players = document.getElementById("players");
let price = document.getElementById("price");


info.addEventListener("click", () => {
    document.getElementById("info").style.display = "block";
    document.getElementById("info_btn").style.display = "none";
    document.getElementById("rules").style.display = "none";
    document.getElementById("rules_btn").style.display = "block";
});

rules.addEventListener("click", () => {
    document.getElementById("info").style.display = "none";
    document.getElementById("info_btn").style.display = "block";
    document.getElementById("rules").style.display = "block";
    document.getElementById("rules_btn").style.display = "none";
});

address.addEventListener("click", () => {
    tg.openLink("https://yandex.ru/maps/org/klub_voinskogo_iskusstva_teskao_bely_volk/1694603185/?ll=30.339000%2C59.967488&z=18");
});

tel_admin.addEventListener("click", () => {
    navigator.clipboard.writeText('+79119673502');
    tg.showAlert("Телефон скопирован");
});

tel_capt.addEventListener("click", () => {
    navigator.clipboard.writeText('+79006200637');
    tg.showAlert("Телефон скопирован");
});

players.oninput = function () {
    let pl = players.value
    price.innerHTML = (pl < 8 || pl > 18) ? "ошибка" : Math.round(3500 / pl);
}
