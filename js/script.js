
let index = 0;
carousel();
function carousel() {
  let imgs = document.querySelectorAll(".carousel img");
  imgs.forEach(img => img.classList.remove("active"));
  index = (index + 1) % imgs.length;
  imgs[index].classList.add("active");
  setTimeout(carousel, 4000);
}
