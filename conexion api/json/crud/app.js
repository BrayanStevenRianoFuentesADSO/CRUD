

const consultar = async () => {
  const solicitud = await fetch("http://localhost:3000/users")//llama a la base de datos
  const datos = await solicitud.json()
  return datos;//.user
}


 consultar().then((usuarios) => {
  
   let cont = 0
  
   for (cont; cont <= usuarios.length;cont++){ //// trae el objeto de cada usuarios
     console.log(usuarios[cont])
   } 

  })

let dom = document
// let input_id = dom.querySelector(".id")
let input = dom.querySelectorAll("input")
let select_box = dom.querySelector(".tipo_doc")

let guardar = dom.querySelector(".enviar")

let id =dom.querySelector(".id")
let nombre =dom.querySelector(".nombre")
let apellido =dom.querySelector(".apellido")
let documento =dom.querySelector(".documento")
let correo =dom.querySelector(".correo")
let direccion =dom.querySelector(".direccion")
let tipo_doc =dom.querySelector(".tipo_doc")
let eliminar=dom.querySelector(".eliminar")
let editar =dom.querySelector(".editar")


let solo_nums=/^[1-9]$/





 guardar.addEventListener("click", function enviar() {///////////////IMPRIME EN CONSOLA EL VALOR DE CADA INPUT 
   event.preventDefault();
   
   
  fetch('http://localhost:3000/users',{
    method: 'POST',
    body:JSON.stringify({
      id: id.value,
      nombre: nombre.value,
      apellido: apellido.value,
      documento: documento.value,
      correo: correo.value,
      direccion: direccion.value,
      tipo_doc: tipo_doc.value
    }),

    headers:{
      'content-type':'application/json',
    },
  })
  
  .then((response)=>response.json())
  
  console.log(select_box.value)///////////////IMPRIME EN CONSOLA CADA VALOR DEL SELECT
 })


eliminar.addEventListener("click", function eliminar(){
  event.preventDefault();

  let cont=0
  for (cont;cont<=consultar.length;cont++){
    if(editar)
    fetch(`http://localhost:3000/${users.id[cont]}`,{
      method: 'DELETE'
    })
  }

  
})



