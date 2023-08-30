
const Keywords = [
  "construir",
  "engenharia",
  "civil",
  "mecânica",
  "elétrica",
  "química",
  "computação",
  "ambiental",
  "software",
  "biomédica",
  "produção",
  "alimentos",
  "aeronáutica",
  "naval",
  "telecomunicações",
  "materiais",
  "energia",
  "controle",
  "automação",
  "agrícola",
  "petróleo",
  "minas",
  "transportes",
  "nuclear",
  "geotécnica",
  "manufatura",
  "segurança",
  "trabalho",
  "sistemas",
  "telecomunicações",
  "instrumentação",
  "reservatórios",
  "controle",
  "qualidade",
  "projetos."
];

function verificarEngenharia(filteredParts) {
  let count = 0;

  for (const part of filteredParts) {
    if (part) { // Verifica se 'part' não é undefined ou null
      const normalizedPart = part.toLowerCase().replace(/'/g, '');
      for (const keyword of Keywords) {
        if (keyword) { // Verifica se 'keyword' não é undefined ou null
          const normalizedKeyword = keyword.toLowerCase().replace(/'/g, '');
          if (normalizedKeyword === normalizedPart) { // Verifica igualdade exata
            count++;
            break;
          }
        }
      }
    }
  }

  return count;
}

module.exports = verificarEngenharia;
    