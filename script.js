const quesBtn = document.querySelectorAll(".accordion-question");

quesBtn.forEach((el) => el.addEventListener("click", toggle));

function toggle(e) {
  const ans = this.nextSibling.nextSibling;

  if (ans.classList.contains("hidden")) {
    this.querySelector("img").setAttribute(
      "src",
      "./assets/images/icon-minus.svg"
    );
    ans.classList.remove("hidden");
  } else {
    this.querySelector("img").setAttribute(
      "src",
      "./assets/images/icon-plus.svg"
    );
    ans.classList.add("hidden");
  }
}
