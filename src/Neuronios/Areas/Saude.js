// Lista de palavras relacionadas ao contexto de saúde
const Keywords = [
    'saúde', 'bem-estar', 'cuidado', 'prevenção', 'medicina', 'doença',
    'tratamento', 'hospital', 'médico', 'nutrição', 'exercício', 'dieta',
    'consultório', 'medicamento', 'vitamina', 'check-up', 'reabilitação', 'vacina',
    'cirurgia', 'enfermagem', 'recuperação', 'ambulância', 'terapia', 'emagrecimento',
    'psicologia', 'psicoterapia', 'fisioterapia', 'saúde mental', 'cardiologia', 'ginecologia'
  ];
  
  // Função para verificar se o array contém palavras de saúde
  function verificar(filteredParts) {
  let count = 0; // Inicialize o contador dentro da função
  
  for (const part of filteredParts) {
    if (Keywords.includes(part.toLowerCase())) {
      count++; // Incrementar o contador quando uma palavra de saúde é encontrada
    }
  }
  
  return count; // Retornar o valor do contador após verificar todas as partes
  }
  
  module.exports = verificar;
  