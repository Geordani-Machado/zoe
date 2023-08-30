
const Keywords = [
  "turismo",
  "hospitalidade",
  "hotelaria",
  "agência", "de", "viagens",
  "destino", "turístico",
  "ecoturismo",
  "turismo", "cultural",
  "turismo", "de", "aventura",
  "atendimento",  
  "cliente",
  "gastronomia",
  "eventos",
  "guia", "turístico",
  "resorts",
  "hospedagem",
  "gestão", "hoteleira",
  "turismo", "sustentável",
  "marketing", "turístico",
  "parques", "temáticos",
  "viagens", "corporativas",
  "entretenimento", "turístico",
  "animação", "turística",
  "gestão","eventos",
  "turismo", "luxo",
  "operadores", "turísticos",
  "turismo", "rural",
  "serviços", "alimentação",
  "gerenciamento", "restaurantes",
  "patrimônio", "cultural",
  "gestão", "destinos",
  "turismo", "saúde", "bem-estar"
];

function verificarTurismoHospitalidade(filteredParts) {
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

      module.exports = verificarTurismoHospitalidade;
    