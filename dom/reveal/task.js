document.addEventListener('scroll', function() {
    let elements = Array.from(document.querySelectorAll('.reveal'));
    for (let i=0; i < elements.length; i++) {
        let elementPosition = elements[i].getBoundingClientRect().top;
        if (elementPosition <= window.innerHeight && elementPosition >= 0) {
            elements[i].classList.add('reveal_active');
        };
        if (elementPosition < 0 || elementPosition > window.innerHeight) {
            elements[i].classList.remove('reveal_active');
        }
    };
});