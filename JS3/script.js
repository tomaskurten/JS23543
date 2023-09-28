// function saludar() {
//     console.log("Hola!")
//    }   


// //main

// for (i = 1; i <= 10; i++) {
//     saludar()
//    }
   
// function sumar(a,b=0){
//     console.log(a+b)
// }

// sumar(3)
// sumar(3,7)
// console.log("Fin")

// function sumar2(a, b){
//     return a+b
//    }
   

// resultado = sumar2(7, 4)
// console.log(resultado)

// function sumar3(a,b){
//     var a=1
//     console.log("valor local de a: ",a)
//     return a+b
//    }
// a=4
// c=sumar3(3,5)
// console.log("valor global de a: ",a)


// a = 5
// b = 10
// if (a == 5) {
//  let a = 4 // El alcance es dentro del bloque if
//  b = 15 // El alcance es global, sobreescribe a 10
//  console.log(a) // 4, por alcance a nivel de bloque
//  console.log(b) // 15, por alcance global
//  let c=10
// }
// console.log(a) // 5, por alcance global
// console.log(b)
// console.log(c)


// function saludar(nombre){
//     alert("hola "+nombre)
// }

// function buendia(persona){
//     alert("buendia "+persona)
// }

// function procesarSaludo(callback){
//     humano=prompt("Ingrese su nombre")
//     callback(humano)
// }

// // buendia("tomas ")
// // saludar("tomas")
// procesarSaludo(saludar)
// procesarSaludo(buendia)


// function iniciar(){
//     var nombre="Tomas"

//     function alertarNombre(){
//         console.log(nombre)
//     }
//     alertarNombre()
    
// }

// iniciar()
// alertarNombre()
// // console.log(nombre)


function sumar3(a,b){
    var a=1
    c=5
    console.log("valor local de a: ",a)
    resultado=a+c
    if(c<10){
        resultado=a+b
        
    }
    
    
    return resultado
   }
a=4
c=sumar3(3,5)
console.log("valor global de a: ",a)