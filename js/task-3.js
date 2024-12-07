const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", () => {
  const inputValue = inputEl.value.trim();

  if (inputValue === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = inputValue;
  }
});
