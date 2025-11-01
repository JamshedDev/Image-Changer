let img = document.querySelector('img');
let h2 = document.querySelector('h2');

let prevSrc = img.src;
let prevText = h2.innerText;

img.addEventListener("mouseover", () => {
  img.src = "../Asset/image/2025-porsche-911-gt3-104-67127826cc9ba.avif";
  img.style.transition = "5s ease";
  h2.innerText = "Porsche";
});

img.addEventListener("mouseleave", () => {
  img.src="../Asset/image/gwagon.jpg";
  img.style.transition = "5s ease";
  h2.innerText = "Gwagon";
});
