const express = require('express');
const https = require('https');
const app = express();
const port = 3000
const bodyParser = require('body-parser'); // Importe o body-parser
const fs = require('fs');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true })); // Use o body-parser

app.use(bodyParser.json());

const verificarAreaDeConhecimento = require('./src/Sinapse/AreaDeConhecimento');
//const verificarODS = require('./src/Sinapse/Ods')

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

// Rota de exemplo
app.get('/api', (req, res) => {
  const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Zoe</title>
      <style>
        /* Estilos para centralizar o conteúdo */
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
      </style>
    </head>
    <body>
      <div>
        <h1>Olá, Eu sou a Zoe uma IA</h1>
        <p>Estou pronta para melhor ajudá-lo</p>
        Use a rota abaixo para me vincular à sua aplicação,<br/>
        em caso de dúvidas consulte a documentação ou entre em contato diretamente com a equipe responsável por mim.
        <br/>
        Use as rotas:
         <code>/conversation</code>
        <br/>
        Através dessa rota, você pode se comunicar comigo.<br/>
        No momento, eu só consigo aceitar texto, mas posso te responder em texto, imagem e link.
      </div>
    </body>
  </html>
  `;
  res.send(htmlContent);
  res.status(200)
});

app.post('/api/conversation', (req , res) =>{
  const text = req.body.text; // Pega o texto enviado no formulário 
  if (text) {
    const parts = text.split(' ')
    console.log(parts);
    res.sendStatus(200)
     // Filtrar as partes para remover as palavras de ligação
     const filteredParts = parts.filter(part => !stopWords.includes(part.toLowerCase()));
     const wordCount = filteredParts.length; // Contar o número de palavras
     console.log(`Pergunta com ${wordCount} tokens após remover palavras de ligação`);
     console.log('Palavras restantes:', filteredParts.join(', '));

     verificarAreaDeConhecimento(filteredParts);
     //verificarODS(filteredParts);
  }
});

app.post('/api/createFile', (req, res) => {
  const { nome, Keywords } = req.body;

  if (nome && Keywords) {
    const cleanName = nome.replace(/[\s&]/gi, ''); // Remove spaces, 'e', 'a', '&'
    const keywordList = Keywords.split(',').map(keyword => keyword.trim().toLowerCase().replace(/'/g, ''));

    const filePath = `./src/Neuronios/Areas/${cleanName}.js`; // Construct the file path

    const formattedKeywords = JSON.stringify(keywordList, null, 2);

    const fileContent = `
      const Keywords = ${formattedKeywords};

      function verificar${cleanName}(filteredParts) {
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

      module.exports = verificar${cleanName};
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

app.get('/api/getKeywords', (req, res) => {
  const folderPath = path.join(__dirname, 'src', 'Neuronios', 'Areas');
  const keywordsMap = {};

  fs.readdirSync(folderPath).forEach(file => {
      if (file.endsWith('.js')) {
          const filePath = path.join(folderPath, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const keywords = extractKeywords(content);

          if (keywords.length > 0) {
              const moduleName = path.basename(file, '.js');
              keywordsMap[moduleName] = keywords;
          }
      }
  });

  const jsonFilePath = path.join(__dirname, 'Keywords.json');
  fs.writeFileSync(jsonFilePath, JSON.stringify(keywordsMap, null, 2));

  res.json({ message: 'Keywords file generated successfully!', keywords: keywordsMap });
});

function extractKeywords(content) {
  const keywordRegex = /const\s+Keywords\s*=\s*\[(.*?)\]/;
  const match = content.match(keywordRegex);

  if (match) {
      const keywordsContent = match[1];
      const keywordList = keywordsContent.split(',');

      return keywordList.map(keyword => keyword.trim().replace(/"/g, ''));
  }

  return [];
}

// rota post para alterar os keyworkd

app.post('/api/updateKeywords', (req, res) => {
  const keywordsData = req.body.keywords;

  for (const module in keywordsData) {
      if (keywordsData.hasOwnProperty(module)) {
          const filePath = path.join(__dirname, 'src', 'Neuronios', 'Areas', `${module}.js`);
          const keywords = keywordsData[module];

          updateKeywordsInFile(filePath, keywords);
      }
  }

  res.json({ message: 'Keywords updated successfully!' });
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
