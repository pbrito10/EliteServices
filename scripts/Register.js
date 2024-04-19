document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const newUser = {
            username: username,
            password: password,
            role: 'user'
        };

        // Carregar os dados dos usuários do arquivo JSON
        fetch('/scripts/users.json')
            .then(response => response.json())
            .then(users => {
                // Verificar se o usuário já existe
                const existingUser = users.find(user => user.username === username);

                if (existingUser) {
                    alert('Username already exists!');
                    return;
                }

                // Adicionar novo usuário ao array
                users.push(newUser);
                saveUsers(users);
                alert('Registration successful!');

                // Atualizar o arquivo JSON com os novos dados
                return fetch('/scripts/users.json', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(users)
                });
            })
            .then(() => {
                alert('Registration successful!');
                window.location.href = 'login.html';
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
