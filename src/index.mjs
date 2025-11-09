import "./styles.css";

// Input fields
const nameInput = document.querySelector(".name-input");
const numberInput = document.querySelector(".number-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const cvcInput = document.querySelector(".cvc-input");

// Output display elements
const nameOutput = document.querySelector(".name-output");
const numberOutput = document.querySelector(".number-output");
const monthOutput = document.querySelector(".month-output");
const yearOutput = document.querySelector(".year-output");
const cvcOutput = document.querySelector(".cvc-output");

// Form, submit button, and modal elements
const form = document.getElementById("card-form");
const subbut = document.querySelector('button[type="submit"]');
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".btn.close");

// Real-time input updates
nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value || "JANE APPLESEED";
});

numberInput.addEventListener("input", () => {
  // Remove non-numeric chars and add space every 4 digits
  let value = numberInput.value.replace(/\s/g, "");
  value = value.replace(/(.{4})(?=.)/g, "$1 ").trim();
  numberOutput.textContent = value || "0000 0000 0000 0000";
  numberInput.value = value;
});

monthInput.addEventListener("input", () => {
  monthOutput.textContent = monthInput.value || "00";
});

yearInput.addEventListener("input", () => {
  yearOutput.textContent = yearInput.value || "00";
});

cvcInput.addEventListener("input", () => {
  cvcOutput.textContent = cvcInput.value || "000";
});

// Validation helper functions
function isNameValid(str) {
  return /^[A-Za-z ]+$/.test(str);
}

function isNumberValid(str) {
  return /^\d{16}$/.test(str.replace(/\s/g, ""));
}

function isMonthValid(str) {
  const m = Number(str);
  return /^\d{2}$/.test(str) && m >= 1 && m <= 12;
}

function isYearValid(str) {
  return /^\d{2}$/.test(str);
}

function isCvcValid(str) {
  return /^\d{3}$/.test(str);
}

// Submit button click handler
subbut.addEventListener("click", function (e) {
  e.preventDefault();
  let valid = true;

  // Reset all error messages
  document
    .querySelectorAll(".error")
    .forEach((el) => (el.style.display = "none"));

  // Empty field checks
  if (!nameInput.value) {
    nameInput.parentNode.querySelector(".error.empty").style.display = "block";
    valid = false;
  }
  if (!numberInput.value) {
    numberInput.parentNode.querySelector(".error.empty").style.display =
      "block";
    valid = false;
  }
  if (!monthInput.value) {
    monthInput.parentNode.querySelector(".error.empty").style.display = "block";
    valid = false;
  }
  if (!yearInput.value) {
    yearInput.parentNode.querySelectorAll(".error.empty")[1].style.display =
      "block";
    valid = false;
  }
  if (!cvcInput.value) {
    cvcInput.parentNode.querySelector(".error.empty").style.display = "block";
    valid = false;
  }

  // Format validations
  if (nameInput.value && !isNameValid(nameInput.value)) {
    const err = nameInput.parentNode.querySelector(".error.invalid");
    err.style.display = "block";
    err.textContent = "Wrong format, letters only";
    valid = false;
  }
  if (numberInput.value && !isNumberValid(numberInput.value)) {
    numberInput.parentNode.querySelector(".error.invalid").style.display =
      "block";
    valid = false;
  }
  if (monthInput.value && !isMonthValid(monthInput.value)) {
    monthInput.parentNode.querySelector(".error.invalid").style.display =
      "block";
    valid = false;
  }
  if (yearInput.value && !isYearValid(yearInput.value)) {
    yearInput.parentNode.querySelectorAll(".error.invalid")[1].style.display =
      "block";
    valid = false;
  }
  if (cvcInput.value && !isCvcValid(cvcInput.value)) {
    cvcInput.parentNode.querySelector(".error.invalid").style.display = "block";
    valid = false;
  }

  // Show thank-you modal if valid
  if (valid) {
    form.style.display = "none";
    modal.style.display = "block";
  }
});

// Close modal handler
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  form.reset();
  nameOutput.textContent = "JANE APPLESEED";
  numberOutput.textContent = "0000 0000 0000 0000";
  monthOutput.textContent = "00";
  yearOutput.textContent = "00";
  cvcOutput.textContent = "000";
  form.style.display = "block";
});
