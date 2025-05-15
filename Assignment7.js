const add = () => {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var sum = parseFloat(n1) + parseFloat(n2);
    document.getElementById('res').innerHTML = "Sum is: " + sum;
}

const sub = () => {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var sum = parseFloat(n1) - parseFloat(n2);
    document.getElementById('res').innerHTML = "Sub is: " + sum;
}

const mul = () => {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var sum = parseFloat(n1) * parseFloat(n2);
    document.getElementById('res').innerHTML = "Mul is: " + sum;
}

const div = () => {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    if (parseFloat(n2) === 0) {
        document.getElementById('res').innerHTML = "Cannot divide by zero";
    } else {
        var sum = parseFloat(n1) / parseFloat(n2);
        document.getElementById('res').innerHTML = "Div is: " + sum;
    }
}
 