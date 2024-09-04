<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $company = strip_tags(trim($_POST["company"]));
    $message = trim($_POST["message"]);
    $projectType = $_POST["projectType"];
    $budgetRange = $_POST["budgetRange"];
    $source = $_POST["source"];

    $recipient = "admin@vkucode.com";

    $subject = "Nouvel message de contact";

    $email_content = "Name: $name\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Company: $company\n";
    $email_content .= "Message: $message\n\n";
    $email_content .= "Project Type: $projectType\n";
    $email_content .= "Budget Range: $budgetRange\n";
    $email_content .= "How did they find us: $source\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Message envoyé avec succès!";
    } else {
        http_response_code(500);
        echo "Erreur lors de l'envoi du message.";
    }
} else {
    http_response_code(403);
    echo "Cette méthode n'est pas permise.";
}
?>