const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Default is light mode
let isDark = false;
updateModeUI();

toggleButton.addEventListener("click", () => {
  isDark = !isDark;
  updateModeUI();
});

function updateModeUI() {
  body.classList.toggle("dark-mode", isDark);
  body.classList.toggle("light-mode", !isDark);
}
