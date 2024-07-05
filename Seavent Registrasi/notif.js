document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const phone = urlParams.get('phone');
    const email = urlParams.get('email');
    const tickets = urlParams.get('tickets');

    const messageElement = document.querySelector('.notification-message');
    messageElement.innerHTML = `Terima kasih, <strong>${name}</strong>!<br> No. Telp: ${phone}<br>Email: ${email}<br>Tickets: ${tickets} <br>Registrasi kamu sudah berhasil, <br> Harap tunggu 1 &times 24 jam, <br> Jika tidak silahkan konfirmasi ke admin 08xxxxxxxxxx.<br>`;
});

function goBack() {
    window.location.href = 'index.html';
}