const html = document.querySelector(".zawartosc .kody .html").value;
const css = document.querySelector(".zawartosc .kody .css").value;
const wynik = document.querySelector(".zawartosc #wynik");
const styl = document.querySelector("#stylCSS");

function kompilujHTML(pole)
{
    wynik.innerHTML = pole.value;
}

function kompilujCSS(pole)
{
    styl.innerHTML = pole.value;
}