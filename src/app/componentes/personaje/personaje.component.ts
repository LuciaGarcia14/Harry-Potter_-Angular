import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {
  @Input() personaje = {
    'id': 0, 'nombre': '', 'especie': '', 'genero': '', 'casa':
  '', 'colorOjos': '', 'colorPelo': '', 'imagen': "",
varitaMagica: { 'madera': '', 'centro': '', 'tamanio': 0 }
};

@Output() eventoClicImagen = new EventEmitter();
clickEnImagen() { 
this.eventoClicImagen.emit(this.personaje.nombre); 
}
}
