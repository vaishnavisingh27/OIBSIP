function validateInput() {
    const temperatureInput = document.getElementById('temperature');
    const errorMessage = document.getElementById('error-message');

    let inputValue = temperatureInput.value;

    // Remove non-numeric characters
    inputValue = inputValue.replace(/[^0-9.]/g, '');

    temperatureInput.value = inputValue;

    if (inputValue === '' || isNaN(inputValue)) {
        errorMessage.textContent = "Please enter a valid number.";
    } else {
        errorMessage.textContent = "";
        clearResult(); // Clear result when input changes
    }
}

function clearResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
}

function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultDiv = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');

    // Clear result box when converting
    clearResult();

    const temperatureValue = parseFloat(temperatureInput.value);

    if (isNaN(temperatureValue)) {
        errorMessage.textContent = "Please enter a valid number.";
        return;
    }

    const unit = unitSelect.value;
    let celsiusCalculated, fahrenheitCalculated, kelvinCalculated;
    let resultString = "<strong>Converted Temperature:</strong> ";

    if (unit === 'celsius') {
        fahrenheitCalculated = (temperatureValue * 9/5) + 32;
        kelvinCalculated = temperatureValue + 273.15;
        resultString += `${fahrenheitCalculated.toFixed(2)}° Fahrenheit, ${kelvinCalculated.toFixed(2)} K.`;
    } else if (unit === 'fahrenheit') {
        celsiusCalculated = (temperatureValue - 32) * 5/9;
        kelvinCalculated = (temperatureValue - 32) * 5/9 + 273.15;
        resultString += `${celsiusCalculated.toFixed(2)}° Celsius, ${kelvinCalculated.toFixed(2)} K.`;
    } else if (unit === 'kelvin') {
        celsiusCalculated = temperatureValue - 273.15;
        fahrenheitCalculated = (temperatureValue - 273.15) * 9/5 + 32;
        resultString += `${celsiusCalculated.toFixed(2)}° Celsius, ${fahrenheitCalculated.toFixed(2)}° Fahrenheit.`;
    }

    resultDiv.innerHTML = resultString;
    errorMessage.textContent = "";
}
