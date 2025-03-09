document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevents default form submission

    let emailInput = document.getElementById("email").value;
    let formMessage = document.getElementById("formMessage");

    fetch("https://formsubmit.co/ajax/Dylancol2002@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput })
    })
    .then(response => response.json())
    .then(data => {
        formMessage.textContent = "Thank you for subscribing!";
        formMessage.style.color = "green";
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        formMessage.textContent = "Something went wrong. Try again!";
        formMessage.style.color = "red";
    });
});
