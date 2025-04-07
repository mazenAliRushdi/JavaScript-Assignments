document.addEventListener("DOMContentLoaded", function () {
  const allLinks = document.querySelectorAll("a");

  for (let i = 0; i < allLinks.length; i++) {
    const link = allLinks[i];
    if (
      link.classList.contains("open") &&
      link.textContent.trim() === "Elzero"
    ) {
      window.location.href = link.href;
    }
  }
});
