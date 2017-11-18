/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
//var listita = document.getElementById('List');

var iconoDesplegado = document.getElementById('iconoDesplegado');
iconoDesplegado.addEventListener('click', function(){
	document.getElementById('bienvenida').style.display = 'none';
	document.getElementById('actualizacion').style.display = 'none';
	document.getElementById('eventos').style.display = 'none';
	document.getElementById('indicadores').style.display = 'none';
	var desplegado = document.getElementById('desplegado');
	desplegado.style.display = 'block';

});