// function consultar() {
//   const data = await fetch("")
//   const
// }

// async function click() {
//   const data = await fetch(""), { }
// }

const consultar = async () => {
  const solicitud = await fetch("http://localhost:3000/users")
  const datos = await solicitud.json()
  return datos;//.user
}



consultar().then((usuarios) => {
  
  let cont = 0
  
  for (cont; cont <= usuarios.length;cont++){
    console.log(usuarios[cont])
  } 

 })


let dom = document
// let input_id = dom.querySelector(".id")
let input = dom.querySelectorAll("input")
let select_box = dom.querySelector(".tipo_doc")

let button = dom.querySelector(".enviar")

const enviar = async () => {
  const solicitud = await fetch("http://localhost:3000/users", {
    method: "post"
  }
    button.addEventListener
  )

}

 button.addEventListener("click", function enviar() {
   event.preventDefault();
  
   input.forEach(input => {
     if (input.value === "") {
       console.log("no se ingresa dato")
     }
     else {
       console.log(input.value)
     }
    
   });
   console.log(select_box.value)
 })

button.addEventListener("click", function enviar() {
  event.preventDefault();
  

})
