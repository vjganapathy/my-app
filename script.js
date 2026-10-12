
const themeBtn = document.getElementById("themeBtn");
const projectBtn = document.getElementById("projectBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light";
  } else {
    themeBtn.textContent = "🌙 Theme";
  }
});

projectBtn.addEventListener("click", function () {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
});