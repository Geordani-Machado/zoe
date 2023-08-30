
const Keywords = [
  "saúde",
  "medicina",
  "enfermagem",
  "médico",
  "enfermeiro",
  "hospital",
  "clínica",
  "paciente",
  "diagnóstico",
  "tratamento",
  "prevenção",
  "mental",
  "pública",
  "pesquisa",
  "médica",
  "farmácia",
  "atendimento", 
  "médico",
  "cuidados", 
  "saúde",
  "medicina", "alternativa",
  "tecnologia", "médica",
  "profissional", ,
  "fisioterapia",
  "nutrição",
  "terapia", 
  "ocupacional",
  "radiologia",
  "cirurgia",
  "pediatria",
  "geriatria",
  "obstetrícia",
  "ginecologia",
  "cardiologia",
  "oncologia",
  "psicologia",
  "psiquiatria",
  "odontologia",
  "infantil",
  "materna",
  "comunitária",
  "preventiva",
  "bem-estar"
];

function verificarSaude(filteredParts) {
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

      module.exports = verificarSaude;
    