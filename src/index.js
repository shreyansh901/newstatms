document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.querySelector(".name-input");
  const numberInput = document.querySelector(".number-input");
  const monthInput = document.querySelector(".date-input .month-input");
  const yearInput = document.querySelector(".date-input .year-input");
  const cvcInput = document.querySelector(".cvc-input");

  const nameOutput = document.querySelector(".name-output");
  const numberOutput = document.querySelector(".number-output");
  const monthOutput = document.querySelector(".month-output");
  const yearOutput = document.querySelector(".year-output");
  const cvcOutput = document.querySelector(".cvc-output");

  const submitButtons = document.querySelector('button[type="submit"]');
  const thankYouScreen = document.querySelector(".thank-you.hidden");

  // Helper to format card number with spaces after every 4 digits
  function formatNumber(value) {
    return value
      .replace(/\s/g, "")
      .replace(/(.{4})(?=.)/g, "$1 ")
      .trim();
  }

  // Real-time updates
  nameInput.addEventListener("input", () => {
    nameOutput.textContent = nameInput.value || "JANE APPLESEED";
    console.log(nameInput.value);
  });

  numberInput.addEventListener("input", () => {
    const formatted = formatNumber(numberInput.value);
    numberOutput.textContent = formatted || "0000 0000 0000 0000";
    numberInput.value = formatted;
    console.log(numberInput.value);
  });

  monthInput.addEventListener("input", () => {
    let month = monthInput.value.replace(/\s/g, "").slice(0, 2);
    monthInput.value = month;
    monthOutput.textContent = month ? month.padStart(2, "0") : "00";
    console.log(monthInput.value);
  });

  yearInput.addEventListener("input", () => {
    let year = yearInput.value.replace(/\s/g, "").slice(0, 2);
    yearInput.value = year;
    yearOutput.textContent = year ? year.padStart(2, "0") : "00";
    console.log(yearInput.value);
  });

  cvcInput.addEventListener("input", () => {
    let cvc = cvcInput.value.replace(/\s/g, "").slice(0, 3);
    cvcInput.value = cvc;
    cvcOutput.textContent = cvc || "000";
    console.log(cvcInput.value);
  });

  // Submit button logic (no form used)

  submitButtons.addEventListener("click", function (e) {
    e.preventDefault(); // prevent default behavior
    let valid = true;

    console.log("submitButtons", submitButtons);
    // Clear previous errors
    document.querySelectorAll(".error").forEach((el) => {
      el.textContent = "";
      el.style.display = "none";
    });

    // Validation logic
    if (!nameInput.value.trim()) {
      showError(nameInput, "Can't be blank");
      valid = false;
      console.log(nameInput.value);
    } else if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
      showError(nameInput, "Wrong format, letters only");
      valid = false;
      console.log(nameInput.value);
    }

    if (!numberInput.value.trim()) {
      showError(numberInput, "Can't be blank");
      valid = false;
      console.log(numberInput.value);
    } else {
      const numClean = numberInput.value.replace(/\s/g, "");
      if (!/^\d{16}$/.test(numClean)) {
        showError(numberInput, "Wrong format, numbers only");
        valid = false;
        console.log(numberInput.value);
      }
    }

    if (!monthInput.value.trim()) {
      showError(monthInput, "Can't be blank");
      valid = false;
      console.log(monthInput.value);
    } else if (
      !/^\d{2}$/.test(monthInput.value) ||
      +monthInput.value < 1 ||
      +monthInput.value > 12
    ) {
      showError(monthInput, "Wrong format, numbers only");
      valid = false;
      console.log(monthInput.value);
    }

    if (!yearInput.value.trim()) {
      showError(yearInput, "Can't be blank");
      valid = false;
      console.log(yearInput.value);
    } else if (!/^\d{2}$/.test(yearInput.value)) {
      showError(yearInput, "Wrong format, numbers only");
      valid = false;
      console.log(yearInput.value);
    }

    if (!cvcInput.value.trim()) {
      showError(cvcInput, "Can't be blank");
      valid = false;
      console.log(cvcInput.value);
    } else if (!/^\d{3}$/.test(cvcInput.value)) {
      showError(cvcInput, "Wrong format, numbers only");
      valid = false;
      console.log(cvcInput.value);
    }

    // Show thank-you screen if valid
    if (valid) {
      document.getElementById("card-form").style.display = "none"; // hide the form container
      thankYouScreen.classList.remove("hidden");
    }
  });

  // Helper to display error messages
  function showError(inputEl, message) {
    let errorSpan;
    if (inputEl.closest(".date-input")) {
      errorSpan = inputEl.closest(".date-input").nextElementSibling;
    } else {
      errorSpan = inputEl.nextElementSibling;
    }
    if (errorSpan) {
      errorSpan.textContent = message;
      errorSpan.style.display = "block";
    }
  }

  // Reset function (no form element reference)
  window.resetForm = function () {
    document.getElementById("card-form").style.display = "flex";
    thankYouScreen.classList.add("hidden");

    // Reset all inputs
    [nameInput, numberInput, monthInput, yearInput, cvcInput].forEach(
      (input) => (input.value = "")
    );

    // Reset outputs
    nameOutput.textContent = "JANE APPLESEED";
    numberOutput.textContent = "0000 0000 0000 0000";
    monthOutput.textContent = "00";
    yearOutput.textContent = "00";
    cvcOutput.textContent = "000";

    // Clear all errors
    document.querySelectorAll(".error").forEach((el) => {
      el.textContent = "";
      el.style.display = "none";
    });
  };
});
