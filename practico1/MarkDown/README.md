# Calculadora Online Simple

Este proyecto se trata de una calculadora sencilla capaz de sumar, restar, multiplicar y dividir números de hasta 4 dígitos.

## Comenzando 🚀

El uso de esta calculadora es bastante sencillo, comience por ingresar un número en el casillero que dice "Ingresa un número", luego seleccione la operación que desee realizar en el casillero que dice "Elige una operación" y luego ingresa el segundo valor a operar en el casillero que dice "Ingresa otro número". 
Luego presiona el botón "Calcular" para ver el resultado de la operación en el casillero que dice "Resultado".
Puedes utilizar el botón "Borrar" para borrar los valores ingresados y resetear la calculadora.

## Ejecutando las pruebas ⚙️

Todas las pruebas para corroborar el correcto funcionamiento fueron realizadas manualmente, haciendo uso de la calculadora.
Todos los calculos sencillos los hace de forma correcta, pero al intentar hacer calculos con números muy grandes o con muchas decimales pude apreciar que quedaban por fuera del tamaño elegido para el casillero del resultado, por lo que probé:
* limitar el input ingresado hasta 4 dígitos con el atributo maxlength

```
<input class="textElements" type="text" id="numero1" 
placeholder="Ingresa un numero" maxlength="4">
```

* Y limitar el resultado hasta 2 decimales, utilizando el método toFixed().

```
document.getElementById("resultado").innerHTML = resultado.toFixed(2)
```
Hasta que finalmente, me incliné por la opción de limitar el casillero de resultado hasta un cierto límite de caracteres utilizando un "if" luego de realizar el cálculo y advirtiendo al usuario con una ventana emergente.

```
if(resultado.toString().length > 12)
```
Además, para limitar el ingreso de letras, símbolos o texto copiado usé el método parseFloat() y una serie de condicionales para evitar que se realice un cálculo que pudiese romper la calculadora (como dividir por cero) y alertar al usuario con ventanas emergentes. Por ejemplo:

```
else if(operaciones == "dividir" && num2 == 0){
        alert("No se puede dividir por cero")
    }
```

## Construido con 🛠️

* [Visual Studio Code](https://code.visualstudio.com//) - El framework web usado

Algunos sitios web que me sirvieron para ampliar conocimientos y sacarme dudas fueron los siguientes:

* [W3School](https://www.w3schools.com/asp) - W3School es el sitio al que acudí primero y donde prioricé leer contenido para desarrollar la calculadora.

* [Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript) - Mozilla fue mi segundo sitio de consulta de elección para sacarme dudas.

* [Stackoverflow](https://stackoverflow.com/questions/10952615/how-can-i-find-the-length-of-a-number) - De StackOverflow pude sacarme dudas leyendo consultas de otros usuarios, por ejemplo, como usar .length con números.

## Autores ✒️

* **Nicolás Travaini Páez** - *Trabajo Inicial* - [nicotravaini](https://github.com/nicotravaini)

Trabajo práctico realizado para el curso "Páginas Web con Componentes Dinámicos" de FAMAF.

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.

