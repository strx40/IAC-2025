// Инициализация графиков
document.addEventListener('DOMContentLoaded', function() {
    // График источников данных
    const sourceCtx = document.getElementById('sourceChart').getContext('2d');
    new Chart(sourceCtx, {
        type: 'bar',
        data: {
            labels: ['Twitter', 'Reddit', 'Новости', 'Форумы'],
            datasets: [{
                label: 'Сообщений за сутки',
                data: [12500, 8700, 4300, 2100],
                backgroundColor: [
                    '#3498db',
                    '#e74c3c',
                    '#2ecc71',
                    '#9b59b6'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });

    // График тональности
    const sentimentCtx = document.getElementById('sentimentChart').getContext('2d');
    new Chart(sentimentCtx, {
        type: 'doughnut',
        data: {
            labels: ['Позитивные', 'Нейтральные', 'Негативные'],
            datasets: [{
                data: [45, 35, 20],
                backgroundColor: [
                    '#2ecc71',
                    '#f39c12',
                    '#e74c3c'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'right' }
            }
        }
    });
});