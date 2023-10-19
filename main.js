document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchNameInput = document.getElementById('searchName');
    const contactInfoDiv = document.getElementById('contactInfo');

    searchButton.addEventListener('click', () => {
        const nameToSearch = searchNameInput.value;
        const apiEndpoint = 'https://crm.rdstation.com/api/v1/contacts';
        const accessToken = '64ba6c4fd43861001ac4b874'; // Substitua pelo seu token de acesso

        // Fazer a chamada à API usando o nome do contato
        fetch(`${apiEndpoint}?name=${nameToSearch}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'accept': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((contactData) => {
            // Verificar se o contato foi encontrado
            if (contactData.length > 0) {
                // Exibir as informações do primeiro contato encontrado
                const contatoEncontrado = contactData[0];
                contactInfoDiv.innerText = `Nome: ${contatoEncontrado.name}, Email: ${contatoEncontrado.email}, Telefone: ${contatoEncontrado.phone}`;
            } else {
                // Se o contato não foi encontrado, exibir uma mensagem
                contactInfoDiv.innerText = 'Contato não encontrado.';
            }
        })
        .catch((error) => console.error('Erro na chamada à API:', error));
    });
});
