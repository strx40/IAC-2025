document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Простая проверка (в реальном проекте - запрос к серверу)
    if (username === 'admin' && password === '12345') {
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = 'details.html';
    } else {
        alert('Неверный логин или пароль!');
    }
});

// Проверка авторизации на других страницах
if (window.location.pathname !== '/index.html' && !localStorage.getItem('isAuthenticated')) {
    window.location.href = 'index.html';
}
