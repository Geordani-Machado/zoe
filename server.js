const express = require('express');
const cors = require('cors');
const https = require('https');
const app = express();
const port = 3000
const bodyParser = require('body-parser'); // Importe o body-parser
const fs = require('fs');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true })); // Use o body-parser

app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://127.0.0.1:5173',  // substitua pela origem do seu cliente
  credentials: true  // permite cookies
};

app.use(cors(corsOptions));

//const neuroniosAreas = require('./src/Neuronios/Areas'); // Provide the correct path to your Areas module
const verificarAreaDeConhecimento = require('./src/Sinapse/AreaDeConhecimento');


// Lista de palavras de ligação para remover
const stopWords = [
  '\n' ,',', '.', 'a', 'o', 'e', 'é', 'em', 'de', 'do', 'da', 'dos', 'das', 'para', 'com', 'por', 'sem',
  'sob', 'sobre', 'entre', 'ao', 'aos', 'à', 'às', 'mas', 'ou', 'na', 'no', 'nas', 'nos',
  'porque', 'quando', 'que', 'se', 'um', 'uma', 'uns', 'umas', 'qual', 'quais', 'como',
  'nem', 'cada', 'toda', 'todas', 'todo', 'todos', 'qualquer', 'tanto', 'tanta', 'tantos',
  'tantas', 'assim', 'então', 'porém', 'senão', 'pois', 'ora', 'não', 'mesmo', 'mesma',
  'mesmos', 'mesmas', 'ser', 'estar', 'ter', 'haver', 'ficar', 'ir', 'vir', 'dar', 'poder',
  'dever', 'saber', 'querer', 'fazer', 'dizer', 'ver', 'ouvir', 'vai', 'faz', 'está', 'vem',
  'diz', 'ver', 'ouvir', 'vez', 'vezes', 'fui', 'foi', 'fomos', 'foram', 'sou', 'é', 'somos',
  'são', 'era', 'éramos', 'eram', 'serei', 'será', 'seremos', 'serão', 'seria', 'seríamos',
  'seriam', 'tenho', 'tem', 'temos', 'têm', 'tinha', 'tínhamos', 'tinham', 'tive', 'teve',
  'tivemos', 'tiveram', 'terei', 'terá', 'teremos', 'terão', 'teria', 'teríamos', 'teriam'
];

/**
 * @swagger
 * /api/conversation:
 *   post:
 *     summary: Realiza uma conversa com a IA Zoe
 *     description: Recebe um texto, remove palavras de ligação e realiza uma verificação de área de conhecimento.
 *     tags: ['Conversa AI']
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *             required:
 *               - text
 *     responses:
 *       200:
 *         description: Resultados da verificação de área de conhecimento.
 *       400:
 *         description: Nenhum texto fornecido na solicitação.
 */
// Route to handle the POST request
app.post('/api/conversation', (req, res) => {
  const text = req.body.text;

  if (text) {
    const parts = text.split(' ');
    const filteredParts = parts.filter(part => !stopWords.includes(part.toLowerCase()));
    const result = verificarAreaDeConhecimento(filteredParts);

    console.log("----------------------------------------------------------------------------\n\n")
    console.log(`Pergunta com ${filteredParts.length} tokens após remover palavras de ligação`);
    console.log('Palavras restantes:', filteredParts.join(', '));
    console.log(JSON.stringify(result, null, 2));


    res.status(200).send(result);
  } else {
    res.status(400).send('No text provided.');
  }
});

/**
 * @swagger
 * /api/stopWords:
 *   get:
 *     summary: Listar todas as Stop Words
 *     tags: ['Stop Words']
 *     responses:
 *       200:
 *         description: Lista de todas as Stop Words.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
app.get('/api/stopWords', (req, res) => {
  res.json(stopWords);
});

/**
 * @swagger
 * /api/stopWords:
 *   post:
 *     summary: Adicionar uma nova Stop Word
 *     tags: ['Stop Words']
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               word:
 *                 type: string
 *             required:
 *               - word
 *     responses:
 *       200:
 *         description: Nova Stop Word adicionada com sucesso.
 */
app.post('/api/stopWords', (req, res) => {
  const { word } = req.body;
  stopWords.push(word);
  res.json({ message: 'Palavra adicionada', stopWords });
});

