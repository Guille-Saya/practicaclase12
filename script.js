function edadAltura(){
    let edad

edad =(prompt("Ingresa tu edad: "));

if (edad <=16){
    alert("Eres menor para jugar en una liga profesional");
} else {
    let altura
    altura = (prompt ("Ingresa tu altura en cm: "));
    if (altura >= 160)
    alert("Tienes la edad y la altura necesaria para competir de forma profesional!!")
} 
}

function bucle_20(){ let i = 10;
    while (i <= 30) {
    document.write("El valor del bucle es: " + i + "<br>");
    
    if (i == 20){
    
    document.write("Se rompió la ejecución del bucle.");
    
    break;
    }
    i++;
    }
}

function promedio(){var n1,n2,n3

    n1=parseInt(prompt("Ingrese el primer numero: "));
    n2=parseInt(prompt("Ingrese el segundo numero: "));
    n3=parseInt(prompt("Ingrese el tercer numero: "));
    
    document.write("El promedio de los numeros ingresados es: ", (n1+n2+n3)/3)
}

function sumaEnteros(){
    var n1,n2,n3,n4,n5

    n1=parseInt(prompt("Ingrese el primer numero: "));
    n2=parseInt(prompt("Ingrese el segundo numero: "));
    n3=parseInt(prompt("Ingrese el tercer numero: "));
    n4=parseInt(prompt("Ingrese el cuarto numero: "));
    n5=parseInt(prompt("Ingrese el quinto y último numero:"));
    
    document.write("La suma de los numeros ingresados es: " + (n1+n2+n3+n4+n5)+ "<br>", "Y la resta de estos numeros es: " + (n1-n2-n3-n4-n5) + "<br>");
}

function distintos(){
var i=1;
var suma=0;
var num;
while (num!=0){
    num=prompt("Introdusca numeros distintos de 0: ");
    num = parseInt(num);
    suma=suma+num;
    i=i+1;
}
document.write("La suma de los numeros ingresados es: "+ suma); 
}
 