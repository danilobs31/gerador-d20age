function rolarDados(numeroDados, facesDados) {
    let resultados = 0;

    for (let i = 0; i < numeroDados; i++) {
        const resultadoDado = Math.floor(Math.random() * facesDados) + 1;
        resultados = resultados + resultadoDado;
    }

    return resultados;
}

function modificador(numero) {
    if (numero === 3) {
        return -3;
    } else if (numero >= 4 && numero <= 5) {
        return -2;
    } else if (numero >= 6 && numero <= 8) {
        return -1;
    } else if (numero >= 9 && numero <= 12) {
        return 0;
    } else if (numero >= 13 && numero <= 15) {
        return 1;
    } else if (numero >= 16 && numero <= 17) {
        return 2;
    } else if (numero === 18) {
        return 3;
    } else {
        return "Valor inválido";
    }
}

function itensAleatorios(arrayOriginal, quantidade) {
    const resultado = [];
    const maximoIndice = arrayOriginal.length;

    while (resultado.length < quantidade) {
        const indiceAleatorio = Math.floor(Math.random() * maximoIndice);
        const itemAleatorio = arrayOriginal[indiceAleatorio];

        if (!resultado.includes(itemAleatorio)) {
            resultado.push(itemAleatorio);
        }
    }

    return resultado;
}

const nomes = [
    "Alistair",
    "Eowyn",
    "Cedric",
    "Isolde",
    "Gareth",
    "Arabella",
    "Lancelot",
    "Guinevere",
    "Tristan",
    "Elowen",
    "Gawain",
    "Elara",
    "Roland",
    "Ygraine",
    "Percival",
    "Elara",
    "Ginevra",
    "Gideon",
    "Aria",
    "Galahad",
    "Elara",
    "Brynhild",
    "Eamon",
    "Rowena",
    "Iseult",
    "Dorian",
    "Leilani",
    "Bors",
    "Alaric",
    "Morgana",
    "Caelan",
    "Seraphina",
    "Gwyneth",
    "Isadora",
    "Gareth",
    "Arianwyn",
    "Branwen",
    "Eldric",
    "Lyanna",
    "Cadfael",
    "Arwen",
    "Eldred",
    "Guendolen",
    "Tristessa",
    "Sebastian",
    "Morwen",
    "Ginevra",
    "Thalia",
    "Tavish",
    "Genevieve",
    "Conall",
    "Aurelia",
    "Bran",
    "Isabeau",
    "Faelan",
    "Vivienne",
    "Maelis",
    "Artemis",
    "Briallen",
    "Gareth",
    "Elara",
    "Bryony",
];

const sobrenomes = [
    "Dumont",
    "Blackwood",
    "Stonewall",
    "Ravencrest",
    "Silverwood",
    "Stormborne",
    "Ironheart",
    "Fireforge",
    "Moonshadow",
    "Hawthorne",
    "Nightshade",
    "Whitethorn",
    "Ashborne",
    "Bloodmoor",
    "Winterbourne",
    "Grimmwood",
    "Dreadwood",
    "Stonehaven",
    "Thornblade",
    "Wolfsbane",
    "Starfall",
    "Blackthorn",
    "Hearthstone",
    "Swiftfoot",
    "Goldcrest",
    "Skydancer",
    "Windsong",
    "Hartwood",
    "Blackstone",
    "Shadowblade",
    "Frostbane",
    "Silverhelm",
    "Ravenwing",
    "Moonspell",
    "Shadowcaster",
    "Thunderstrike",
    "Firebrand",
    "Nightfall",
    "Thornhart",
    "Stagborne",
    "Ironcrest",
    "Stormweaver",
    "Mosswood",
    "Bloodmoon",
    "Winterthorn",
    "Gorewood",
    "Dreadborne",
    "Stonefall",
    "Thornbrook",
    "Wolfhart",
    "Starborne",
    "Blackblade",
    "Hawthorn",
    "Swiftwood",
    "Goldenshield",
    "Skyblade",
    "Windrider",
    "Hawthorne",
    "Blackthistle",
    "Hearthfire",
    "Nightshade",
    "Whitewolf",
    "Ashborne",
    "Bloodthorn",
    "Winterstorm",
    "Grimmheart",
    "Dreadthorn",
    "Stonebrook",
    "Thornraven",
    "Wolfclaw",
];

