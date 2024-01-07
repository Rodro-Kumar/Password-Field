const unshow = document.querySelector(".unshow");

const input = document.querySelector("input");

const show = document.querySelector(".show");

unshow.addEventListener("click", function () {
  show.style.display = "block";
  unshow.style.display = "none";
  input.type = "password";
});

show.addEventListener("click", function () {
  input.type = "text";
  show.style.display = "none";
  unshow.style.display = "block";
});
