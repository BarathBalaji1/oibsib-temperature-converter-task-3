function convertTemperature() {
    // Get user input
    const temperatureInput = document.getElementById('temperature').value;
    const unitSelect = document.getElementById('unit');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    // Validate input as a number
    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Convert temperature
    let result;
    if (selectedUnit === 'celsius') {
        result = (parseFloat(temperatureInput) * 9 / 5) + 32;
        document.getElementById('result').innerHTML = `Converted Temperature: ${result.toFixed(2)} °F`;
    } else {
        result = (parseFloat(temperatureInput) - 32) * 5 / 9;
        document.getElementById('result').innerHTML = `Converted Temperature: ${result.toFixed(2)} °C`;
    }
}

