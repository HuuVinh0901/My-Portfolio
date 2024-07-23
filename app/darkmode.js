// Lưu trữ chế độ hiện tại vào localStorage
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// Nếu đã lưu chế độ trước đó, áp dụng chế độ đó
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Kiểm tra chế độ hiện tại để cập nhật biểu tượng dark/light mode
    if (currentTheme === 'dark') {
        document.getElementById('dark-icon').style.display = 'none'; // Ẩn biểu tượng dark mode
        document.getElementById('light-icon').style.display = 'block'; // Hiển thị biểu tượng light mode
    } else {
        document.getElementById('dark-icon').style.display = 'block'; // Hiển thị biểu tượng dark mode
        document.getElementById('light-icon').style.display = 'none'; // Ẩn biểu tượng light mode
    }
}

// Hàm chuyển đổi giữa light và dark mode
function toggleDarkMode() {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Lưu chế độ mới vào localStorage
    localStorage.setItem('theme', newTheme);

    // Áp dụng chế độ mới cho cả trang
    document.documentElement.setAttribute('data-theme', newTheme);

    // Cập nhật biểu tượng dark/light mode sau khi chuyển đổi
    if (newTheme === 'dark') {
        document.getElementById('dark-icon').style.display = 'none'; // Ẩn biểu tượng dark mode
        document.getElementById('light-icon').style.display = 'block'; // Hiển thị biểu tượng light mode
    } else {
        document.getElementById('dark-icon').style.display = 'block'; // Hiển thị biểu tượng dark mode
        document.getElementById('light-icon').style.display = 'none'; // Ẩn biểu tượng light mode
    }
}