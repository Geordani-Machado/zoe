const fs = require('fs');
const path = require('path');


function importarArquivosDaPasta(pasta) {
  const arquivos = fs.readdirSync(pasta);
  const neuronios = {};

  arquivos.forEach(arquivo => {
    if (arquivo.endsWith('.js')) {
      const nomeNeuronio = path.basename(arquivo, '.js');
      neuronios[nomeNeuronio] = require(path.join(pasta, arquivo));
    }
  });

  return neuronios;
}


