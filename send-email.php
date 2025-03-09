<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New contact form submission";
    $body = "You have received a new message from the contact form on your website.\n\n".
            "Email: $email\n".
            "Phone: $phone\n".
            "Message: $message";

    // Headers
    $headers = "From: webmaster@yourwebsite.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent!";
    } else {
        echo "There was an error sending your message.";
    }
}
?>
