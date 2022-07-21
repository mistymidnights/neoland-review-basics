//Iteración #1: Mix for e includes**
//Dado el siguiente javascript usa forof para recorrer el array de películas, 
//genera un nuevo array con las categorías de las películas e imprime por consola el array de 
//categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let acc = [];
let noRepetidos = [];
for (const films of movies) {
    for (const key in films) {
        films["categories"].forEach((categoria) => {
            acc.push(categoria);
        });
        }
    }

acc.forEach((element) => {
    if (!noRepetidos.includes(element))
    noRepetidos.push(element);
});
console.log(noRepetidos)

/* **Iteración #2: Mix Fors**
Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios */

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let totalSum = [];
for (const usuarios of users) {
/*     console.log(usuarios.favoritesSounds) */
    for (const key in usuarios.favoritesSounds) {
        totalSum.push(usuarios.favoritesSounds[key].volume);
            console.log(totalSum)
        }
    }
    console.log(totalSum)

    let sumAll = 0;
    totalSum.forEach((element) => {
        sumAll += element;
    });
    console.log(sumAll)

    let media = sumAll / totalSum.length;
    console.log(media)

    //Iteración #3: Mix Fors*
//Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. 
//Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
//Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay 
//muchas formas de hacer las cosas en javascript.

let numNoRepetidos = [];
for (const usuarios of users) {
    for (const key in usuarios.favoritesSounds) {
        totalSum.push(usuarios.favoritesSounds[key].volume);
            console.log(totalSum)
        }
    }
    console.log(totalSum)

totalSum.forEach((element) => {
    if (!numNoRepetidos.includes(element))
    numNoRepetidos.push(element)
});
console.log(numNoRepetidos)

let contador = 0;
let accDatos = [];
numNoRepetidos.forEach((element) => {
    contador = 0;
    totalSum.forEach((item) => {
        if (element == item)
        contador ++;
    });
    accDatos.push(contador);
});
console.log(accDatos)
for (let index = 0; index < accDatos.length; index++) {
    console.log("Para el numero " + numNoRepetidos[index] + " las veces que se repite " + accDatos[index])
}