let tabs = Array.from(document.querySelectorAll('.tab'));
let tabContents = Array.from(document.querySelectorAll('.tab__content'));

for (let i=0; i < tabs.length; i++) {
    tabs[i].addEventListener( 'click', function() {
        tabs.forEach(item => item.className = 'tab');
        tabs[i].className = 'tab tab_active';
        tabContents.forEach(item => item.className = 'tab__content');
        tabContents[i].className = 'tab__content tab__content_active';
    });
}