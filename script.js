document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = 'Message sent successfully!';

        // Reset the form
        document.getElementById('contactForm').reset();

        // Here you can add your code to send form data to your server
        // using Fetch API or XMLHttpRequest
        /*
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        */
    } else {
        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
    }
});