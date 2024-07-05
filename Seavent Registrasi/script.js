document.addEventListener('DOMContentLoaded', function() {
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const ticketCount = document.getElementById('ticket-count');
    let count = 1;

    decreaseButton.addEventListener('click', function() {
        if (count > 1) {
            count--;
            ticketCount.textContent = count;
        }
    });

    increaseButton.addEventListener('click', function() {
        count++;
        ticketCount.textContent = count;
    });

    const form = document.getElementById('register-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const tickets = ticketCount.textContent;

        if (name && phone && email) {
            window.location.href = `notification.html?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&tickets=${encodeURIComponent(tickets)}`;
        } else {
            alert('Please fill out all fields.');
        }
    });
});
