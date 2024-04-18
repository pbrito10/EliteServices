document.addEventListener('DOMContentLoaded', function() {
    // Função para buscar os dados do arquivo JSON e criar a tabela
    function fetchAndCreateTable() {
        fetch('/scripts/data.json') // Substitua pelo caminho correto do seu arquivo JSON
            .then(response => response.json())
            .then(data => {
                createTable(data);
            })
            .catch(error => {
                console.error('Erro ao buscar os dados:', error);
            });
    }

    // Função para criar a tabela
    function createTable(data) {
        const tableContainer = document.getElementById('tableContainer');
        const table = document.createElement('table');
        table.classList.add('table');

        // Cabeçalho da tabela
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        ['Número de Pedido', 'Data', 'Estado', 'Prestador'].forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Corpo da tabela
        const tbody = document.createElement('tbody');
        data.forEach(item => {
            const row = document.createElement('tr');
            ['numeroPedido', 'data', 'estado', 'prestador'].forEach(key => {
                const cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        // Adiciona a tabela ao container
        tableContainer.appendChild(table);
    }

    // Chama a função para buscar os dados e criar a tabela
    fetchAndCreateTable();
});
