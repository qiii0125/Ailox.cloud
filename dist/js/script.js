//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');  
    navMenu.classList.toggle('hidden');
});

//navbar fix
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
};


const ItemHeaders = document.querySelectorAll('#tanya');

ItemHeaders.forEach(ItemHeader => {
    ItemHeader.addEventListener('click', event => {
        ItemHeader.classList.toggle('active');
        
        const ItemBody = ItemHeader.nextElementSibling;
        
        if(ItemHeader.classList.contains('active')){
            ItemBody.style.maxHeight = ItemBody.scrollHeight + 'px';
        }else{
            ItemBody.style.maxHeight = 0;
        }
    })
});


