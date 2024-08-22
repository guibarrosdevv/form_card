// Função para alternar a exibição entre frente e verso do cartão
function showCardBack() {
    document.getElementById('cardFront').classList.add('d-none');
    document.getElementById('cardBack').classList.remove('d-none');
}

function showCardFront() {
    document.getElementById('cardFront').classList.remove('d-none');
    document.getElementById('cardBack').classList.add('d-none');
}

// Quando o campo CVV recebe foco, mostrar o verso do cartão
document.getElementById('cvvInput').addEventListener('focus', showCardBack);

// Quando o campo CVV perde foco, mostrar a frente do cartão
document.getElementById('cvvInput').addEventListener('blur', showCardFront);

// Formatação do número do cartão e exibição da logo
document.getElementById('cardNumberInput').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    value = value.replace(/(.{4})/g, '$1 '); // Adiciona um espaço a cada 4 dígitos
    e.target.value = value.trim(); // Remove espaço extra no final
    document.getElementById('cardNumber').textContent = value || '**** **** **** ****';

    // Exibir a logo com base nos primeiros dígitos do número do cartão
    const firstTwoDigits = value.substring(0, 2);
    const logoVisa = document.getElementById('logoVisa');
    const logoMaster = document.getElementById('logoMaster');
    const logoElo = document.getElementById('logoElo');

    // Exibir todas as logos quando nenhum número é inserido
    if (value.length === 0) {
        logoVisa.style.display = 'inline';
        logoMaster.style.display = 'inline';
        logoElo.style.display = 'inline';
    } else {
        // Ocultar todas as logos inicialmente
        logoVisa.style.display = 'none';
        logoMaster.style.display = 'none';
        logoElo.style.display = 'none';

        // Verifica o intervalo dos primeiros dígitos e exibe a logo correspondente
        if (firstTwoDigits >= '40' && firstTwoDigits <= '49') {
            logoVisa.style.display = 'inline';
        } else if (firstTwoDigits >= '50' && firstTwoDigits <= '55') {
            logoMaster.style.display = 'inline';
        } else if (firstTwoDigits >= '60' && firstTwoDigits <= '69') {
            logoElo.style.display = 'inline';
        }
    }
});

// Formatação da validade do cartão
document.getElementById('validityInput').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{1,2})/, '$1 / $2'); // Adiciona a barra após os 2 primeiros dígitos
    }
    e.target.value = value; // Atualiza o valor do input
    document.getElementById('cardValidity').textContent = value || '** / **';
});

// Função para atualizar o nome do titular
document.getElementById('nameInput').addEventListener('input', function () {
    document.getElementById('cardName').textContent = this.value.toUpperCase() || 'Seu nome aqui';
});

// Função para exibir a mensagem de sucesso
document.getElementById('addCard').addEventListener('click', function () {
    // Aqui você pode adicionar mais validações se necessário
    document.getElementById('successMessage').classList.remove('d-none');
});
