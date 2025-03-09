document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    fetch("https://formspree.io/f/xkgjwekv", { // Replace with your Formspree endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, phone: phone, message: message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("form-message").textContent = "Thank you! We will contact you soon.";
        document.getElementById("form-message").style.color = "green";
        document.getElementById("contactForm").reset(); // Clear form
    })
    .catch(error => {
        document.getElementById("form-message").textContent = "Oops! Something went wrong.";
        document.getElementById("form-message").style.color = "red";
    });
});
