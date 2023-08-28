
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

      module.exports = verificarSaude;
    