document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;

    if (username.trim() !== "") {
        alert(`Bem-vindo, ${username}!`);
        // Aqui você pode redirecionar o usuário para outra página ou realizar outras ações
        // window.location.href = 'dashboard.html';
    } else {
        alert('Por favor, insira um nome de usuário.');
    }
});