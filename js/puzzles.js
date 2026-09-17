const deepFreeze = value => {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.freeze(value);
    Object.values(value).forEach(deepFreeze);
  }
  return value;
};

export const GAME_META = deepFreeze({
  tents: {
    label: 'Barracas',
    shortLabel: 'Barracas',
    category: 'Dedução Espacial',
    filter: 'spatial',
    icon: '▲',
    iconClass: 'tents-icon',
    desc: 'Posicione barracas ao lado de árvores respeitando as contagens de linhas e colunas.',
    skill: 'Raciocínio Espacial e Contagem',
    total: 13
  },
  words: {
    label: 'Caça-palavras',
    shortLabel: 'Palavras',
    category: 'Atenção Visual',
    filter: 'spatial',
    icon: 'A',
    iconClass: 'words-icon',
    desc: 'Localize números e termos em inglês nos diagramas de agilidade visual.',
    skill: 'Atenção Visual e Vocabulário',
    total: 5
  },
  acronyms: {
    label: 'Jogo das Siglas',
    shortLabel: 'Siglas',
    category: 'Geografia & Linguagem',
    filter: 'deduction',
    icon: 'UF',
    iconClass: 'acronyms-icon',
    desc: 'Associe os estados brasileiros às suas siglas e combine UFs para formar palavras.',
    skill: 'Memória, Geografia e Vocabulário',
    total: 4
  },
  bridges: {
    label: 'Ilhas',
    shortLabel: 'Ilhas',
    category: 'Grafos & Redes',
    filter: 'spatial',
    icon: '━',
    iconClass: 'bridges-icon',
    desc: 'Conecte todas as ilhas com pontes retas até atingir a contagem necessária.',
    skill: 'Planejamento e Teoria dos Grafos',
    total: 12
  },
  futoshiki: {
    label: 'Davi e Golias',
    shortLabel: 'Davi e Golias',
    category: 'Inequações & Ordem',
    filter: 'deduction',
    icon: '<',
    iconClass: 'futoshiki-icon',
    desc: 'Preencha a grade latina respeitando sinais de maior (>) e menor (<) entre os números.',
    skill: 'Inequações e Comparação Numérica',
    total: 11
  },
  kenken: {
    label: 'KenKen',
    shortLabel: 'KenKen',
    category: 'Aritmética & Matrizes',
    filter: 'math',
    icon: '×',
    iconClass: 'kenken-icon',
    desc: 'Calcule as operações matemáticas em cada bloco sem repetir números nas linhas e colunas.',
    skill: 'Cálculo Mental e Lógica Combinatória',
    total: 7
  },
  river: {
    label: 'Travessia do Rio',
    shortLabel: 'Travessia',
    category: 'Logística & Algoritmos',
    filter: 'strategy',
    icon: '⛵',
    iconClass: 'river-icon',
    desc: 'Atravesse personagens no barco respeitando restrições de segurança e o teste japonês.',
    skill: 'Planejamento de Estados e Logística',
    total: 3
  },
  einstein: {
    label: 'Enigma de Einstein',
    shortLabel: 'Einstein',
    category: 'Dedução Matricial',
    filter: 'deduction',
    icon: '🧠',
    iconClass: 'einstein-icon',
    desc: 'Deduza as características de cada casa combinando todas as pistas com coloração dinâmica.',
    skill: 'Pensamento Hipotético-Dedutivo',
    total: 3
  },
  hanoi: {
    label: 'Torre de Hanói',
    shortLabel: 'Hanói',
    category: 'Recursão & Estratégia',
    filter: 'strategy',
    icon: '🗼',
    iconClass: 'hanoi-icon',
    desc: 'Transfira todos os discos entre as três torres sem nunca apoiar um disco maior sobre um menor.',
    skill: 'Recursão e Otimização de Movimentos',
    total: 4
  },
  twentyfour: {
    label: 'Jogo do 24',
    shortLabel: 'Jogo do 24',
    category: 'Expressões & Operações',
    filter: 'math',
    icon: '24',
    iconClass: 'twentyfour-icon',
    desc: 'Combine as 4 cartas com operações básicas e parênteses para atingir exatamente 24.',
    skill: 'Expressões Numéricas e Frações',
    total: 10
  },
  kakuro: {
    label: 'Kakuro',
    shortLabel: 'Kakuro',
    category: 'Somas Cruzadas',
    filter: 'math',
    icon: '∑',
    iconClass: 'kakuro-icon',
    desc: 'Preencha as palavras cruzadas numéricas decompondo os totais em dígitos únicos de 1 a 9.',
    skill: 'Partição de Inteiros e Aritmética',
    total: 8
  },
  pyramid: {
    label: 'Pirâmides & Quadrados',
    shortLabel: 'Pirâmides',
    category: 'Estruturas Numéricas',
    filter: 'math',
    icon: '🔺',
    iconClass: 'pyramid-icon',
    desc: 'Resolva pirâmides aritméticas e quadrados mágicos lendários de Lo Shu e Dürer.',
    skill: 'Propriedades Aritméticas e Matrizes',
    total: 9
  },
  balance: {
    label: 'Balança Lógica',
    shortLabel: 'Balança',
    category: 'Sistemas Algébricos',
    filter: 'deduction',
    icon: '⚖️',
    iconClass: 'balance-icon',
    desc: 'Descubra os pesos relativos das formas geométricas e equilibre a balança interativa.',
    skill: 'Sistemas de Equações e Equivalência',
    total: 9
  },
  jigsaw: {
    label: 'Logic Jigsaw',
    shortLabel: 'Logic Jigsaw',
    category: 'Formas & Encaixes',
    filter: 'spatial',
    icon: '▦',
    iconClass: 'jigsaw-icon',
    desc: 'Gire e encaixe peças geométricas até preencher o tabuleiro sem deixar espaços.',
    skill: 'Visualização Espacial e Decomposição',
    total: 8
  }
});

