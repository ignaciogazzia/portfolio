const observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry => {
        entry.target.classList.toggle('show-animation', entry.isIntersecting);
    });
});
const hiddenElements = document.querySelectorAll('.card-section');
hiddenElements.forEach(el => observer.observe(el));