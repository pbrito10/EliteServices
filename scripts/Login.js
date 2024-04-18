document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Carregar os dados dos usuários do arquivo JSON
        fetch('/scripts/users.json')
            .then(response => response.json())
            .then(users => {
                const user = users.find(user => user.username === username && user.password === password);

                if (user) {
                    
                        window.location.href = 'user-dashboard.html';
                    }
                 else {
                    alert('Nome de usuário ou senha incorretos!');
                }
            })
            .catch(error => {
                console.error('Erro ao carregar os usuários:', error);
            });
    });
});