const codinome = [
    "Sombra Negra",
    "Lâmina de Prata",
    "Estrela da Manhã",
    "Dragão de Fogo",
    "Olho de Corvo",
    "Estrela Cadente",
    "Martelo Trovejante",
    "Manto das Sombras",
    "Coração de Leão",
    "Lobo Solitário",
    "Espada da Aurora",
    "Cavaleiro da Lua",
    "Vento Veloz",
    "Lâmina Flamejante",
    "Corvo Noturno",
    "Mão de Ferro",
    "Lírio da Noite",
    "Sussurros da Bruma",
    "Falcão Dourado",
    "Pérola da Tempestade",
    "Lâmina de Gelo",
    "Sussurros da Serpente",
    "Dragão das Sombras",
    "Olho de Falcão",
    "Corça Veloz",
    "Mão de Prata",
    "Espectro da Noite",
    "Lobo Negro",
    "Manto da Alvorada",
    "Espada Reluzente",
    "Fênix Dourada",
    "Mão de Ferro",
    "Lírio Noturno",
    "Estrela Guia",
    "Vento Sussurrante",
    "Lâmina Relampejante",
    "Cavaleiro da Serpente",
    "Estrela do Crepúsculo",
    "Sussurros da Lua",
    "Dragão de Gelo",
    "Olho da Coruja",
    "Corça Ágil",
    "Martelo de Ferro",
    "Lobo da Noite",
    "Manto Estelar",
    "Espada do Sol",
    "Fênix Flamejante",
    "Mão de Marfim",
    "Lírio da Bruma",
    "Espectro das Sombras",
    "Lobo da Alvorada",
    "Sussurros da Estrela",
    "Dragão da Tempestade",
    "Olho da Serpente",
    "Corvo das Sombras",
    "Martelo Trovejante",
    "Estrela Noturna",
    "Vento Veloz",
    "Lâmina Flamejante",
    "Corça da Lua",
    "Mão de Ferro",
    "Lírio de Gelo",
    "Sussurros da Bruma",
    "Falcão Dourado",
    "Pérola da Tempestade",
    "Lâmina de Gelo",
    "Sussurros da Serpente",
    "Dragão da Lua",
];

const magias = [
    "Aferrolhar",
    "Emaranhar",
    "Encantar pessoas",
    "Exorcismo",
    "Disco arcano",
    "Flecha mágica",
    "Leitura mágica",
    "Luz",
    "Mãos flamejantes",
    "Restauração",
    "Sono",
    "Ventriloquismo"
];

const marcas = [
    "Não possui pelos no corpo.",
    "Envelheceu 10 anos.",
    "Falta um dedo da mão (hábil, -1 para atacar).",
    "Faltam 1d6 dedos dos pés (se tirar 6, falta o pé inteiro).",
    "Possui parte da visão afetada (um olho, perde visão periférica).",
    "Falta uma orelha.",
    "Não tem nariz (perdeu o olfato completamente).",
    "Não possui unhas nas mãos.",
    "Faltam dentes na boca (2d6).",
    "Perdeu parte de sua energia (-1 PV).",
    "Teve parte de sua capacidade física afetada (-1 FOR, -1 DES, -1 CON).",
    "Tem furúnculos por todo o corpo.",
    "Possui hipogeusia (redução significativa do paladar).",
    "Necessita de um implemento para usar essa habilidade (escolha, ex. varinha).",
    "Língua alterada para formato ofídico.",
    "Possui uma marca na palma da mão (cicatriz).",
    "Exala odor fétido (sensível a 10’ por humanoides comuns).",
    "Pele se tornou descamada e enrugada.",
    "Sua presença é ameaçadora para alguns animais, como cães e cavalos.",
    "Sua sombra está distorcida e deformada, parecendo algo assustador."
];

