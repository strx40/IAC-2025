// Проверка авторизации
function checkAuth() {
    const publicPages = ['/index.html', '/'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (!publicPages.includes(currentPage)) {
        const isAuth = localStorage.getItem('isAuthenticated') === 'true';
        if (!isAuth) {
            window.location.href = 'index.html';
        }
    }
}

// Подсветка активной страницы
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    const links = document.querySelectorAll('.navbar a');
    
    links.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Выход из системы
function logout() {
    localStorage.removeItem('isAuthenticated');
    window.location.href = 'index.html';
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    setActiveLink();
});
