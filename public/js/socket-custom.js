//Se inicializa el socket
var socket = io();

socket.on('connect', function(){
	console.log("Conectado al server");
});

socket.on('disconnect', function(){
	console.log("Conexión perdida");
});

//Enviar información
socket.emit('message', {
	text: 'Hola Mundo',
	user: "Rogelio"
}, function(response){
	console.log("callback", response);
});

//Escuchar información
socket.on("message", function(data){
	console.log("Servidor:",data);
});