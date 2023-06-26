const validationInput = document.querySelector("#validation-input");

  validationInput.addEventListener("blur", function () {
    const inputLength = this.value.length;
    const dataLength = this.dataset.length;

    if (inputLength === Number(dataLength)) {
      this.style.borderColor = "#4caf50";
    } else {
      this.style.borderColor = "#f44336";
    }
  });