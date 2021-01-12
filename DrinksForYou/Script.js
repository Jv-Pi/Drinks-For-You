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

function down2() {
    var second = document.querySelector('.serv-show');
    second.classList.toggle('show1');
    var animate = document.querySelector('.second');
    animate.classList.toggle('rotate');
}

function down() {
    var first = document.querySelector('.feat-show');
    first.classList.toggle('show');
    var animate = document.querySelector('.first');
    animate.classList.toggle('rotate');
}
