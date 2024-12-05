// const containerEl = document.getElementById("container");
// const leftEl = document.getElementById("left");
// const leftInfoEl = document.getElementById("left-info");
// const rightEl = document.getElementById("right");

// const userEmailEl = document.getElementById("user-email");
// const validEl = document.getElementById("valid");
// const emailInputEl = document.getElementById("email-input");
// const submitBtnEl = document.getElementById("submit-btn");

// const confirmMessageEl = document.getElementById("confirm-message");
// const dismissEl = document.getElementById("dismiss-btn");

// function formSuccess() {
//   confirmMessageEl.classList.add("active");
//   containerEl.classList.add("success");
//   leftEl.style.display = "none";
//   rightEl.style.display = "none";
//   leftInfoEl.style.display = "none";
//   console.log("wtf");
// }

// function validateEmail(email) {
//   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   return emailRegex.test(email);
// }

// submitBtnEl.addEventListener("click", (e) => {
//   e.preventDefault();

//   const email = emailInputEl.value.trim();

//   if (validateEmail(email)) {
//     formSuccess();
//     userEmailEl.innerText = email;
//     emailInputEl.value = "";

//     validEl.classList.remove("active");
//     emailInputEl.classList.remove("active");
//   } else {
//     validEl.classList.add("active");
//     emailInputEl.classList.add("active");
//   }
// });

// const dismissButton = dismissEl.addEventListener("click", () => {
//   leftEl.style.display = "block";
//   rightEl.style.display = "block";
//   containerEl.classList.remove("success");
//   confirmMessageEl.classList.remove("active");
//   console.log("dismiss works");
// });

const containerEl = document.querySelector("container");
const leftEl = document.querySelector("left");
const leftInfoEl = document.querySelector("left-info");
const rightEl = document.querySelector("right");
const userEmailEl = document.querySelector("user-email");
const validEl = document.querySelector("valid");
const emailInputEl = document.querySelector("email-input");
const submitBtnEl = document.getElementById("submit-btn");
const confirmMessageEl = document.querySelector("confirm-message");
const dismissEl = document.querySelector("dismiss-btn");

function formSuccess() {
  confirmMessageEl.classList.add("active");
  containerEl.classList.add("success");
  leftEl.style.display = "none";
  rightEl.style.display = "none";
  console.log("wtf");
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}

submitBtnEl.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInputEl.value.trim();

  if (validateEmail(email)) {
    formSuccess();
    userEmailEl.innerText = email;
    emailInputEl.value = "";

    validEl.classList.remove("active");
    emailInputEl.classList.remove("active");
  } else {
    validEl.classList.add("active");
    emailInputEl.classList.add("active");
  }
});
