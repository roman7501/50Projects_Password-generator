const lengthPasswordElement = document.getElementById("length-password");
const uppercasePasswordElement = document.getElementById("uppercase-password");
const lowercasePasswordElement = document.getElementById("lowercase-password");
const numbersPasswordElement = document.getElementById("numbers-password");
const symbolsPasswordElement = document.getElementById("symbols-password");

const generateBtn = document.getElementById("generate");
const passwordContainer = document.querySelector(".password--container");

generateBtn.addEventListener("click", () => {
  const lengthPassword = lengthPasswordElement.value;

  const params = {
    uppercase: uppercasePasswordElement.checked,
    lowercase: lowercasePasswordElement.checked,
    numbers: numbersPasswordElement.checked,
    symbols: symbolsPasswordElement.checked,
  };
  makePassword(lengthPassword, params);
});

function makePassword(length, params) {
  passwordContainer.innerHTML = "";

  let result = "";
  const charactersLowercase = "abcdefghijklmnopqrstuvwxyz";
  const charactersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charactersNumbers = "0123456789";
  const charactersSymbols = ".[]{}()<>*+-=!?^$|";

  for (let i = 0; i < length; i++) {
    const charactersFiltered =
      (params.uppercase ? charactersUppercase : "") +
      (params.lowercase ? charactersLowercase : "") +
      (params.numbers ? charactersNumbers : "") +
      (params.symbols ? charactersSymbols : "");

    const charactersLength = charactersFiltered.length;
    result += charactersFiltered.charAt(Math.floor(Math.random() * charactersLength));
  }
  passwordContainer.innerHTML += result;
}
