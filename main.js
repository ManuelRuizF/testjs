const alertaapriete = document.getElementById('titulo');
//console.log(alertaapriete);
alertaapriete.addEventListener('click', ()=>{
    Swal.fire('Joder tio me has apretado')
})

/* const msj = document.querySelector('#caja-texto')
msj.addEventListener('input',()=>{
    Swal.fire(`${msj.value}`)
}) 

const inputText = document.querySelector('#input-text')
const output = document.querySelector('#output')

inputText.addEventListener('input', () => {
  console.log(inputText.value)
  output.textContent = `Has escrito: ${inputText.value}`
})
*/
const cajaTexto = document.getElementById('caja-texto')
cajaTexto.addEventListener('keypress', (e) => {
    if (e.key === "Enter"){
        Swal.fire(`Tu mensaje para los novios es : "${cajaTexto.value}"` )
    }
  const tecla = e.key
  console.log('La tecla presionada es: ', tecla)
})


