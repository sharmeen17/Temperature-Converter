// //temperature converter

// console.log(document)

// function celsiusToFahrenhiet()
// {
//   var temp = document.getElementById("tempInput").value;
//   document.getElementById("answer").innerText = temp * (9/5) + 32;
// }

// function switchUnit()
// {
//     var far = farunit;
//     var cel = celunit;

// }

let isFahrenheit = true; // Default is Fahrenheit

// Function to switch between Fahrenheit and Celsius
function switchUnit() {
    isFahrenheit = !isFahrenheit; // Toggle the unit

    // Update the UI
    document.getElementById('farunit').textContent = isFahrenheit ? 'Fahrenheit' : 'Celsius';
    document.getElementById('celunit').textContent = isFahrenheit ? 'Celsius' : 'Fahrenheit';
    document.getElementById('tempInput').placeholder = isFahrenheit ? 'Enter Fahrenheit value' : 'Enter Celsius value';
}

// Function to convert temperature
function convertTemperature() {
    let tempInput = parseFloat(document.getElementById('tempInput').value);
    let convertedTemp;

    if (isNaN(tempInput)) {
        document.getElementById('answer').textContent = "Please enter a valid temperature.";
        return;
    }

    if (isFahrenheit) {
        // Convert Fahrenheit to Celsius
        convertedTemp = (tempInput - 32) * 5 / 9;
        document.getElementById('answer').textContent = `${tempInput}°F is equal to ${convertedTemp.toFixed(2)}°C.`;
    } else {
        // Convert Celsius to Fahrenheit
        convertedTemp = (tempInput * 9 / 5) + 32;
        document.getElementById('answer').textContent = `${tempInput}°C is equal to ${convertedTemp.toFixed(2)}°F.`;
    }
}
