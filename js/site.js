document.addEventListener('click', (e) => {
    const el = e.target.closest('.obf-email');
    if (!el) return;
    e.preventDefault();
    const email = el.dataset.u + '@' + el.dataset.d;
    if (el.classList.contains('obf-email-inline')) {
        el.outerHTML = `<a href="mailto:${email}">${email}</a>`;
    } else {
        el.outerHTML = `<a href="mailto:${email}" class="social-link">${email}</a>`;
    }
});

const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        siteNav.classList.toggle('nav-open');
    });

    siteNav.querySelectorAll('#nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
            siteNav.classList.remove('nav-open');
        });
    });
}

