function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var banner = document.querySelector('.banner');
    menuToggle.classList.toggle('active');
    banner.classList.toggle('active');
};

window.onscroll = function() {
    scroll();
};

function scroll() {
    let btn = document.getElementById("btntop");
    if (document.documentElement.scrollTop > 50) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
};

function up() {
    document.documentElement.scrollTop = 0;

}
