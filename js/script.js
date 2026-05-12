document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    
    const changeLanguage = (lang) => {
        const esElements = document.querySelectorAll('.lang-es');
        const enElements = document.querySelectorAll('.lang-en');

        if (lang === 'es') {
            esElements.forEach(el => el.style.display = 'block');
            enElements.forEach(el => el.style.display = 'none');
            btnEs.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            esElements.forEach(el => el.style.display = 'none');
            enElements.forEach(el => el.style.display = 'block');
            btnEn.classList.add('active');
            btnEs.classList.remove('active');
        }
        localStorage.setItem('selectedLang', lang);
    };

    btnEs.addEventListener('click', () => changeLanguage('es'));
    btnEn.addEventListener('click', () => changeLanguage('en'));

    const savedLang = localStorage.getItem('selectedLang') || 'es';
    changeLanguage(savedLang);
});