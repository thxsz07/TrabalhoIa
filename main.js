const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No caminho para a escola, você vê um robô entregando encomendas pela rua. O que você pensa?",
        alternativas: [
            {
                texto: "Isso pode facilitar muito a vida das pessoas!",
                afirmacao: "Acreditou que a tecnologia pode otimizar tarefas do dia a dia. "
            },
            {
                texto: "Será que isso vai acabar com empregos de entregadores?",
                afirmacao: "Refletiu sobre os impactos sociais que a automação pode gerar. "
            }
        ]
    },
    {
        enunciado: "Durante a aula, o professor mostra um programa de IA que cria músicas em segundos. Qual sua reação?",
        alternativas: [
            {
                texto: "Quero testar e criar minhas próprias músicas com IA!",
                afirmacao: "Descobriu novas formas criativas de se expressar usando a tecnologia. "
            },
            {
                texto: "Prefiro músicas criadas por pessoas, com emoção real.",
                afirmacao: "Percebeu que a arte humana ainda tem um valor único que nenhuma máquina substitui. "
            }
        ]
    },
    {
        enunciado: "Em um trabalho em grupo, alguém sugere usar IA para gerar todo o conteúdo da apresentação. O que você decide?",
        alternativas: [
            {
                texto: "Vamos usar a IA como apoio, mas também colocar nossas ideias.",
                afirmacao: "Soube equilibrar tecnologia com pensamento crítico. "
            },
            {
                texto: "Melhor não usar, é arriscado depender só da máquina.",
                afirmacao: "Defendeu a importância da autonomia e da originalidade no aprendizado. "
            }
        ]
    },
    {
        enunciado: "Na feira de ciências da escola, você precisa criar um projeto. O que decide fazer?",
        alternativas: [
            {
                texto: "Construir um robô simples que interaja com as pessoas.",
                afirmacao: "Teve iniciativa de aplicar a robótica de forma divertida e educativa. "
            },
            {
                texto: "Criar uma apresentação mostrando os riscos e benefícios da IA.",
                afirmacao: "Se tornou um porta-voz da reflexão ética sobre tecnologia. "
            }
        ]
    },
    {
        enunciado: "Anos depois, a IA está presente em quase todas as profissões. Qual caminho você escolhe seguir?",
        alternativas: [
            {
                texto: "Trabalhar criando e programando novas IAs.",
                afirmacao: "Se tornou um profissional de ponta no desenvolvimento tecnológico. "
            },
            {
                texto: "Ajudar pessoas a entenderem e usarem a IA de forma consciente.",
                afirmacao: "Virou referência em educação digital e ética tecnológica. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
