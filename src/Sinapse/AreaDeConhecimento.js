const fs = require('fs');
const path = require('path');

// Função para colorir texto com base na porcentagem
function colorirTexto(porcentagem) {
  if (porcentagem <= 0.5) {
    return `\x1b[31m${porcentagem.toFixed(2)}\x1b[0m`; // Vermelho
  } else if (porcentagem >= 4.5) {
    return `\x1b[32m${porcentagem.toFixed(2)}\x1b[0m`; // Verde
  } else {
    return porcentagem.toFixed(2);
  }
}

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

const neuroniosAreas = importarArquivosDaPasta(path.join(__dirname, '../Neuronios/Areas'));

function verificarAreaDeConhecimento(Parts) {
  console.log("\n -------------- Area de Conhecimento ------------");

  Object.entries(neuroniosAreas).forEach(([nomeNeuronio, modulo]) => {
    if (typeof modulo === 'function') {
      const porcentagem = modulo(Parts);
      const partePreenchida = Math.round(porcentagem * 5); // Número inteiro entre 0 e 5

      // Criar uma barra de progresso usando um loop
      let barraProgresso = '';
      for (let i = 0; i < 5; i++) {
        if (i < partePreenchida) {
          barraProgresso += '=';
        } else {
          barraProgresso += ' ';
        }
      }

      const porcentagemColorida = colorirTexto(porcentagem * 20);
      console.log(`${nomeNeuronio} - [${barraProgresso}] ${porcentagemColorida}%`);
    }
  });
}

module.exports = verificarAreaDeConhecimento;
