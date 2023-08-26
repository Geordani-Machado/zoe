const express = require('express');
const https = require('https');
const app = express();
const port = 3000
const bodyParser = require('body-parser'); // Importe o body-parser
const fs = require('fs');
app.use(bodyParser.urlencoded({ extended: true })); // Use o body-parser

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
        <h1>Olá, Eu sou a Zoe uma AI</h1>
        <p>Estou pronta para melhor ajudá-lo</p>
        Use a rota abaixo para me vincular à sua aplicação,<br/>
        em caso de dúvidas consulte a documentação ou entre em contato diretamente com a equipe responsável por mim.
        <br/>
        Use a rota <code>/conversation</code>
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
    const keywordList = Keywords.split(',').map(keyword => keyword.trim().replace(/'/g, ''));

    const filePath = `./src/Neuronios/Areas/${cleanName}.js`; // Construct the file path

    // Construct the file content using the provided template and keywordList
    const fileContent = `
      const Keywords = ${JSON.stringify(keywordList, null, 2)};

      function verificar${cleanName}(filteredParts) {
        let count = 0;

        for (const part of filteredParts) {
          if (Keywords.includes(part.toLowerCase())) {
            count++;
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})