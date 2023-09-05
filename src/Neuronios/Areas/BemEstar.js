
const Keywords = [
  "Esportes coletivos",
  "Esportes individuais",
  "Lazer",
  "Bem-Estar",
  "Bem-estar",
  "Turismo",
  "Bioética e Bem-estar Humano e Animal",
  "Cardiologia do Esporte",
  "Esportes de Alto Rendimento",
  "Gestão Cultural Desportiva e de Lazer",
  "Gestão de Projetos em Desporto e Lazer",
  "Gestão de Qualidade Desportiva e de Lazer",
  "Gestão Desportiva e de Lazer",
  "Imagem Pessoal, Bem-estar e Qualidade de Vida",
  "Manutenção de Espaços e Equipamentos Desportivos e de Lazer",
  "Medicina do Esporte",
  "Nutrição Animal e Promoção do Bem-estar Animal",
  "Organização e Gestão de Eventos Culturais, Desportivos e de Lazer",
  "Planejamento de Programas Desportivos e de Lazer",
  "Processos Psicológicos Fundamentais no Esporte",
  "Programas de Lazer, Entretenimento e Recreação",
  "Projetos Voltados para o Bem-Estar",
  "Promoção do Bem-estar Animal",
  "Psicologia do Esporte",
  "Saúde e Bem-Estar do Trabalhador",
  "Técnicas de Coaching e Motivação no Esporte",
  "Técnicas e Práticas de Lazer e Recreação Juvenil",
  "Terapias"
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
    
      return proximityPercentage > 0 ? proximityPercentage : '0';
    }
    
    module.exports = analyzeInterest;
  