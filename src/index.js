// // document.addEventListener("DOMContentLoaded", () => {
// //   const nameInput = document.querySelector(".name-input");
// //   const numberInput = document.querySelector(".number-input");
// //   const monthInput = document.querySelector(".month-input");
// //   const yearInput = document.querySelector(".year-input");
// //   const cvcInput = document.querySelector(".cvc-input");

// //   const nameOutput = document.querySelector(".name-output");
// //   const numberOutput = document.querySelector(".number-output");
// //   const monthOutput = document.querySelector(".month-output");
// //   const yearOutput = document.querySelector(".year-output");
// //   const cvcOutput = document.querySelector(".cvc-output");

// //   const submitButtons = document.querySelector('button[type="submit"]');
// //   const thankYouScreen = document.querySelector(".thank-you.hidden");

// //   // Helper to format card number with spaces after every 4 digits
// //   function formatNumber(value) {
// //     return value
// //       .replace(/\s/g, "")
// //       .replace(/(.{4})(?=.)/g, "$1 ")
// //       .trim();
// //   }

// //   // Real-time updates
// //   nameInput.addEventListener("input", () => {
// //     nameOutput.textContent = nameInput.value || "JANE APPLESEED";
// //     console.log(nameInput.value);
// //   });

// //   numberInput.addEventListener("input", () => {
// //     const formatted = formatNumber(numberInput.value);
// //     numberOutput.textContent = formatted || "0000 0000 0000 0000";
// //     numberInput.value = formatted;
// //     console.log(numberInput.value);
// //   });

// //   monthInput.addEventListener("input", () => {
// //     let month = monthInput.value.replace(/\s/g, "").slice(0, 2);
// //     monthInput.value = month;
// //     monthOutput.textContent = month ? month.padStart(2, "0") : "00";
// //     console.log(monthInput.value);
// //   });

// //   yearInput.addEventListener("input", () => {
// //     let year = yearInput.value.replace(/\s/g, "").slice(0, 2);
// //     yearInput.value = year;
// //     yearOutput.textContent = year ? year.padStart(2, "0") : "00";
// //     console.log(yearInput.value);
// //   });

// //   cvcInput.addEventListener("input", () => {
// //     let cvc = cvcInput.value.replace(/\s/g, "").slice(0, 3);
// //     cvcInput.value = cvc;
// //     cvcOutput.textContent = cvc || "000";
// //     console.log(cvcInput.value);
// //   });

// //   // Submit button logic (no form used)

// //   submitButtons.addEventListener("click", function (e) {
// //     e.preventDefault(); // prevent default behavior
// //     let valid = true;

// //     console.log("submitButtons", submitButtons);
// //     // Clear previous errors
// //     document.querySelectorAll(".error").forEach((el) => {
// //       el.textContent = "";
// //       el.style.display = "none";
// //     });

// //     // Validation logic
// //     if (!nameInput.value.trim()) {
// //       showError(nameInput, "Can't be blank");
// //       valid = false;
// //       console.log(nameInput.value);
// //     } else if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
// //       showError(nameInput, "Wrong format, letters only");
// //       valid = false;
// //       console.log(nameInput.value);
// //     }

// //     if (!numberInput.value.trim()) {
// //       showError(numberInput, "Can't be blank");
// //       valid = false;
// //       console.log(numberInput.value);
// //     } else {
// //       const numClean = numberInput.value.replace(/\s/g, "");
// //       if (!/^\d{16}$/.test(numClean)) {
// //         showError(numberInput, "Wrong format, numbers only");
// //         valid = false;
// //         console.log(numberInput.value);
// //       }
// //     }

// //     if (!monthInput.value.trim()) {
// //       showError(monthInput, "Can't be blank");
// //       valid = false;
// //       console.log(monthInput.value);
// //     } else if (
// //       !/^\d{2}$/.test(monthInput.value) ||
// //       +monthInput.value < 1 ||
// //       +monthInput.value > 12
// //     ) {
// //       showError(monthInput, "Wrong format, numbers only");
// //       valid = false;
// //       console.log(monthInput.value);
// //     }

// //     if (!yearInput.value.trim()) {
// //       showError(yearInput, "Can't be blank");
// //       valid = false;
// //       console.log(yearInput.value);
// //     } else if (!/^\d{2}$/.test(yearInput.value)) {
// //       showError(yearInput, "Wrong format, numbers only");
// //       valid = false;
// //       console.log(yearInput.value);
// //     }

