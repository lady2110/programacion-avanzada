let promise= new Promise(function(resolve,reject){
	setTimeout(()=> reject(new error("Error")),2000)
});