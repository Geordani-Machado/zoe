
const Keywords = [
  "antropologia",
  "sociologia",
  "psicologia",
  "filosofia",
  "história",
  "geografia",
  "economia",
  "política",
  "educação",
  "linguística",
  "arqueologia",
  "cultura",
  "sociedade",
  "comportamento",
  "religião",
  "ética",
  "literatura",
  "arte",
  "musicologia",
  "antiguidade",
  "renascimento",
  "iluminismo",
  "pensamento crítico",
  "identidade",
  "gênero",
  "raça",
  "cidadania",
  "globalização",
  "desenvolvimento",
  "direitos humanos",
  "movimentos sociais",
  "democracia",
  "pluralismo",
  "teoria política",
  "humanidades",
  "estudos culturais",
  "ciência política",
  "filosofia política",
  "política internacional",
  "ciências sociais"
];

function verificarCiênciasHumanas(filteredParts) {
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

      module.exports = verificarCiênciasHumanas;
    