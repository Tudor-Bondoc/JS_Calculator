
var member1 = '';
var member2 = '';
var bigString = member1;
var stillMember1 = true;
var result = 0;
var remeberOperator;

function switchMember2() {
    member1 = parseInt(member1);
    stillMember1 = false;
}

function add1() {
    if (stillMember1 == true)
    {
        member1 = member1 + '1';
        document.querySelector("#display").innerHTML = member1;
    }
    else 
    {
        member2 = member2 + '1';
        document.querySelector("#display").innerHTML = member2;
    }   
}

function add2() {

    if (stillMember1 == true)
    {
        member1 = member1 + '2';
        document.querySelector("#display").innerHTML = member1;
    }
    else 
    {
        member2 = member2 + '2';
        document.querySelector("#display").innerHTML = member2;
    }
   
}

function add3() {

    if (stillMember1 == true)
    {
        member1 = member1 + '3';
        document.querySelector("#display").innerHTML = member1;
    }
    else 
    {
        member2 = member2 + '3';
        document.querySelector("#display").innerHTML = member2;
    }
}

function add4() {

    if (stillMember1 == true)
    {
        member1 = member1 + '4';
        document.querySelector("#display").innerHTML = member1;
    }
    else 
    {
        member2 = member2 + '4';
        document.querySelector("#display").innerHTML = member2;
    }
   
}

function add5() {

    if (stillMember1 == true)
    {
        member1 = member1 + '5';
        document.querySelector("#display").innerHTML = member1;
    }
    else 
    {
        member2 = member2 + '5';
        document.querySelector("#display").innerHTML = member2;
    }
   
}

function add6() {

    if (stillMember1 == true)
    {
        member1 = member1 + '6';
        document.querySelector("#display").innerHTML = member1;
    }
    else 
    {
        member2 = member2 + '6';
        document.querySelector("#display").innerHTML = member2;
    }
   
}

function add7() {

    if (stillMember1 == true)
    {
        member1 = member1 + '7';
        document.querySelector("#display").innerHTML = member1;
    }
    else 
    {
        member2 = member2 + '7';
        document.querySelector("#display").innerHTML = member2;
    }
   
}

function add8() {

    if (stillMember1 == true)
    {
        member1 = member1 + '8';
        document.querySelector("#display").innerHTML = member1;
    }
    else 
    {
        member2 = member2 + '8';
        document.querySelector("#display").innerHTML = member2;
    }
   
}

function add9() {

    if (stillMember1 == true)
    {
        member1 = member1 + '9';
        document.querySelector("#display").innerHTML = member1;
    }
    else 
    {
        member2 = member2 + '9';
        document.querySelector("#display").innerHTML = member2;
    }
   
}

function add0() {

    if (stillMember1 == true)
    {
        member1 = member1 + '0';
        document.querySelector("#display").innerHTML = member1;
    }
    else 
    {
        member2 = member2 + '0';
        document.querySelector("#display").innerHTML = member2;
    }
   
}

function pressPlus() {
    switchMember2();
    remeberOperator = '+';
}

function pressMinus() {
    switchMember2();
    remeberOperator = '-';
}

function pressMul() {
    switchMember2();
    remeberOperator = '*';
}

function pressDiv() {
    switchMember2();
    remeberOperator = '/';
}

function pressEqual() {
    member2 = parseInt(member2);
    if (remeberOperator == '+')
    {
        result = member1 + member2;
    }
    else if(remeberOperator == '-')
    {
        result = member1 - member2;
    }
    else if(remeberOperator == '*')
    {
        result = member1 * member2;
    }
    else
    {
        result = member1 / member2;
    }
    document.querySelector("#display").innerHTML = result;
    member1 = result;
    member2='';
    result = 0;
}





function fclear() {
    location.reload(false);
}


