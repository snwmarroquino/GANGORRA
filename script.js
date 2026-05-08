

const barra = document.getElementById('barra');
const hex = document.getElementById('hexagono');

let tempo = 0;
let rotacaoHex = 0;

function animar() {
    tempo += 0.02; // Velocidade do vai-e-vem

    // Oscilação entre -1 e 1
    const oscilacao = Math.sin(tempo);

    // 1. Posição horizontal (Vai e volta sem parar)
    const posicaoHex = 50 + (oscilacao * 40);
    
    // 2. Inclinação da barra (Efeito de Equilíbrio Invertido)
    const anguloBarra = oscilacao * -15; 

    // 3. Lógica do Giro: O cosseno nos diz a direção do movimento no círculo unitário
    // Math.cos(tempo) é positivo quando o hexágono vai para a direita
    // e negativo quando vai para a esquerda.
    const direcao = Math.cos(tempo);
    rotacaoHex += direcao * 5; // Multiplicador do giro

    // Aplica os estilos
    hex.style.left = `${posicaoHex}%`;
    hex.style.transform = `translateX(-50%) rotate(${rotacaoHex}deg)`;
    barra.style.transform = `rotate(${anguloBarra}deg)`;

    requestAnimationFrame(animar);
}

animar();