/* let form_inscribete = document.getElementById("inscripcion") */

let form_inscripcion = document.getElementById("form_inscribete")
// console.log(form_contacto)
// console.log(document.getElementById("name_c"))

/* INICIO FORMULARIO CONTACTO */
form_inscripcion.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("aqui estoy")
  
  let usuario = document.getElementById("username").value   //input  tiene el id y con el .value obtengo el valor de parte del cliente
  let email= document.getElementById("email").value
  let password = document.getElementById("password").value
  let password_2 = document.getElementById("password_2").value

  
  if(usuario == "" || email== "" || password == ""  || password_2 == ""){
    alert("todos los campos son necesarios")
  }
  else if(password != password_2){
    alert( "los password deben ser iguales")
  }
  
  else {
    alert(`muchas gracias ${usuario} hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ${email}`)
  }
  
  //console.log(nombre_c, "por id")
  //console.log(email_c, "email_c")
  //console.log(telefono_c, "telefono_c")
  //console.log(motivo_c, "motivo_c")
  //console.log(cometario_c, "cometario_c")
  // alert(`muchas gracias ${nombre_c} hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ${email_c}`)
})

/* fecha_aparte */





let fecha = new Date();
console.log(fecha)

let dia = new Date().getDate()+2
let mes = new Date().getMonth()+1
let anio = new Date().getFullYear()

console.log(dia)
console.log(mes)
console.log(anio)

let fecha_termino =`${dia}/${mes}/${anio}`
console.log(fecha_termino)
document.getElementById("fecha").innerHTML = fecha_termino


