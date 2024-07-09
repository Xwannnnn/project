document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const phone = urlParams.get('phone');
    const email = urlParams.get('email');
    const tickets = urlParams.get('tickets');

    const messageElement = document.querySelector('.notification-message');
    messageElement.innerHTML = `Thank you, <strong>${name}</strong>!<br>Your registration is complete.<br>
        Phone: ${phone}<br>Email: ${email}<br>Tickets: ${tickets}`;
});

function goBack() {
    window.location.href = 'index.html';
}