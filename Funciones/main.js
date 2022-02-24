const carro ={
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
}