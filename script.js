document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value.trim(); // Remove espaços em branco

    // Verifica se o usuário é "Itamar"
    if (username === "Itamar") {
        alert(`Bem-vindo, ${username}!`);
        // Redireciona para outra página ou realiza outras ações
        // window.location.href = 'dashboard.html';
    } else {
        alert('Usuário inválido. Apenas "Usuario cadastrado que pode" pode fazer login.');
    }
});
