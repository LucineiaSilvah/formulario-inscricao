const input = document.querySelector('[data-input]')

const btn = document.querySelector('[data-btn]')


const formulario = document.getElementById('form')
btn.disabled = false;

btn.addEventListener('click', (e)=>{
  e.preventDefault()
  const modal = document.querySelector('.modal')
  const btnfechar = document.querySelectorAll('.close')
  let erro = document.querySelector('[data-erro]')
  if(input.value === ''){
  erro.textContent ="Campo  email não pode estar vazio"
  input.classList.add('error')
   }else if(validarEmail(input.value) == true){
   
    btn.classList.add('sucesso')
    input.classList.add('success')
    setTimeout(()=>{
      enviarDados()
    },9999999)
    modal.style.visibility = 'visible';
    formulario.style.opacity ='0'
    btnfechar.forEach((btn)=>{
      btn.addEventListener('click',()=>{

        modal.style.visibility = 'hidden';
        formulario.style.opacity ='1'
        location.reload()
      })
    })
   
   }else{
    erro.textContent ="Opa..por favor digite um email Valido!"
   }
})


function enviarDados(){
  formulario.submit()
 
}

function validarEmail(email){
 const  RegExp =
 /\S+@\S+\.\S+/
 return RegExp.test(email)
}