var num1, num2, num3, evalua, mayor;

num1 = prompt("Ingrese el dato 1 (1-99): ");
num2 = prompt("Ingrese el dato 2 (1-99): ");
num3 = prompt("Ingrese el dato 3 (1-99): ");

if (num1 > num2) {
    evalua = num1;
}else {
    evalua = num2;
}

if (evalua > num3) {
    mayor = evalua;
}else {
    mayor = num3;
}

alert("El numero mayor entre " + num1 +", "+ num2 +" y "+ num3 + " es: " + mayor);

