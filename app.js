const body = document.querySelector("body")
const button = document.querySelector("button");
const colors = ["black","yellow","green","red"];

button.addEventListener("click", changeBackground);

let sıra = 0;

function changeBackground() {
    // rastgele bir renk
// const rastgelesayı = Math.floor(Math.random() * colors.length);
// const selectedColor = colors[rastgelesayı]
// console.log(rastgelesayı, selectedColor)
// body.style.background = selectedColor;

    // sıraylla arkaplan resmi seç
    console.log(sıra)
    if(sıra == 4) sıra = 0;
    const secilenRenk = colors[sıra];
    sıra++;
    body.style.backgroundColor = secilenRenk;
}