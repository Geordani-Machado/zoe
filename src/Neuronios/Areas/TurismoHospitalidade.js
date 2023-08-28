
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

      module.exports = verificarTurismoHospitalidade;
    