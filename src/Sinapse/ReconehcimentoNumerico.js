// Mapeamento de palavras para números
const numberWords = {
    "um": 1,
    "dois": 2,
    "três": 3,
    "quatro": 4,
    "cinco": 5,
    "seis": 6,
    "sete": 7,
    "oito": 8,
    "nove": 9,
    "dez": 10
  };
  
  function tokenize(text) {
    return text.toLowerCase().split(/\s+/).map(word => word.replace(/[.,!?;]$/, ''));
  }
  
  function extractNumber(tokens) {
    let numberRequested = 0;
  
    tokens.forEach((token, index) => {
      // Se a palavra atual é uma representação textual de um número
      if (numberWords[token]) {
        numberRequested = numberWords[token];
      }
      // Se a palavra atual é um número em forma de dígitos
      else if (!isNaN(parseInt(token))) {
        numberRequested = parseInt(token);
      }
    });
  
    return numberRequested;
  }
  
  function getCoursesRequested(text) {
    const tokens = tokenize(text);
    const numberRequested = extractNumber(tokens);
    return numberRequested;
  }
  
  // Exportando a função para uso em outros arquivos
  module.exports = getCoursesRequested;
  
  // Teste o algoritmo (este código deve ir em outro arquivo onde você importa este módulo)
  // const getCoursesRequested = require('./path-to-this-file');
  // const text = "me liste cinco cursos relacionados à área de TI";
  // const numberRequested = getCoursesRequested(text);
  // console.log(`Foi solicitado listar ${numberRequested} cursos.`);
  