/**
 * @swagger
 * /api/stopWords/{word}:
 *   put:
 *     summary: Atualiza uma Stop Word específica
 *     tags: ['Stop Words']
 *     parameters:
 *       - name: word
 *         in: path
 *         required: true
 *         description: A Stop Word para atualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newWord:
 *                 type: string
 *             required:
 *               - newWord
 *     responses:
 *       200:
 *         description: Stop Word atualizada com sucesso.
 */
app.put('/api/stopWords', (req, res) => {
  const { oldWord, newWord } = req.body;
  const index = stopWords.indexOf(oldWord);
  if (index !== -1) {
    stopWords[index] = newWord;
    res.json({ message: 'Palavra atualizada', stopWords });
  } else {
    res.status(404).json({ message: 'Palavra não encontrada' });
  }
});

/**
 * @swagger
 * /api/stopWords/{word}:
 *   delete:
 *     summary: Remove uma Stop Word específica
 *     tags: ['Stop Words']
 *     parameters:
 *       - name: word
 *         in: path
 *         required: true
 *         description: A Stop Word para remover
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stop Word removida com sucesso.
 */
app.delete('/api/stopWords', (req, res) => {
  const { word } = req.body;
  const index = stopWords.indexOf(word);
  if (index !== -1) {
    stopWords.splice(index, 1);
    res.json({ message: 'Palavra removida', stopWords });
  } else {
    res.status(404).json({ message: 'Palavra não encontrada' });
  }
});

/**
 * @swagger
 * /api/createFile:
 *   post:
 *     summary: Cria um novo arquivo de área de conhecimento
 *     description: Cria um novo arquivo de área de conhecimento com base no nome e nas palavras-chave fornecidas.
 *     tags: ['Edição e Configuração']
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               Keywords:
 *                 type: string
 *             required:
 *               - nome
 *               - Keywords
 *     responses:
 *       200:
 *         description: Arquivo criado com sucesso.
 *       400:
 *         description: Parâmetros inválidos na solicitação.
 *       500:
 *         description: Erro ao criar o arquivo.
 */
app.post('/api/createFile', (req, res) => {
  const { nome, Keywords } = req.body;

  if (nome && Keywords) {
    const cleanName = nome.replace(/[\s&]/gi, ''); // Remove spaces, 'e', 'a', '&'
    const keywordList = Keywords.split(',').map(keyword => keyword.trim().toLowerCase().replace(/'/g, ''));

    const filePath = `./src/Neuronios/Areas/${cleanName}.js`; // Construct the file path

    const formattedKeywords = JSON.stringify(keywordList, null, 2);

    // Substituído pelo novo conteúdo de arquivo
    const fileContent = `
    const Keywords = ${formattedKeywords};

      function tokenize(text) {
        return text.toLowerCase().split(/\\s+/).map(word => word.replace(/[.,!?;]/, ''));
      }

      function wordCounts(tokens) {
        const counts = {};
        for (const token of tokens) {
          counts[token] = (counts[token] || 0) + 1;
        }
        return counts;
      }

      function keywordProximity(tokens, keywords) {
        const proximity = {};
        
        keywords.forEach(keyword => {
          proximity[keyword] = {};
          tokens.forEach((token, index) => {
            if (keyword === token) {
              for (let offset = -3; offset <= 3; offset++) {
                const neighbor = tokens[index + offset];
                if (neighbor && neighbor !== keyword) {
                  proximity[keyword][neighbor] = (proximity[keyword][neighbor] || 0) + 1;
                }
              }
            }
          });
        });

        return proximity;
      }

      function analyzeInterest(jsonInput) {
        // Verifica se jsonInput possui uma propriedade text
        if (!jsonInput || !jsonInput.text || typeof jsonInput.text !== "string") {
          console.error("Entrada inválida. Um objeto JSON com uma propriedade 'text' é esperado.");
          return '0.00%';
        }
      
        const text = jsonInput.text;
        const tokens = tokenize(text);
        const counts = wordCounts(tokens);
      
        let healthScore = 0;
        const proximities = keywordProximity(tokens, Keywords);
      
        Keywords.forEach(keyword => {
          healthScore += (counts[keyword] || 0);
          for (const score of Object.values(proximities[keyword] || {})) {
            healthScore += score;
          }
        });
      
        const proximityPercentage = (healthScore / tokens.length) * 100;
      
        return proximityPercentage > 0 ? \`${proximityPercentage.toFixed(2)}%\` : '0.00%';
      }

      module.exports = analyzeInterest;
    `;

    // Write the content to the new file
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        console.error('Error creating the file:', err);
        res.status(500).send('Error creating the file');
      } else {
        console.log('File created successfully:', filePath);
        res.status(200).send('File created successfully');
      }
    });
  } else {
    res.status(400).send('Invalid parameters');
  }
});

