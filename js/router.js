/**
 * Простой роутер для навигации между страницами
 * + проверка авторизации
 */

// Проверяем авторизацию при загрузке любой страницы (кроме index.html)
if (!window.location.pathname.endsWith('index.html') {
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuth) {
        window.location.href = 'index.html';
    }
}

// Навигационное меню (общее для всех страниц)
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем активный класс к текущей странице
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Логика выхода из системы (добавьте кнопку в navbar при необходимости)
function logout() {
    localStorage.removeItem('isAuthenticated');
    window.location.href = 'index.html';
}