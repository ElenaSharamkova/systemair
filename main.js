 const burgerBtn = document.getElementById('burgerBtn');
    const nav = document.getElementById('mainNav');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('open');
        nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('open');
            nav.classList.remove('open');
        });
    });
