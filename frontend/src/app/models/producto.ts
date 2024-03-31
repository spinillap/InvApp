export class producto {
  constructor(_id = "", numpart = "", descripcion = "", cantidad = 0, precio = 0) {
      this._id = _id;
      this.numpart = numpart;
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.precio = precio;
    }
    
  _id: string; // Sub guión id porque los datos van a venir de MOngodb
  numpart: string;
  descripcion: string;
  cantidad: number;
  precio: number;

}