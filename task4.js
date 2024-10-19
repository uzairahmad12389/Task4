// Polyfill for older browsers (included automatically via polyfill.io)
// Add event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh on submit
    alert('Form Submitted');
});

// Modern JavaScript (ES6+ syntax) will be transpiled using Babel for older browsers
const form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    console.log(`Name: ${name}, Message: ${message}`);
    alert('Thank you for contacting us!');
});
