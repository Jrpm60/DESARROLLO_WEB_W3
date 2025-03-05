// Has recibido datos de un formulario FORM de HTML
let usuario = {
    nombre: "Juan",
    edad: undefined,  // Edad no proporcionada
  };
  // Verificamos si el nombre y la edad son válidos.
  // Crear una funcion para verificar el usuario : verificamosUsuario(user)
  // Comprobar que los tipos de datos no son undefined ni null
function verificarUsuario(usuario) {

  if (usuario.nombre == undefined|| usuario.nombre == null || usuario.edad == undefined || usuario.edad == null) {
        console.log('Error de validacion'); 
    }
  else {    
        console.log('Gracias ! Tenemos todos los datos necesarios');
    }
}
verificarUsuario(usuario);


  