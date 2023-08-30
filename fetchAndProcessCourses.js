const fs = require('fs');
const axios = require('axios');

async function downloadJSON(url, outputPath) {
  try {
    const response = await axios.get(url);
    fs.writeFileSync(outputPath, JSON.stringify(response.data, null, 2));
    console.log('JSON downloaded and saved successfully.');
    return response.data;
  } catch (error) {
    console.error('Error downloading JSON:', error);
    throw error;
  }
}

function extractCourseInfo(data) {
  if (data._collections && Array.isArray(data._collections[0]._data)) {
    const cursos = data._collections[0]._data;
    const cursosInfo = cursos.map(curso => {
      return {
        curso: curso.curso,
        area_do_conhecimento: curso.area_do_conhecimento,
        banner_do_curso: curso.banner_do_curso,
        frase_de_impacto_curso: curso.frase_de_impacto_curso,
        descricao_curso: curso.descricao_curso,
        link_de_inscricao: curso.link_de_inscricao
      };
    });
    return cursosInfo;
  } else {
    console.error('Input data is not in the expected format.');
    return [];
  }
}

function createNewJSONFile(data, outputPath) {
  const jsonData = {
    cursos: data
  };
  fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));
  console.log('New JSON file created successfully.');
}

async function fetchAndProcessCourses(inputJSONUrl, outputDownloadPath, outputExtractedPath) {
  try {
    const downloadedData = await downloadJSON(inputJSONUrl, outputDownloadPath);
    const jsonData = JSON.parse(fs.readFileSync(outputDownloadPath, 'utf-8'));
    const extractedInfo = extractCourseInfo(jsonData);
    createNewJSONFile(extractedInfo, outputExtractedPath);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Definir o intervalo para 24 horas em milissegundos
const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

// Iniciar o primeiro processo imediatamente
fetchAndProcessCourses(
  'https://www.onelearning.com.br/_nuxt/content/db-2a215ddb.json',
  'inputJson.json',
  'outputJson.json'
);

// Executar a função a cada 24 horas
setInterval(() => {
  fetchAndProcessCourses(
    'https://www.onelearning.com.br/_nuxt/content/db-2a215ddb.json',
    'inputJson.json',
    'outputJson.json'
  );
}, oneDayInMilliseconds);

// Exportando a função para ser usada em outros módulos
module.exports = fetchAndProcessCourses;
