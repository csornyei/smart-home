const turnOnButton = document.querySelector('#led-button-on');
const turnOffButton = document.querySelector('#led-button-off');

const ledStatuses = {
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
        if (response[0].ledStatus) {
            document.querySelector('#led-status').innerText = 'On';
            turnOnButton.disabled = true;
            turnOffButton.disabled = false;
        } else {
            document.querySelector('#led-status').innerText = 'Off';
            turnOnButton.disabled = false;
            turnOffButton.disabled = true;
        }
    }).catch(err => console.error(err)));
}

async function changeLed(ledStatus) {
    const response = await fetch('/api/led', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ledStatus
        })
    });
    updateLedStatus();
}

function updateColoredLedStatuses() {
    if (ledStatuses.yellow) {
        yellowLedStatus.innerText = "On";
    } else {
        yellowLedStatus.innerText = "Off";
    }
    if (ledStatuses.red) {
        redLedStatus.innerText = "On";
    } else {
        redLedStatus.innerText = "Off";
    }
    if (ledStatuses.blue) {
        blueLedStatus.innerText = "On";
    } else {
        blueLedStatus.innerText = "Off"
    }
}

function changeColoredLed(color) {
    ledStatuses[color] = !ledStatuses[color];
    updateColoredLedStatuses();
}


updateLedStatus();

updateColoredLedStatuses();

turnOffButton.addEventListener('click', () => changeLed(false));
turnOnButton.addEventListener('click', () => changeLed(true));

yellowLedButton.addEventListener('click', () => changeColoredLed('yellow'));
redLedButton.addEventListener('click', () => changeColoredLed('red'));
blueLedButton.addEventListener('click', () => changeColoredLed('blue'));