export const TENTS_LEVELS = deepFreeze([
  {
    id: 'semated-01',
    title: 'SEMATED 1',
    rows: 4,
    cols: 4,
    trees: [[1, 2], [2, 1], [2, 3]],
    rowClues: [1, 0, 1, 1],
    colClues: [1, 0, 1, 1],
    solution: [[0, 0, 1, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1]]
  },
  {
    id: 'semated-02',
    title: 'SEMATED 2',
    rows: 4,
    cols: 4,
    trees: [[1, 0], [2, 1], [3, 2]],
    rowClues: [1, 0, 1, 1],
    colClues: [2, 0, 0, 1],
    solution: [[1, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1]]
  },
  {
    id: 'semated-03',
    title: 'SEMATED 3',
    rows: 4,
    cols: 4,
    trees: [[1, 1], [2, 1], [3, 2]],
    rowClues: [1, 0, 1, 1],
    colClues: [1, 1, 0, 1],
    solution: [[0, 1, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1]]
  },
  {
    id: 'semated-04',
    title: 'SEMATED 4',
    rows: 5,
    cols: 5,
    trees: [[1, 0], [1, 1], [2, 3], [3, 2], [4, 3]],
    rowClues: [1, 0, 3, 0, 1],
    colClues: [1, 1, 1, 0, 2],
    solution: [[0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [1, 0, 1, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 1]]
  },
  {
    id: 'semated-05',
    title: 'SEMATED 5',
    rows: 5,
    cols: 5,
    trees: [[0, 3], [1, 0], [3, 0], [3, 3], [4, 2]],
    rowClues: [1, 1, 1, 1, 1],
    colClues: [2, 1, 0, 1, 1],
    solution: [[1, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 1, 0, 0, 0]]
  },
  {
    id: 'semated-06',
    title: 'SEMATED 6',
    rows: 5,
    cols: 5,
    trees: [[0, 1], [0, 3], [2, 2], [3, 1], [3, 4]],
    rowClues: [2, 1, 0, 1, 1],
    colClues: [1, 1, 1, 1, 1],
    solution: [[1, 0, 0, 0, 1], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [0, 1, 0, 0, 0]]
  },
  {
    id: 'semated-07',
    title: 'SEMATED 7',
    rows: 5,
    cols: 7,
    trees: [[1, 0], [1, 3], [1, 6], [2, 4], [3, 6], [4, 1], [4, 3]],
    rowClues: [1, 2, 0, 1, 3],
    colClues: [2, 0, 2, 0, 1, 1, 1],
    solution: [[1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0], [1, 0, 1, 0, 0, 0, 1]]
  },
  {
    id: 'semated-08',
    title: 'SEMATED 8',
    rows: 5,
    cols: 7,
    trees: [[0, 1], [0, 2], [2, 0], [2, 5], [3, 3], [3, 5], [4, 6]],
    rowClues: [1, 2, 0, 4, 0],
    colClues: [1, 1, 1, 1, 1, 1, 1],
    solution: [[0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0]]
  },
  {
    id: 'semated-09',
    title: 'SEMATED 9',
    rows: 6,
    cols: 10,
    trees: [[0, 1], [1, 0], [1, 4], [1, 6], [1, 9], [2, 5], [3, 1], [3, 8], [5, 2], [5, 3], [5, 4], [5, 7]],
    rowClues: [4, 0, 4, 0, 1, 3],
    colClues: [1, 2, 1, 1, 1, 1, 2, 0, 2, 1],
    solution: [[1, 0, 1, 0, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 0]]
  },
  {
    id: 'semated-10',
    title: 'SEMATED 10',
    rows: 7,
    cols: 10,
    trees: [[0, 0], [0, 3], [0, 8], [1, 5], [2, 4], [2, 7], [3, 1], [4, 8], [5, 0], [5, 3], [5, 5], [5, 9], [6, 3], [6, 8]],
    rowClues: [3, 1, 2, 2, 2, 1, 3],
    colClues: [2, 1, 1, 2, 1, 2, 1, 2, 1, 1],
    solution: [[0, 0, 1, 0, 0, 1, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 1, 0, 1]]
  },
  {
    id: 'extra-clareira',
    title: 'Extra: Clareira',
    rows: 5,
    cols: 5,
    trees: [[0, 1], [1, 4], [2, 2], [3, 4], [4, 1]],
    rowClues: [2, 0, 1, 1, 1],
    colClues: [1, 1, 0, 1, 2],
    solution: [[1, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 1]]
  },
  {
    id: 'extra-trilha',
    title: 'Extra: Trilha',
    rows: 6,
    cols: 6,
    trees: [[0, 1], [1, 2], [1, 4], [3, 5], [4, 1], [5, 4]],
    rowClues: [2, 0, 2, 0, 1, 1],
    colClues: [2, 0, 1, 1, 1, 1],
    solution: [[1, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0]]
  },
  {
    id: 'extra-bosque',
    title: 'Extra: Bosque',
    rows: 7,
    cols: 7,
    trees: [[0, 0], [1, 5], [2, 2], [3, 6], [4, 0], [5, 3], [6, 4]],
    rowClues: [2, 0, 1, 1, 1, 1, 1],
    colClues: [1, 1, 1, 1, 0, 2, 1],
    solution: [[0, 1, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0]]
  }
]);

export const WORD_LEVELS = deepFreeze([
  {
    id: 'semated-numeros',
    title: 'SEMATED: Números',
    size: 15,
    grid: [
      '941558134070804', '360041280565274', '515941588603708',
      '119436930646168', '688011682005396', '429628529406632',
      '865972639900564', '422164281404394', '151579720415839',
      '058001589037540', '477732256599485', '034702409487987',
      '286170035051778', '798225842859344', '282834530486902'
    ],
    words: '04320 04394 09559 13769 15324 19022 19800 20968 21309 25806 28161 31859 33605 34887 35051 37540 37774 41040 41583 42688 58283 59726 60049 61539 65418 68711 70083 70240 71492 73898 75526 76049 76703 80704 82258 82834 86800 88606 90199 97196'
      .split(' ').map(word => ({ word, label: word }))
  },
  {
    id: 'semated-palavras',
    title: 'SEMATED: Palavras',
    size: 15,
    grid: [
      'BWPMARBLEWOODSR', 'RQAAPOOLGDGPTQI', 'ICZKRADEZALGNUI',
      'CDEDRQSOCLAXRAW', 'KLEREOUKOOZDDRS', 'CRUTAYCENWEWEEE',
      'PIVFUMEFTADWNSL', 'SATXRMICRPLRIMI', 'IOISUOICAPSPAET',
      'MGBNUYLTSTDTTHO', 'PCTITRTOTECASBN', 'LLICNETSCHLHZOE',
      'ELBARUDOISTRIPS', 'VLYNIVRNELEGANT', 'WBSITHGILMIXING'
    ],
    words: [
      'BORDER', 'BRICK', 'CERAMIC', 'COLORFUL', 'CONTRAST', 'CORK', 'DARK', 'DECOR',
      'DURABLE', 'ELEGANT', 'EYECATCHING', 'GLAZED', 'HARDWOOD', 'LIGHT', 'LOOP',
      'MARBLE', 'MATCHING', 'MIXING', 'MUTED', 'PAINTED', 'PARQUET', 'PATTERNS',
      'PLANKS', 'RUSTIC', 'SIMPLE', 'SLATE', 'SPACIOUS', 'SQUARES', 'STAINED',
      'STENCIL', 'STRIPS', 'TILES', 'TONES', 'UNGLAZED', 'VINYL', 'WOODS'
    ].map(word => ({ word, label: word === 'EYECATCHING' ? 'EYE-CATCHING' : word }))
  },
  {
    id: 'organizar',
    title: 'Organizar',
    size: 12,
    seed: 1847,
    words: [
      { word: 'FOCUS', label: 'FOCUS' },
      { word: 'GOAL', label: 'GOAL' },
      { word: 'PLAN', label: 'PLAN' },
      { word: 'DATA', label: 'DATA' },
      { word: 'COST', label: 'COST' },
      { word: 'VALUE', label: 'VALUE' },
      { word: 'TEAM', label: 'TEAM' },
      { word: 'SCOPE', label: 'SCOPE' }
    ]
  },
  {
    id: 'administrar',
    title: 'Administrar',
    size: 14,
    seed: 2911,
    words: [
      { word: 'CLIENT', label: 'CLIENT' },
      { word: 'PROCESS', label: 'PROCESS' },
      { word: 'BUDGET', label: 'BUDGET' },
      { word: 'SUPPLY', label: 'SUPPLY' },
      { word: 'QUALITY', label: 'QUALITY' },
      { word: 'RESULT', label: 'RESULT' },
      { word: 'RESOURCE', label: 'RESOURCE' }
    ]
  },
  {
    id: 'liderar',
    title: 'Liderar',
    size: 14,
    seed: 3769,
    words: [
      { word: 'STRATEGY', label: 'STRATEGY' },
      { word: 'LEADERSHIP', label: 'LEADERSHIP' },
      { word: 'INNOVATION', label: 'INNOVATION' },
      { word: 'EFFICIENCY', label: 'EFFICIENCY' },
      { word: 'VISION', label: 'VISION' },
      { word: 'MANAGEMENT', label: 'MANAGEMENT' }
    ]
  }
]);

export const ACRONYM_LEVELS = deepFreeze([
  {
    id: 'brasil',
    title: 'Estados do Brasil',
    regions: [
      { name: 'Sudeste', states: [['Espírito Santo', 'ES'], ['Minas Gerais', 'MG'], ['Rio de Janeiro', 'RJ'], ['São Paulo', 'SP']] },
      { name: 'Sul', states: [['Paraná', 'PR'], ['Rio Grande do Sul', 'RS'], ['Santa Catarina', 'SC']] },
      { name: 'Centro-Oeste', states: [['Distrito Federal', 'DF'], ['Goiás', 'GO'], ['Mato Grosso', 'MT'], ['Mato Grosso do Sul', 'MS']] },
      { name: 'Norte', states: [['Acre', 'AC'], ['Amapá', 'AP'], ['Amazonas', 'AM'], ['Pará', 'PA'], ['Rondônia', 'RO'], ['Roraima', 'RR'], ['Tocantins', 'TO']] },
      { name: 'Nordeste', states: [['Alagoas', 'AL'], ['Bahia', 'BA'], ['Ceará', 'CE'], ['Maranhão', 'MA'], ['Paraíba', 'PB'], ['Pernambuco', 'PE'], ['Piauí', 'PI'], ['Rio Grande do Norte', 'RN'], ['Sergipe', 'SE']] }
    ],
    minimumWords: 3
  },
  {
    id: 'capitais', title: 'Capitais Brasileiras', placeholder: 'Capital', maxLength: 24,
    instructions: 'Digite a capital correspondente a cada estado e ao Distrito Federal.',
    regions: [
      { name: 'Sudeste', states: [['Espírito Santo', 'Vitória'], ['Minas Gerais', 'Belo Horizonte'], ['Rio de Janeiro', 'Rio de Janeiro'], ['São Paulo', 'São Paulo']] },
      { name: 'Sul', states: [['Paraná', 'Curitiba'], ['Rio Grande do Sul', 'Porto Alegre'], ['Santa Catarina', 'Florianópolis']] },
      { name: 'Centro-Oeste', states: [['Distrito Federal', 'Brasília'], ['Goiás', 'Goiânia'], ['Mato Grosso', 'Cuiabá'], ['Mato Grosso do Sul', 'Campo Grande']] },
      { name: 'Norte', states: [['Acre', 'Rio Branco'], ['Amapá', 'Macapá'], ['Amazonas', 'Manaus'], ['Pará', 'Belém'], ['Rondônia', 'Porto Velho'], ['Roraima', 'Boa Vista'], ['Tocantins', 'Palmas']] },
      { name: 'Nordeste', states: [['Alagoas', 'Maceió'], ['Bahia', 'Salvador'], ['Ceará', 'Fortaleza'], ['Maranhão', 'São Luís'], ['Paraíba', 'João Pessoa'], ['Pernambuco', 'Recife'], ['Piauí', 'Teresina'], ['Rio Grande do Norte', 'Natal'], ['Sergipe', 'Aracaju']] }
    ]
  },
  {
    id: 'regioes', title: 'Descubra a Região', placeholder: 'N, NE, CO, SE ou S', maxLength: 2,
    instructions: 'Informe a região de cada unidade federativa usando N, NE, CO, SE ou S.',
    regions: [
      { name: 'Estados 1', states: [['Acre', 'N'], ['Alagoas', 'NE'], ['Amapá', 'N'], ['Amazonas', 'N'], ['Bahia', 'NE'], ['Ceará', 'NE'], ['Distrito Federal', 'CO']] },
      { name: 'Estados 2', states: [['Espírito Santo', 'SE'], ['Goiás', 'CO'], ['Maranhão', 'NE'], ['Mato Grosso', 'CO'], ['Mato Grosso do Sul', 'CO'], ['Minas Gerais', 'SE'], ['Pará', 'N']] },
      { name: 'Estados 3', states: [['Paraíba', 'NE'], ['Paraná', 'S'], ['Pernambuco', 'NE'], ['Piauí', 'NE'], ['Rio de Janeiro', 'SE'], ['Rio Grande do Norte', 'NE'], ['Rio Grande do Sul', 'S']] },
      { name: 'Estados 4', states: [['Rondônia', 'N'], ['Roraima', 'N'], ['Santa Catarina', 'S'], ['São Paulo', 'SE'], ['Sergipe', 'NE'], ['Tocantins', 'N']] }
    ]
  },
  {
    id: 'nomes-das-ufs', title: 'Da Sigla ao Estado', placeholder: 'Nome do estado', maxLength: 24,
    instructions: 'Agora faça o caminho inverso: escreva o nome completo indicado por cada sigla.',
    regions: [
      { name: 'Sudeste', states: [['ES', 'Espírito Santo'], ['MG', 'Minas Gerais'], ['RJ', 'Rio de Janeiro'], ['SP', 'São Paulo']] },
      { name: 'Sul', states: [['PR', 'Paraná'], ['RS', 'Rio Grande do Sul'], ['SC', 'Santa Catarina']] },
      { name: 'Centro-Oeste', states: [['DF', 'Distrito Federal'], ['GO', 'Goiás'], ['MT', 'Mato Grosso'], ['MS', 'Mato Grosso do Sul']] },
      { name: 'Norte', states: [['AC', 'Acre'], ['AP', 'Amapá'], ['AM', 'Amazonas'], ['PA', 'Pará'], ['RO', 'Rondônia'], ['RR', 'Roraima'], ['TO', 'Tocantins']] },
      { name: 'Nordeste', states: [['AL', 'Alagoas'], ['BA', 'Bahia'], ['CE', 'Ceará'], ['MA', 'Maranhão'], ['PB', 'Paraíba'], ['PE', 'Pernambuco'], ['PI', 'Piauí'], ['RN', 'Rio Grande do Norte'], ['SE', 'Sergipe']] }
    ]
  }
]);

export const BRIDGE_LEVELS = deepFreeze([
  {
    id: 'semated-ilhas-01', title: 'SEMATED 1', islands: [
      { row: 0, col: 0, value: 4 }, { row: 0, col: 4, value: 4 },
      { row: 1, col: 1, value: 4 }, { row: 1, col: 3, value: 2 },
      { row: 3, col: 1, value: 4 }, { row: 3, col: 4, value: 4 },
      { row: 4, col: 0, value: 2 }
    ]
  },
  {
    id: 'semated-ilhas-02', title: 'SEMATED 2', islands: [
      { row: 0, col: 0, value: 4 }, { row: 0, col: 2, value: 4 }, { row: 0, col: 5, value: 2 },
      { row: 1, col: 3, value: 2 }, { row: 1, col: 4, value: 2 }, { row: 2, col: 0, value: 3 },
      { row: 3, col: 3, value: 1 }, { row: 4, col: 2, value: 3 }, { row: 4, col: 4, value: 3 },
      { row: 5, col: 0, value: 2 }, { row: 5, col: 3, value: 3 }, { row: 5, col: 5, value: 3 }
    ]
  },
  {
    id: 'semated-ilhas-03', title: 'SEMATED 3', islands: [
      { row: 0, col: 1, value: 2 }, { row: 0, col: 3, value: 1 },
      { row: 1, col: 2, value: 3 }, { row: 1, col: 5, value: 4 }, { row: 2, col: 0, value: 1 },
      { row: 3, col: 1, value: 3 }, { row: 3, col: 2, value: 3 }, { row: 3, col: 5, value: 5 },
      { row: 4, col: 1, value: 3 }, { row: 4, col: 4, value: 2 },
      { row: 5, col: 0, value: 2 }, { row: 5, col: 5, value: 3 }
    ]
  },
  {
    id: 'semated-ilhas-04', title: 'SEMATED 4', islands: [
      { row: 0, col: 0, value: 3 }, { row: 0, col: 3, value: 5 }, { row: 0, col: 6, value: 3 },
      { row: 1, col: 2, value: 2 }, { row: 2, col: 4, value: 2 }, { row: 2, col: 6, value: 3 },
      { row: 3, col: 2, value: 3 }, { row: 3, col: 5, value: 1 }, { row: 4, col: 4, value: 1 },
      { row: 5, col: 0, value: 3 }, { row: 5, col: 2, value: 3 },
      { row: 6, col: 1, value: 1 }, { row: 6, col: 3, value: 5 }, { row: 6, col: 5, value: 3 }
    ]
  },
  {
    id: 'semated-ilhas-05', title: 'SEMATED 5', islands: [
      { row: 0, col: 0, value: 4 }, { row: 0, col: 2, value: 5 }, { row: 0, col: 4, value: 1 },
      { row: 1, col: 3, value: 3 }, { row: 1, col: 6, value: 3 },
      { row: 3, col: 3, value: 2 }, { row: 3, col: 5, value: 1 },
      { row: 4, col: 2, value: 6 }, { row: 4, col: 6, value: 4 }, { row: 5, col: 0, value: 2 },
      { row: 6, col: 2, value: 2 }, { row: 6, col: 4, value: 2 }, { row: 6, col: 6, value: 3 }
    ]
  },
  {
    id: 'semated-ilhas-06', title: 'SEMATED 6', islands: [
      { row: 0, col: 0, value: 4 }, { row: 0, col: 2, value: 3 }, { row: 0, col: 5, value: 2 },
      { row: 2, col: 2, value: 2 }, { row: 2, col: 4, value: 1 }, { row: 2, col: 6, value: 1 },
      { row: 3, col: 0, value: 4 }, { row: 3, col: 5, value: 4 },
      { row: 5, col: 5, value: 1 }, { row: 6, col: 0, value: 2 }, { row: 6, col: 6, value: 2 }
    ]
  },
  {
    id: 'semated-ilhas-07', title: 'SEMATED 7', islands: [
      { row: 0, col: 0, value: 3 }, { row: 0, col: 2, value: 4 }, { row: 0, col: 6, value: 3 },
      { row: 1, col: 1, value: 1 }, { row: 1, col: 3, value: 2 },
      { row: 2, col: 4, value: 3 }, { row: 2, col: 6, value: 4 },
      { row: 3, col: 1, value: 2 }, { row: 3, col: 3, value: 2 }, { row: 4, col: 0, value: 1 },
      { row: 5, col: 2, value: 2 }, { row: 5, col: 4, value: 4 },
      { row: 6, col: 1, value: 2 }, { row: 6, col: 6, value: 3 }
    ]
  },
  {
    id: 'semated-ilhas-08', title: 'SEMATED 8', islands: [
      { row: 0, col: 1, value: 3 }, { row: 0, col: 3, value: 3 }, { row: 0, col: 5, value: 3 },
      { row: 1, col: 0, value: 2 }, { row: 2, col: 1, value: 3 }, { row: 2, col: 5, value: 4 },
      { row: 3, col: 3, value: 2 }, { row: 3, col: 4, value: 1 }, { row: 4, col: 1, value: 1 },
      { row: 6, col: 0, value: 3 }, { row: 6, col: 3, value: 4 }, { row: 6, col: 5, value: 3 }
    ]
  },
  {
    id: 'semated-ilhas-09', title: 'SEMATED 9', islands: [
      { row: 0, col: 0, value: 4 }, { row: 0, col: 2, value: 4 }, { row: 0, col: 6, value: 2 },
      { row: 1, col: 3, value: 3 }, { row: 1, col: 5, value: 2 },
      { row: 3, col: 2, value: 2 }, { row: 3, col: 4, value: 2 }, { row: 3, col: 6, value: 3 },
      { row: 5, col: 3, value: 2 }, { row: 5, col: 6, value: 3 },
      { row: 6, col: 0, value: 3 }, { row: 6, col: 2, value: 3 }, { row: 6, col: 6, value: 3 }
    ]
  },
  {
    id: 'arquipelago',
    title: 'Arquipélago',
    islands: [
      { row: 0, col: 0, value: 2 }, { row: 0, col: 2, value: 3 }, { row: 0, col: 4, value: 2 },
      { row: 2, col: 0, value: 2 }, { row: 2, col: 2, value: 3 }, { row: 2, col: 4, value: 2 }
    ]
  },
  {
    id: 'correnteza',
    title: 'Correnteza',
    islands: [
      { row: 0, col: 0, value: 3 }, { row: 0, col: 2, value: 4 }, { row: 0, col: 4, value: 2 },
      { row: 2, col: 0, value: 2 }, { row: 2, col: 2, value: 5 }, { row: 2, col: 4, value: 3 },
      { row: 4, col: 2, value: 1 }
    ]
  },
  {
    id: 'travessia',
    title: 'Travessia',
    islands: [
      { row: 0, col: 0, value: 2 }, { row: 0, col: 3, value: 3 }, { row: 0, col: 6, value: 2 },
      { row: 2, col: 0, value: 2 }, { row: 2, col: 3, value: 2 }, { row: 2, col: 6, value: 2 },
      { row: 4, col: 0, value: 1 }, { row: 4, col: 3, value: 1 }, { row: 4, col: 6, value: 1 }
    ]
  }
]);

export const FUTOSHIKI_LEVELS = deepFreeze([
  {
    id: 'semated-futo-01', title: 'SEMATED 1', size: 3,
    solution: [[3, 2, 1], [2, 1, 3], [1, 3, 2]], givens: [],
    constraints: [
      { a: [0, 0], b: [1, 0], relation: '>' }, { a: [1, 0], b: [2, 0], relation: '>' },
      { a: [1, 1], b: [1, 2], relation: '<' }
    ]
  },
  {
    id: 'semated-futo-02', title: 'SEMATED 2', size: 3,
    solution: [[1, 2, 3], [3, 1, 2], [2, 3, 1]], givens: [],
    constraints: [
      { a: [0, 1], b: [0, 2], relation: '<' }, { a: [1, 0], b: [1, 1], relation: '>' },
      { a: [1, 1], b: [1, 2], relation: '<' }
    ]
  },
  {
    id: 'semated-futo-03', title: 'SEMATED 3', size: 4,
    solution: [[3, 4, 1, 2], [2, 1, 4, 3], [1, 3, 2, 4], [4, 2, 3, 1]],
    givens: [{ row: 2, col: 2, value: 2 }],
    constraints: [
      { a: [0, 2], b: [0, 3], relation: '<' }, { a: [0, 3], b: [1, 3], relation: '<' },
      { a: [1, 0], b: [2, 0], relation: '>' }, { a: [1, 3], b: [2, 3], relation: '<' }
    ]
  },
  {
    id: 'semated-futo-04', title: 'SEMATED 4', size: 4,
    solution: [[1, 2, 3, 4], [2, 3, 4, 1], [4, 1, 2, 3], [3, 4, 1, 2]],
    givens: [{ row: 0, col: 1, value: 2 }],
    constraints: [
      { a: [0, 1], b: [0, 2], relation: '<' }, { a: [0, 0], b: [1, 0], relation: '<' },
      { a: [0, 2], b: [1, 2], relation: '<' }, { a: [1, 1], b: [2, 1], relation: '>' },
      { a: [2, 2], b: [3, 2], relation: '>' }, { a: [3, 0], b: [3, 1], relation: '<' }
    ]
  },
  {
    id: 'semated-futo-05', title: 'SEMATED 5', size: 4,
    solution: [[4, 1, 3, 2], [1, 3, 2, 4], [2, 4, 1, 3], [3, 2, 4, 1]],
    givens: [{ row: 0, col: 0, value: 4 }, { row: 0, col: 3, value: 2 }],
    constraints: [
      { a: [1, 0], b: [2, 0], relation: '<' }, { a: [1, 1], b: [2, 1], relation: '<' },
      { a: [1, 3], b: [2, 3], relation: '>' }, { a: [2, 3], b: [3, 3], relation: '>' }
    ]
  },
  {
    id: 'semated-futo-06', title: 'SEMATED 6', size: 4,
    solution: [[4, 2, 1, 3], [3, 4, 2, 1], [2, 1, 3, 4], [1, 3, 4, 2]],
    givens: [{ row: 3, col: 3, value: 2 }],
    constraints: [
      { a: [0, 0], b: [1, 0], relation: '>' }, { a: [1, 2], b: [1, 3], relation: '>' },
      { a: [1, 2], b: [2, 2], relation: '<' }, { a: [2, 2], b: [3, 2], relation: '<' }
    ]
  },
  {
    id: 'semated-futo-07', title: 'SEMATED 7', size: 5,
    solution: [[5, 1, 3, 2, 4], [4, 3, 2, 5, 1], [2, 5, 1, 4, 3], [1, 4, 5, 3, 2], [3, 2, 4, 1, 5]],
    givens: [{ row: 1, col: 4, value: 1 }, { row: 3, col: 1, value: 4 }, { row: 4, col: 3, value: 1 }],
    constraints: [
      { a: [0, 0], b: [1, 0], relation: '>' }, { a: [1, 0], b: [1, 1], relation: '>' },
      { a: [2, 0], b: [3, 0], relation: '>' }, { a: [3, 3], b: [3, 4], relation: '>' },
      { a: [4, 0], b: [4, 1], relation: '>' }, { a: [4, 1], b: [4, 2], relation: '<' },
      { a: [3, 2], b: [4, 2], relation: '>' }
    ]
  },
  {
    id: 'semated-futo-08', title: 'SEMATED 8', size: 5,
    solution: [[4, 5, 3, 2, 1], [2, 1, 4, 5, 3], [3, 4, 5, 1, 2], [5, 2, 1, 3, 4], [1, 3, 2, 4, 5]], givens: [],
    constraints: [
      { a: [0, 0], b: [0, 1], relation: '<' }, { a: [0, 3], b: [0, 4], relation: '>' },
      { a: [0, 0], b: [1, 0], relation: '>' }, { a: [0, 2], b: [1, 2], relation: '<' },
      { a: [1, 0], b: [1, 1], relation: '>' }, { a: [1, 0], b: [2, 0], relation: '<' },
      { a: [3, 3], b: [3, 4], relation: '<' }, { a: [3, 1], b: [4, 1], relation: '<' },
      { a: [3, 2], b: [4, 2], relation: '<' }, { a: [3, 4], b: [4, 4], relation: '<' },
      { a: [4, 2], b: [4, 3], relation: '<' }
    ]
  },
  {
    id: 'comparar',
    title: 'Comparar',
    size: 4,
    solution: [
      [1, 2, 3, 4],
      [2, 3, 4, 1],
      [3, 4, 1, 2],
      [4, 1, 2, 3]
    ],
    givens: [
      { row: 0, col: 0, value: 1 }, { row: 0, col: 3, value: 4 },
      { row: 1, col: 0, value: 2 }, { row: 1, col: 2, value: 4 }, { row: 1, col: 3, value: 1 },
      { row: 2, col: 0, value: 3 }, { row: 2, col: 1, value: 4 }, { row: 2, col: 3, value: 2 },
      { row: 3, col: 1, value: 1 }, { row: 3, col: 2, value: 2 }, { row: 3, col: 3, value: 3 }
    ],
    constraints: [
      { a: [0, 1], b: [0, 2], relation: '<' },
      { a: [1, 1], b: [1, 2], relation: '<' },
      { a: [2, 1], b: [2, 2], relation: '>' },
      { a: [3, 0], b: [3, 1], relation: '>' }
    ]
  },
  {
    id: 'equilibrar',
    title: 'Equilibrar',
    size: 4,
    solution: [
      [2, 4, 1, 3],
      [3, 1, 4, 2],
      [1, 3, 2, 4],
      [4, 2, 3, 1]
    ],
    givens: [
      { row: 0, col: 1, value: 4 }, { row: 0, col: 2, value: 1 },
      { row: 1, col: 0, value: 3 }, { row: 1, col: 3, value: 2 },
      { row: 2, col: 0, value: 1 }, { row: 2, col: 3, value: 4 },
      { row: 3, col: 0, value: 4 }, { row: 3, col: 3, value: 1 }
    ],
    constraints: [
      { a: [0, 0], b: [0, 1], relation: '<' },
      { a: [0, 2], b: [0, 3], relation: '<' },
      { a: [1, 1], b: [1, 2], relation: '<' },
      { a: [2, 1], b: [2, 2], relation: '>' },
      { a: [3, 1], b: [3, 2], relation: '<' },
      { a: [0, 0], b: [1, 0], relation: '<' },
      { a: [2, 2], b: [3, 2], relation: '<' }
    ]
  },
  {
    id: 'estrategia',
    title: 'Estratégia',
    size: 5,
    solution: [
      [1, 3, 5, 2, 4],
      [2, 4, 1, 3, 5],
      [3, 5, 2, 4, 1],
      [4, 1, 3, 5, 2],
      [5, 2, 4, 1, 3]
    ],
    givens: [
      { row: 0, col: 0, value: 1 }, { row: 0, col: 3, value: 2 }, { row: 0, col: 4, value: 4 },
      { row: 1, col: 0, value: 2 }, { row: 1, col: 3, value: 3 }, { row: 1, col: 4, value: 5 },
      { row: 2, col: 0, value: 3 }, { row: 2, col: 3, value: 4 }, { row: 2, col: 4, value: 1 },
      { row: 3, col: 0, value: 4 }, { row: 3, col: 3, value: 5 }, { row: 3, col: 4, value: 2 },
      { row: 4, col: 0, value: 5 }, { row: 4, col: 3, value: 1 }, { row: 4, col: 4, value: 3 }
    ],
    constraints: [
      { a: [0, 1], b: [0, 2], relation: '<' },
      { a: [1, 1], b: [1, 2], relation: '>' },
      { a: [2, 1], b: [2, 2], relation: '>' },
      { a: [3, 1], b: [3, 2], relation: '<' },
      { a: [4, 1], b: [4, 2], relation: '<' },
      { a: [0, 2], b: [1, 2], relation: '>' },
      { a: [2, 1], b: [3, 1], relation: '>' }
    ]
  }
]);

export const KENKEN_LEVELS = deepFreeze([
  {
    id: 'semated-kenken-01', title: 'SEMATED 1', size: 4,
    solution: [[4, 1, 3, 2], [2, 4, 1, 3], [3, 2, 4, 1], [1, 3, 2, 4]],
    cages: [
      { cells: [[0, 0]], operation: null, target: 4 },
      { cells: [[0, 1], [1, 0], [1, 1]], operation: '×', target: 8 },
      { cells: [[0, 2], [0, 3], [1, 2]], operation: '+', target: 6 },
      { cells: [[1, 3]], operation: null, target: 3 },
      { cells: [[2, 0], [2, 1], [3, 0]], operation: '+', target: 6 },
      { cells: [[2, 2], [3, 2]], operation: '÷', target: 2 },
      { cells: [[2, 3], [3, 3]], operation: '−', target: 3 },
      { cells: [[3, 1]], operation: null, target: 3 }
    ]
  },
  {
    id: 'semated-kenken-02', title: 'SEMATED 2', size: 4,
    solution: [[4, 2, 3, 1], [3, 4, 1, 2], [1, 3, 2, 4], [2, 1, 4, 3]],
    cages: [
      { cells: [[0, 0], [0, 1]], operation: '×', target: 8 },
      { cells: [[0, 2], [0, 3]], operation: '+', target: 4 },
      { cells: [[1, 0], [1, 1], [2, 1]], operation: '+', target: 10 },
      { cells: [[1, 2], [1, 3], [2, 2]], operation: '×', target: 4 },
      { cells: [[2, 0]], operation: null, target: 1 },
      { cells: [[2, 3], [3, 2], [3, 3]], operation: '+', target: 11 },
      { cells: [[3, 0], [3, 1]], operation: '+', target: 3 }
    ]
  },
  {
    id: 'semated-kenken-03', title: 'SEMATED 3', size: 4,
    solution: [[1, 4, 3, 2], [3, 2, 1, 4], [2, 3, 4, 1], [4, 1, 2, 3]],
    cages: [
      { cells: [[0, 0], [1, 0]], operation: '+', target: 4 },
      { cells: [[0, 1], [0, 2]], operation: '+', target: 7 },
      { cells: [[0, 3], [1, 3]], operation: '−', target: 2 },
      { cells: [[1, 1], [2, 1]], operation: '×', target: 6 },
      { cells: [[1, 2]], operation: null, target: 1 },
      { cells: [[2, 0], [3, 0]], operation: '÷', target: 2 },
      { cells: [[2, 2], [2, 3]], operation: '−', target: 3 },
      { cells: [[3, 1], [3, 2]], operation: '÷', target: 2 },
      { cells: [[3, 3]], operation: null, target: 3 }
    ]
  },
  {
    id: 'semated-kenken-04', title: 'SEMATED 4', size: 4,
    solution: [[3, 2, 4, 1], [1, 3, 2, 4], [4, 1, 3, 2], [2, 4, 1, 3]],
    cages: [
      { cells: [[0, 0], [0, 1]], operation: '−', target: 1 },
      { cells: [[0, 2], [0, 3]], operation: '−', target: 3 },
      { cells: [[1, 0], [2, 0]], operation: '−', target: 3 },
      { cells: [[1, 1], [1, 2]], operation: '×', target: 6 },
      { cells: [[1, 3], [2, 3]], operation: '÷', target: 2 },
      { cells: [[2, 1], [2, 2]], operation: '+', target: 4 },
      { cells: [[3, 0], [3, 1]], operation: '÷', target: 2 },
      { cells: [[3, 2], [3, 3]], operation: '+', target: 4 }
    ]
  },
  {
    id: 'operacoes',
    title: 'Operações',
    size: 4,
    solution: [
      [1, 2, 3, 4],
      [2, 3, 4, 1],
      [3, 4, 1, 2],
      [4, 1, 2, 3]
    ],
    cages: [
      { cells: [[0, 0], [1, 0]], operation: '+', target: 3 },
      { cells: [[0, 1], [0, 2]], operation: '+', target: 5 },
      { cells: [[0, 3]], operation: null, target: 4 },
      { cells: [[1, 1], [1, 2]], operation: '−', target: 1 },
      { cells: [[1, 3]], operation: null, target: 1 },
      { cells: [[2, 0], [3, 0]], operation: '−', target: 1 },
      { cells: [[2, 1], [3, 1]], operation: '÷', target: 4 },
      { cells: [[2, 2], [2, 3]], operation: '×', target: 2 },
      { cells: [[3, 2], [3, 3]], operation: '−', target: 1 }
    ]
  },
  {
    id: 'combinar',
    title: 'Combinar',
    size: 4,
    solution: [
      [2, 4, 1, 3],
      [3, 1, 4, 2],
      [1, 3, 2, 4],
      [4, 2, 3, 1]
    ],
    cages: [
      { cells: [[0, 0]], operation: null, target: 2 },
      { cells: [[0, 1], [1, 1]], operation: '÷', target: 4 },
      { cells: [[0, 2]], operation: null, target: 1 },
      { cells: [[0, 3], [1, 3]], operation: '−', target: 1 },
      { cells: [[1, 0]], operation: null, target: 3 },
      { cells: [[1, 2], [2, 2]], operation: '÷', target: 2 },
      { cells: [[2, 0], [2, 1]], operation: '+', target: 4 },
      { cells: [[2, 3], [3, 3]], operation: '÷', target: 4 },
      { cells: [[3, 0], [3, 1]], operation: '÷', target: 2 },
      { cells: [[3, 2]], operation: null, target: 3 }
    ]
  },
  {
    id: 'desafio-final',
    title: 'Desafio final',
    size: 4,
    solution: [
      [3, 1, 4, 2],
      [4, 2, 1, 3],
      [2, 4, 3, 1],
      [1, 3, 2, 4]
    ],
    cages: [
      { cells: [[0, 0], [0, 1], [1, 0]], operation: '×', target: 12 },
      { cells: [[0, 2]], operation: null, target: 4 },
      { cells: [[0, 3]], operation: null, target: 2 },
      { cells: [[1, 1], [1, 2]], operation: '×', target: 2 },
      { cells: [[1, 3], [2, 3]], operation: '÷', target: 3 },
      { cells: [[2, 0], [3, 0]], operation: '÷', target: 2 },
      { cells: [[2, 1], [2, 2], [3, 1]], operation: '+', target: 10 },
      { cells: [[3, 2], [3, 3]], operation: '×', target: 8 }
    ]
  }
]);

export const RIVER_LEVELS = deepFreeze([
  {
    id: 'fazendeiro',
    title: 'O Fazendeiro e o Rio',
    capacity: 2,
    minMoves: 7,
    characters: [
      { id: 'farmer', name: 'Fazendeiro', role: 'Piloto', icon: '👨‍🌾', isPilot: true, group: 'farmer' },
      { id: 'wolf', name: 'Lobo', role: 'Animal', icon: '🐺', isPilot: false, group: 'wolf' },
      { id: 'sheep', name: 'Ovelha', role: 'Animal', icon: '🐑', isPilot: false, group: 'sheep' },
      { id: 'cabbage', name: 'Couve', role: 'Carga', icon: '🥬', isPilot: false, group: 'cabbage' }
    ],
    rulesDescription: [
      'O Fazendeiro é o único que sabe remar o barco.',
      'O barco transporta no máximo 2 itens por vez (o Fazendeiro e mais um elemento).',
      'Sem o Fazendeiro por perto, o Lobo come a Ovelha.',
      'Sem o Fazendeiro por perto, a Ovelha come a Couve.'
    ]
  },
  {
    id: 'familia',
    title: 'Passeio da Família',
    capacity: 2,
    minMoves: 9,
    characters: [
      { id: 'father', name: 'Pai', role: 'Adulto', icon: '👨', isPilot: true, group: 'father' },
      { id: 'mother', name: 'Mãe', role: 'Adulto', icon: '👩', isPilot: true, group: 'mother' },
      { id: 'son', name: 'Filho', role: 'Criança', icon: '👦', isPilot: false, group: 'boy' },
      { id: 'daughter', name: 'Filha', role: 'Criança', icon: '👧', isPilot: false, group: 'girl' },
      { id: 'dog', name: 'Cachorro', role: 'Animal', icon: '🐕', isPilot: false, group: 'dog' }
    ],
    rulesDescription: [
      'Apenas o Pai e a Mãe sabem pilotar o barco.',
      'O barco transporta no máximo 2 pessoas/animais por vez.',
      'O Pai não pode ficar com a Filha sem a presença da Mãe.',
      'A Mãe não pode ficar com o Filho sem a presença do Pai.',
      'O Cachorro não pode ficar com as crianças sem a presença de um adulto.'
    ]
  },
  {
    id: 'japones',
    title: 'O Teste Japonês de QI (8 Personagens)',
    capacity: 2,
    minMoves: 17,
    characters: [
      { id: 'police', name: 'Policial', role: 'Oficial', icon: '👮', isPilot: true, group: 'police' },
      { id: 'thief', name: 'Ladrão', role: 'Prisioneiro', icon: '🦹', isPilot: false, group: 'thief' },
      { id: 'father', name: 'Pai', role: 'Adulto', icon: '👨', isPilot: true, group: 'father' },
      { id: 'mother', name: 'Mãe', role: 'Adulto', icon: '👩', isPilot: true, group: 'mother' },
      { id: 'boy1', name: 'Filho 1', role: 'Criança', icon: '👦', isPilot: false, group: 'boy' },
      { id: 'boy2', name: 'Filho 2', role: 'Criança', icon: '👦', isPilot: false, group: 'boy' },
      { id: 'girl1', name: 'Filha 1', role: 'Criança', icon: '👧', isPilot: false, group: 'girl' },
      { id: 'girl2', name: 'Filha 2', role: 'Criança', icon: '👧', isPilot: false, group: 'girl' }
    ],
    rulesDescription: [
      'O barco transporta no máximo 2 pessoas por vez.',
      'Apenas Pai, Mãe e Policial sabem pilotar o barco.',
      'O Pai não pode ficar com nenhuma das filhas sem a presença da Mãe.',
      'A Mãe não pode ficar com nenhum dos filhos sem a presença do Pai.',
      'O Ladrão não pode ficar perto de nenhum membro da família sem a guarda do Policial.'
    ]
  }
]);

export const EINSTEIN_LEVELS = deepFreeze([
  {
    id: 'einstein-3',
    title: 'Primeiras Deduções (3 Casas)',
    houses: 3,
    categories: [
      { id: 'cor', label: 'Cor da Casa', values: ['Amarela', 'Azul', 'Vermelha'] },
      { id: 'animal', label: 'Animal', values: ['Cachorro', 'Gato', 'Pássaro'] },
      { id: 'bebida', label: 'Bebida', values: ['Chá', 'Leite', 'Suco'] }
    ],
    solution: [
      { cor: 'Amarela', animal: 'Gato', bebida: 'Chá' },
      { cor: 'Azul', animal: 'Pássaro', bebida: 'Leite' },
      { cor: 'Vermelha', animal: 'Cachorro', bebida: 'Suco' }
    ],
    question: 'Deduz a posição, a cor, o animal e a bebida de cada uma das 3 casas.',
    clues: [
      { text: 'A casa do meio (Casa 2) consome Leite.', check: { type: 'house-value', house: 1, category: 'bebida', value: 'Leite' } },
      { text: 'O dono do Cachorro mora na casa Vermelha.', check: { type: 'same-house', cat1: 'animal', val1: 'Cachorro', cat2: 'cor', val2: 'Vermelha' } },
      { text: 'A casa Amarela fica imediatamente à esquerda da casa Azul.', check: { type: 'left-of', cat1: 'cor', val1: 'Amarela', cat2: 'cor', val2: 'Azul' } },
      { text: 'O dono do Gato bebe Chá.', check: { type: 'same-house', cat1: 'animal', val1: 'Gato', cat2: 'bebida', val2: 'Chá' } },
      { text: 'O dono do Pássaro mora na Casa 2.', check: { type: 'house-value', house: 1, category: 'animal', value: 'Pássaro' } },
      { text: 'A pessoa que bebe Suco mora na Casa 3.', check: { type: 'house-value', house: 2, category: 'bebida', value: 'Suco' } }
    ]
  },
  {
    id: 'einstein-4',
    title: 'Dedução das 4 Casas',
    houses: 4,
    categories: [
      { id: 'cor', label: 'Cor da Casa', values: ['Amarela', 'Azul', 'Vermelha', 'Verde'] },
      { id: 'nacionalidade', label: 'Nacionalidade', values: ['Brasileiro', 'Italiano', 'Espanhol', 'Francês'] },
      { id: 'bebida', label: 'Bebida', values: ['Café', 'Chá', 'Leite', 'Suco'] },
      { id: 'esporte', label: 'Esporte', values: ['Futebol', 'Basquete', 'Xadrez', 'Natação'] }
    ],
    solution: [
      { cor: 'Amarela', nacionalidade: 'Brasileiro', bebida: 'Suco', esporte: 'Futebol' },
      { cor: 'Azul', nacionalidade: 'Italiano', bebida: 'Chá', esporte: 'Natação' },
      { cor: 'Vermelha', nacionalidade: 'Espanhol', bebida: 'Leite', esporte: 'Xadrez' },
      { cor: 'Verde', nacionalidade: 'Francês', bebida: 'Café', esporte: 'Basquete' }
    ],
    question: 'Quem é o Francês e qual esporte ele pratica?',
    clues: [
      { text: 'O Brasileiro mora na primeira casa (Casa 1).', check: { type: 'house-value', house: 0, category: 'nacionalidade', value: 'Brasileiro' } },
      { text: 'A casa Verde fica na quarta posição (Casa 4) e seu morador bebe Café.', check: { type: 'same-house', cat1: 'cor', val1: 'Verde', cat2: 'bebida', val2: 'Café' } },
      { text: 'O morador da casa Vermelha joga Xadrez.', check: { type: 'same-house', cat1: 'cor', val1: 'Vermelha', cat2: 'esporte', val2: 'Xadrez' } },
      { text: 'O Italiano mora ao lado da casa Amarela.', check: { type: 'neighbor', cat1: 'nacionalidade', val1: 'Italiano', cat2: 'cor', val2: 'Amarela' } },
      { text: 'A casa Azul é a Casa 2 e seu morador bebe Chá.', check: { type: 'house-value', house: 1, category: 'cor', value: 'Azul' } },
      { text: 'O Espanhol bebe Leite.', check: { type: 'same-house', cat1: 'nacionalidade', val1: 'Espanhol', cat2: 'bebida', val2: 'Leite' } },
      { text: 'Quem joga Futebol mora na casa Amarela.', check: { type: 'same-house', cat1: 'esporte', val1: 'Futebol', cat2: 'cor', val2: 'Amarela' } },
      { text: 'O nadador (Natação) mora na casa Azul.', check: { type: 'same-house', cat1: 'esporte', val1: 'Natação', cat2: 'cor', val2: 'Azul' } },
      { text: 'O Francês joga Basquete.', check: { type: 'same-house', cat1: 'nacionalidade', val1: 'Francês', cat2: 'esporte', val2: 'Basquete' } },
      { text: 'A Casa 3 é Vermelha.', check: { type: 'house-value', house: 2, category: 'cor', value: 'Vermelha' } }
    ]
  },
  {
    id: 'einstein-5',
    title: 'O Enigma de Einstein (5 Casas)',
    houses: 5,
    categories: [
      { id: 'cor', label: 'Cor da Casa', values: ['Amarela', 'Azul', 'Vermelha', 'Verde', 'Branca'] },
      { id: 'nacionalidade', label: 'Nacionalidade', values: ['Norueguês', 'Dinamarquês', 'Inglês', 'Alemão', 'Sueco'] },
      { id: 'bebida', label: 'Bebida', values: ['Água', 'Chá', 'Leite', 'Café', 'Suco'] },
      { id: 'hobby', label: 'Hobby', values: ['Esportes', 'Leitura', 'Música', 'Xadrez', 'Fotografia'] },
      { id: 'animal', label: 'Animal', values: ['Gatos', 'Cavalo', 'Pássaro', 'Peixe', 'Cachorro'] }
    ],
    solution: [
      { cor: 'Amarela', nacionalidade: 'Norueguês', bebida: 'Água', hobby: 'Esportes', animal: 'Gatos' },
      { cor: 'Azul', nacionalidade: 'Dinamarquês', bebida: 'Chá', hobby: 'Leitura', animal: 'Cavalo' },
      { cor: 'Vermelha', nacionalidade: 'Inglês', bebida: 'Leite', hobby: 'Música', animal: 'Pássaro' },
      { cor: 'Verde', nacionalidade: 'Alemão', bebida: 'Café', hobby: 'Xadrez', animal: 'Peixe' },
      { cor: 'Branca', nacionalidade: 'Sueco', bebida: 'Suco', hobby: 'Fotografia', animal: 'Cachorro' }
    ],
    question: 'Resolva o enigma histórico: QUEM É O DONO DO PEIXE?',
    clues: [
      { text: '1. O Norueguês vive na primeira casa (Casa 1).', check: { type: 'house-value', house: 0, category: 'nacionalidade', value: 'Norueguês' } },
      { text: '2. O Inglês vive na casa Vermelha.', check: { type: 'same-house', cat1: 'nacionalidade', val1: 'Inglês', cat2: 'cor', val2: 'Vermelha' } },
      { text: '3. A casa Verde fica imediatamente à esquerda da casa Branca.', check: { type: 'left-of', cat1: 'cor', val1: 'Verde', cat2: 'cor', val2: 'Branca' } },
      { text: '4. O Dinamarquês bebe Chá.', check: { type: 'same-house', cat1: 'nacionalidade', val1: 'Dinamarquês', cat2: 'bebida', val2: 'Chá' } },
      { text: '5. Quem pratica Esportes mora na casa Amarela.', check: { type: 'same-house', cat1: 'hobby', val1: 'Esportes', cat2: 'cor', val2: 'Amarela' } },
      { text: '6. A pessoa que pratica Música cria Pássaros.', check: { type: 'same-house', cat1: 'hobby', val1: 'Música', cat2: 'animal', val2: 'Pássaro' } },
      { text: '7. O morador da casa do meio (Casa 3) bebe Leite.', check: { type: 'house-value', house: 2, category: 'bebida', value: 'Leite' } },
      { text: '8. O Alemão joga Xadrez.', check: { type: 'same-house', cat1: 'nacionalidade', val1: 'Alemão', cat2: 'hobby', val2: 'Xadrez' } },
      { text: '9. O Norueguês vive ao lado da casa Azul.', check: { type: 'neighbor', cat1: 'nacionalidade', val1: 'Norueguês', cat2: 'cor', val2: 'Azul' } },
      { text: '10. Quem pratica Leitura mora ao lado de quem cria Gatos.', check: { type: 'neighbor', cat1: 'hobby', val1: 'Leitura', cat2: 'animal', val2: 'Gatos' } },
      { text: '11. Quem cria Cavalos mora ao lado de quem pratica Esportes.', check: { type: 'neighbor', cat1: 'animal', val1: 'Cavalo', cat2: 'hobby', val2: 'Esportes' } },
      { text: '12. O morador da casa Verde bebe Café.', check: { type: 'same-house', cat1: 'cor', val1: 'Verde', cat2: 'bebida', val2: 'Café' } },
      { text: '13. Quem pratica Fotografia bebe Suco.', check: { type: 'same-house', cat1: 'hobby', val1: 'Fotografia', cat2: 'bebida', val2: 'Suco' } },
      { text: '14. O Sueco cria Cachorros.', check: { type: 'same-house', cat1: 'nacionalidade', val1: 'Sueco', cat2: 'animal', val2: 'Cachorro' } },
      { text: '15. Quem pratica Leitura é vizinho de quem bebe Água.', check: { type: 'neighbor', cat1: 'hobby', val1: 'Leitura', cat2: 'bebida', val2: 'Água' } }
    ]
  }
]);

export const HANOI_LEVELS = deepFreeze([
  {
    id: 'hanoi-3',
    title: '3 Discos (Básico)',
    discs: 3,
    minMoves: 7,
    description: 'Transfira todos os 3 discos da Haste A para a Haste C.'
  },
  {
    id: 'hanoi-4',
    title: '4 Discos (Intermediário)',
    discs: 4,
    minMoves: 15,
    description: 'Transfira todos os 4 discos com estratégia e sem erros.'
  },
  {
    id: 'hanoi-5',
    title: '5 Discos (Avançado)',
    discs: 5,
    minMoves: 31,
    description: 'Um teste avançado de planejamento sequencial e foco.'
  },
  {
    id: 'hanoi-6',
    title: '6 Discos (Mestre do QI)',
    discs: 6,
    minMoves: 63,
    description: 'O grande desafio de raciocínio recursivo: 63 movimentos perfeitos!'
  }
]);

export const TWENTYFOUR_LEVELS = deepFreeze([
  {
    id: 'tf-1',
    title: 'Nível 1 (Iniciante)',
    numbers: [2, 3, 4, 6],
    target: 24,
    description: 'Combine os 4 números com +, -, ×, ÷ e parênteses para obter exatamente 24.',
    hint: 'Dica: Você pode tentar agrupar (6 × 4) ou formar multiplicações simples.'
  },
  {
    id: 'tf-2',
    title: 'Nível 2 (Médio - Frações)',
    numbers: [1, 5, 5, 5],
    target: 24,
    description: 'Um clássico das olimpíadas de matemática: use divisão para criar uma fração intermediária!',
    hint: 'Dica: Pense em quanto vale 5 - 1/5 e multiplique pelo último 5!'
  },
  {
    id: 'tf-3',
    title: 'Nível 3 (Avançado)',
    numbers: [3, 3, 8, 8],
    target: 24,
    description: 'Desafio de alta dedução: a divisão pelo inverso fracionário.',
    hint: 'Dica: Quanto é 8 dividido por (3 - 8/3)?'
  },
  {
    id: 'tf-4',
    title: 'Nível 4 (Mestre Olímpico)',
    numbers: [4, 4, 10, 10],
    target: 24,
    description: 'Manipulação de centenas e divisão.',
    hint: 'Dica: Pense em (10 × 10 - 4) / 4.'
  },
  {
    id: 'tf-5', title: 'Nível 5 (Divisão Estratégica)', numbers: [1, 3, 4, 6], target: 24,
    description: 'Crie uma fração no denominador para transformar o 6 em 24.',
    hint: 'Dica: experimente dividir 6 por uma diferença formada com 1, 3 e 4.'
  },
  {
    id: 'tf-6', title: 'Nível 6 (Quase Cinquenta)', numbers: [1, 2, 7, 7], target: 24,
    description: 'Comece com um produto alto e ajuste o resultado usando os outros números.',
    hint: 'Dica: 7 × 7 fica muito perto de um múltiplo de 24.'
  },
  {
    id: 'tf-7', title: 'Nível 7 (Produto e Diferença)', numbers: [2, 3, 5, 9], target: 24,
    description: 'Monte dois grupos e multiplique os resultados.',
    hint: 'Dica: procure formar 6 em um grupo e 4 no outro.'
  },
  {
    id: 'tf-8', title: 'Nível 8 (Dois Grupos)', numbers: [2, 4, 5, 7], target: 24,
    description: 'Uma diferença pequena e uma soma maior fecham a conta.',
    hint: 'Dica: tente produzir 2 e 12.'
  },
  {
    id: 'tf-9', title: 'Nível 9 (Fração Oculta)', numbers: [5, 5, 7, 11], target: 24,
    description: 'Use todos os números e aceite um resultado fracionário no meio do caminho.',
    hint: 'Dica: forme 11 ÷ 5 antes de trabalhar com o 7.'
  },
  {
    id: 'tf-10', title: 'Nível 10 (Desafio Mestre)', numbers: [1, 4, 5, 6], target: 24,
    description: 'O caminho mais curto passa por uma fração equivalente a um quarto.',
    hint: 'Dica: investigue a diferença entre 5 ÷ 4 e 1.'
  }
]);

function createRectangularKakuro({ id, title, matrix, description }) {
  const whiteRows = matrix.length;
  const whiteCols = matrix[0].length;
  const rowClues = matrix.map(row => row.reduce((sum, value) => sum + value, 0));
  const colClues = Array.from({ length: whiteCols }, (_, col) => (
    matrix.reduce((sum, row) => sum + row[col], 0)
  ));
  const cells = [];
  const solution = {};
  matrix.forEach((row, rowIndex) => row.forEach((value, colIndex) => {
    cells.push({ row: rowIndex + 1, col: colIndex + 1 });
    solution[`${rowIndex + 1},${colIndex + 1}`] = value;
  }));
  return {
    id, title, description,
    rows: whiteRows + 1,
    cols: whiteCols + 1,
    grid: [
      [{ type: 'black' }, ...colClues.map(colClue => ({ type: 'clue', colClue }))],
      ...matrix.map((row, rowIndex) => [
        { type: 'clue', rowClue: rowClues[rowIndex] },
        ...row.map((_, colIndex) => ({ type: 'white', row: rowIndex + 1, col: colIndex + 1 }))
      ])
    ],
    cells,
    runs: [
      ...matrix.map((row, rowIndex) => ({
        id: `r${rowIndex + 1}`, type: 'horizontal', clue: rowClues[rowIndex],
        cells: row.map((_, colIndex) => [rowIndex + 1, colIndex + 1])
      })),
      ...colClues.map((clue, colIndex) => ({
        id: `c${colIndex + 1}`, type: 'vertical', clue,
        cells: matrix.map((_, rowIndex) => [rowIndex + 1, colIndex + 1])
      }))
    ],
    solution
  };
}

export const KAKURO_LEVELS = deepFreeze([
  {
    id: 'kakuro-3x3',
    title: 'Grid 3×3 (Introdução)',
    rows: 3,
    cols: 3,
    description: 'Preencha os espaços brancos com números de 1 a 9 para atingir as somas indicadas sem repetir dígitos no mesmo bloco.',
    grid: [
      [{ type: 'black' }, { type: 'clue', colClue: 4 }, { type: 'clue', colClue: 6 }],
      [{ type: 'clue', rowClue: 3 }, { type: 'white', row: 1, col: 1 }, { type: 'white', row: 1, col: 2 }],
      [{ type: 'clue', rowClue: 7 }, { type: 'white', row: 2, col: 1 }, { type: 'white', row: 2, col: 2 }]
    ],
    cells: [
      { row: 1, col: 1 },
      { row: 1, col: 2 },
      { row: 2, col: 1 },
      { row: 2, col: 2 }
    ],
    runs: [
      { id: 'r1', type: 'horizontal', clue: 3, cells: [[1, 1], [1, 2]] },
      { id: 'r2', type: 'horizontal', clue: 7, cells: [[2, 1], [2, 2]] },
      { id: 'c1', type: 'vertical', clue: 4, cells: [[1, 1], [2, 1]] },
      { id: 'c2', type: 'vertical', clue: 6, cells: [[1, 2], [2, 2]] }
    ],
    solution: {
      '1,1': 1,
      '1,2': 2,
      '2,1': 3,
      '2,2': 4
    }
  },
  {
    id: 'kakuro-4x4',
    title: 'Grid 4×4 (Médio)',
    rows: 4,
    cols: 4,
    description: 'Deduza combinações de 3 dígitos únicos por linha e coluna que somam as pistas indicadas.',
    grid: [
      [{ type: 'black' }, { type: 'clue', colClue: 16 }, { type: 'clue', colClue: 16 }, { type: 'clue', colClue: 8 }],
      [{ type: 'clue', rowClue: 17 }, { type: 'white', row: 1, col: 1 }, { type: 'white', row: 1, col: 2 }, { type: 'white', row: 1, col: 3 }],
      [{ type: 'clue', rowClue: 16 }, { type: 'white', row: 2, col: 1 }, { type: 'white', row: 2, col: 2 }, { type: 'white', row: 2, col: 3 }],
      [{ type: 'clue', rowClue: 7 }, { type: 'white', row: 3, col: 1 }, { type: 'white', row: 3, col: 2 }, { type: 'white', row: 3, col: 3 }]
    ],
    cells: [
      { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 1, col: 3 },
      { row: 2, col: 1 }, { row: 2, col: 2 }, { row: 2, col: 3 },
      { row: 3, col: 1 }, { row: 3, col: 2 }, { row: 3, col: 3 }
    ],
    runs: [
      { id: 'r1', type: 'horizontal', clue: 17, cells: [[1, 1], [1, 2], [1, 3]] },
      { id: 'r2', type: 'horizontal', clue: 16, cells: [[2, 1], [2, 2], [2, 3]] },
      { id: 'r3', type: 'horizontal', clue: 7, cells: [[3, 1], [3, 2], [3, 3]] },
      { id: 'c1', type: 'vertical', clue: 16, cells: [[1, 1], [2, 1], [3, 1]] },
      { id: 'c2', type: 'vertical', clue: 16, cells: [[1, 2], [2, 2], [3, 2]] },
      { id: 'c3', type: 'vertical', clue: 8, cells: [[1, 3], [2, 3], [3, 3]] }
    ],
    solution: {
      '1,1': 7, '1,2': 9, '1,3': 1,
      '2,1': 8, '2,2': 5, '2,3': 3,
      '3,1': 1, '3,2': 2, '3,3': 4
    }
  },
  {
    id: 'kakuro-5x5',
    title: 'Grid 5×5 (Avançado Cruzado)',
    rows: 5,
    cols: 5,
    description: 'Desafio complexo de interseções e partições numéricas sem repetições.',
    grid: [
      [{ type: 'black' }, { type: 'clue', colClue: 14 }, { type: 'clue', colClue: 21 }, { type: 'black' }, { type: 'black' }],
      [{ type: 'clue', rowClue: 7 }, { type: 'white', row: 1, col: 1 }, { type: 'white', row: 1, col: 2 }, { type: 'clue', colClue: 21 }, { type: 'clue', colClue: 7 }],
      [{ type: 'clue', rowClue: 23 }, { type: 'white', row: 2, col: 1 }, { type: 'white', row: 2, col: 2 }, { type: 'white', row: 2, col: 3 }, { type: 'white', row: 2, col: 4 }],
      [{ type: 'clue', rowClue: 18 }, { type: 'white', row: 3, col: 1 }, { type: 'white', row: 3, col: 2 }, { type: 'white', row: 3, col: 3 }, { type: 'white', row: 3, col: 4 }],
      [{ type: 'clue', rowClue: 15 }, { type: 'white', row: 4, col: 1 }, { type: 'white', row: 4, col: 2 }, { type: 'white', row: 4, col: 3 }, { type: 'black' }]
    ],
    cells: [
      { row: 1, col: 1 }, { row: 1, col: 2 },
      { row: 2, col: 1 }, { row: 2, col: 2 }, { row: 2, col: 3 }, { row: 2, col: 4 },
      { row: 3, col: 1 }, { row: 3, col: 2 }, { row: 3, col: 3 }, { row: 3, col: 4 },
      { row: 4, col: 1 }, { row: 4, col: 2 }, { row: 4, col: 3 }
    ],
    runs: [
      { id: 'r1', type: 'horizontal', clue: 7, cells: [[1, 1], [1, 2]] },
      { id: 'r2', type: 'horizontal', clue: 23, cells: [[2, 1], [2, 2], [2, 3], [2, 4]] },
      { id: 'r3', type: 'horizontal', clue: 18, cells: [[3, 1], [3, 2], [3, 3], [3, 4]] },
      { id: 'r4', type: 'horizontal', clue: 15, cells: [[4, 1], [4, 2], [4, 3]] },
      { id: 'c1', type: 'vertical', clue: 14, cells: [[1, 1], [2, 1], [3, 1], [4, 1]] },
      { id: 'c2', type: 'vertical', clue: 21, cells: [[1, 2], [2, 2], [3, 2], [4, 2]] },
      { id: 'c3', type: 'vertical', clue: 21, cells: [[2, 3], [3, 3], [4, 3]] },
      { id: 'c4', type: 'vertical', clue: 7, cells: [[2, 4], [3, 4]] }
    ],
    solution: {
      '1,1': 3, '1,2': 4,
      '2,1': 8, '2,2': 1, '2,3': 9, '2,4': 5,
      '3,1': 1, '3,2': 7, '3,3': 8, '3,4': 2,
      '4,1': 2, '4,2': 9, '4,3': 4
    }
  },
  createRectangularKakuro({
    id: 'kakuro-extra-1', title: 'Extra 1 · Somas Crescentes',
    description: 'Uma grade compacta para reconhecer combinações crescentes sem repetir dígitos.',
    matrix: [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
  }),
  createRectangularKakuro({
    id: 'kakuro-extra-2', title: 'Extra 2 · Colunas Cruzadas',
    description: 'As pistas variam bastante; use as interseções para eliminar possibilidades.',
    matrix: [[2, 4, 7], [5, 8, 1], [9, 3, 6]]
  }),
  createRectangularKakuro({
    id: 'kakuro-extra-3', title: 'Extra 3 · Grade 4×4',
    description: 'Quatro dígitos por sequência tornam cada escolha mais dependente das colunas.',
    matrix: [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7]]
  }),
  createRectangularKakuro({
    id: 'kakuro-extra-4', title: 'Extra 4 · Soma 18',
    description: 'Todas as pistas indicam 18, mas as posições dos dígitos mudam em cada sequência.',
    matrix: [[1, 3, 6, 8], [6, 8, 1, 3], [3, 1, 8, 6], [8, 6, 3, 1]]
  }),
  createRectangularKakuro({
    id: 'kakuro-extra-5', title: 'Extra 5 · Grade Mestra 5×5',
    description: 'Cinco linhas e cinco colunas interligadas encerram a nova série de Kakuro.',
    matrix: [[1, 2, 3, 4, 5], [2, 3, 4, 5, 1], [3, 4, 5, 1, 2], [4, 5, 1, 2, 3], [5, 1, 2, 3, 4]]
  })
]);

export const PYRAMID_LEVELS = deepFreeze([
  {
    id: 'pyr-1',
    type: 'pyramid',
    title: 'Pirâmide de Adição (3 Níveis)',
    op: '+',
    description: 'Cada tijolo superior é a SOMA dos dois tijolos diretamente abaixo dele.',
    layers: [
      [{ value: null, given: false }],
      [{ value: 8, given: true }, { value: null, given: false }],
      [{ value: 3, given: true }, { value: 5, given: true }, { value: 7, given: true }]
    ],
    solution: [
      [20],
      [8, 12],
      [3, 5, 7]
    ]
  },
  {
    id: 'pyr-2',
    type: 'pyramid',
    title: 'Pirâmide Inversa (4 Níveis)',
    op: '+',
    description: 'Use dedução direta e inversa (subtração) para preencher todos os tijolos vazios.',
    layers: [
      [{ value: 50, given: true }],
      [{ value: null, given: false }, { value: 28, given: true }],
      [{ value: 9, given: true }, { value: null, given: false }, { value: 15, given: true }],
      [{ value: 4, given: true }, { value: 5, given: true }, { value: null, given: false }, { value: 7, given: true }]
    ],
    solution: [
      [50],
      [22, 28],
      [9, 13, 15],
      [4, 5, 8, 7]
    ]
  },
  {
    id: 'magic-3x3',
    type: 'magicsquare',
    title: 'Quadrado Mágico 3×3 (Lo Shu)',
    size: 3,
    magicConstant: 15,
    description: 'Preencha com números de 1 a 9 sem repetir. Todas as 3 linhas, 3 colunas e 2 diagonais devem somar exatamente 15!',
    initialGrid: [
      [8, null, 6],
      [null, 5, null],
      [4, null, 2]
    ],
    solution: [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2]
    ]
  },
  {
    id: 'magic-4x4',
    type: 'magicsquare',
    title: 'Quadrado Mágico 4×4 de Dürer',
    size: 4,
    magicConstant: 34,
    description: 'Obra prima renascentista: use os números de 1 a 16 para que todas as linhas, colunas e diagonais somem 34!',
    initialGrid: [
      [16, 3, 2, null],
      [5, null, 11, 8],
      [null, 6, 7, 12],
      [4, 15, null, 1]
    ],
    solution: [
      [16, 3, 2, 13],
      [5, 10, 11, 8],
      [9, 6, 7, 12],
      [4, 15, 14, 1]
    ]
  },
  {
    id: 'pyr-extra-1', type: 'pyramid', title: 'Extra 1 · Escada de Somas', op: '+',
    description: 'Complete quatro camadas combinando cálculo direto e cálculo inverso.',
    layers: [
      [{ value: null, given: false }],
      [{ value: 13, given: true }, { value: null, given: false }],
      [{ value: null, given: false }, { value: 7, given: true }, { value: null, given: false }],
      [{ value: 2, given: true }, { value: null, given: false }, { value: 3, given: true }, { value: 5, given: true }]
    ],
    solution: [[28], [13, 15], [6, 7, 8], [2, 4, 3, 5]],
    hint: 'Comece pelos blocos 7 e 3 para descobrir o número imediatamente à esquerda do 3.'
  },
  {
    id: 'pyr-extra-2', type: 'pyramid', title: 'Extra 2 · Pirâmide de Cinco Camadas', op: '+',
    description: 'Uma pirâmide maior em que cada descoberta abre duas novas relações.',
    layers: [
      [{ value: 48, given: true }],
      [{ value: null, given: false }, { value: 28, given: true }],
      [{ value: 8, given: true }, { value: null, given: false }, { value: 16, given: true }],
      [{ value: null, given: false }, { value: 5, given: true }, { value: null, given: false }, { value: 9, given: true }],
      [{ value: 1, given: true }, { value: 2, given: true }, { value: null, given: false }, { value: 4, given: true }, { value: 5, given: true }]
    ],
    solution: [[48], [20, 28], [8, 12, 16], [3, 5, 7, 9], [1, 2, 3, 4, 5]],
    hint: 'A base segue uma sequência simples; depois, some os pares vizinhos.'
  },
  {
    id: 'pyr-extra-3', type: 'pyramid', title: 'Extra 3 · Pirâmide de Multiplicação', op: '×',
    description: 'Agora o bloco superior é o produto dos dois blocos abaixo.',
    layers: [
      [{ value: 72, given: true }],
      [{ value: null, given: false }, { value: 12, given: true }],
      [{ value: 2, given: true }, { value: null, given: false }, { value: 4, given: true }]
    ],
    solution: [[72], [6, 12], [2, 3, 4]],
    hint: 'Qual número multiplicado por 4 resulta em 12?'
  },
  {
    id: 'magic-extra-3x3', type: 'magicsquare', title: 'Extra 4 · Lo Shu Espelhado', size: 3,
    magicConstant: 15,
    description: 'Uma nova orientação do quadrado mágico clássico, com menos números revelados.',
    initialGrid: [[6, null, null], [null, 5, 3], [null, null, 4]],
    solution: [[6, 1, 8], [7, 5, 3], [2, 9, 4]]
  },
  {
    id: 'magic-extra-4x4', type: 'magicsquare', title: 'Extra 5 · Dürer Rotacionado', size: 4,
    magicConstant: 34,
    description: 'Reconstrua uma rotação do quadrado de Dürer usando os números de 1 a 16.',
    initialGrid: [[4, null, 5, 16], [null, 6, null, 3], [14, null, 11, null], [1, 12, null, 13]],
    solution: [[4, 9, 5, 16], [15, 6, 10, 3], [14, 7, 11, 2], [1, 12, 8, 13]]
  }
]);

