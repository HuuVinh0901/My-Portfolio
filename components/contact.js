document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thanks for leaving me a message!",
        showConfirmButton: false,
        timer: 3000
      });
    document.getElementById("emailInput").value = "";
    document.getElementById("textArea").value = "";
});