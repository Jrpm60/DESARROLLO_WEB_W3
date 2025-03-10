const persona1 = {
    nombre : "juan",
    edad : 12,
    isAdmin : true
};

const persona2 = {
    nombre : "maria",
    edad : 18,
    isAdmin : true
};

/* console.log(persona.edad);

let key = "edad"
console.log(persona[key]);

persona.edad = 18;
persona["isloggedIn"]= true;
console.log(persona);

delete persona.isloggedIn;
console.log(persona);

if ("isAdmin" in persona) {
    console.log("existe");
}

for (const key in persona) {
    
        const element = (persona[key]);
        
    
} */
//-----------------------------------------------------------------------------------------
//const arrPersonas = [persona1, persona2];

/* const arrPersonas = [
    {nombre: "juan", edad: 18},
    {nombre: "luis", edad: 24},
    {nombre: "ana", edad: 32},
]

arrPersonas.forEach(element => {
    console.log(element);
    console.log(element.nombre);






}) */
//----------------------------------------------------------------------------------------

//Arrays de objetos
const peliculas = [
    {
        titulo: "Inception",
        director: "Christopher Nolan",
        año: 2010
    },
    {
        titulo: "Interstellar",
        director: "Christopher Nolan",
        año: 2014
    }
  ];
   
  // mostrar los titulos de las peliculas

  peliculas.forEach(element => {

    console.log(element.titulo);
  
})

  // agregar unna nueva pelicula al array

  const o = {
    titulo: "El Ojo",
    director: "Peter Gabriel",
    año: 2030
  }

  peliculas.push (o);

  peliculas.forEach(element => {

    console.log(element.titulo);
  });
  