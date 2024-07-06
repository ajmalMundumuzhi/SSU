document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.getElementById('navbar');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});
