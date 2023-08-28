
const Keywords = [
  "comunicação",
  "mídia",
  "jornalismo",
  "publicidade",
  "marketing",
  "propaganda",
  "relações",
  "públicas",
  "design",
  "arte",
  "música",
  "teatro",
  "cinema",
  "literatura",
  "fotografia",
  "escultura",
  "pintura",
  "dança",
  "performance",
  "televisão",
  "rádio",
  "animação",
  "gráficos",
  "ilustração",
  "moda",
  "comunicação",
  "visual",
  "comunicação",
  "digital",
  "comunicação",
  "estratégica",
  "cultura",
  "expressão",
  "artística",
  "edição",
  "criatividade",
  "design",
  "gráfico",
  "design",
  "interiores",
  "arte",
  "contemporânea",
  "digital",
  "artes",
  "cênicas",
  "artes",
  "visuais",
  "comunicação",
  "integrada",
  "performance",
  "artística"
];

function verificarComunicacaoeArtes(filteredParts) {
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

module.exports = verificarComunicacaoeArtes;
    