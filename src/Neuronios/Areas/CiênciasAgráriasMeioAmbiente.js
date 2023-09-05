
const Keywords = [
  "Ecologia",
  "Meio Ambiente",
  "Agricultura Familiar e Patronal",
  "Andrologia e Ginecologia",
  "Biologia com Ênfase em Ecologia",
  "Ciências Biológicas com Ênfase em Ecologia",
  "Ecologia, Botânica e Zoologia Marinha",
  "Gestão de Segurança, Meio Ambiente e Saúde",
  "Ginecologia e Medicina da Mulher",
  "Ginecologia Endócrina",
  "Ginecologia e Obstetrícia Cirúrgica",
  "Ginecologia Infanto-puberal",
  "Legislação aplicada ao Urbanismo e Meio Ambiente",
  "NR18 - Condições e Meio Ambiente de Trabalho na Indústria da Construção",
  "Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção",
  "Saúde, Segurança e Meio Ambiente",
  "Agricultura",
  "Agroecologia",
  "Agrofloresta",
  "Agroflorestais",
  "Agropecuária",
  "Agrícola",
  "Agrícolas",
  "Alimentar",
  "Ambiental",
  "Animal",
  "Análise",
  "Ar",
  "Biodiversidade",
  "Bioenergia",
  "Biologia",
  "Biomassa",
  "Cadeia",
  "Ciência",
  "Climatologia",
  "Climáticas",
  "Compostagem",
  "Conservação",
  "Controle",
  "Degradadas",
  "Desenvolvimento",
  "Drenagem",
  "Ecologia",
  "Economia",
  "Ecossistemas",
  "Educação",
  "Engenharia",
  "Erosão",
  "Fertilizantes",
  "Fitopatologia",
  "Florestal",
  "Fotossíntese",
  "Genético",
  "Gestão",
  "Grãos",
  "Hidrologia",
  "Hídricos",
  "Impacto",
  "Irrigação",
  "Manejo",
  "Melhoramento",
  "Mudanças",
  "Naturais",
  "Nutrientes",
  "Orgânica",
  "Plantas",
  "Plantio",
  "Poluição",
  "Pragas",
  "Precisão",
  "Produção",
  "Proteção",
  "Reciclagem",
  "Recuperação",
  "Recursos",
  "Remoto",
  "Respiração",
  "Resíduos",
  "Rural",
  "Saneamento",
  "Sensoriamento",
  "Sistema",
  "Sistemas",
  "Solo",
  "Sustentabilidade",
  "Sustentável",
  "Tecnologias",
  "Terra",
  "Toxicologia",
  "Uso",
  "Zootecnia",
  "Água",
  "Áreas"
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
  