const tracos = [
    "Além disso, você possui acne, eczema ou similar.",
    "Além disso, você adora tatuagens ou piercings.",
    "Além disso, você é alcóolatra.",
    "Além disso, você possui alergias e está constantemente com coriza.",
    "Além disso, você ama histórias, literatura ou música.",
    "Além disso, você aprecia carne de humanoides.",
    "Além disso, você é careca e seus cabelos não crescem.",
    "Além disso, você está constantemente mastigando algo, como goma ou fumo.",
    "Além disso, você está constantemente se coçando.",
    "Além disso, você é extremamente cético.",
    "Além disso, você é extremamente religioso.",
    "Além disso, você frequentemente mexe no cabelo.",
    "Além disso, você é fumante.",
    "Além disso, você possui hálito terrível.",
    "Além disso, você tem mania de controle.",
    "Além disso, você tem mania de limpeza e detesta sujeira.",
    "Além disso, você possui uma marca de nascença ou cicatriz.",
    "Além disso, você não gosta de tocar pessoas.",
    "Além disso, você não possui dentes na boca.",
    "Além disso, você não possui um dos dedos da mão.",
    "Além disso, você não sabe nadar.",
    "Além disso, você tem obsessão por boa comida.",
    "Além disso, você tem olhos de cores diferentes.",
    "Além disso, você ostenta exageradamente, usando roupas valiosas, por exemplo.",
    "Além disso, você possui grande superstição.",
    "Além disso, você possui um olho de vidro.",
    "Além disso, você tem problema de visão e usa óculos.",
    "Além disso, você ronca exageradamente.",
    "Além disso, você tem sono profundo.",
    "Além disso, você tem sono leve.",
    "Além disso, você tem sudorese quando sob tensão.",
    "Além disso, você tem algum tique perceptível.",
    "Além disso, você tem gagueira.",
    "Além disso, você tem medo de altura.",
    "Além disso, você tem medo de montar a cavalo.",
    "Além disso, você tem medo de galinhas."
];

const linguas = [
    "Gárgula",
    "Anão",
    "Gigante",
    "Dracônico",
    "Gnomo",
    "Duende",
    "Harpia",
    "Élfico",
    "Malandrim",
    "Feérico",
    "Trasgo"
];

const itens = [
    { nome: 'Barraca (2 pessoas)', preco: 5, peso: 100 },
    { nome: 'Baú (pequeno)', preco: 3, peso: 5 },
    { nome: 'Baú (médio)', preco: 10, peso: 100 },
    { nome: 'Baú (grande)', preco: 20, peso: 400 },
    { nome: 'Casaco de pele', preco: 5, peso: 20 },
    { nome: 'Corrente (10’)', preco: 25, peso: 40 },
    { nome: 'Escada (10’)', preco: 5, peso: 10 },
    { nome: 'Grimório (100 pg)', preco: 25, peso: 100 },
    { nome: 'Instrumento musical', preco: 10, peso: 10 },
    { nome: 'Pá', preco: 2, peso: 5 },
    { nome: 'Pé de cabra', preco: 3, peso: 5 },
    { nome: 'Picareta', preco: 3, peso: 10 },
    { nome: 'Polia', preco: 5, peso: 20 },
    { nome: 'Rede', preco: 5, peso: 20 },
    { nome: 'Serra', preco: 1, peso: 5 },
    { nome: 'Símbolo Sagrado', preco: 25, peso: 5 },
    { nome: 'Vara de exploração', preco: 1, peso: 20 },
    { nome: 'Vara de pescaria', preco: 5, peso: 5 },
    { nome: 'Água benta (frasco)', preco: 25 },
    { nome: 'Agulha (1’’)', preco: 1 },
    { nome: 'Alicate', preco: 2 },
    { nome: 'Algema (par)', preco: 15 },
    { nome: 'Ampulheta (pequena, 10 min)', preco: 10 },
    { nome: 'Ampulheta (grande, 60 min)', preco: 20 },
    { nome: 'Apito', preco: 3 },
    { nome: 'Barbante (rolo de 100’)', preco: 1 },
    { nome: 'Berrante', preco: 5 },
    { nome: 'Bolas de gude (6)', preco: 1 },
    { nome: 'Bolsa de cinto', preco: 3 },
    { nome: 'Carvão (saco)', preco: 1 },
    { nome: 'Cera de abelha', preco: 1 },
    { nome: 'Cobertor', preco: 1 },
    { nome: 'Corda (50’)', preco: 1 },
    { nome: 'Corda especial (50’)', preco: 10 },
    { nome: 'Dados (2 unidades)', preco: 1 },
    { nome: 'Espelho (pequeno)', preco: 5 },
    { nome: 'Estacas de madeira (3)', preco: 1 },
    { nome: 'Estrepes (bolsa com 10)', preco: 1 },
    { nome: 'Frasco de vidro (1 qt)', preco: 1 },
    { nome: 'Gancho', preco: 25 },
    { nome: 'Gazua', preco: 20 },
    { nome: 'Giz', preco: 1 },
    { nome: 'Lampião', preco: 10 },
    { nome: 'Lupa', preco: 10 },
    { nome: 'Mochila', preco: 5 },
    { nome: 'Óleo (frasco)', preco: 2 },
    { nome: 'Odre', preco: 1 },
    { nome: 'Panela de ferro', preco: 1 },
    { nome: 'Papiro (uma unidade)', preco: 5 },
    { nome: 'Pinos de ferro (12)', preco: 1 },
    { nome: 'Pederneira', preco: 2 },
    { nome: 'Porta mapas', preco: 1 },
    { nome: 'Ração, 7 dias (simples)', preco: 3 },
    { nome: 'Ração, 7 dias (especial)', preco: 15 },
    { nome: 'Roupa comum', preco: 1 },
    { nome: 'Roupa nobre', preco: 25 },
    { nome: 'Saco de dormir', preco: 1 },
    { nome: 'Saco grande (600 cn)', preco: 2 },
    { nome: 'Saco pequeno (200 cn)', preco: 1 },
    { nome: 'Sino', preco: 1 },
    { nome: 'Tesoura', preco: 1 },
    { nome: 'Tinta (frasqueta) e pena', preco: 5 },
    { nome: 'Tochas (6)', preco: 1 },
    { nome: 'Velas (12)', preco: 1 }
];

