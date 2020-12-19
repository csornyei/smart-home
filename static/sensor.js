const temperatureValue = document.querySelector('#temperature');
const humidityValue = document.querySelector('#humidity');
const refreshButton = document.querySelector('#refresh-button');

function getSensorMeasurement() {
    fetch('../api/temp').then(res => res.json().then(resp => {
        const response = resp[0];
        updateUI(response.temperature, response.humidity);
    })).catch(err => console.error(err));
}

function updateUI(temperature, humidity) {
    temperatureValue.innerText = temperature;
    humidityValue.innerText = humidity;
}

getSensorMeasurement();

refreshButton.addEventListener('click', getSensorMeasurement);
