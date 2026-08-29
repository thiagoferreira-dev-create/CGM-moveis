document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-btn"),
    nav = document.querySelector(".nav");
  menu?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
  });
  document
    .querySelectorAll(".nav a")
    .forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open")),
    );
  const track = document.querySelector(".project-track"),
    cards = [...document.querySelectorAll(".project-card")];
  let index = 0,
    timer;
  function move() {
    if (!track) return;
    const width = cards[0].getBoundingClientRect().width + 20;
    track.style.transform = `translateX(${-index * width}px)`;
  }
  function next() {
    index = (index + 1) % cards.length;
    move();
  }
  function prev() {
    index = (index - 1 + cards.length) % cards.length;
    move();
  }
  document.querySelector(".next")?.addEventListener("click", () => {
    next();
    reset();
  });
  document.querySelector(".prev")?.addEventListener("click", () => {
    prev();
    reset();
  });
  function reset() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }
  reset();
  window.addEventListener("resize", move);
  document.getElementById("year").textContent = new Date().getFullYear();
});
