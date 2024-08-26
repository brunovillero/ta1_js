const btn = document.getElementById("submit");

btn.addEventListener("click", validateForm);

function validateForm(event) {
    event.preventDefault();

    let input_name = document.getElementById("name");
    let input_name_valid = input_name.value != "";
    let error_name = document.getElementById("error_name");

    let input_password = document.getElementById("password");
    let input_password_valid = input_password.value.length >= 8;
    let error_password = document.getElementById("error_password");

    let input_email = document.getElementById("email");
    let input_email_valid = validateEmail(input_email.value) == true;
    
    let error_email = document.getElementById("error_email");


    if(input_name_valid) {
        error_name.innerHTML = "";
        error_name.style.display = "none";
    } else {
        error_name.innerHTML = "Nombre no valido";
        error_name.style.display = "block";
    }

    if(input_password_valid) {
        error_password.innerHTML = "";
        error_password.style.display = "none";
    } else {
        error_password.innerHTML = "Password no valido";
        error_password.style.display = "block";
    }

    if(input_email_valid) {
        error_email.innerHTML = "";
        error_email.style.display = "none";
    } else {
        error_email.innerHTML = "Email no valido";
        error_email.style.display = "block";
    }

    if(!input_name_valid || !input_password_valid || !input_email_valid) {
        console.log("No se pudo enviar el formulario, revise los errores");
    } else {
        console.log("Formulario Enviado");
    }
}

const validateEmail = (email) => {
    
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};
