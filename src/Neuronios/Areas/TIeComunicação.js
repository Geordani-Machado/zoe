
const Keywords = [
  "linguagem de programação",
  "hardware",
  "software",
  "matemática",
  "sistemas operacionais"
];

      function verificarTIeComunicação(filteredParts) {
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

      module.exports = verificarTIeComunicação;
    