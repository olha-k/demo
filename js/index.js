const link = document.querySelector ('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

var sect = document.querySelector('section');
const para = document.createElement('p');
var para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';

sect.appendChild(para);

document.querySelector ('.cick-me').addEventListener('.click me');

function showAlert () {
    alert('Button clicked');
}

const clockDisplay = document.querySelector('.clock');
setInterval(
    () => (clockDisplay.innerText = new Date().toLocaleTimeString())
);



