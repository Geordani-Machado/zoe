
const Keywords = [
  "planta baixa",
  "fachada",
  "urbanismo",
  "zonificação",
  "paisagismo",
  "estrutura",
  "estética",
  "sustentabilidade",
  "público",
  "infraestrutura",
  "revitalização",
  "restauração",
  "modernismo",
  "esboço",
  "cad",
  "retrofit",
  "concreto",
  "viga",
  "pilar",
  "engenharia",
  "planejamento",
  "obras",
  "simetria",
  "asimetria",
  "ergonomia",
  "tipografia",
  "layout",
  "cores",
  "ilustração",
  "prototipagem",
  "experience",
  "ux",
  "user",
  "interface",
  "ui",
  "grid",
  "vetor",
  "photoshop",
  "branding",
  "mockup",
  "wireframe",
  "3d modelagem",
  "minimalismo",
  "responsivo",
  "portfólio",
  "mídia",
  "empacotamento",
  "logotipo",
  "fontes",
  "pixel",
  "textura",
  "sketch",
  "escala",
  "estampa"
];


function wordCounts(tokens) {
  const counts = {};
  for (const token of tokens) {
    counts[token.toLowerCase()] = (counts[token.toLowerCase()] || 0) + 1;
  }
  return counts;
}

function keywordProximity(tokens, keywords) {
  const proximity = {};
  tokens = tokens.map(token => token.toLowerCase()); // Converte todos os tokens para minúsculas
  
  keywords.forEach(keyword => {
    proximity[keyword] = {};
    tokens.forEach((token, index) => {
      if (keyword === token) {
        for (let offset = -3; offset <= 3; offset++) {
          const neighbor = tokens[index + offset];
          if (neighbor && neighbor !== keyword) {
            proximity[keyword][neighbor] = (proximity[keyword][neighbor] || 0) + 1;
          }
        }
      }
    });
  });

  return proximity;
}

function analyzeHealthInterest(wordArray) {
  const tokens = wordArray; // assume que a entrada é um array de palavras
  const counts = wordCounts(tokens);

  let healthScore = 0;
  const proximities = keywordProximity(tokens, Keywords);

  Keywords.forEach(keyword => {
    healthScore += (counts[keyword] || 0);
    
    for (const score of Object.values(proximities[keyword] || {})) {
      healthScore += score;
    }
  });

  const proximityPercentage = (healthScore / tokens.length) * 100;

  return proximityPercentage > 0 ? `${proximityPercentage.toFixed(2)}%` : '0.00%';
}

module.exports = analyzeHealthInterest;

