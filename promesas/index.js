let promise= new Promise(function(resolve,reject){
	// setTimeout(()=> reject(new error("Error")),2000)
	// setTimeout(()=> resolve("Correcto"),2000)
	// resolve("Exitoso");
	// reject(new Error("...."));
	// setTimeout(()=>resolve("...."));
	// //consumidores
	// //then
	// //catch
	// //final

	// promise.then(
	// 	function(result){},
	// 	function(erro){}
	// );
	
	setTimeout(()=> resolve("Finalizado"),5000);
});

promise.then(
	result => alert(result),
	error => alert(error)
);