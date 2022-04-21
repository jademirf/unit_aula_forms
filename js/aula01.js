const main = document.getElementsByTagName('MAIN')[0]
const ul = document.createElement('UL')
const formCadastro = document.querySelector('#cadastro>form')
const fullName = document.querySelector('#cadastro form input[name="fullName"]')
const email = document.querySelector('#cadastro form input[name="email"]')

main.appendChild(ul)

const addUser = function(nome, login) {
    let li = document.createElement('LI')
    li.innerHTML = `Usuário: ${nome} | login: ${login}`
    ul.appendChild(li)
}

formCadastro.addEventListener('submit', event => {
    event.preventDefault()
    if(fullName.value.length < 5) {
        alert('nome muito pequeno')
    } else {
        addUser(fullName.value, email.value)
        fullName.value = ""
        email.value = ""
    }
})