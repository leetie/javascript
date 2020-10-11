const cells = document.querySelectorAll('.cell');

cells.forEach(element => {
    element.addEventListener('click', () => console.log('clicked ' + element.id))
});
