import Swal from 'sweetalert2';

export const handleSubmit = (event, email, setEmail, message, setMessage) => {
  event.preventDefault();

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Thanks for leaving me a message!',
    showConfirmButton: false,
    timer: 3000
  });

  // Reset các trường
  setEmail('');
  setMessage('');
};