// //     if (!cvcInput.value.trim()) {
// //       showError(cvcInput, "Can't be blank");
// //       valid = false;
// //       console.log(cvcInput.value);
// //     } else if (!/^\d{3}$/.test(cvcInput.value)) {
// //       showError(cvcInput, "Wrong format, numbers only");
// //       valid = false;
// //       console.log(cvcInput.value);
// //     }

// //     // Show thank-you screen if valid
// //     if (valid) {
// //       document.getElementById("card-form").style.display = "none"; // hide the form container
// //       thankYouScreen.classList.remove("hidden");
// //     }
// //   });

// //   // Helper to display error messages
// //   function showError(inputEl, message) {
// //     let errorSpan;
// //     if (inputEl.closest(".date-input")) {
// //       errorSpan = inputEl.closest(".date-input").nextElementSibling;
// //     } else {
// //       errorSpan = inputEl.nextElementSibling;
// //     }
// //     if (errorSpan) {
// //       errorSpan.textContent = message;
// //       errorSpan.style.display = "block";
// //     }
// //   }

// //   // Reset function (no form element reference)
// //   window.resetForm = function () {
// //     document.getElementById("card-form").style.display = "flex";
// //     thankYouScreen.classList.add("hidden");

// //     // Reset all inputs
// //     [nameInput, numberInput, monthInput, yearInput, cvcInput].forEach(
// //       (input) => (input.value = "")
// //     );

// //     // Reset outputs
// //     nameOutput.textContent = "JANE APPLESEED";
// //     numberOutput.textContent = "0000 0000 0000 0000";
// //     monthOutput.textContent = "00";
// //     yearOutput.textContent = "00";
// //     cvcOutput.textContent = "000";

// //     // Clear all errors
// //     document.querySelectorAll(".error").forEach((el) => {
// //       el.textContent = "";
// //       el.style.display = "none";
// //     });
// //   };
// // });

// document.addEventListener("DOMContentLoaded", () => {
//   const nameInput = document.querySelector(".name-input");
//   const numberInput = document.querySelector(".number-input");
//   const monthInput = document.querySelector(".date-input .month-input");
//   const yearInput = document.querySelector(".date-input .year-input");
//   const cvcInput = document.querySelector(".cvc-input");

//   const nameOutput = document.querySelector(".name-output");
//   const numberOutput = document.querySelector(".number-output");
//   const monthOutput = document.querySelector(".month-output");
//   const yearOutput = document.querySelector(".year-output");
//   const cvcOutput = document.querySelector(".cvc-output");

//   const submitButtons = document.querySelector('button[type="submit"]');
//   const thankYouScreen = document.querySelector(".thank-you.hidden");

//   // Helper to format card number with spaces after every 4 digits
//   function formatNumber(value) {
//     return value
//       .replace(/\s/g, "")
//       .replace(/(.{4})(?=.)/g, "$1 ")
//       .trim();
//   }

//   // Real-time updates
//   nameInput.addEventListener("input", () => {
//     nameOutput.textContent = nameInput.value || "JANE APPLESEED";
//     console.log(nameInput.value);
//   });

//   numberInput.addEventListener("input", () => {
//     const formatted = formatNumber(numberInput.value);
//     numberOutput.textContent = formatted || "0000 0000 0000 0000";
//     numberInput.value = formatted;
//     console.log(numberInput.value);
//   });

//   monthInput.addEventListener("input", () => {
//     let month = monthInput.value.replace(/\s/g, "").slice(0, 2);
//     monthInput.value = month;
//     monthOutput.textContent = month ? month.padStart(2, "0") : "00";
//     console.log(monthInput.value);
//   });

//   yearInput.addEventListener("input", () => {
//     let year = yearInput.value.replace(/\s/g, "").slice(0, 2);
//     yearInput.value = year;
//     yearOutput.textContent = year ? year.padStart(2, "0") : "00";
//     console.log(yearInput.value);
//   });

//   cvcInput.addEventListener("input", () => {
//     let cvc = cvcInput.value.replace(/\s/g, "").slice(0, 3);
//     cvcInput.value = cvc;
//     cvcOutput.textContent = cvc || "000";
//     console.log(cvcInput.value);
//   });

//   // Submit button logic (no form used)

//   submitButtons.addEventListener("click", function (e) {
//     e.preventDefault(); // prevent default behavior
//     let valid = true;

