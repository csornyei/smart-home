const turnOnButton = document.querySelector('#led-button-on');
const turnOffButton = document.querySelector('#led-button-off');

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

updateLedStatus();

turnOffButton.addEventListener('click', () => changeLed(false));
turnOnButton.addEventListener('click', () => changeLed(true));
