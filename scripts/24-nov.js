let listaProductos = [];

const agregarProducto = (e) => {
    e.preventDefault();
    const nuevoProductoForm = document.getElementById('nuevoProductoForm');
    const elementos = [...nuevoProductoForm.elements];
    let dataProducto = {};

elementos.forEach((item) => {
    if (item.name && item.name !== 'enviar') {
        dataProducto[item.name] = item.value;
    }
});

listaProductos.push(dataProducto);
nuevoProductoForm.reset();

let productList = document.getElementById('productList');


console.log(listaProductos)
imprimirProductos(listaProductos);

};
//error
const imprimirProductos = (lista) => {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    listaProductos.forEach((producto) => {
        const contenedor = document.createElement('div')
        const titulo = document.createElement('h3')
        const descripcion = document.createElement('p')
        const precio = document.createElement('p')
        const cantidad = document.createElement('p')
        const categoria = document.createElement('p')
        const boton = document.createElement('button')

        boton.addEventListener('click' , () => {
            eliminarProducto(producto.nombre);
        })

        titulo.textContent = `Producto: ${producto.nombre}`;
        descripcion.textContent = `Descripcion: ${producto.descripcion}`;
        precio.textContent = `Precio: ${producto.precio}`;
        cantidad.textContent = `Cantidad: ${producto.cantidad}`;
        categoria.textContent = `Categoria: ${producto.categoria}`;
        boton.textContent = `Eliminar`;

        contenedor.append(titulo ,descripcion ,precio ,cantidad ,categoria ,boton);
        productList.appendChild(contenedor);
    });
}
//error


const eliminarProducto = (productoNombre) => {
    listaProductos =  listaProductos.filter((item) => {
        if(item.nombre !== productoNombre) {
            return producto;
        }
    });

    imprimirProductos(listaProductos);
}