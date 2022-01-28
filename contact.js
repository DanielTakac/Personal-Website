const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");
const subjectInput = document.getElementById("contact-subject");
const messageInput = document.getElementById("contact-message");
const submitButton = document.getElementById("contact-submit");

submitButton.addEventListener("click", function(){
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
});
