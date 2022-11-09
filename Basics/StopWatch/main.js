const time_el = document.querySelector('.watch .time');
const start_button = document.getElementById('start');
const stop_button = document.getElementById('stop');
const reset_button = document.getElementById('reset');

let seconds = 00;
let interval = null;
let secs = 00
let mins = 00
let hrs = 00

function timer () {
    seconds++;
    secs = String(seconds % 60).padStart(2,'0');
    mins = String(Math.floor(seconds / 60)).padStart(2,'0');
    hrs = String(Math.floor(seconds / 3600)).padStart(2,'0');
    time_el.innerText = `${hrs}:${mins}:${secs}`

}

start_button.onclick=function() {
    interval = setInterval(timer, 1000);
}

stop_button.onclick=function() {
    clearInterval(interval);
}

reset_button.onclick=function() {
    clearInterval(interval);
    seconds=00
    secs='00'
    mins='00'
    hrs='00'
    time_el.innerText = `${hrs}:${mins}:${secs}`
}