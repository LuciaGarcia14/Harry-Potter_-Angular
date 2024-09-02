import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  
  personajes = [
    {
      'id': 1, 'nombre': 'Harry Potter', 'especie': 'humano', 'genero': 'masculino', 'casa':
        'Gryffindor', 'colorOjos': 'verde', 'colorPelo': 'negro', 'imagen': "./assets/1.png",
      varitaMagica: { 'madera': 'acebo', 'centro': 'Pluma de Fenix', 'tamanio': 0 }
    },
    {
      'id': 2, 'nombre': 'Hermione Granger', 'especie': 'humano', 'genero': 'femenino',
      'casa': 'Gryffindor', 'colorOjos': 'marrón', 'colorPelo': 'marrón', 'imagen':
        "./assets/2.jpg", varitaMagica: {
          'madera': 'enredadera', 'centro': 'Dragón', 'tamanio':
            0
        }
    },
    {
      'id': 3, 'nombre': 'Ron Weasley', 'especie': 'humano', 'genero': 'masculino', 'casa':
        'Gryffindor', 'colorOjos': 'azul', 'colorPelo': 'rojo', 'imagen': "./assets/3.jpg",
      varitaMagica: { 'madera': 'enredadera', 'centro': 'Dragón', 'tamanio': 14 }
    },
    {
      'id': 4, 'nombre': 'Draco Malfoy', 'especie': 'humano', 'genero': 'masculino', 'casa':
        'Slytherin', 'colorOjos': 'gris', 'colorPelo': 'rubio', 'imagen': "./assets/4.jpg",
      varitaMagica: { 'madera': 'espino', 'centro': 'Unicornio', 'tamanio': 10 }
    },
    {
      'id': 5, 'nombre': 'Minerva McGonagall', 'especie': 'humano', 'genero': 'femenino',
      'casa': 'Gryffindor', 'colorOjos': '', 'colorPelo': 'negro', 'imagen': "./assets/5.jpg",
      varitaMagica: { 'madera': '', 'centro': '', 'tamanio': 0 }
    },

    {
      'id': 6, 'nombre': 'Cedric Diggory', 'especie': 'humano', 'genero': 'masculino', 'casa':
        'Hufflepuff', 'colorOjos': 'gris', 'colorPelo': 'marrón', 'imagen': "./assets/6.png",
      varitaMagica: { 'madera': 'ceniza', 'centro': 'Unicornio', 'tamanio': 12 }
    },
    {
      'id': 7, 'nombre': 'Cho Chang', 'especie': 'humano', 'genero': 'femenino', 'casa':
        'Ravenclaw', 'colorOjos': 'marrón', 'colorPelo': 'negro', 'imagen': "./assets/7.jpg",
      varitaMagica: { 'madera': '', 'centro': '', 'tamanio': 0 }
    },
    {
      'id': 8, 'nombre': 'Severus Snape', 'especie': 'humano', 'genero': 'masculino', 'casa':
        'Slytherin', 'colorOjos': 'negro', 'colorPelo': 'negro', 'imagen': "./assets/8.jpg",
      varitaMagica: { 'madera': '', 'centro': '', 'tamanio': 0 }
    },
    {
      'id': 9, 'nombre': 'Rubeus Hagrid', 'especie': 'half-giant', 'genero': 'masculino', 'casa':
        'Gryffindor', 'colorOjos': 'negro', 'colorPelo': 'negro', 'imagen': "./assets/9.jpg",
      varitaMagica: { 'madera': 'roble', 'centro': '', 'tamanio': 16 }
    }
  ];

  constructor() { }

  getPersonajes() {
    return this.personajes;
    }
    contarPersonajes() {
    return this.personajes.length;
    }


    buscarPersonaje(nombreDelPersonaje: string) {
      let regex = new RegExp(nombreDelPersonaje, 'gi'); //expresion regular 
      return this.personajes.filter(personaje => personaje.nombre.match(regex)); //compara lo que mete el usuario con la expresion regular
      }
      //instanciamos el regex para pasarle como parametro el nombre del personaje g (busqueda global) y i (para saber si se debe hacer diferencia entre mayusculas y minusculas) )
}
