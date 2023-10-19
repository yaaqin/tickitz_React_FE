const hamburgerButton = document.getElementById('hamburgerButton');
const icon = hamburgerButton.querySelector('i');

let isHamburgerOpen = false;

hamburgerButton.addEventListener('click', () => {
    isHamburgerOpen = !isHamburgerOpen;

    if (isHamburgerOpen) {
        icon.classList.remove('fa-bars'); // Hapus ikon hamburger
        icon.classList.add('fa-times');    // Tambahkan ikon 'X'
    } else {
        icon.classList.remove('fa-times');  // Hapus ikon 'X'
        icon.classList.add('fa-bars');     // Tambahkan ikon hamburger
    }
});


const menuToggle = document.querySelector('#checkboxForNavMobile');
const nav = document.querySelector('#navbarMobile');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('displayMbl')
});