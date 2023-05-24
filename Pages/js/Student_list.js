document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="search"]');
    const tableBody = document.querySelector('#table_design tbody');

    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        const rows = tableBody.querySelectorAll('tr');

        rows.forEach(row => {
            const id = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
            if (id.includes(searchValue)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});