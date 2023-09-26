// num=0
// console.log(num)
// num=num+1
// console.log(num)
// num+=1
// console.log(num)
// num++
// console.log(num)

a=3
b=1
// console.log(a==b)
// console.log(a!=b)
// console.log(a>b)
// console.log(a<b)
// console.log(a<=b)

// console.log(a>2 && b==0)
// console.log(a>2 && b!=0)
// console.log(a>2 || b==0)
// console.log(a>5 || b==0)
// console.log(!(!(a>5)) || b==0)

c=5

// nota=parseInt(prompt("Ingrese su nota"))
// console.log("Nota:",nota)

// if(nota>=6){
//     console.log("Promocionaste!")
//     if(nota==10){
//         console.log("Excelente!")
//     }
// }
// else{
//     console.log("Desaprobaste :(")
// }

// opcion=parseInt(prompt("Ingrese opcion 1 2 o 3"))
// switch(opcion){
//     case 1:
//         console.log("Opcion 1 elegida")
//         break
//     case 2:
//         console.log("Opcion 2 elegida")
//         break
//     case 3:
//         console.log("Opcion 3 elegida")
//         break
//     default:
//         console.log("Esa opcion no existe")
// }

// nota=6
// condicion=nota>=6 ? "aprobado":"desaprobado"
// console.log(condicion)
// nota=3
// condicion=nota>=6 ? "aprobado":"desaprobado"
// console.log(condicion)


//bucle while
// cont=0 //condicion incial
// while(cont<5){
//     console.log(cont)
//     cont=cont+1
// }
// console.log("Fin del bucle")

// num=parseInt(prompt("Ingrese numero"))
// suma=0
// while(num!=0){
//     suma=suma+num
//     num=parseInt(prompt("Ingrese numero"))
// }
// console.log("suma: ",suma)

// for (i=0; i<5; i++) {
//     console.log(i);
//    }
// console.log("Fin del for")


// cont=0 //condicion incial
// while(cont<5){
//     console.log(cont)
//     cont=cont+1
// }
// console.log("Fin del while")

num=parseInt(prompt("Ingrese num"))
suma=0
nulo=false
while(nulo==false){
    suma=suma+num
    num=parseInt(prompt("Ingrese numero"))
    // if(num==0){
    //     break
    // }
    if(num==0){
        nulo=true
    }
}

console.log(suma)