/**
 * @swagger
 * /api/getKeywords/{area}:
 *   get:
 *     summary: Retorna as palavras-chave associadas a um módulo de área de conhecimento específico
 *     description: Retorna um JSON contendo as palavras-chave associadas a um módulo de área de conhecimento específico.
 *     tags: ['Edição e Configuração']
 *     parameters:
 *       - in: path
 *         name: area
 *         required: true
 *         description: Nome da área de conhecimento
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: JSON com as palavras-chave do módulo de área de conhecimento.
 *       404:
 *         description: Área de conhecimento não encontrada.
 */
app.get('/api/getKeywords/:area', (req, res) => {
  const area = req.params.area;
  const filePath = path.join(__dirname, 'src', 'Neuronios', 'Areas', `${area}.js`);

  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const keywords = extractKeywords(content);

    res.json({ message: `Keywords for module ${area}`, keywords: keywords });
  } else {
    res.status(404).json({ message: 'Area not found' });
  }
});

/**
 * @swagger
 * /api/listarAreas:
 *   get:
 *     summary: Lista as áreas de conhecimento disponíveis
 *     description: Retorna um JSON contendo a lista de áreas de conhecimento disponíveis.
 *     tags: ['Edição e Configuração']
 *     responses:
 *       200:
 *         description: JSON com a lista de áreas de conhecimento.
 */
app.get('/api/listarAreas', (req, res) => {
  const diretorioAreas = path.join(__dirname, 'src', 'Neuronios', 'Areas');
  const arquivosAreas = fs.readdirSync(diretorioAreas).filter(arquivo => arquivo.endsWith('.js'));
  const areas = arquivosAreas.map(arquivo => path.basename(arquivo, '.js'));

  res.json({ mensagem: 'Lista de áreas disponíveis', areas: areas });
});

/**
 * @swagger
 * /api/updateKeywords/{area}:
 *   put:
 *     summary: Atualiza as palavras-chave de um módulo de área de conhecimento específico
 *     description: Atualiza as palavras-chave de um módulo de área de conhecimento específico com base nos dados fornecidos.
 *     tags: ['Edição e Configuração']
 *     parameters:
 *       - in: path
 *         name: area
 *         required: true
 *         description: Nome da área de conhecimento
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               keywords:
 *                 type: array
 *                 items:
 *                   type: string
 *             required:
 *               - keywords
 *     responses:
 *       200:
 *         description: Palavras-chave atualizadas com sucesso.
 *       404:
 *         description: Área de conhecimento não encontrada.
 */
app.put('/api/updateKeywords/:area', (req, res) => {
  const area = req.params.area;
  const keywords = req.body.keywords;

  const filePath = path.join(__dirname, 'src', 'Neuronios', 'Areas', `${area}.js`);

  if (fs.existsSync(filePath)) {
    updateKeywordsInFile(filePath, keywords);
    res.json({ message: `Keywords for module ${area} updated successfully!` });
  } else {
    res.status(404).json({ message: 'Area not found' });
  }
});


function updateKeywordsInFile(filePath, keywords) {
  let content = fs.readFileSync(filePath, 'utf-8');

  const startTag = 'const Keywords = [';
  const startIndex = content.indexOf(startTag);

  if (startIndex !== -1) {
      const endIndex = content.indexOf('];', startIndex);
      const existingKeywords = content.substring(startIndex + startTag.length, endIndex);

      const updatedKeywords = JSON.stringify(keywords, null, 4).replace(/"/g, '\\"');

      content = content.replace(existingKeywords, updatedKeywords);
      fs.writeFileSync(filePath, content);
  }
}

function extractKeywords(content) {
  const keywordRegex = /const\s+Keywords\s*=\s*\[([\s\S]*?)\]/;
  const match = content.match(keywordRegex);

  if (match) {
    const keywordsContent = match[1];
    const keywordList = keywordsContent.split(',').map(keyword => keyword.trim().replace(/['"]/g, ''));

    return keywordList;
  }

  return [];
}

//Inicializando o Swagger
require('./swagger')(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//const fetchAndProcessCourses = require('./fetchAndProcessCourses.js');  // Substitua pelo nome do arquivo que contém a função



