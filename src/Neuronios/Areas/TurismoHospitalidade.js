
      const Keywords = [
  "turismo",
  "hotelaria",
  "viagem",
  "destino turístico",
  "hospitalidade",
  "setor hoteleiro",
  "gastronomia",
  "entretenimento",
  "atendimento ao cliente",
  "planejamento de viagens",
  "ecoturismo",
  "turismo cultural",
  "agência de viagens",
  "hospitalidade de luxo",
  "guia turístico",
  "experiências turísticas",
  "recepcionista",
  "turismo sustentável",
  "turismo de aventura",
  "serviços hoteleiros",
  "hospedagem",
  "entretenimento turístico",
  "atividades recreativas",
  "atendimento personalizado",
  "roteiros turísticos",
  "relações públicas no turismo",
  "cuidado do cliente",
  "turismo gastronômico",
  "gerenciamento de hospedagem",
  "gestão de eventos"
];

      function verificarTurismoHospitalidade(filteredParts) {
        let count = 0;

        for (const part of filteredParts) {
          if (Keywords.includes(part.toLowerCase())) {
            count++;
          }
        }

        return count;
      }

      module.exports = verificarTurismoHospitalidade;
    