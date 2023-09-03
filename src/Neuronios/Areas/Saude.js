
const Keywords = [
  "saúde",
  "medicina",
  "enfermagem",
  "médico",
  "enfermeiro",
  "hospital",
  "clínica",
  "paciente",
  "diagnóstico",
  "tratamento",
  "prevenção",
  "mental",
  "pública",
  "pesquisa",
  "médica",
  "farmácia",
  "atendimento", 
  "médico",
  "cuidados", 
  "saúde",
  "medicina", "alternativa",
  "tecnologia", "médica",
  "profissional", ,
  "fisioterapia",
  "nutrição",
  "terapia", 
  "ocupacional",
  "radiologia",
  "cirurgia",
  "pediatria",
  "geriatria",
  "obstetrícia",
  "ginecologia",
  "cardiologia",
  "oncologia",
  "psicologia",
  "psiquiatria",
  "odontologia",
  "infantil",
  "materna",
  "comunitária",
  "preventiva",
  "bem-estar"
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

function analyzeInterest(wordArray) {
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

  return proximityPercentage > 0 ? `${proximityPercentage}` : '0';
}

module.exports = analyzeInterest;
    