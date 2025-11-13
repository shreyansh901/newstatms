document.addEventListener("DOMContentLoaded", () => {
  const nameInput   = document.querySelector(".name-input");
  const numberInput = document.querySelector(".number-input");
  const monthInput  = document.querySelector(".date-input .month-input");
  const yearInput   = document.querySelector(".date-input .year-input");
  const cvcInput    = document.querySelector(".cvc-input");

  const nameOutput   = document.querySelector(".name-output");
  const numberOutput = document.querySelector(".number-output");
  const monthOutput  = document.querySelector(".month-output");
  const yearOutput   = document.querySelector(".year-output");
  const cvcOutput    = document.querySelector(".cvc-output");

  const submitBtn = document.querySelector(".btn");
  submitBtn.setAttribute("type", "submit");
  const thankYouScreen = document.querySelector(".thank-you.hidden");

  /* ---------------------------------------------------- */
  /*  Helper – card number formatting                     */
  /* ---------------------------------------------------- */
  function formatNumber(value) {
    return value
      .replace(/\s/g, "")
      .replace(/(.{4})(?=.)/g, "$1 ")
      .trim();
  }

  /* ---------------------------------------------------- */
  /*  Real-time preview                                   */
  /* ---------------------------------------------------- */
  nameInput.addEventListener("input", () => {
    nameOutput.textContent = nameInput.value || "JANE APPLESEED";
  });

  numberInput.addEventListener("input", () => {
    const formatted = formatNumber(numberInput.value);
    numberOutput.textContent = formatted || "0000 0000 0000 0000";
    numberInput.value = formatted;
  });

  monthInput.addEventListener("input", () => {
    const m = monthInput.value.replace(/\s/g, "").slice(0, 2);
    monthInput.value = m;
    monthOutput.textContent = m ? m.padStart(2, "0") : "00";
  });

  yearInput.addEventListener("input", () => {
    const y = yearInput.value.replace(/\s/g, "").slice(0, 2);
    yearInput.value = y;
    yearOutput.textContent = y ? y.padStart(2, "0") : "00";
  });

  cvcInput.addEventListener("input", () => {
    const c = cvcInput.value.replace(/\s/g, "").slice(0, 3);
    cvcInput.value = c;
    cvcOutput.textContent = c || "000";
  });

  /* ---------------------------------------------------- */
  /*  Submit – validation & error handling                */
  /* ---------------------------------------------------- */
  submitBtn.addEventListener("click", e => {
    e.preventDefault();
    let valid = true;

    /* ---- clear previous errors (adds .empty where needed) ---- */
    document.querySelectorAll(".error").forEach(el => {
      el.textContent = "";
      el.style.display = "none";
      el.classList.remove("invalid", "empty");
    });

    /* ---- NAME ---- */
    if (!nameInput.value.trim()) {
      showError(nameInput, "Can't be blank", true);   // true → blank
      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
      showError(nameInput, "Wrong format, letters only");
      valid = false;
    }

    /* ---- CARD NUMBER ---- */
    if (!numberInput.value.trim()) {
      showError(numberInput, "Can't be blank", true);
      valid = false;
    } else {
      const clean = numberInput.value.replace(/\s/g, "");
      if (!/^\d{16}$/.test(clean)) {
        showError(numberInput, "Wrong format, numbers only");
        valid = false;
      }
    }

    /* ---- MONTH ---- */
    if (!monthInput.value.trim()) {
      showError(monthInput, "Can't be blank", true);
      valid = false;
    } else if (!/^\d{2}$/.test(monthInput.value) ||
               +monthInput.value < 1 ||
               +monthInput.value > 12) {
      showError(monthInput, "Wrong format, numbers only");
      valid = false;
    }

    /* ---- YEAR ---- */
    if (!yearInput.value.trim()) {
      showError(yearInput, "Can't be blank", true);
      valid = false;
    } else if (!/^\d{2}$/.test(yearInput.value)) {
      showError(yearInput, "Wrong format, numbers only");
      valid = false;
    }

    /* ---- CVC ---- */
    if (!cvcInput.value.trim()) {
      showError(cvcInput, "Can't be blank", true);
      valid = false;
    } else if (!/^\d{3}$/.test(cvcInput.value)) {
      showError(cvcInput, "Wrong format, numbers only");
      valid = false;
    }

    /* ---- SUCCESS ---- */
    if (valid) {
      document.getElementById("card-form").style.display = "none";
      thankYouScreen.classList.remove("hidden");
    }
  });

  /* ---------------------------------------------------- */
  /*  showError – now adds BOTH .invalid AND .empty       */
  /* ---------------------------------------------------- */
  function showError(inputEl, message, isBlank = false) {
    let errorSpan;

    /* Date fields share one error after the wrapper */
    if (inputEl.closest(".date-input")) {
      errorSpan = inputEl.closest(".date-input").nextElementSibling;
    } else {
      /* Find the first .error that comes **after** the input */
      const siblings = Array.from(inputEl.parentNode.children);
      errorSpan = siblings.find(sib =>
        sib !== inputEl &&
        sib.classList?.contains("error") &&
        (sib.compareDocumentPosition(inputEl) & Node.DOCUMENT_POSITION_FOLLOWING)
      );
    }

    if (errorSpan) {
      errorSpan.textContent = message;
      errorSpan.style.display = "block";

      /* Always add .invalid (used by most tests) */
      errorSpan.classList.add("invalid");

      /* Add .empty only for blank-field errors */
      if (isBlank) errorSpan.classList.add("empty");
    } else {
      console.warn("No error span for:", inputEl);
    }
  }

  /* ---------------------------------------------------- */
  /*  Reset (Continue button)                             */
  /* ---------------------------------------------------- */
  window.resetForm = function () {
    document.getElementById("card-form").style.display = "flex";
    thankYouScreen.classList.add("hidden");

    [nameInput, numberInput, monthInput, yearInput, cvcInput].forEach(i => i.value = "");

    nameOutput.textContent   = "JANE APPLESEED";
    numberOutput.textContent = "0000 0000 0000 0000";
    monthOutput.textContent  = "00";
    yearOutput.textContent   = "00";
    cvcOutput.textContent    = "000";

    document.querySelectorAll(".error").forEach(el => {
      el.textContent = "";
      el.style.display = "none";
      el.classList.remove("invalid", "empty");
    });
  };
}); //done