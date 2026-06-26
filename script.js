function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function openPreview(title, filePath) {
  const previewPanel = document.getElementById("previewPanel");
  const overlay = document.getElementById("overlay");
  const previewTitle = document.getElementById("previewTitle");
  const previewFrame = document.getElementById("previewFrame");
  const downloadLink = document.getElementById("downloadLink");

  previewTitle.textContent = title;
  previewFrame.data = filePath + "#toolbar=1&navpanes=0&scrollbar=1";
  downloadLink.href = filePath;

  previewPanel.classList.add("active");
  overlay.classList.add("active");
}

function closePreview() {
  const previewPanel = document.getElementById("previewPanel");
  const overlay = document.getElementById("overlay");
  const previewFrame = document.getElementById("previewFrame");
  const downloadLink = document.getElementById("downloadLink");

  previewPanel.classList.remove("active");
  overlay.classList.remove("active");

  setTimeout(() => {
    previewFrame.data = "";
    downloadLink.href = "";
  }, 300);
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closePreview();
  }
});