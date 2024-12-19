function animateCounter(element) {
    const target = parseInt(element.getAttribute("data-target"));
    let count = 0;
    const interval = setInterval(() => {
        count += Math.ceil(target / 100); // زيادة تدريجية
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        element.textContent = count;
    }, 50); // سرعة العد
}

ScrollReveal().reveal('.counter', {
    beforeReveal: function (el) {
        animateCounter(el);
    }
});

sr.reveal(`.top__section_second`);
sr.reveal(`.left__section__second`, { origin: 'left' });
sr.reveal(`.img__section__second`, { origin: 'bottom' });