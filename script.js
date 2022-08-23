
var member1 = '';
var member2 = '';
var bigString = member1;
var stillMember1 = true;
var result = 0;
var remeberOperator;
var numberOfOperators = 0;
var numberOfConsOp = 0;
var pressedEqual = false;

function isInteger(n) {
    return n % 1 === 0;
}

function resetConsOp() { //reset the number of consecutive operators pressed
    numberOfConsOp = 0;
}

function resetEqual(pressedEqual) {
    pressedEqual = !pressedEqual;
}

function switchMember2() { //switch to the second member (input)
    member1 = parseFloat(member1);
    stillMember1 = false;
}

function add1() { //pressing the button 1
    if (pressedEqual)
    {
        member1 = '';
        member2 = '';
        stillMember1 = true;
        pressedEqual = false;
    }
    resetConsOp();
    if (stillMember1 == true) {
        member1 = member1 + '1';
        document.querySelector("#display").innerHTML = member1;
    }
    else {
        member2 = member2 + '1';
        document.querySelector("#display").innerHTML = member2;
    }
}

function add2() {
    if (pressedEqual)
    {
        member1 = '';
        member2 = '';
        stillMember1 = true;
        pressedEqual = false;
    }

    resetConsOp();

    if (stillMember1 == true) {
        member1 = member1 + '2';
        document.querySelector("#display").innerHTML = member1;
    }
    else {
        member2 = member2 + '2';
        document.querySelector("#display").innerHTML = member2;
    }

}

function add3() {
    if (pressedEqual)
    {
        member1 = '';
        member2 = '';
        stillMember1 = true;
        pressedEqual = false;
    }
    resetConsOp();

    if (stillMember1 == true) {
        member1 = member1 + '3';
        document.querySelector("#display").innerHTML = member1;
    }
    else {
        member2 = member2 + '3';
        document.querySelector("#display").innerHTML = member2;
    }
}

function add4() {
    if (pressedEqual)
    {
        member1 = '';
        member2 = '';
        stillMember1 = true;
        pressedEqual = false;
    }
    resetConsOp();

    if (stillMember1 == true) {
        member1 = member1 + '4';
        document.querySelector("#display").innerHTML = member1;
    }
    else {
        member2 = member2 + '4';
        document.querySelector("#display").innerHTML = member2;
    }

}

function add5() {
    if (pressedEqual)
    {
        member1 = '';
        member2 = '';
        stillMember1 = true;
        pressedEqual = false;
    }
    resetConsOp();

    if (stillMember1 == true) {
        member1 = member1 + '5';
        document.querySelector("#display").innerHTML = member1;
    }
    else {
        member2 = member2 + '5';
        document.querySelector("#display").innerHTML = member2;
    }

}

function add6() {
    if (pressedEqual)
    {
        member1 = '';
        member2 = '';
        stillMember1 = true;
        pressedEqual = false;
    }
    resetConsOp();

    if (stillMember1 == true) {
        member1 = member1 + '6';
        document.querySelector("#display").innerHTML = member1;
    }
    else {
        member2 = member2 + '6';
        document.querySelector("#display").innerHTML = member2;
    }

}

function add7() {
    if (pressedEqual)
    {
        member1 = '';
        member2 = '';
        stillMember1 = true;
        pressedEqual = false;
    }
    resetConsOp();

    if (stillMember1 == true) {
        member1 = member1 + '7';
        document.querySelector("#display").innerHTML = member1;
    }
    else {
        member2 = member2 + '7';
        document.querySelector("#display").innerHTML = member2;
    }

}

function add8() {
    if (pressedEqual)
    {
        member1 = '';
        member2 = '';
        stillMember1 = true;
        pressedEqual = false;
    }
    resetConsOp();

    if (stillMember1 == true) {
        member1 = member1 + '8';
        document.querySelector("#display").innerHTML = member1;
    }
    else {
        member2 = member2 + '8';
        document.querySelector("#display").innerHTML = member2;
    }

}

function add9() {
    if (pressedEqual)
    {
        member1 = '';
        member2 = '';
        stillMember1 = true;
        pressedEqual = false;
    }
    resetConsOp();

    if (stillMember1 == true) {
        member1 = member1 + '9';
        document.querySelector("#display").innerHTML = member1;
    }
    else {
        member2 = member2 + '9';
        document.querySelector("#display").innerHTML = member2;
    }

}

function add0() {
    if (pressedEqual)
    {
        member1 = '';
        member2 = '';
        stillMember1 = true;
        pressedEqual = false;
    }
    resetConsOp();

    if (stillMember1 == true) {
        member1 = member1 + '0';
        document.querySelector("#display").innerHTML = member1;
    }
    else {
        member2 = member2 + '0';
        document.querySelector("#display").innerHTML = member2;
    }

}



function pressPlus() {
    pressedEqual = false;
    numberOfConsOp++;
    if (numberOfConsOp >= 2) {
        return;
    }
    numberOfOperators++;
    if (numberOfOperators == 1) {
        switchMember2();
    }
    else {
        pressEqualwoutno();
    }
    remeberOperator = '+';
}

function pressMinus() {
    pressedEqual = false;
    numberOfConsOp++;
    if (numberOfConsOp >= 2) {
        return;
    }
    numberOfOperators++;

    if (numberOfOperators == 1) {
        switchMember2();
    }
    else {
        pressEqualwoutno();
    }
    remeberOperator = '-';
}

function pressMul() {
    pressedEqual = false;
    numberOfConsOp++;
    if (numberOfConsOp >= 2) {
        return;
    }
    numberOfOperators++;

    if (numberOfOperators == 1) {
        switchMember2();
    }
    else {
        pressEqualwoutno();
    }
    remeberOperator = '*';
}

function pressDiv() {
    pressedEqual = false;
    numberOfConsOp++;
    if (numberOfConsOp >= 2) {
        return;
    }
    numberOfOperators++;

    if (numberOfOperators == 1) {
        switchMember2();
    }
    else {
        pressEqualwoutno();
    }
    remeberOperator = '/';
}

function pressEqual() {
    if (numberOfOperators == 0)
        return;
    numberOfOperators = 0;
    pressedEqual = true;
    member2 = parseFloat(member2);
    if (remeberOperator == '+') {
        result = member1 + member2;
    }
    else if (remeberOperator == '-') {
        result = member1 - member2;
    }
    else if (remeberOperator == '*') {
        result = member1 * member2;
    }
    else {
        result = member1 / member2;
    }
    if (!isInteger(result))
        document.querySelector("#display").innerHTML = result.toFixed(4);
    else
        document.querySelector("#display").innerHTML = result;
    member1 = result;
    member2 = '';
    result = 0;
}

function pressEqualwoutno() { // equal without resetting numberOfOperators
    member2 = parseFloat(member2);
    if (remeberOperator == '+') {
        result = member1 + member2;
    }
    else if (remeberOperator == '-') {
        result = member1 - member2;
    }
    else if (remeberOperator == '*') {
        result = member1 * member2;
    }
    else {
        result = member1 / member2;
    }
    if (!isInteger(result))
        document.querySelector("#display").innerHTML = result.toFixed(4);
    else
        document.querySelector("#display").innerHTML = result;
    member1 = result;
    member2 = '';
    result = 0;
}



function fclear() { //reload the page
    location.reload(false);
}


