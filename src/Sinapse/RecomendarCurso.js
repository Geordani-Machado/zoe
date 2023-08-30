const cursosJson = require('./cursos.json'); // Importando o arquivo JSON

function buscarCincoCursos(area) {
  // Filtra os cursos que correspondem à área de conhecimento fornecida
  const cursosFiltrados = cursosJson.cursos.filter(curso => curso.area_do_conhecimento === area);

  // Pega apenas os cinco primeiros cursos após o filtro
  const cincoCursos = cursosFiltrados.slice(0, 5);

  return cincoCursos;
}

// Exportando a função
module.exports = buscarCincoCursos;

// Exemplo de como importar e usar em outro arquivo
// const buscarCincoCursos = require('./main');
// const area = "Ciências Jurídicas";
// const cincoCursosEncontrados = buscarCincoCursos(area);
// console.log(cincoCursosEncontrados);
