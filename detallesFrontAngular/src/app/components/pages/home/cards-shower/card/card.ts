import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../../../interfaces/producto';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class Card {

  @Input() producto!: Producto;

  @Output() ver = new EventEmitter<Producto>();

  @Input() esAdmin = false;

  @Output() editar = new EventEmitter<Producto>();

  editarProducto() {
    this.editar.emit(this.producto);
  }


  verMas() {
    this.ver.emit(this.producto);
  }

  @Output() eliminar = new EventEmitter<Producto>();

}



