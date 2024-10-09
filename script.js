const plusBtn = document.querySelectorAll(".accordion-question button");

let states = new Array(plusBtn.length).fill(true);
plusBtn.forEach((el, i) =>
  el.addEventListener("click", function (e) {
    states[i] = states[i] ? false : true;
    const target = e.target.parentElement.parentElement.nextElementSibling;
    e.target.src = `./assets/images/icon-${states[i] ? "plus" : "minus"}.svg`;

    target.classList.toggle("hidden");
  })
);
