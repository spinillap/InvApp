import { Component, OnInit } from '@angular/core';
import { productoService } from  "../../services/producto.service";
import { NgForm } from '@angular/forms';
import { producto } from 'src/app/models/producto';
 
declare var M: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',                  //'./productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [productoService]
})
export class productosComponent implements OnInit {

  constructor(public productoService: productoService) { }
  ngOnInit(): void {
    this.listarproducto();
  }
  resetForm(form?: NgForm) { // Limpiar el formulario, recibe un formulario como parametro
    if (form) {
      form.reset();
      this.productoService.selectedproducto = new producto();
    }
  }
  agregarproducto(form: NgForm) {
    if(form.value._id) {
      this.productoService.putproducto(form.value)
      .subscribe(res => {
       this.resetForm(form);
       M.toast({html: 'Actualizado satisfactoriamente'});
       this.listarproducto();
      })
  }else {
    this.productoService.postproducto(form.value)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Agregado satisfactoriamente'});
      this.listarproducto();
    });
  } 
  }  
  listarproducto(form?: NgForm) {
    this.productoService.getproductos().subscribe(res => {
      this.productoService.productos = res as producto[];
      M.toast({html: 'Listado satisfactoriamente'});
    });   
  }     
  modificarproducto(producto: producto) {    
    this.productoService.selectedproducto = producto
      this.resetForm();
      M.toast({html: 'Modificado satisfactoriamente'});
  }
  borrarproducto(_id :string) {
    if(confirm("Esta seguro de borrar el producto?")){
      this.productoService.deleteProducto(_id)
      .subscribe(res => {
      M.toast({html: 'Borrado satisfactoriamente'});
      this.listarproducto();
      this.resetForm()});
     };
  }
}
