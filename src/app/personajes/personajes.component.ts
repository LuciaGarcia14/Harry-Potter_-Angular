import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { FormBuscarPersonaje } from '../models/form-buscar-personaje';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajeSeleccionado = '';
  cuenta = 0;
  formBuscarPersonaje = new FormBuscarPersonaje("");
  personajes = [
    {
      'id': 0, 'nombre': '', 'especie': '', 'genero': '', 'casa':
        '', 'colorOjos': '', 'colorPelo': '', 'imagen': "",
      varitaMagica: { 'madera': '', 'centro': '', 'tamanio': 0 }
    }];



  constructor(private ServicePersonajes: PersonajesService) { }
  ngOnInit(): void {
    this.personajes = this.ServicePersonajes.getPersonajes();
    this.cuenta = this.ServicePersonajes.contarPersonajes();
  }

  buscar(nombreDelPersonaje: string) {
    this.personajes = this.ServicePersonajes.buscarPersonaje(nombreDelPersonaje);
  }

  cancelarBuscar() {
    this.personajes = this.ServicePersonajes.getPersonajes();
    this.formBuscarPersonaje.setNombre('');
  }




}