export const BALANCE_LEVELS = deepFreeze([
  {
    id: 'bal-1',
    title: 'Balança 1 (Dedução Direta)',
    description: 'Descubra a relação de peso entre as formas geométricas e equilibre a balança misteriosa!',
    shapes: [
      { id: 'circle', name: 'Círculo', icon: '🔵', weight: 2 },
      { id: 'triangle', name: 'Triângulo', icon: '🔺', weight: 3 },
      { id: 'square', name: 'Quadrado', icon: '🟩', weight: 5 }
    ],
    referenceScales: [
      {
        id: 'ref-1',
        title: 'Balança de Referência A',
        left: ['circle', 'circle', 'circle'], // 3 * 2 = 6
        right: ['triangle', 'triangle']       // 2 * 3 = 6
      },
      {
        id: 'ref-2',
        title: 'Balança de Referência B',
        left: ['square'],                     // 5
        right: ['triangle', 'circle']         // 3 + 2 = 5
      }
    ],
    mysteryScale: {
      id: 'mystery',
      title: 'Balança Misteriosa (Equilibre o prato direito)',
      left: ['square', 'triangle'], // 5 + 3 = 8
      allowedShapes: ['circle', 'triangle', 'square']
    },
    solution: {
      rightPan: ['square', 'triangle']
    },
    hint: '3 Círculos = 2 Triângulos e 1 Quadrado = 1 Triângulo + 1 Círculo. Quanto pesam juntos 1 Quadrado e 1 Triângulo?'
  },
  {
    id: 'bal-2',
    title: 'Balança 2 (Estrelas e Diamantes)',
    description: 'Analise o sistema de equilíbrio e coloque as peças necessárias no prato direito.',
    shapes: [
      { id: 'moon', name: 'Lua', icon: '🌙', weight: 2 },
      { id: 'diamond', name: 'Diamante', icon: '💎', weight: 4 },
      { id: 'star', name: 'Estrela', icon: '⭐', weight: 6 }
    ],
    referenceScales: [
      {
        id: 'ref-1',
        title: 'Balança de Referência A',
        left: ['star'],                       // 6
        right: ['diamond', 'moon']            // 4 + 2 = 6
      },
      {
        id: 'ref-2',
        title: 'Balança de Referência B',
        left: ['diamond'],                    // 4
        right: ['moon', 'moon']               // 2 + 2 = 4
      }
    ],
    mysteryScale: {
      id: 'mystery',
      title: 'Balança Misteriosa',
      left: ['star', 'diamond'], // 6 + 4 = 10
      allowedShapes: ['moon', 'diamond', 'star']
    },
    solution: {
      rightPan: ['star', 'diamond']
    },
    hint: '1 Diamante vale 2 Luas. 1 Estrela vale 1 Diamante + 1 Lua. Quantas Luas equivalem a 1 Estrela + 1 Diamante?'
  },
  {
    id: 'bal-3',
    title: 'Balança 3 (Sistema de 3 Incógnitas)',
    description: 'Deduza os pesos relativos com 3 tipos de blocos mágicos.',
    shapes: [
      { id: 'heart', name: 'Coração', icon: '❤️', weight: 3 },
      { id: 'gem', name: 'Gema Roxa', icon: '🔮', weight: 4 },
      { id: 'gold', name: 'Barra de Ouro', icon: '🪙', weight: 7 }
    ],
    referenceScales: [
      {
        id: 'ref-1',
        title: 'Balança 1',
        left: ['gold'],                       // 7
        right: ['gem', 'heart']               // 4 + 3 = 7
      },
      {
        id: 'ref-2',
        title: 'Balança 2',
        left: ['gem', 'gem', 'heart'],        // 4 + 4 + 3 = 11
        right: ['gold', 'gem']                // 7 + 4 = 11
      },
      {
        id: 'ref-3',
        title: 'Balança 3',
        left: ['gold', 'gold'],               // 14
        right: ['gem', 'gem', 'heart', 'heart'] // 8 + 6 = 14
      }
    ],
    mysteryScale: {
      id: 'mystery',
      title: 'Balança Misteriosa',
      left: ['gold', 'heart'], // 7 + 3 = 10
      allowedShapes: ['heart', 'gem', 'gold']
    },
    solution: {
      rightPan: ['gold', 'heart']
    },
    hint: '1 Barra de Ouro = 1 Gema + 1 Coração. Descubra como equilibrar 1 Barra de Ouro + 1 Coração.'
  },
  {
    id: 'bal-4',
    title: 'Balança 4 (Desafio dos Elementos Químicos)',
    description: 'Sistema algébrico com 4 substâncias em equilíbrio perfeito.',
    shapes: [
      { id: 'fire', name: 'Fogo', icon: '🔥', weight: 4 },
      { id: 'water', name: 'Água', icon: '💧', weight: 3 },
      { id: 'earth', name: 'Terra', icon: '🌿', weight: 7 },
      { id: 'air', name: 'Ar', icon: '💨', weight: 10 }
    ],
    referenceScales: [
      {
        id: 'ref-1',
        title: 'Balança A',
        left: ['air'],                        // 10
        right: ['earth', 'water']             // 7 + 3 = 10
      },
      {
        id: 'ref-2',
        title: 'Balança B',
        left: ['earth'],                      // 7
        right: ['fire', 'water']              // 4 + 3 = 7
      },
      {
        id: 'ref-3',
        title: 'Balança C',
        left: ['fire', 'water', 'water'],     // 4 + 3 + 3 = 10
        right: ['air']                        // 10
      }
    ],
    mysteryScale: {
      id: 'mystery',
      title: 'Balança Misteriosa',
      left: ['air', 'earth'], // 10 + 7 = 17
      allowedShapes: ['fire', 'water', 'earth', 'air']
    },
    solution: {
      rightPan: ['air', 'earth']
    },
    hint: 'Substitua as variáveis sucessivamente para encontrar a combinação de equilíbrio.'
  },
  {
    id: 'bal-5', title: 'Balança 5 · Feira de Frutas',
    description: 'Converta frutas diferentes em uma única unidade de peso.',
    shapes: [
      { id: 'apple', name: 'Maçã', icon: '🍎', weight: 2 },
      { id: 'banana', name: 'Banana', icon: '🍌', weight: 3 },
      { id: 'orange', name: 'Laranja', icon: '🍊', weight: 5 }
    ],
    referenceScales: [
      { id: 'ref-1', title: 'Laranja e frutas', left: ['orange'], right: ['banana', 'apple'] },
      { id: 'ref-2', title: 'Maçãs e bananas', left: ['apple', 'apple', 'apple'], right: ['banana', 'banana'] }
    ],
    mysteryScale: { id: 'mystery', title: 'Use somente maçãs', left: ['orange', 'banana'], allowedShapes: ['apple'] },
    solution: { rightPan: ['apple', 'apple', 'apple', 'apple'] },
    hint: 'Uma laranja e uma banana pesam o mesmo que quantas maçãs?'
  },
  {
    id: 'bal-6', title: 'Balança 6 · Sistema Solar',
    description: 'Use luas para representar o peso combinado dos astros maiores.',
    shapes: [
      { id: 'moon2', name: 'Lua', icon: '🌙', weight: 2 },
      { id: 'earth2', name: 'Terra', icon: '🌍', weight: 5 },
      { id: 'sun2', name: 'Sol', icon: '☀️', weight: 7 }
    ],
    referenceScales: [
      { id: 'ref-1', title: 'Sol em equilíbrio', left: ['sun2'], right: ['earth2', 'moon2'] },
      { id: 'ref-2', title: 'Dois sóis', left: ['sun2', 'sun2'], right: ['earth2', 'earth2', 'moon2', 'moon2'] }
    ],
    mysteryScale: { id: 'mystery', title: 'Use somente luas', left: ['sun2', 'earth2'], allowedShapes: ['moon2'] },
    solution: { rightPan: ['moon2', 'moon2', 'moon2', 'moon2', 'moon2', 'moon2'] },
    hint: 'Sol + Terra totalizam 12 unidades; cada Lua vale 2.'
  },
  {
    id: 'bal-7', title: 'Balança 7 · Campeonato',
    description: 'Transforme medalhas e troféus em bolas para fechar o placar.',
    shapes: [
      { id: 'ball', name: 'Bola', icon: '⚽', weight: 2 },
      { id: 'medal', name: 'Medalha', icon: '🥇', weight: 6 },
      { id: 'trophy', name: 'Troféu', icon: '🏆', weight: 8 }
    ],
    referenceScales: [
      { id: 'ref-1', title: 'Valor da medalha', left: ['medal'], right: ['ball', 'ball', 'ball'] },
      { id: 'ref-2', title: 'Valor do troféu', left: ['trophy'], right: ['medal', 'ball'] }
    ],
    mysteryScale: { id: 'mystery', title: 'Use somente bolas', left: ['trophy', 'medal'], allowedShapes: ['ball'] },
    solution: { rightPan: ['ball', 'ball', 'ball', 'ball', 'ball', 'ball', 'ball'] },
    hint: 'Converta primeiro o troféu e depois a medalha.'
  },
  {
    id: 'bal-8', title: 'Balança 8 · Pedras Preciosas',
    description: 'Combine rubis e safiras para igualar duas joias maiores.',
    shapes: [
      { id: 'ruby', name: 'Rubi', icon: '♦️', weight: 3 },
      { id: 'sapphire', name: 'Safira', icon: '🔷', weight: 4 },
      { id: 'emerald', name: 'Esmeralda', icon: '💚', weight: 7 },
      { id: 'diamond2', name: 'Diamante', icon: '💎', weight: 10 }
    ],
    referenceScales: [
      { id: 'ref-1', title: 'Valor da esmeralda', left: ['emerald'], right: ['ruby', 'sapphire'] },
      { id: 'ref-2', title: 'Valor do diamante', left: ['diamond2'], right: ['ruby', 'ruby', 'sapphire'] }
    ],
    mysteryScale: { id: 'mystery', title: 'Use rubis e safiras', left: ['diamond2', 'emerald'], allowedShapes: ['ruby', 'sapphire'] },
    solution: { rightPan: ['ruby', 'ruby', 'ruby', 'sapphire', 'sapphire'] },
    hint: 'O prato esquerdo pesa 17; procure uma combinação de 3 e 4.'
  },
  {
    id: 'bal-9', title: 'Balança 9 · Missão Espacial',
    description: 'A última fase exige substituir uma cadeia inteira de equivalências.',
    shapes: [
      { id: 'atom', name: 'Átomo', icon: '⚛️', weight: 4 },
      { id: 'rocket', name: 'Foguete', icon: '🚀', weight: 9 },
      { id: 'satellite', name: 'Satélite', icon: '🛰️', weight: 13 },
      { id: 'star2', name: 'Estrela', icon: '🌟', weight: 17 }
    ],
    referenceScales: [
      { id: 'ref-1', title: 'Satélite', left: ['satellite'], right: ['rocket', 'atom'] },
      { id: 'ref-2', title: 'Estrela', left: ['star2'], right: ['satellite', 'atom'] }
    ],
    mysteryScale: { id: 'mystery', title: 'Encontre uma dupla equivalente', left: ['star2', 'rocket'], allowedShapes: ['atom', 'rocket', 'satellite'] },
    solution: { rightPan: ['satellite', 'satellite'] },
    hint: 'O peso da estrela somado ao foguete é igual ao dobro de qual peça?'
  }
]);

