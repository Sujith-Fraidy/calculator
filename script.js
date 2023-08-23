var buffer = document.querySelector(".buffer");
var buttons = document.querySelectorAll(".calc-button");
var runningTotal = 0;
var activeOperator = false;
var currentOperator = null;
var handleButtonClick = (event) => {
  switch (event.target.innerHTML) {
    case "AC":
      handleFlush();
      break;
    case "+/-":
      runningTotal = buffer.innerHTML;
      runningTotal = runningTotal - 2 * runningTotal;
      buffer.innerHTML = runningTotal;
      runningTotal = 0;
      break;
    case "=":
      buffer.innerHTML = handleOperation(event);
      activeOperator = false;
      currentOperator = null;
      runningTotal = 0;
      break;
    case "%":
      runningTotal = buffer.innerHTML;
      runningTotal = runningTotal / 100;
      buffer.innerHTML = runningTotal;
      runningTotal = 0;
    case "+":
    case "−":
    case "×":
    case "÷":
      if (
        buffer.innerHTML !== "0" &&
        !activeOperator &&
        currentOperator !== null
      ) {
        buffer.innerHTML = handleOperation(event);
        activeOperator = false;
        currentOperator = event.target.innerHTML;
      }
      if (currentOperator !== null) {
        switch (currentOperator) {
          case "+":
            runningTotal =
              parseFloat(runningTotal) + parseFloat(buffer.innerHTML);
            break;
          case "−":
            runningTotal =
              parseFloat(runningTotal) - parseFloat(buffer.innerHTML);
            break;
          case "×":
            runningTotal =
              parseFloat(runningTotal) * parseFloat(buffer.innerHTML);
            break;
          case "÷":
            runningTotal =
              parseFloat(runningTotal) / parseFloat(buffer.innerHTML);
            break;
        }
        activeOperator = true;
        currentOperator = event.target.innerHTML;
        break;
      }
      currentOperator = event.target.innerHTML;
      activeOperator = true;
      break;
    default:
      handleNumber(event);
  }
  console.log(buffer.innerHTML, runningTotal, activeOperator, currentOperator);
};
var handleFlush = () => {
  buffer.innerHTML = "0";
  runningTotal = 0;
  activeOperator = false;
  currentOperator = null;
};
var handleOperation = (event) => {
  if (currentOperator === null) {
    return buffer.innerHTML;
  }
  switch (currentOperator) {
    case "+":
      return (runningTotal =
        parseFloat(runningTotal) + parseFloat(buffer.innerHTML));
    case "−":
      return (runningTotal =
        parseFloat(runningTotal) - parseFloat(buffer.innerHTML));
    case "×":
      return (runningTotal =
        parseFloat(runningTotal) * parseFloat(buffer.innerHTML));
    case "÷":
      return (runningTotal =
        parseFloat(runningTotal) / parseFloat(buffer.innerHTML));
  }
};
var handleNumber = (event) => {
  if (
    buffer.innerHTML === "0" ||
    (activeOperator && currentOperator !== null)
  ) {
    console.log("This");
    runningTotal = buffer.innerHTML;
    buffer.innerHTML = event.target.innerHTML;
    activeOperator = false;
  } else {
    buffer.innerHTML += event.target.innerHTML;
  }
};
buttons.forEach((button) => {
  button.addEventListener("click", (event) => handleButtonClick(event));
});
// Color mode Code Starts
var checkBox = document.querySelector(".toggle-div");
var calculator = document.querySelector(".calculator");
checkBox.onchange = (e) => {
  if (e.target.checked === true) {
    calculator.style.backgroundColor = "#000";
  } else calculator.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
};
