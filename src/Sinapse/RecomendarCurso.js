const fs = require('fs'); // Importa o módulo de sistema de arquivos

function buscarCincoCursos(area) {
  let arquivoJsonPath;
  let cursosJson;

  // Determina qual arquivo JSON ler com base na área de conhecimento
  switch(area) {
    case "ArquiteturaeUrbanismoDesign":
      arquivoJsonPath = '../db/arquitetura-e-urbanismo-design.json';
      break;
    // Adicione mais casos aqui para outras áreas
    default:
      return "Área de conhecimento não encontrada"; // ou return null;
  }

  // Lê o arquivo JSON
  const data = fs.readFileSync(arquivoJsonPath, 'utf-8');
  cursosJson = JSON.parse(data);

  // Filtra os cursos que correspondem à área de conhecimento fornecida
  const cursosFiltrados = cursosJson.cursos.filter(curso => curso.area_do_conhecimento === area);

  // Embaralha o array de cursos filtrados
  const cursosEmbaralhados = cursosFiltrados.sort(() => 0.5 - Math.random());

  // Pega apenas os cinco primeiros cursos após o embaralhamento
  const cincoCursos = cursosEmbaralhados.slice(0, 5);

  return cincoCursos;
}

// Exportando a função
module.exports = buscarCincoCursos;

