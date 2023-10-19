const fetch = require('node-fetch'); // Se estiver usando Node.js

// Passo 1: Obter o token de acesso
const authUrl = 'https://api.rd.services/auth/token';
const clientId = 'your_client_id';
const clientSecret = 'your_client_secret';
const authData = { client_id: clientId, client_secret: clientSecret };

fetch(authUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(authData),
})
  .then((response) => response.json())
  .then((data) => {
    const accessToken = data.access_token;
    // Passo 2: Fazer uma chamada à API usando o token de acesso
    const apiEndpoint = 'https://crm.rdstation.com/api/v1/contacts';
    fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'accept': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((contactData) => {
        console.log(contactData);
        // Aqui você pode manipular os dados dos contatos e exibi-los na página
      })
      .catch((error) => console.error('Erro na chamada à API:', error));
  })
  .catch((error) => console.error('Erro na obtenção do token de acesso:', error));
