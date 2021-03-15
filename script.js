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
    num1 = Number(num1);
    num2 = Number(num2);

    if (op === "*") {
        return multiply(num1, num2);
    } else if (op === "/") {
        if (num2 === 0) {
            return "you have reached infinity!";
        } else {
            return divide(num1, num2);
        }
    } else if (op === "+") {
        return add(num1, num2);
    } else if (op === "-") {
        return subtract(num1, num2);
    } else {
        alert("What the hell dude!?")
    }
}

const monitor = document.querySelector('.monitor p');
let monitorText = "";
let monitorFirst = "";
let monitorSecond = "";
let monitorOperator = undefined;
let monitorOperatorJustNowDefined = false;
let monitorDot = false;
let result = false;

function reset() {
    monitorText = "";
    monitorFirst = "";
    monitorSecond = "";
    monitorOperator = undefined;
    monitorDot = false;
    result = false;
    monitorOperatorJustNowDefined = false;
}

function monitorPaint(val) {
    if (result === true) {
        reset();
    }

    if (val === 'RESET') {
        reset();
    } else if (/[0-9.]/.test(val)) {

        // so the dot doesn't repeat (23.3.4...)
        if (val === '.') {
            if (monitorDot === true) {
                return;
            } else {
                monitorDot = true;
            }
        }

        if (monitorOperator == undefined) {
            monitorFirst += val;
            monitorOperatorJustNowDefined = true;
        } else {
            if (monitorOperatorJustNowDefined === true) {
                monitorText = "";
                monitorOperatorJustNowDefined = false;
            }
            monitorSecond += val;
        }
        monitorText += val;

    } else if (/[\+\-\*\/=]/.test(val)) {
        if (typeof monitorOperator == 'undefined') {
            if (val === '=') {
                // just in case user presses '=' before other ops
                return;
            } else {
                monitorOperator = val;
            }
        } else if (val === '=') {
            let res = operate(monitorOperator, monitorFirst, monitorSecond);
            reset();
            monitorText = res;
            result = true;
        } else {
            let res = operate(monitorOperator, monitorFirst, monitorSecond);
            reset();
            monitorText = res;
            monitorFirst = res;
        }
    }




    console.log(monitorText);
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
