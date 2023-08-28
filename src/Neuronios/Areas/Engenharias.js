
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
    const normalizedPart = part.toLowerCase().replace(/'/g, '');
    for (const keyword of Keywords) {
      const normalizedKeyword = keyword.toLowerCase().replace(/'/g, ''); // Remove the '.join("")' part
      if (normalizedKeyword.includes(normalizedPart)) {
        count++;
        break;
      }
    }
  }

  return count;
}

module.exports = verificarEngenharia;
    