//     console.log(submitButtons);
//     // Clear previous errors
//     document.querySelectorAll(".error").forEach((el) => {
//       el.textContent = "";
//       el.style.display = "none";
//     });

//     // Validation logic
//     if (!nameInput.value.trim()) {
//       showError(nameInput, "Can't be blank");
//       valid = false;
//       console.log(nameInput.value);
//     } else if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
//       showError(nameInput, "Wrong format, letters only");
//       valid = false;
//       console.log(nameInput.value);
//     }

//     if (!numberInput.value.trim()) {
//       showError(numberInput, "Can't be blank");
//       valid = false;
//       console.log(numberInput.value);
//     } else {
//       const numClean = numberInput.value.replace(/\s/g, "");
//       if (!/^\d{16}$/.test(numClean)) {
//         showError(numberInput, "Wrong format, numbers only");
//         valid = false;
//         console.log(numberInput.value);
//       }
//     }

//     if (!monthInput.value.trim()) {
//       showError(monthInput, "Can't be blank");
//       valid = false;
//       console.log(monthInput.value);
//     } else if (
//       !/^\d{2}$/.test(monthInput.value) ||
//       +monthInput.value < 1 ||
//       +monthInput.value > 12
//     ) {
//       showError(monthInput, "Wrong format, numbers only");
//       valid = false;
//       console.log(monthInput.value);
//     }

//     if (!yearInput.value.trim()) {
//       showError(yearInput, "Can't be blank");
//       valid = false;
//       console.log(yearInput.value);
//     } else if (!/^\d{2}$/.test(yearInput.value)) {
//       showError(yearInput, "Wrong format, numbers only");
//       valid = false;
//       console.log(yearInput.value);
//     }

//     if (!cvcInput.value.trim()) {
//       showError(cvcInput, "Can't be blank");
//       valid = false;
//       console.log(cvcInput.value);
//     } else if (!/^\d{3}$/.test(cvcInput.value)) {
//       showError(cvcInput, "Wrong format, numbers only");
//       valid = false;
//       console.log(cvcInput.value);
//     }

//     // Show thank-you screen if valid
//     if (valid) {
//       document.getElementById("card-form").style.display = "none"; // hide the form container
//       thankYouScreen.classList.remove("hidden");
//     }
//   });

//   // Helper to display error messages
//   function showError(inputEl, message) {
//     let errorSpan;
//     if (inputEl.closest(".date-input")) {
//       errorSpan = inputEl.closest(".date-input").nextElementSibling;
//     } else {
//       errorSpan = inputEl.nextElementSibling;
//     }
//     if (errorSpan) {
//       errorSpan.textContent = message;
//       errorSpan.style.display = "block";
//     }
//   }

//   // Reset function (no form element reference)
//   window.resetForm = function () {
//     document.getElementById("card-form").style.display = "flex";
//     thankYouScreen.classList.add("hidden");

//     // Reset all inputs
//     [nameInput, numberInput, monthInput, yearInput, cvcInput].forEach(
//       (input) => (input.value = "")
//     );

//     // Reset outputs
//     nameOutput.textContent = "JANE APPLESEED";
//     numberOutput.textContent = "0000 0000 0000 0000";
//     monthOutput.textContent = "00";
//     yearOutput.textContent = "00";
//     cvcOutput.textContent = "000";

