// arreglo = new Array(1,2,3,4)
// arreglo=[1,2,3,4,5]
// console.log(arreglo)
// console.log("indice 0: ",arreglo[0])
// console.log("indice 4: ",arreglo[4])

// nueva="palabra"
// console.log(nueva[4])

// mix=[33,"palabra",true]
// // console.log(mix)
// console.log(mix[1][4])

var mix2=[33,"palabra",true,[22,"frase"]]
// console.log(mix2[3][1][2])
// console.log(mix2.length)
// console.log(mix2[mix2.length-1])
// mix2.push("nueva")
// console.log(mix2)
// mix2.pop()
// console.log(mix2)
// mix2.pop()
// console.log(mix2)
// mix2.splice(2,4)
// console.log(mix2)
// console.log(mix2)
// mix2.reverse()
// console.log(mix2)

// var numeros=[1,5,8,1,8,3]
// console.log(numeros)
// for(let i=0;i<numeros.length;i++){
//     // console.log(numeros[i])
//     // let elemento=numeros[i]
//     // elemento=elemento*2
//     // console.log(elemento)
    
//     if (numeros[i]>3){
//         numeros[i]=numeros[i]*2
//     }
// }
// console.log(numeros)

var numeros=[1,5,8,1,8,3]
// for(let i=0;i<numeros.length;i++){
//     console.log(i)
// }
// for (n in numeros) {
//     console.log(n)
//     console.log(numeros[n])
//    }
// for(let i=0;i<numeros.length;i++){
//     console.log(numeros[i])
// }
// for (numero of numeros) {
//     console.log(numero)
//    }

// var persona = {
//     nombre: "Ana",
//     apellido: "Paz",
//     edad: 25
//    }

// for (var x in persona) {
//     console.log(x)
//     console.log(persona[x])
//    }
   

// localStorage.setItem("nombre","Tomas")
// localStorage.setItem("edad","31")
// nombre=localStorage.getItem("nombre")
// document.write(nombre)
// sessionStorage.setItem("curso", "FullStack Python")

var myObj = { name: "John",
age: 31,
city: "New York" }

var myJSON = JSON.stringify(myObj)


var myObj1=JSON.parse(myJSON)
// console.log(myObj)
// console.log(myJSON)
// console.log(myObj1)
for (var x in myObj1) {
    console.log(x)
    console.log(myObj1[x])
   }