const armaduras = [
    { nome: 'Sem', preco: 0, bonus: 10, nota: '-', peso: '-', CA: 9 },
    { nome: 'Couro simples', preco: 10, bonus: 1, nota: 'couro simples de animais comuns', peso: 100, CA: 8 },
    { nome: 'Couro fervido', preco: 20, bonus: 2, nota: 'couro feito de forma especializada', peso: 200, CA: 7 },
    { nome: 'Lamelar', preco: 40, bonus: 3, nota: 'couro fervido e lâminas de metal', peso: 300, CA: 6 },
    { nome: 'Anelar', preco: 80, bonus: 4, nota: 'couro fervido e anéis de metal', peso: 400, CA: 5 },
    { nome: 'Segmentada', preco: 100, bonus: 5, nota: 'couro fervido e placas de metal', peso: 500, CA: 4 },
    { nome: 'Couraça', preco: 200, bonus: 6, nota: 'couro fervido, anelar e placas de metal', peso: 600, CA: 3 },
    { nome: 'Escudo', preco: 10, bonus: 1, nota: 'Feitos de madeira ou metal', peso: 100, CA: 1 },
];

const armas = [
    { nome: 'Adaga', preco: 3, peso: 10, categoria: 'Armas simples', dano: 'd4' },
    { nome: 'Machadinha', preco: 1, peso: 30, categoria: 'Armas simples', dano: 'd4' },
    { nome: 'Cajado', preco: 2, peso: 30, categoria: 'Médias', dano: 'd8' },
    { nome: 'Clava', preco: 1, peso: 40, categoria: 'Médias', dano: 'd8' },
    { nome: 'Funda', preco: 1, peso: 1, categoria: 'Médias', dano: 'd8' },
    { nome: 'Azagaia', preco: 2, peso: 20, categoria: 'Armas leves', dano: 'd6' },
    { nome: 'Espada curta', preco: 7, peso: 30, categoria: 'Armas leves', dano: 'd6' },
    { nome: 'Maça', preco: 5, peso: 40, categoria: 'Armas leves', dano: 'd6' },
    { nome: 'Arco curto', preco: 20, peso: 25, categoria: 'Armas leves', dano: 'd6' },
    { nome: 'Besta leve', preco: 40, peso: 50, categoria: 'Armas leves', dano: 'd6' },
    { nome: 'Espada longa', preco: 10, peso: 50, categoria: 'Armas médias', dano: 'd8' },
    { nome: 'Lança', preco: 7, peso: 50, categoria: 'Armas médias', dano: 'd8' },
    { nome: 'Machado de batalha', preco: 7, peso: 70, categoria: 'Armas médias', dano: 'd8' },
    { nome: 'Martelo de batalha', preco: 7, peso: 70, categoria: 'Armas médias', dano: 'd8' },
    { nome: 'Arco longo', preco: 50, peso: 50, categoria: 'Armas médias', dano: 'd8' },
    { nome: 'Besta', preco: 50, peso: 80, categoria: 'Armas médias', dano: 'd8' },
    { nome: 'Alabarda', preco: 30, peso: 120, categoria: 'Armas grandes', dano: 'd10' },
    { nome: 'Martelo de guerra', preco: 15, peso: 150, categoria: 'Armas grandes', dano: 'd10' },
    { nome: 'Machado de guerra', preco: 15, peso: 150, categoria: 'Armas grandes', dano: 'd10' },
    { nome: 'Montante', preco: 30, peso: 100, categoria: 'Armas grandes', dano: 'd10' },
];


