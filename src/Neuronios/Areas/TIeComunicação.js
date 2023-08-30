
const Keywords = [
  "linguagem de programação",
  "hardware",
  "software",
  "matemática",
  "sistemas operacionais"
];

function verificarTIeComunicação(filteredParts) {
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

      module.exports = verificarTIeComunicação;
    