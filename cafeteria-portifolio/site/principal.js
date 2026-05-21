// Função para controlar a abertura do menu e animação do botão
function toggleMenu() {
    const menu = document.getElementById('menuLateral');
    const botao = document.getElementById('btnMenu');
    
    menu.classList.toggle('ativo');
    botao.classList.toggle('ativo');
}

// --- SISTEMA AUTOMÁTICO DO BALÃO DE CURIOSIDADES ---
const frasesCafe = [
    "Dica do Barista: Nosso Espresso combina perfeitamente com o bolo de nozes do cardápio! 🍰",
    "Você sabia? O café Zenith é produzido com grãos 100% Arábica, cultivados na sombra para um sabor mais doce.",
    "Uma boa ideia começa com um café. Uma grande ideia começa com um Zenith. 🧠✨",
    "Precisa de ajuda? Clique no botão de menu no canto superior para chamar o garçom! 🔔",
    "Curiosidade: O café espresso tem menos cafeína por xícara do que o café coado tradicional!",
    "Friozinho combinando com Zenith Coffee... Já deu uma olhada nas nossas opções de Cappuccino hoje? 🍫"
];

let indiceAtual = 0;

function atualizarBalao() {
    const elementoBalao = document.getElementById('balaoCuriosidade');
    const elementoTexto = document.getElementById('textoCuriosidade');
    
    // Adiciona efeito de esmaecer (fade out)
    elementoBalao.classList.add('balao-escondido');
    
    // Altera o texto na metade do tempo da animação
    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % frasesCafe.length;
        elementoTexto.innerHTML = frasesCafe[indiceAtual];
        
        // Remove efeito de esmaecer (fade in)
        elementoBalao.classList.remove('balao-escondido');
    }, 500);
}

// Loop para alternar os textos automaticamente a cada 7 segundos
setInterval(atualizarBalao, 7000);
