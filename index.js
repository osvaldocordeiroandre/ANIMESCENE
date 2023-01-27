function logar(){

    let login = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;

    if(login == "user27" && senha == "user27"){
        location.href = "animescenehome.html";
    }else{
        alert('Usuario ou senha incorreto');
    }
}