console.log("loads script");

function validate() {
    var nameCheck = /^$/;
    var emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var messageCheck = /^$/;

    let nameInput = document.getElementById("name_input").value;
    let emailInput = document.getElementById("email_input").value;
    let messageInput = document.getElementById("message_input").value;

    if (nameInput.match(nameCheck)) {
        document.getElementById("error_name").setAttribute("style", "display: block");
    } else {
        document.getElementById("error_name").setAttribute("style", "display: none");
    }

    if (emailInput.match(emailCheck)) {
        document.getElementById("error_email").setAttribute("style", "display: none");
    } else {
        document.getElementById("error_email").setAttribute("style", "display: block");
    }

    if (messageInput.match(messageCheck)) {
        document.getElementById("error_message").setAttribute("style", "display: block");
    } else {
        document.getElementById("error_message").setAttribute("style","display: none");
    }
}