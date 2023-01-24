const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkdovideo = video.src;

function alternarmodal(){
   modal.classList.toggle("aberto");

}

botaoTrailer.addEventListener("click",() => {
   alternarmodal();
   video.setAttribute("src", linkdovideo);
});

botaoFecharModal.addEventListener("click", () => {
   alternarmodal();
   video.setAttribute("src", "");
});








