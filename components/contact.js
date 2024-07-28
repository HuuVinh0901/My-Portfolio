document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    // Hiển thị modal
    var modal = document.getElementById("successModal");
    modal.style.display = "block";
    
    // Ẩn modal khi bấm nút đóng
    document.querySelector(".close-button").onclick = function() {
        modal.style.display = "none";
    };
    
    // Ẩn modal khi bấm ra ngoài modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});