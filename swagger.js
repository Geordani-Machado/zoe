const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation - Zoe',
        version: '1.0.0',
      },
      tags: [ // Defina tags para cada grupo de rotas
        {
          name: "Conversa AI",
          description: "Operações relacionadas à conversa com a IA Zoe"
        },
        {
          name: 'Edição e Configuração',
          description: 'operações relacionadas à edição de arquivos e palavras chaves para alimentar a Ai e apromorar seus parametros',
        },
      ],
    },
    apis: [path.join(__dirname, './server.js')], // Seus arquivos de rota
  };

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/api', swaggerUi.serve, swaggerUi.setup(specs));
};
