const fs = require('fs');
const path = require('path');

const buscarCincoCursos = require('../Sinapse/RecomendarCurso');

function verificarAreaDeConhecimento(Parts) {
  const results = {};
  let cursos = null;  // Inicializa a variável para armazenar os cursos

  // Navega uma pasta acima e entra na pasta desejada
  const areasDir = path.join(__dirname, '..', 'Neuronios', 'Areas');
  const areaFiles = fs.readdirSync(areasDir);

  areaFiles.forEach(file => {
    if (file.endsWith('.js')) {
      const moduleName = path.basename(file, '.js');
      const module = require(path.join(areasDir, file));
      const porcentagem = module(Parts);

      // Como o valor já vem em porcentagem, simplesmente o armazenamos
      results[moduleName] = porcentagem;

      // Verifica se a porcentagem é igual ou superior a 100
      if (porcentagem >= 100) {
        cursos = buscarCincoCursos(moduleName);  // Armazena os cursos retornados
        console.log(cursos);
      }
    }
  });

  // Retorna os resultados e os cursos, se não forem nulos
  return { results, cursos: cursos || 'Nenhum curso encontrado' };
}

module.exports = verificarAreaDeConhecimento;
