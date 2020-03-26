
let sublists = Array.from(document.querySelectorAll('ul.interests_active'));

for (let i = 0; i < sublists.length; i++) {
    let parentInterest = sublists[i].closest('.interest');
    let parentLabel = parentInterest.querySelector('label');
    let parentInterestInput = parentLabel.querySelector('input.interest__check');
    let childInterests = Array.from(sublists[i].querySelectorAll('input.interest__check'));

    parentInterestInput.addEventListener( 'change', () => {
        if (parentInterestInput.checked === true) {
            childInterests.forEach(element => element.checked = true);
        } else if (parentInterestInput.checked === false) {
            childInterests.forEach(element => element.checked = false);
        };
    })
}

