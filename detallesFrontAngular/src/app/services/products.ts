import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Producto } from '../interfaces/producto';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  private productos = signal<Producto[]>([]);
  filtro = signal<'damas' | 'todos' | 'caballeros'>('todos');

  productosFiltrados = computed(() => {
    const cat = this.categoriaSeleccionada();
    const texto = this.busqueda().toLowerCase();
    const lista = this.productos();

    let filtrados = lista;

    if (cat !== 'Todos') {
      filtrados = filtrados.filter(p => p.categoria === cat);
    }

    if (texto) {
      filtrados = filtrados.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.descripcion.toLowerCase().includes(texto) ||
        p.categoria.toLowerCase().includes(texto)
      );
    }

    return filtrados;
  });


  constructor(private http: HttpClient) { }

  cargarProductos() {
    this.http
      .get<any[]>(environment.apiUrl + '/productos')
      .subscribe(data => this.productos.set(data));
  }

  actualizarProducto(producto: Producto) {
    const id = producto._id || producto.id;
    return this.http.put(
      environment.apiUrl + '/productos/' + id,
      producto
    );
  }

  eliminarProducto(_id: string) {
    return this.http.delete(environment.apiUrl + `/productos/${_id}`);
  }

  crearProducto(producto: Producto) {
    return this.http.post(environment.apiUrl + '/productos', producto);
  }

  private busqueda = signal('');

  setBusqueda(texto: string) {
    this.busqueda.set(texto.toLowerCase());
  }

  categorias = computed(() => {
    const lista = this.productos();

    const unicas = new Set(lista.map(p => p.categoria || 'Sin categoría'));

    return ['Todos', ...Array.from(unicas)];
  });

  categoriaSeleccionada = signal('Todos');

  filtrarPorCategoria(cat: string) {
    this.categoriaSeleccionada.set(cat);
  }







}
