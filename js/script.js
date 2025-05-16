
let index = 0;
carousel();

function carousel() {
  let i;
  let images = document.querySelectorAll(".carousel img");
  for (i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }
  index++;
  if (index > images.length) { index = 1; }
  images[index - 1].classList.add("active");
  setTimeout(carousel, 4000);
}
