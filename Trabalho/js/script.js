function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function login() {
    var usuario = document.getElementsByName('usuario')[0].value.toLowerCase();
    var senha = document.getElementById('senha').value.toLowerCase();
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

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);

    alert("Cadastrado com sucesso!");

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
