document.addEventListener("DOMContentLoaded", () => {
    console.log("About page loaded successfully.");
  
    // Example: Add a keyboard shortcut (Alt + A) to jump to "About Mission"
    document.addEventListener("keydown", (event) => {
      if (event.altKey && event.key.toLowerCase() === "a") {
        event.preventDefault();
        const mission = document.querySelector("h2");
        if (mission) {
          mission.setAttribute("tabindex", "-1");
          mission.focus();
        }
      }
    });
  });
  // Handle Accessibility Dialog
const dialog = document.getElementById("accessibilityDialog");
const openBtn = document.getElementById("openDialogBtn");
const closeBtn = document.getElementById("closeDialog");

if (dialog && openBtn && closeBtn) {
  openBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
} 
