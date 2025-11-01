let img = document.querySelector('img');
let h2 = document.querySelector('h2');

let prevSrc = img.src;
let prevText = h2.innerText;

img.addEventListener("mouseover", () => {
  img.src = "https://cdn.pixabay.com/photo/2018/05/12/03/42/eiffle-tower-3392363_1280.jpg";
  img.style.transition = "5s ease";
  h2.innerText = "paris";
});

img.addEventListener("mouseleave", () => {
  img.src="https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_1280.jpg";
  img.style.transition = "5s ease";
  h2.innerText = "London";
});