let alinhamentos = ["Caotico", "Neutro", "Ordeiro"];
let presenca = " e sua presença inspiradora aumenta 2 no moral de seus auxiliares.";
let magia = `Pode conjurar a magia ${magias[(rolarDados(1, 12) - 1)]}`;
let especializacao = ` É especialista no uso de ${armas[(rolarDados(1, 20) - 1)].nome}.`;
let investigacao = "Possui grande habilidade de nvestigação";
let marcaArcana = ` mas como efeito colateral ${marcas[(rolarDados(1, 20) - 1)]}.`;
let pericias = ["Acurácia", `usar ${armas[(rolarDados(1, 20) - 1)].nome}`, "Arcanismo", "Decifrar", "Escalar", "Esconder", "Furtividade", "Idioma", "Sobressaltar", "Punga"];
let pericia = ` e é perito em ${pericias[(rolarDados(1, 10) - 1)]}.`;
let traco = tracos[(rolarDados(1, 36) - 1)];

let atributos = {
    forca: rolarDados(3, 6),
    inteligencia: rolarDados(3, 6),
    sabedoria: rolarDados(3, 6),
    destreza: rolarDados(3, 6),
    constituicao: rolarDados(3, 6),
    carisma: rolarDados(3, 6)
};

let modificadores = {
    forca: modificador(atributos.forca),
    inteligencia: modificador(atributos.inteligencia),
    sabedoria: modificador(atributos.sabedoria),
    destreza: modificador(atributos.destreza),
    constituicao: modificador(atributos.constituicao),
    carisma: modificador(atributos.carisma)
};

let combatente = {
    xpMeta: 2000,
    vida: 8,
    morte: 12,
    contato: 13,
    paralisia: 14,
    irrupcao: 15,
    feitico: 16,
    habilidades: [especializacao, presenca]
};

let arcanista = {
    xpMeta: 2500,
    vida: 4,
    morte: 13,
    contato: 14,
    paralisia: 15,
    irrupcao: 16,
    feitico: 13,
    habilidades: [magia, marcaArcana]
};

let especialista = {
    xpMeta: 1250,
    vida: 6,
    morte: 13,
    contato: 13,
    paralisia: 15,
    irrupcao: 14,
    feitico: 16,
    habilidades: [investigacao, pericia]
};

let maiorAtributo = '';
let maiorValor = 0;

const atributosSelecionados = ["forca", "destreza", "inteligencia"];

atributosSelecionados.forEach(atributo => {
    if (atributos[atributo] > maiorValor) {
        maiorValor = atributos[atributo];
        maiorAtributo = atributo;
    }
});

let classeD = null;

if (maiorAtributo === "forca") {
    classeD = "Combatente";
    classe = combatente;
} else if (maiorAtributo === "inteligencia") {
    classeD = "Arcanista";
    classe = arcanista;
} if (maiorAtributo === "destreza") {
    classeD = "Especialista";
    classe = especialista;
}

let letrado = atributos.inteligencia < 9 ? "Não" : "sim";
let vida = rolarDados(1, classe.vida) + modificadores.constituicao;
if (vida < 1) {
    vida = 1;
}
let idiomas = atributos.inteligencia - 10;
let alinhamento = alinhamentos[(rolarDados(1, 3) - 1)];
const anotacoes = `
${classe.habilidades}
${traco}
`;
const idioma = itensAleatorios(linguas, idiomas);
const nomeChar = `${itensAleatorios(nomes, 1)} '${itensAleatorios(codinome, 1)}' ${itensAleatorios(sobrenomes, 1)}`
const ouro = (rolarDados(3, 6) * 10);


console.log(maiorAtributo);
console.log(atributos);
console.log(modificadores);
console.log(classeD);
console.log(vida);
console.log(alinhamento);
console.log(anotacoes);
console.log(idioma);
console.log(ouro);






