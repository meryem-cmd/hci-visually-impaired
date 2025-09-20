document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formError = document.getElementById("formError");
  const speakBtn = document.getElementById("formSpeakBtn");
  const stopBtn = document.getElementById("formStopBtn");
  const toggleBtn = document.getElementById("toggleScreenReader");
  const liveRegion = document.getElementById("liveRegion"); // ✅ for announcements

  let screenReaderEnabled = true; // ✅ enabled by default

  if (!form) {
    console.error("❌ contactForm not found!");
    return;
  }

  console.log("✅ contact.js loaded, form found");

  // ---------------------------
  // Utility: Speak text aloud
  // ---------------------------
  function speakText(text) {
    if (!screenReaderEnabled) return;
    if (!text) return;

    console.log("🔊 Speaking:", text);

    if (!("speechSynthesis" in window)) {
      console.error("❌ SpeechSynthesis not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel(); // stop ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  }

  // ---------------------------
  // Utility: Announce (for real SR)
  // ---------------------------
  function announce(text) {
    if (liveRegion) {
      liveRegion.textContent = ""; // clear old content to retrigger SR
      setTimeout(() => {
        liveRegion.textContent = text;
      }, 50);
    }
  }

  // ---------------------------
  // Helper: Read element label/help/value
  // ---------------------------
  function readElement(el) {
    if (!screenReaderEnabled) return;

    // Case: links
    if (el.tagName.toLowerCase() === "a") {
      const linkText = el.textContent.trim() || "Link";
      speakText(`Link: ${linkText}. Activating this will download the file.`);
      return;
    }

    let labelText = "";
    const label = form.querySelector(`label[for="${el.id}"]`);
    if (label) {
      labelText = label.textContent.trim();
    }

    // Include help text
    let helpText = "";
    const describedBy = el.getAttribute("aria-describedby");
    if (describedBy) {
      const helpEl = document.getElementById(describedBy);
      if (helpEl) {
        helpText = helpEl.textContent.trim();
      }
    }

    // Include current value
    let valueText = "";
    if (el.value) {
      valueText = `Current value: ${el.value}`;
    }

    const finalText = [labelText, helpText, valueText].filter(Boolean).join(". ");
    speakText(finalText);
  }

  // ---------------------------
  // Field-level speech
  // ---------------------------
  form.querySelectorAll("input, textarea, select, button, a").forEach(el => {
    el.addEventListener("focus", () => {
      window.speechSynthesis.cancel(); // ✅ stop overlap
      readElement(el);
    });

    el.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        window.speechSynthesis.cancel(); // ✅ stop overlap
        readElement(el);
      }
    });

    el.addEventListener("click", () => {
      window.speechSynthesis.cancel(); // ✅ stop overlap
      readElement(el);
    });
  });

  // ---------------------------
  // Form Validation
  // ---------------------------
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = [];

    document.querySelectorAll(".error-message").forEach(el => (el.textContent = ""));
    formError.textContent = "";

    const nameInput = document.getElementById("name");
    if (!nameInput.value.trim()) {
      errors.push("Name is required.");
      document.getElementById("nameError").textContent = "Please enter your name.";
    }

    const emailInput = document.getElementById("email");
    if (!emailInput.value.trim()) {
      errors.push("Email is required.");
      document.getElementById("emailError").textContent = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
      errors.push("Email is not valid.");
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
    }

    const messageInput = document.getElementById("message");
    if (!messageInput.value.trim()) {
      errors.push("Message is required.");
      document.getElementById("messageError").textContent = "Please enter your message.";
    }

    if (errors.length > 0) {
      const errorSummary = `Form submission failed. ${errors.length} error(s): ${errors.join(" ")}`;
      formError.textContent = errorSummary;
      speakText(errorSummary);
      announce(errorSummary); // ✅ announce to real SR
    } else {
      const successMsg = "Form submitted successfully!";
      formError.textContent = successMsg;
      speakText(successMsg);
      announce(successMsg); // ✅ announce to real SR
      form.reset();
    }
  });

  // ---------------------------
  // Reset Handling
  // ---------------------------
  form.addEventListener("reset", () => {
    document.querySelectorAll(".error-message").forEach(el => (el.textContent = ""));
    formError.textContent = "";
    window.speechSynthesis.cancel();
    console.log("🔄 Form reset, errors cleared, speech stopped");
    announce("Form reset"); // ✅ real SR feedback
  });

  // ---------------------------
  // Read Whole Form Aloud
  // ---------------------------
  if (speakBtn) {
    speakBtn.addEventListener("click", () => {
      if (!screenReaderEnabled) return;
      let textToRead = "";
      form.querySelectorAll("label, small, button, a").forEach(el => {
        textToRead += el.textContent.trim() + ". ";
      });
      speakText(textToRead);
      announce("Reading entire form"); // ✅ announce to SR
    });
  }

  // ---------------------------
  // Stop Reading Button
  // ---------------------------
  if (stopBtn) {
    stopBtn.addEventListener("click", () => {
      window.speechSynthesis.cancel();
      console.log("⏹️ Speech stopped by user");
      announce("Speech stopped"); // ✅ announce
    });
  }

  // ---------------------------
  // ✅ Toggle Screen Reader On/Off
  // ---------------------------
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      screenReaderEnabled = !screenReaderEnabled;
      window.speechSynthesis.cancel();

      toggleBtn.textContent = screenReaderEnabled
        ? "🔇 Disable Form Screen Reader"
        : "🔊 Enable Form Screen Reader";

      const statusMsg = `Screen Reader ${screenReaderEnabled ? "Enabled" : "Disabled"}`;
      console.log(`🎚️ ${statusMsg}`);
      announce(statusMsg); // ✅ announce toggle
    });
  }
});
