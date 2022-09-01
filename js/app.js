//Eventos de los input y textarea
const person = {
    name: '',
    email: '',
    message: ''
}

const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const form = document.querySelector('.form');

nombre.addEventListener('input',readText);
email.addEventListener('input',readText);
message.addEventListener('input',readText);
form.addEventListener('submit',function(e){
    e.preventDefault();
    //Validar Formulario
    const {name, email, message} = person

    //Enviar Formulario
    if(name === '' || email === '' || message === ''){
        //console.log("Todos los campos son obligatorios")
        ShowAlert("Todos los campos son obligatorios",'error')
        return; //Corta la ejecucion del codigo
    }

    ShowAlert("Envio Exitoso")
    //console.log("Enviando Form");
})

function readText(e){
    //console.log(e.target)
    person[e.target.id] = e.target.value
    //console.log(person)
}

function ShowAlert(detail,error = null){
    const alert = document.createElement('P');
    alert.textContent = detail;

    if(error){
        alert.classList.add('error');
    }else{
        alert.classList.add('success');
    }
    form.appendChild(alert);

    nombre.value = " "
    email.value = ""
    message.value = ""

    //Function to dissapear alert
    setTimeout(function(){
        alert.remove();
    },5000)
}