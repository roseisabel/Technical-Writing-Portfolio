
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function openPreview(title, filePath) {
  const previewPanel = document.getElementById("previewPanel");
  const overlay = document.getElementById("overlay");
  const previewTitle = document.getElementById("previewTitle");
  const previewFrame = document.getElementById("previewFrame");

  previewTitle.textContent = title;
  previewFrame.src = filePath;

  previewPanel.classList.add("active");
  overlay.classList.add("active");
}

function closePreview() {
  const previewPanel = document.getElementById("previewPanel");
  const overlay = document.getElementById("overlay");
  const previewFrame = document.getElementById("previewFrame");

  previewPanel.classList.remove("active");
  overlay.classList.remove("active");

  setTimeout(() => {
    previewFrame.src = "";
  }, 300);
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closePreview();
  }
});
