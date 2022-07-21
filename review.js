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

const acc = [];
for (const films of movies) {
    movies.forEach((element) => {
        filmsCategories = films.categories;
    });
    console.log(filmsCategories);
}
console.log(filmsCategories.includes("comedia"));
//TODO NO HE CONSEGUIDO QUITAR LOS DUPLICADOS




/* **Iteración #4: Métodos findArrayIndex**
Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y 
devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. 
Haz varios ejemplos y compruebalos. */

//TODO
const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

const findArrayIndex = (array, text) =>{
    for (let index = 0; index < animals.length; index++) {
        const element = animals[index];
        if (text === 'string') {
            console.log(animals[index]);
        }
    }
}