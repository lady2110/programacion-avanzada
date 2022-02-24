/*const carro ={
	placa:'HJJ789',
	modelo: '2022',
	//funcion tradicional
	arrancar: function(){
		console.log('Arrancando el coche ${this.placa} ${this.modelo}');
	},
	//funcion flecha
	parar:()=>{
		console.log('parando el coche ${this.placa} ${this.modelo}');
	}
}*/

/*const producto ={
	nombre:'shampoo',
	decirProducto(){
		console.log(this.nombre);
	},
	decirProductoFlecha: () => {
		console.log(this.nombre);
	}
}
//console.log(producto.decirProducto());
console.log(producto.decirProductoFlecha());*/

const producto ={
	nombre:'shampoo',
	decirProducto: function(){
		let that = this;
	setTimeout(function(){
		console.log(that.nombre);
	},
	3000);
}
}

producto.decirProducto();
