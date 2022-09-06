const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')
const mensagensDeErros = document.getElementsByClassName('mensagem-erro')


document.getElementById('btn').addEventListener('click', () => {
  
  if(nome.value == ""){
    nome.classList.add('erro')
    mensagensDeErros[0].classList.add('erro')
  }else {
    mensagensDeErros[0].classList.remove('erro')
    nome.classList.add('tudo-certo')
  }

  if(email.value == ""){
    email.classList.add('erro')
    mensagensDeErros[1].classList.add('erro')
  }else {
    mensagensDeErros[1].classList.remove('erro')
    email.classList.add('tudo-certo')
  }

  if(telefone.value == ""){
    telefone.classList.add('erro')
    mensagensDeErros[2].classList.add('erro')
  }else {
    mensagensDeErros[2].classList.remove('erro')
    telefone.classList.add('tudo-certo')
  }

  if(mensagem.value == ""){
    mensagem.classList.add('erro')
    mensagensDeErros[3].classList.add('erro')
  }else {
    mensagensDeErros[3].classList.remove('erro')
    mensagem.classList.add('tudo-certo')
  }

})



