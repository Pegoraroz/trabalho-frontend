<<<<<<< HEAD
=======

>>>>>>> 1291256d0689cebfff86f94426369aeb349752ac
function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
<<<<<<< HEAD
    });
}

function login() {
    var usuario = document.getElementsByName('usuario')[0].value.toLowerCase();
    var senha = document.getElementById('senha').value.toLowerCase();

    // Recupera os dados armazenados no localStorage
    var storedUsuario = localStorage.getItem("usuario");
    var storedSenha = localStorage.getItem("senha");

    if (usuario === storedUsuario && senha === storedSenha) {
        localStorage.setItem("logado", "true");
        window.location.href = "home.html";
    } else {
        alert("Acesso Negado. Dados incorretos");
    }
}

function cadastro() {
    var usuario = document.getElementsByName('usuario')[0].value.toLowerCase();
    var senha = document.getElementById('senha').value.toLowerCase();

    // Salva os dados do usuário no localStorage
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);

    alert("Cadastrado com sucesso!");

    // Redireciona à tela de login após o cadastro
    window.location.replace("login.html");
}

function checkLogin() {
    var logado = localStorage.getItem("logado");
    if (logado === "true") {
        window.location.href = "home.html";
    }
}

function logout() {
    localStorage.removeItem("logado");
}

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    login();
});

document.getElementById('cadastro-form').addEventListener('submit', function (event) {
    event.preventDefault();
    cadastro();
});

checkLogin();
=======
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
>>>>>>> 1291256d0689cebfff86f94426369aeb349752ac
