function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}


function operate(op, num1, num2) {
    return op(num1, num2);
}

const monitor = document.querySelector('.monitor p');
let monitorText = "";

function monitorPaint(val) {
    if (val === 'RESET') {
        monitorText = "";
    } else {
        monitorText = monitorText + val;
    }
    monitor.textContent = monitorText;
}

const buttons = document.querySelectorAll('.container button');
buttons.forEach(element => {
    element.addEventListener('click', () => {
        let val = element.value;
        // console.log(val);
        monitorPaint(val);
    })
});