export class ProductModel {
  codigo:any;
  nombre:any;
  cantidad_disponible:any;
  precio:any;
  descripcion:any;
  img_url:any;
  nombre_categoria:any;
  nombre_marca:any;
  codigo_marca:any;
  codigo_categoria:any;

  constructor(codigo:any, nombre:any, cantidad_disponible:any, precio:any, descripcion:any, img_url:any, nombre_categoria:any, nombre_marca:any, codigo_marca:any, codigo_categoria:any) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.cantidad_disponible = cantidad_disponible;
    this.precio = precio;
    this.descripcion = descripcion;
    this.img_url = img_url;
    this.nombre_categoria = nombre_categoria;
    this.nombre_marca = nombre_marca;
    this.codigo_marca = codigo_marca;
    this.codigo_categoria = codigo_categoria;
  }
}

