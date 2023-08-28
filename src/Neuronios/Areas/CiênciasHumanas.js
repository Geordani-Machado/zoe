
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

      module.exports = verificarCiênciasHumanas;
    