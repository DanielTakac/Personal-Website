var nameInput = document.getElementById("contact-name");
var emailInput = document.getElementById("contact-email");
var subjectInput = document.getElementById("contact-subject");
var messageInput = document.getElementById("contact-message");
var submitButton = document.getElementById("contact-submit");
submitButton.addEventListener("click", function () {
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
});
