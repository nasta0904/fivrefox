// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// App card hover effect enhancement
document.querySelectorAll('.app-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    });
});

// Simple search functionality (can be expanded)
const searchApps = (query) => {
    const apps = document.querySelectorAll('.app-card');
    apps.forEach(app => {
        const appName = app.querySelector('h3').textContent.toLowerCase();
        if (appName.includes(query.toLowerCase())) {
            app.style.display = 'block';
        } else {
            app.style.display = 'none';
        }
    });
};

// Example: Add search functionality if needed
// document.getElementById('search-input').addEventListener('input', (e) => {
//     searchApps(e.target.value);
// });

// Mobile menu toggle (can be added later)
function toggleMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

// Load more apps functionality
let currentPage = 1;
const appsPerPage = 6;

function loadMoreApps() {
    currentPage++;
    // Здесь можно добавить AJAX запрос для загрузки дополнительных приложений
    console.log(`Loading page ${currentPage} with ${appsPerPage} apps`);
}

// Intersection Observer для lazy loading
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Применяем анимацию к элементам при скролле
document.querySelectorAll('.app-card, .category-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Theme switcher (optional)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
