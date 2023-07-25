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

const armas = [
    "Adaga",
    "Machadinha",
    "Cajado",
    "Clava",
    "Funda",
    "Azagaia",
    "Espada Curta",
    "Maça",
    "Espada Longa",
    "Lança",
    "Machado de Batalha",
    "Martelo de Batalha",
    "Alabarda",
    "Martelo de Guerra",
    "Machado de Guerra",
    "Montante",
    "Arco Curto",
    "Besta Leve",
    "Arco Longo",
    "Besta"
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


let alinhamentos = ["Caotico", "Neutro", "Ordeiro"];
let presenca = " e sua presença inspiradora aumenta 2 no moral de seus auxiliares.";
let magia = `Pode conjurar a magia ${magias[(rolarDados(1, 12) - 1)]}`;
let especializacao = ` e especialista no uso de ${armas[(rolarDados(1, 20) - 1)]}.`;
let investigacao = "Possui grande habilidade de nvestigação";
let marcaArcana = ` mas como efeito colateral ${marcas[(rolarDados(1, 20) - 1)]}.`;
let pericias = ["Acurácia", `usar ${armas[(rolarDados(1, 20) - 1)]}`, "Arcanismo", "Decifrar", "Escalar", "Esconder", "Furtividade", "Idioma", "Sobressaltar", "Punga"];
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

console.log(maiorAtributo);
console.log(atributos);
console.log(modificadores);
console.log(classeD);
console.log(vida);
console.log(alinhamento);
console.log(anotacoes);
console.log(idioma);





