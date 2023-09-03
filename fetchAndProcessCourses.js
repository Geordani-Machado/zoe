const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Assegura que a pasta db existe
const dbFolderPath = path.join(__dirname, 'src', 'db');
if (!fs.existsSync(dbFolderPath)) {
  fs.mkdirSync(dbFolderPath, { recursive: true });
}

function slugify(str) {
  return str.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}

async function downloadJSON(url, outputPath) {
  try {
    const response = await axios.get(url);
    const fullPath = path.join(dbFolderPath, outputPath);
    fs.writeFileSync(fullPath, JSON.stringify(response.data, null, 2));
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
    return cursos.map(curso => {
      return {
        curso: curso.curso,
        area_do_conhecimento: curso.area_do_conhecimento || "Unknown",
        banner_do_curso: curso.banner_do_curso,
        frase_de_impacto_curso: curso.frase_de_impacto_curso,
        descricao_curso: curso.descricao_curso,
        link_de_inscricao: curso.link_de_inscricao,
        link_para_pagina: "https://www.onelearning.com.br/curso/" + curso.slug
      };
    });
  } else {
    console.error('Input data is not in the expected format.');
    return [];
  }
}

function separateByArea(cursos) {
  const areas = {};

  cursos.forEach(curso => {
    const areaList = (curso.area_do_conhecimento || "").split(";");
    areaList.forEach(area => {
      if (!area) return;
      if (!areas[area]) {
        areas[area] = [];
      }
      areas[area].push(curso);
    });
  });

  for (const [area, cursos] of Object.entries(areas)) {
    const safeAreaName = slugify(area);
    if (safeAreaName === "") {
      return;
    }
    const outputPath = path.join(dbFolderPath, `${safeAreaName}.json`);
    fs.writeFileSync(outputPath, JSON.stringify({ cursos }, null, 2));
    console.log(`JSON file for area ${area} created successfully.`);
  }
}

async function fetchAndProcessCourses(inputJSONUrl, outputDownloadPath, outputExtractedPath) {
  try {
    await downloadJSON(inputJSONUrl, outputDownloadPath);
    const jsonData = JSON.parse(fs.readFileSync(path.join(dbFolderPath, outputDownloadPath), 'utf-8'));
    const extractedInfo = extractCourseInfo(jsonData);
    separateByArea(extractedInfo);
  } catch (error) {
    console.error('Error:', error);
  }
}

const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

fetchAndProcessCourses(
  'https://www.onelearning.com.br/_nuxt/content/db-2a215ddb.json',
  'inputJson.json',
  'outputJson.json'
);

setInterval(() => {
  fetchAndProcessCourses(
    'https://www.onelearning.com.br/_nuxt/content/db-2a215ddb.json',
    'inputJson.json',
    'outputJson.json'
  );
}, oneDayInMilliseconds);

module.exports = fetchAndProcessCourses;
