const turnOnButton = document.querySelector('#led-button-on');
const turnOffButton = document.querySelector('#led-button-off');

let mainLedStatus = false;

let coloredLedStatuses = {
    yellow: false,
    red: false,
    blue: false
}

const yellowLedStatus = document.querySelector('#led-status-yellow');
const redLedStatus = document.querySelector('#led-status-red');
const blueLedStatus = document.querySelector('#led-status-blue');

const yellowLedButton = document.querySelector('#led-button-yellow');
const redLedButton = document.querySelector('#led-button-red');
const blueLedButton = document.querySelector('#led-button-blue');

function updateLedStatus() {
    fetch('/api/led', {
        method: 'GET',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json().then(response => {
        console.log(response);
        mainLedStatus = response[0].ledStatus;
        coloredLedStatuses = response[0].coloredLeds;
        updateMainLedUI();
        updateColoredLedStatuses();
    }).catch(err => console.error(err)));
}

async function postLedStatus() {
    await fetch('/api/led', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ledStatus: mainLedStatus,
            coloredLeds: coloredLedStatuses
        })
    });
    updateLedStatus();
}

function updateMainLedUI() {
    if (mainLedStatus) {
        document.querySelector('#led-status').innerText = 'On';
        turnOnButton.disabled = true;
        turnOffButton.disabled = false;
    } else {
        document.querySelector('#led-status').innerText = 'Off';
        turnOnButton.disabled = false;
        turnOffButton.disabled = true;
    }
}

function updateColoredLedStatuses() {
    console.log(coloredLedStatuses);
    if (coloredLedStatuses.yellow) {
        yellowLedStatus.innerText = "On";
    } else {
        yellowLedStatus.innerText = "Off";
    }
    if (coloredLedStatuses.red) {
        redLedStatus.innerText = "On";
    } else {
        redLedStatus.innerText = "Off";
    }
    if (coloredLedStatuses.blue) {
        blueLedStatus.innerText = "On";
    } else {
        blueLedStatus.innerText = "Off"
    }
}

function changeColoredLed(color) {
    coloredLedStatuses[color] = !coloredLedStatuses[color];
    postLedStatus();
}

function changeMainLed(newLedStatus) {
    mainLedStatus = newLedStatus;
    postLedStatus();
}

updateLedStatus();

updateColoredLedStatuses();

turnOffButton.addEventListener('click', () => changeMainLed(false));
turnOnButton.addEventListener('click', () => changeMainLed(true));

yellowLedButton.addEventListener('click', () => changeColoredLed('yellow'));
redLedButton.addEventListener('click', () => changeColoredLed('red'));
blueLedButton.addEventListener('click', () => changeColoredLed('blue'));
