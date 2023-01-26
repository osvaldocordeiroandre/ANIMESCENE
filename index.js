function logar(){

    let login = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;

    if(login == "ajkgostoso" && senha == "ajkgostoso"){
        location.href = "animescenehome.html";
    }else{
        alert('Usuario ou senha incorreto');
    }
}