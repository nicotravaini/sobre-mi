// Esta función retorna los números ingresados por el usuario
function numero(numero) {
    return parseFloat(document.getElementById(numero).value);
}

// Esta función retorna la operación elegida por el usuario
function operacion(operador) {
    return document.getElementById(operador).value;
}

// Esta función corrobora que los datos ingresados sean correctos y hace el calculo matemático solicitado, devolviendo el resultado
function calcular() {
    let num1 = numero("numero1");
    let num2 = numero("numero2");
    let operaciones = operacion("operaciones");
    let resultado;
    if (isNaN(num1) || isNaN(num2)) {
        alert("El valor tiene que ser numerico");
        return "";
    } else {
        switch (operaciones) {
            case "sumar":
                resultado = num1 + num2;
                break;
            case "restar":
                resultado = num1 - num2;
                break;
            case "multiplicar":
                resultado = num1 * num2;
                break;
            case "dividir":
                resultado = num1 / num2;
                break;
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}

// Esta función resetea los datos ingresados
function borrar(){
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("operaciones").value ="";
}