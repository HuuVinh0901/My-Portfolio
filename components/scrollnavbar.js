let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Cuộn xuống
        navbar.style.transform = "translateY(-100%)"; // Ẩn navbar
    } else {
        // Cuộn lên
        navbar.style.transform = "translateY(0)";
        navbar.style.backgroundColor = "black"; // Hiển thị navbar
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Đảm bảo không âm
});