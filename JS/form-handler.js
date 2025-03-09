// Get the form element
const form = document.querySelector('form');

// Get the feedback message div
const formMessage = document.getElementById('form-message');

// Listen for the form submission event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Disable the submit button to prevent multiple submissions
    const submitButton = form.querySelector('button');
    submitButton.disabled = true;
    submitButton.innerText = 'Sending...';

    // Create a FormData object to collect the form data
    const formData = new FormData(form);

    // Send the data to Getform
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // If the form is successfully submitted, show a success message
            formMessage.innerHTML = '<p>Thank you! Your message has been sent.</p>';
            form.reset(); // Clear the form
        } else {
            // If there was an error, show an error message
            formMessage.innerHTML = '<p>Oops! Something went wrong. Please try again.</p>';
        }
        submitButton.disabled = false;
        submitButton.innerText = 'Send';
    })
    .catch(error => {
        // If there’s a network error, show an error message
        formMessage.innerHTML = '<p>Oops! Something went wrong. Please try again.</p>';
        submitButton.disabled = false;
        submitButton.innerText = 'Send';
    });
});
