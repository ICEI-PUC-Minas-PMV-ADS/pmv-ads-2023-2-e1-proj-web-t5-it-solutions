<script>
        function attemptLogin() {
            var username = document.getElementById('usuario').value;
            var password = document.getElementById('password').value;

            // Simulação de autenticação local
            if (username === 'seu_usuario' && password === 'sua_senha') {
                var userObject = { username: username, authenticated: true };
                localStorage.setItem('currentUser', JSON.stringify(userObject));
                window.location.href = '../home/index.html'; // Redirecionar para a página principal
            } else {
                alert('Falha na autenticação. Verifique suas credenciais.');
            }
        }
    </script>
