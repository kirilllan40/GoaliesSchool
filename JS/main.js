// -------burger
(function() {
    const burger = document.querySelector('.burger-icon');
    const body = document.body;

    function openMenu() {
        body.classList.add('body--opened-menu');
    }

    function closeMenu() {
        body.classList.remove('body--opened-menu');
    }

    document.addEventListener('click', function(e) {
        if (e.target.closest('.burger-icon')) {
            e.preventDefault();
            if (body.classList.contains('body--opened-menu')) {
                closeMenu();
            } else {
                openMenu();
            }
            return;
        }

        if (e.target.closest('.list__item-link') && body.classList.contains('body--opened-menu')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && body.classList.contains('body--opened-menu')) {
            closeMenu();
        }
    });
})();

// -----------accordion----

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.title__list-item');
    
    items.forEach(item => {
        const header = item.querySelector('.accordion__header');
        header.addEventListener('click', () => {
            // Закрываем все другие открытые пункты
            items.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Переключаем текущий
            item.classList.toggle('active');
        });
    });
});