//     // Clear all errors
//     document.querySelectorAll(".error").forEach((el) => {
//       el.textContent = "";
//       el.style.display = "none";
//     });
//   };
// });
document.addEventListener("DOMContentLoaded", function () {
  // CARDHOLDER NAME
  document.querySelector(".form__name").addEventListener("input", () => {
    const defaultName = "JANE APPLESEED";

    document.querySelector(".form__name-label__error").style.visibility =
      "hidden";
    let name = document.querySelector(".form__name").value.toUpperCase();
    if (name != "") {
      document.querySelector(".card-front__name").innerHTML = name;
    } else {
      document.querySelector(".card-front__name").innerHTML = defaultName;
    }
    document.querySelector(".form__name").value = name.toUpperCase();
  });

  document.querySelector(".form__name").addEventListener("focus", function () {
    document.querySelector(".form__name").style.outline = "none";
    document.querySelector(".form__name").style.border =
      "double 1px transparent";
    document.querySelector(".form__name").style.backgroundImage =
      "linear-gradient(white, white), radial-gradient(circle at top left, hsl(249, 99%, 64%), hsl(278, 94%, 30%);";
    document.querySelector(".form__name").style.backgroundOrigin = "border-box";
    document.querySelector(".form__name").style.backgroundClip =
      "padding-box, border-box";
  });

  document.querySelector(".form__name").addEventListener("blur", function () {
    if (document.querySelector(".form__name").value.length === 0) {
      document.querySelector(".form__name").style.border = "1px solid red";
      document.querySelector(".form__name-label__error").style.visibility =
        "visible";
    } else {
      document.querySelector(".form__name").style.border =
        "1px solid hsl(279, 6%, 55%)";
    }
  });

  // We format the string that we are going to display
  function numbersWithZeros(text) {
    if (text.length === 0) {
      text = "00";
    } else if (text.length === 1) {
      text = "0" + text;
    }
    return text;
  }

  // Takes a string, removes anything inside that isn't a number, and returns it
  function onlyNumbers(numbers) {
    let i;

    numbers = numbers.toString().replace(/\s/g, "");
    for (i = 0; Array.from(String(numbers))[i] === "0"; i++) {}
    numbers =
      numbers.substring(0, i) +
      parseInt(numbers.substring(i).toString().replace(/\D/g, ""));
    if (String(numbers).includes("NaN")) {
      numbers = numbers.substring(0, i);
    }
    return numbers;
  }

  // CARD NUMBERS
  // We format the string that we are going to display
  function numbersWithWhitespaces(text) {
    let r;

    r = "ZZZZ ZZZZ ZZZZ ZZZZ";
    for (let i = 0; i < text.length; i++) {
      if (Array.from(text)[i] != undefined) {
        r = r.replace("Z", Array.from(text)[i]);
      }
    }
    for (let i = 0; i < 16; i++) {
      r = r.replace("Z", "0");
    }
    return r;
  }

  function numbersWithWhitespacesBlur(text) {
    let r;

    r = "OOOO OOOO OOOO OOOO";
    for (let i = 0; i < text.length; i++) {
      if (Array.from(text)[i] != undefined) {
        r = r.replace("O", Array.from(text)[i]);
      }
    }
    return r;
  }

  function numbersWithWhitespacesFocus(text) {
    let r = text.substring(0, 4);

    if (text.length > 4) {
      r = r + " " + text.substring(4, 8);
    }
    if (text.length > 8) {
      r = r + " " + text.substring(8, 12);
    }
    if (text.length > 12) {
      r = r + " " + text.substring(12, 16);
    }
    return r;
  }

  function numberProcess() {
    let numbers = document.querySelector(".form__number").value;
    numbers = onlyNumbers(numbers);
    document.querySelector(".form__number").value = numbers;

    numbers = numbersWithWhitespaces(String(numbers)).toUpperCase();
    document.querySelector(".card-front__numbers").innerHTML = numbers;
    if (
      numberFocus === false &&
      document.querySelector(".form__number").value.length > 0
    ) {
      document.querySelector(".form__number").value =
        numbersWithWhitespacesBlur(
          document.querySelector(".form__number").value
        );
    }
    if (numberFocus === true) {
      document.querySelector(".form__number").value =
        numbersWithWhitespacesFocus(
          document.querySelector(".form__number").value
        );
      if (document.querySelector(".form__number").value.length == 19) {
        if (justFocus === false) {
          document.querySelector(".form__expiration__mm").focus();
        }
      }
    }
  }

  let numberFocus = false;
  let justFocus = false;
  document
    .querySelector(".form__number")
    .addEventListener("focus", function () {
      document.querySelector(".form__number").style.outline = "none";
      document.querySelector(".form__number").style.border =
        "double 1px transparent";
      document.querySelector(".form__number").style.backgroundImage =
        "linear-gradient(white, white), radial-gradient(circle at top left, hsl(249, 99%, 64%), hsl(278, 94%, 30%);";
      document.querySelector(".form__number").style.backgroundOrigin =
        "border-box";
      document.querySelector(".form__number").style.backgroundClip =
        "padding-box, border-box";
      if (numberFocus === false) {
        numberFocus = true;
        justFocus = true;
        numberProcess();
      }
    });

  document.querySelector(".form__number").addEventListener("blur", function () {
    numberFocus = false;
    // numberProcess();
    if (document.querySelector(".form__number").value.length != 19) {
      document.querySelector(".form__number").style.border = "1px solid red";
      document.querySelector(".form__number-label__error").style.visibility =
        "visible";
    } else {
      document.querySelector(".form__number").style.border =
        "1px solid hsl(279, 6%, 55%)";
    }
  });
  document.querySelector(".form__number").addEventListener("input", () => {
    document.querySelector(".form__number-label__error").style.visibility =
      "hidden";
    justFocus = false;
    numberProcess();
  });

  // CARD EXPIRATION MONTH
  function monthRange(numbers) {
    if (String(numbers).length > 1 || monthFocus == false) {
      if (parseInt(numbers, 10) < 1) {
        numbers = "01";
      }
      if (parseInt(numbers, 10) > 12) {
        numbers = "12";
      }
    }
    if (monthFocus == false && String(numbers).length === 1) {
      document.querySelector(".form__expiration__mm").value = "0" + numbers;
    } else {
      document.querySelector(".form__expiration__mm").value = numbers;
    }
    return numbers;
  }

  function monthProcess() {
    let numbers = document.querySelector(".form__expiration__mm").value;
    numbers = onlyNumbers(numbers);
    numbers = monthRange(numbers);

    numbers = numbersWithZeros(String(numbers)).toUpperCase();
    document.querySelector(".card-front__expiration-mm").innerHTML = numbers;
    if (document.querySelector(".form__expiration__mm").value.length == 2) {
      if (monthFocus === true) {
        document.querySelector(".form__expiration__yy").focus();
      }
    }
  }

  let monthFocus;
  document
    .querySelector(".form__expiration__mm")
    .addEventListener("focus", function () {
      document.querySelector(".form__expiration__mm").style.outline = "none";
      document.querySelector(".form__expiration__mm").style.border =
        "double 1px transparent";
      document.querySelector(".form__expiration__mm").style.backgroundImage =
        "linear-gradient(white, white), radial-gradient(circle at top left, hsl(249, 99%, 64%), hsl(278, 94%, 30%);";
      document.querySelector(".form__expiration__mm").style.backgroundOrigin =
        "border-box";
      document.querySelector(".form__expiration__mm").style.backgroundClip =
        "padding-box, border-box";
      monthFocus = true;
    });
  document
    .querySelector(".form__expiration__mm")
    .addEventListener("blur", function () {
      monthFocus = false;
      monthProcess();
      if (document.querySelector(".form__expiration__mm").value.length != 2) {
        document.querySelector(".form__expiration__mm").style.border =
          "1px solid red";
        document.querySelector(
          ".form__expiration__mm-label__error"
        ).style.visibility = "visible";
      } else {
        document.querySelector(".form__expiration__mm").style.border =
          "1px solid hsl(279, 6%, 55%)";
      }
    });
  document
    .querySelector(".form__expiration__mm")
    .addEventListener("input", () => {
      document.querySelector(
        ".form__expiration__mm-label__error"
      ).style.visibility = "hidden";
      monthProcess();
    });

  // CARD EXPIRATION YEAR
  function yearRange(numbers) {
    if (String(numbers).length > 1 || yearFocus == false) {
      if (
        parseInt(numbers, 10) < new Date().getFullYear().toString().slice(-2)
      ) {
        numbers = new Date().getFullYear().toString().slice(-2);
      }
      if (
        parseInt(numbers, 10) >
        parseInt(new Date().getFullYear().toString().slice(-2)) + 4
      ) {
        numbers = parseInt(new Date().getFullYear().toString().slice(-2)) + 4;
      }
    }
    document.querySelector(".form__expiration__yy").value = numbers;
    return numbers;
  }

  function yearProcess() {
    let numbers = document.querySelector(".form__expiration__yy").value;
    numbers = onlyNumbers(numbers);
    numbers = yearRange(numbers);

    numbers = numbersWithZeros(String(numbers)).toUpperCase();
    document.querySelector(".card-front__expiration-yy").innerHTML = numbers;
    if (document.querySelector(".form__expiration__yy").value.length == 2) {
      if (yearFocus === true) {
        document.querySelector(".form__expiration__cvc").focus();
      }
    }
  }

  let yearFocus;
  document
    .querySelector(".form__expiration__yy")
    .addEventListener("focus", function () {
      document.querySelector(".form__expiration__yy").style.outline = "none";
      document.querySelector(".form__expiration__yy").style.border =
        "double 1px transparent";
      document.querySelector(".form__expiration__yy").style.backgroundImage =
        "linear-gradient(white, white), radial-gradient(circle at top left, hsl(249, 99%, 64%), hsl(278, 94%, 30%);";
      document.querySelector(".form__expiration__yy").style.backgroundOrigin =
        "border-box";
      document.querySelector(".form__expiration__yy").style.backgroundClip =
        "padding-box, border-box";
      yearFocus = true;
    });
  document
    .querySelector(".form__expiration__yy")
    .addEventListener("blur", function () {
      yearFocus = false;
      yearProcess();
      if (document.querySelector(".form__expiration__yy").value.length != 2) {
        document.querySelector(".form__expiration__yy").style.border =
          "1px solid red";
        document.querySelector(
          ".form__expiration__mm-label__error2"
        ).style.visibility = "visible";
      } else {
        document.querySelector(".form__expiration__yy").style.border =
          "1px solid hsl(279, 6%, 55%)";
      }
    });
  document
    .querySelector(".form__expiration__yy")
    .addEventListener("input", () => {
      document.querySelector(
        ".form__expiration__mm-label__error2"
      ).style.visibility = "hidden";
      yearProcess();
    });

  // CARD CVC
  // We format the string that we are going to display
  function cvcWithZeros(text) {
    if (text.length === 0) {
      text = "000";
    } else if (text.length === 1) {
      text = "00" + text;
    } else if (text.length === 2) {
      text = "0" + text;
    }
    return text;
  }

  function cvcRange(numbers) {
    if (cvcFocus == false && String(numbers).length === 1) {
      document.querySelector(".form__expiration__cvc").value = "00" + numbers;
    } else if (cvcFocus == false && String(numbers).length === 2) {
      document.querySelector(".form__expiration__cvc").value = "0" + numbers;
    } else {
      document.querySelector(".form__expiration__cvc").value = numbers;
    }
    return numbers;
  }

  function cvcProcess() {
    let numbers = document.querySelector(".form__expiration__cvc").value;
    numbers = onlyNumbers(numbers);
    numbers = cvcRange(numbers);

    numbers = cvcWithZeros(String(numbers)).toUpperCase();
    document.querySelector(".card-back__cvc").innerHTML = numbers;
    if (document.querySelector(".form__expiration__cvc").value.length == 3) {
      if (cvcFocus === true) {
        document.querySelector(".form__submit").focus();
      }
    }
  }

  let cvcFocus;
  document
    .querySelector(".form__expiration__cvc")
    .addEventListener("focus", function () {
      document.querySelector(".form__expiration__cvc").style.outline = "none";
      document.querySelector(".form__expiration__cvc").style.border =
        "double 1px transparent";
      document.querySelector(".form__expiration__cvc").style.backgroundImage =
        "linear-gradient(white, white), radial-gradient(circle at top left, hsl(249, 99%, 64%), hsl(278, 94%, 30%);";
      document.querySelector(".form__expiration__cvc").style.backgroundOrigin =
        "border-box";
      document.querySelector(".form__expiration__cvc").style.backgroundClip =
        "padding-box, border-box";
      cvcFocus = true;
    });
  document
    .querySelector(".form__expiration__cvc")
    .addEventListener("blur", function () {
      cvcFocus = false;
      cvcProcess();
      if (document.querySelector(".form__expiration__cvc").value.length != 3) {
        document.querySelector(".form__expiration__cvc").style.border =
          "1px solid red";
        document.querySelector(
          ".form__expiration__cvc-label__error"
        ).style.visibility = "visible";
      } else {
        document.querySelector(".form__expiration__cvc").style.border =
          "1px solid hsl(279, 6%, 55%)";
      }
    });
  document
    .querySelector(".form__expiration__cvc")
    .addEventListener("input", () => {
      document.querySelector(
        ".form__expiration__cvc-label__error"
      ).style.visibility = "hidden";
      cvcProcess();
    });
});

function chkForm() {
  // Show thank-you page when form is submitted
  if (
    document.querySelector(".form__name").value.length > 0 &&
    document.querySelector(".form__number").value.length === 19 &&
    document.querySelector(".form__expiration__mm").value.length === 2 &&
    document.querySelector(".form__expiration__yy").value.length === 2 &&
    document.querySelector(".form__expiration__cvc").value.length === 3
  ) {
    document.querySelector(".user-card").style.opacity = "0";
    document.querySelector(".thank-you").style.visibility = "visible";
    setTimeout(function () {
      // document.querySelector(".thank-you__img").style.opacity = "1";
      document.querySelector(".thank-you__title").style.opacity = "1";
      document.querySelector(".thank-you__details").style.opacity = "1";
    }, 100);
  }
  return false;
}
