$(document).ready(function () {
  $("#dropDown").click(function () {
    $(".drop-down").toggleClass("drop-down--active");
  });
});

document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const dataInput = document.getElementById("dataInput").value;
    const dataArr = dataInput.split(",").map(Number);

    if (dataArr.some(isNaN)) {
      alert("Please enter valid numbers separated by commas.");
      return;
    }

    const mean = calculateMean(dataArr);
    const median = calculateMedian(dataArr);
  });

function calculateMean(arr) {
  const mean = (arr.reduce((acc, val) => acc + val, 0) / arr.length).toFixed(2);
  document.getElementById("dataInput").value = mean;
}

function performCalculation() {
  if (currentCalculation === "") return;
  calculateResult();
}

function calculateMedian(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    const median = ((sortedArr[middle - 1] + sortedArr[middle]) / 2).toFixed(2);
    document.getElementById("dataInput").value = median;
  } else {
    const median = sortedArr[middle].toFixed(2);
    document.getElementById("dataInput").value = median;
  }
}

let currentCalculation = "";
let currentOperation = "";
let calculationResult = "";

function appendNumber(number) {
  if (currentOperation === "=") {
    currentCalculation = "";
    currentOperation = "";
  }
  currentCalculation += number;
  updateCalculationDisplay();
}

function appendOperator(operator) {
  if (currentOperation === "=") {
    currentCalculation = "";
    currentOperation = "";
  }
  currentCalculation += ` ${operator} `;
  currentOperation = operator;
  updateCalculationDisplay();
}

function calculateResult() {
  if (currentCalculation === "") return;
  const result = eval(currentCalculation);
  currentCalculation = result.toString();
  updateCalculationDisplay();
}

function backspace() {
  const currentInput = document.getElementById("dataInput").value;
  document.getElementById("dataInput").value = currentInput.slice(0, -1);
}

function clearCalculator() {
  currentCalculation = "";
  currentOperation = "";
  updateCalculationDisplay();
}

function updateCalculationDisplay() {
  document.getElementById("dataInput").value = currentCalculation;
}

function calculatePearsonCoefficient() {
  const dataInput = document.getElementById("dataInput").value;
  const dataArr = dataInput.split(",").map(Number);

  if (dataArr.some(isNaN)) {
    alert("Please enter valid numbers separated by commas.");
    return;
  }
  if (dataArr.length < 2) {
    alert("Please enter at least two numbers");
    return;
  }
  const x = dataArr.slice(0, dataArr.length / 2);
  const y = dataArr.slice(dataArr.length / 2);

  const meanX = calculateMean(x);
  const meanY = calculateMean(y);

  let numerator = 0;
  let denominatorX = 0;
  let denominatorY = 0;

  for (let i = 0; i < x.length; i++) {
    numerator += (x[i] - meanX) * (y[i] - meanY);
    denominatorX += (x[i] - meanX) ** 2;
    denominatorY += (y[i] - meanY) ** 2;
  }
  const pearsonCoefficient = (
    numerator / Math.sqrt(denominatorX * denominatorY)
  ).toFixed(2);
  document.getElementById("dataInput").value = pearsonCoefficient;
}

function togglePowerInputFields() {
  const powerInputContainer = document.getElementById("powerInputContainer");
  powerInputContainer.style.display =
    powerInputContainer.style.display === "none" ? "block" : "none";
}

function calculateHarmonicMean(arr) {
  const reciprocalSum = arr.reduce((acc, val) => acc + 1 / val, 0);
  const harmonicMean = (arr.length / reciprocalSum).toFixed(2);
  document.getElementById("dataInput").value = harmonicMean;
}

function calculateGeometricMean(arr) {
  const product = arr.reduce((acc, val) => acc * val, 1);
  const geometricMean = Math.pow(product, 1 / arr.length).toFixed(2);
  document.getElementById("dataInput").value = geometricMean;
}

function calculateMinimum(arr) {
  const minimum = Math.min(...arr).toFixed(2);
  document.getElementById("dataInput").value = minimum;
}

function calculateMaximum(arr) {
  const maximum = Math.max(...arr).toFixed(2);
  document.getElementById("dataInput").value = maximum;
}

function calculateRange(arr) {
  const range = (calculateMaximum(arr) - calculateMinimum(arr)).toFixed(2);
  document.getElementById("dataInput").value = range;
}

function calculateVariance(arr) {
  const mean = calculateMean(arr);
  const squaredDifferencesSum = arr.reduce(
    (acc, val) => acc + (val - mean) ** 2,
    0
  );
  const variance = (squaredDifferencesSum / arr.length).toFixed(2);
  document.getElementById("dataInput").value = variance;
}

function calculateStandardDeviation(arr) {
  const standardDeviation = Math.sqrt(calculateVariance(arr)).toFixed(2);
  document.getElementById("dataInput").value = standardDeviation;
}

function calculateXSquare() {
  const currentInput = document.getElementById("dataInput").value;
  if (!currentInput) return;
  const x = parseFloat(currentInput);
  const xSquare = (x ** 2).toFixed(2);
  document.getElementById("dataInput").value = xSquare;
}

function calculateReciprocal() {
  const currentInput = document.getElementById("dataInput").value;
  if (!currentInput) return;
  const x = parseFloat(currentInput);
  if (x === 0) {
    alert("Cannot calculate reciprocal of zero");
    return;
  }
  const reciprocal = (1 / x).toFixed(2);
  document.getElementById("dataInput").value = reciprocal;
}

function calculateSquareRoot() {
  const currentInput = document.getElementById("dataInput").value;
  if (!currentInput) return;
  const x = parseFloat(currentInput);
  if (x < 0) {
    alert("Square root is not defined for negative numbers.");
    return;
  }
  const squareRoot = Math.sqrt(x).toFixed(2);
  document.getElementById("dataInput").value = squareRoot;
}

function changeSign() {
  const dataInput = document.getElementById("dataInput");
  if (dataInput.value) {
    const currentValue = parseFloat(dataInput.value);
    dataInput.value = (currentValue * -1).toString();
    currentCalculation = dataInput.value;
  }
}

function calculatePower() {
  const xValue = document.getElementById("xValue").value;
  const yValue = document.getElementById("yValue").value;
  if (isNaN(xValue) || isNaN(yValue)) {
    alert("Please enter valid numbers for x and y.");
    return;
  }
  const result = Math.pow(parseFloat(xValue), parseFloat(yValue)).toFixed(2);
  document.getElementById("dataInput").value = result;
  togglePowerInputFields();
}

function changMode() {
  const modeSelect = document.getElementById("modeSelect");
  const selectedMode = modeSelect.value;

  if (selectedMode === "standard") {
  } else if (selectedMode === "statistics") {
  } else if (selectedMode === "graph") {
  }
}