export const JIGSAW_LEVELS = deepFreeze([
  {
    id: 'primeiros-blocos',
    title: 'Primeiros blocos',
    rows: 4,
    cols: 4,
    pieces: [
      { id: 'rosa', label: 'Peça rosa', color: 'pink', cells: [[0, 0], [0, 1], [1, 0], [1, 1]] },
      { id: 'menta', label: 'Peça menta', color: 'mint', cells: [[0, 0], [0, 1], [1, 0], [1, 1]] },
      { id: 'amarela', label: 'Peça amarela', color: 'yellow', cells: [[0, 0], [0, 1], [1, 0], [1, 1]] },
      { id: 'ameixa', label: 'Peça ameixa', color: 'plum', cells: [[0, 0], [0, 1], [1, 0], [1, 1]] }
    ]
  },
  {
    id: 'quatro-formas',
    title: 'Quatro formas',
    rows: 4,
    cols: 4,
    pieces: [
      { id: 'linha', label: 'Linha', color: 'pink', cells: [[0, 0], [0, 1], [0, 2], [0, 3]] },
      { id: 'ele', label: 'Peça L', color: 'mint', cells: [[0, 0], [1, 0], [2, 0], [2, 1]] },
      { id: 'jota', label: 'Peça J', color: 'yellow', cells: [[0, 1], [1, 1], [2, 0], [2, 1]] },
      { id: 'quadrado', label: 'Quadrado', color: 'plum', cells: [[0, 0], [0, 1], [1, 0], [1, 1]] }
    ]
  },
  {
    id: 'mosaico',
    title: 'Mosaico',
    rows: 4,
    cols: 5,
    pieces: [
      { id: 'linha-1', label: 'Linha rosa', color: 'pink', cells: [[0, 0], [0, 1], [0, 2], [0, 3]] },
      { id: 'linha-2', label: 'Linha menta', color: 'mint', cells: [[0, 0], [0, 1], [0, 2], [0, 3]] },
      { id: 'linha-3', label: 'Linha amarela', color: 'yellow', cells: [[0, 0], [0, 1], [0, 2], [0, 3]] },
      { id: 'quadrado-1', label: 'Quadrado claro', color: 'blush', cells: [[0, 0], [0, 1], [1, 0], [1, 1]] },
      { id: 'quadrado-2', label: 'Quadrado ameixa', color: 'plum', cells: [[0, 0], [0, 1], [1, 0], [1, 1]] }
    ]
  },
  {
    id: 'mestre-dos-encaixes',
    title: 'Mestre dos encaixes',
    rows: 4,
    cols: 6,
    pieces: [
      { id: 'linha-final', label: 'Linha', color: 'pink', cells: [[0, 0], [0, 1], [0, 2], [0, 3]] },
      { id: 'te-1', label: 'Peça T rosa', color: 'blush', cells: [[0, 0], [0, 1], [0, 2], [1, 1]] },
      { id: 'te-2', label: 'Peça T amarela', color: 'yellow', cells: [[0, 0], [0, 1], [0, 2], [1, 1]] },
      { id: 'esse', label: 'Peça S', color: 'mint', cells: [[0, 1], [0, 2], [1, 0], [1, 1]] },
      { id: 'ele-final', label: 'Peça L', color: 'plum', cells: [[0, 0], [1, 0], [2, 0], [2, 1]] },
      { id: 'quadrado-final', label: 'Quadrado', color: 'aqua', cells: [[0, 0], [0, 1], [1, 0], [1, 1]] }
    ]
  },
  {
    id: 'cinco-faixas', title: 'Cinco faixas', rows: 5, cols: 5,
    pieces: [
      { id: 'faixa-1', label: 'Faixa rosa', color: 'pink', cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]] },
      { id: 'faixa-2', label: 'Faixa menta', color: 'mint', cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]] },
      { id: 'faixa-3', label: 'Faixa amarela', color: 'yellow', cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]] },
      { id: 'faixa-4', label: 'Faixa ameixa', color: 'plum', cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]] },
      { id: 'faixa-5', label: 'Faixa azul', color: 'aqua', cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]] }
    ]
  },
  {
    id: 'quadrados-e-colunas', title: 'Quadrados e colunas', rows: 5, cols: 6,
    pieces: [
      { id: 'qe-1', label: 'Quadrado 1', color: 'pink', cells: [[0, 0], [0, 1], [1, 0], [1, 1]] },
      { id: 'qe-2', label: 'Quadrado 2', color: 'mint', cells: [[0, 0], [0, 1], [1, 0], [1, 1]] },
      { id: 'qe-3', label: 'Quadrado 3', color: 'yellow', cells: [[0, 0], [0, 1], [1, 0], [1, 1]] },
      { id: 'col-1', label: 'Coluna 1', color: 'plum', cells: [[0, 0], [1, 0], [2, 0]] },
      { id: 'col-2', label: 'Coluna 2', color: 'aqua', cells: [[0, 0], [1, 0], [2, 0]] },
      { id: 'col-3', label: 'Coluna 3', color: 'blush', cells: [[0, 0], [1, 0], [2, 0]] },
      { id: 'col-4', label: 'Coluna 4', color: 'pink', cells: [[0, 0], [1, 0], [2, 0]] },
      { id: 'col-5', label: 'Coluna 5', color: 'mint', cells: [[0, 0], [1, 0], [2, 0]] },
      { id: 'col-6', label: 'Coluna 6', color: 'yellow', cells: [[0, 0], [1, 0], [2, 0]] }
    ]
  },
  {
    id: 'nove-quadrados', title: 'Nove quadrados', rows: 6, cols: 6,
    pieces: Array.from({ length: 9 }, (_, index) => ({
      id: `nq-${index + 1}`, label: `Quadrado ${index + 1}`,
      color: ['pink', 'mint', 'yellow', 'plum', 'aqua', 'blush'][index % 6],
      cells: [[0, 0], [0, 1], [1, 0], [1, 1]]
    }))
  },
  {
    id: 'mosaico-gigante', title: 'Mosaico gigante', rows: 6, cols: 8,
    pieces: Array.from({ length: 12 }, (_, index) => ({
      id: `mg-${index + 1}`, label: `Bloco ${index + 1}`,
      color: ['pink', 'mint', 'yellow', 'plum', 'aqua', 'blush'][index % 6],
      cells: [[0, 0], [0, 1], [1, 0], [1, 1]]
    }))
  }
]);

export const PUZZLES = deepFreeze({
  tents: TENTS_LEVELS,
  words: WORD_LEVELS,
  acronyms: ACRONYM_LEVELS,
  bridges: BRIDGE_LEVELS,
  futoshiki: FUTOSHIKI_LEVELS,
  kenken: KENKEN_LEVELS,
  river: RIVER_LEVELS,
  einstein: EINSTEIN_LEVELS,
  hanoi: HANOI_LEVELS,
  twentyfour: TWENTYFOUR_LEVELS,
  kakuro: KAKURO_LEVELS,
  pyramid: PYRAMID_LEVELS,
  balance: BALANCE_LEVELS,
  jigsaw: JIGSAW_LEVELS
});
