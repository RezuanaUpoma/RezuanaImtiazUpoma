document.querySelectorAll(".dropdown-btn").forEach((button) => {
  button.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("show");
  });
});
