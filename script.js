const imagens = [
    "./assets/imagem1.jpeg",
    "./assets/imagem2.jpeg",
    "./assets/imagem3.jpeg",
    "./assets/imagem4.jpeg",
    "./assets/imagem5.jpeg",
    "./assets/imagem6.jpeg",
    "./assets/imagem7.jpeg",
    "./assets/imagem8.jpeg",
    "./assets/imagem9.jpeg",
    "./assets/imagem10.jpeg",
    "./assets/imagem11.jpeg",
    "./assets/imagem12.jpeg",
    "./assets/imagem13.jpeg",
    "./assets/imagem14.jpeg",
    "./assets/imagem15.jpeg",
    "./assets/imagem16.jpeg",
    "./assets/imagem17.jpeg"
];

let indice = 0;

function alterarImagem() {
    // Incrementa o índice
    indice++;
    
    // Se o índice exceder o número de imagens, reinicia para o primeiro
    if (indice >= imagens.length) {
        indice = 0;
    }
    
    // Altera o src da imagem
    document.getElementById("imagem").src = imagens[indice];
}

// Altera a imagem a cada 5 segundos (5000 ms)
setInterval(alterarImagem, 5000);


const dataInicial = new Date("2022-12-21 00:00:00");

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicial;

    // Calcula o tempo em diferentes unidades
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Exibe o resultado no elemento HTML
    if (anos < 2) {
        document.getElementById("contador").innerHTML =
            `${anos} ano, ${meses} meses, ${dias} dias, ` +
            `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    } else {
        document.getElementById("contador").innerHTML =
        `${anos} anos, ${meses} meses, ${dias} dias, ` +
        `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    }
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Chama a função inicialmente para exibir o contador imediatamente
atualizarContador();
