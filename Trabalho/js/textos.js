window.addEventListener('DOMContentLoaded', function() {
    var file1 = 'textos/artigo-destaque/texto-destaque.txt';
    var file2 = 'textos/artigo-destaque/texto-artigo.txt';
    var file3 = 'textos/jogo-lancamento/texto01.txt';
    var file4 = 'textos/jogo-lancamento/texto02.txt';
    var file5 = 'textos/jogo-lancamento/texto03.txt';

    var textoContainer1 = document.getElementById('texto-destaque');
    var textoContainer2 = document.getElementById('texto-artigo');
    var textoContainer3 = document.getElementById('lancamento-texto');
    var textoContainer4 = document.getElementById('lancamento-texto-h1');
    var textoContainer5 = document.getElementById('lancamento-texto-h2');

    loadFile(file1, textoContainer1);
    loadFile(file2, textoContainer2);
    loadFile(file3, textoContainer3);
    loadFile(file4, textoContainer4);
    loadFile(file5, textoContainer5);
});

function loadFile(file, container) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            container.textContent = xhr.responseText;
        }
    };

    xhr.send();
}
