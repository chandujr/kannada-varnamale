const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

let isDark = localStorage.getItem("theme") == "dark";

updateModeUI();

toggleButton.addEventListener("click", () => {
  isDark = !isDark;
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateModeUI();
});

function updateModeUI() {
  body.classList.toggle("dark-mode", isDark);
  body.classList.toggle("light-mode", !isDark);
}
