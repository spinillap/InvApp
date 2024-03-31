import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { producto } from '../models/producto';
import { productosComponent } from '../components/productos/productos.component';


@Injectable({
  providedIn: 'root'
})
export class productoService {

  selectedproducto: producto;
  productos : producto[];
  readonly URL_API = 'http://localhost:9000/api/productos';

  constructor(private http: HttpClient) {
    this.selectedproducto = new producto();
     this.productos = [];
   }

  getproductos(){
    return this.http.get(this.URL_API);
  }

  postproducto(producto:producto){
    return this.http.post(this.URL_API, producto);
  }

  putproducto(producto:producto){
    return this.http.put(this.URL_API +  `/${producto._id}`, producto);// 
  }

  deleteProducto(_id: string) { // Solo se necesita el id, no todo lo del producto
    return this.http.delete(this.URL_API + `/${_id}`);// utilizamos el método delete
  }

}