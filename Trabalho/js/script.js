
function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

function login() {
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsById('senha').value;
    senha -senha.toLowerCase(); 

    if(usuario == "admin" && senha =="12345"){
        window.location = "home.html";
        logado = 1;
    }
    
    if(logado == 0){
        alert("Acesso Negado. Dados incorretos");
    }

}

function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "home.html";
}