const { io } = require('../server');

io.on('connection', (client) => {
	console.log("Usuario conectado");

	client.emit('message', {
		user: "Administrador",
		message: "Bienvenido a la aplicacion"
	});

	client.on('disconnect', () =>{
		console.log("Usuario desconectado");
	});

	//Escuchar client
	client.on('message', (data, callback) => {
		console.log(data);


		callback && callback({status: 200});

		client.broadcast.emit('message', {
			text: "Mensaje Broadcast"
		});
	});




});

