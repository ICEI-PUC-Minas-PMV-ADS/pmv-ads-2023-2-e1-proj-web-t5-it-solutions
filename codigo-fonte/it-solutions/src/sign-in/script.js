<script>
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

    // Obter valores dos campos de entrada
    var username = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    // Criar objeto com os dados do formulário
    var formData = {
        username: username,
    password: password
    };

    // Enviar uma solicitação POST para o servidor (substitua 'url_do_seu_servidor' pela URL real)
    fetch('url_do_seu_servidor', {
        method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        },
    body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Processar a resposta do servidor
        if (data.authenticated) {
        console.log('Autenticação bem-sucedida!');
            // Redirecionar para a página principal ou fazer outras ações necessárias
        } else {
        console.log('Falha na autenticação. Verifique suas credenciais.');
            // Exibir uma mensagem de erro ao usuário ou tomar outras medidas necessárias
        }
    })
    .catch(error => {
        console.error('Erro na solicitação:', error);
    });

</script>