var boribKelishDolar = 500;
var mexmonxonaDolar = 250;
var muzeyEvro = 120;
var onedolar = 10966.96;
var oneEvro = 11181.36;
var elText = document.querySelector(".js-header");
var borPul = prompt("Sayohat uchun pullingizni yozing so`mda");

console.log(borPul);

var dolarToSum = `${boribKelishDolar} + ${mexmonxonaDolar} * ${onedolar}`;
var evroToSum = `${muzeyEvro} * ${oneEvro}`;

var xarajatlar = `${evroToSum} + ${dolarToSum}`;

var qaloldinganPul = `${borPul} - ${xarajatlar}`;

if (borPul <= xarajatlar) {
  elText.textContent = "Oq yo’l, Jonibek!";
} else (borPul > xarajatlar) {
    elText.textContent = "  Jonibek, Shahzoddan so’ra, balki berar! U ham bermasa bollardan so’ra! Ularam bermasa uyda telefonda kino ko’r."
}
