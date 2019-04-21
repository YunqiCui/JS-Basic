function calculator(n1,n2,operator) {
    var res = 0;
    if(operator == "+"){
        res = n1 + n2;
    }else if(operator == "-"){
        res = n1 - n2;
    }else if(operator == "*"){
        res = n1 * n2;
    }else if (operator == "/"){
        res = n1/n2;
    }
    document.write("res = " + res);
}