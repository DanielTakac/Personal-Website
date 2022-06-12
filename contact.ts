const nameInput: any = document.getElementById("contact-name");
const emailInput: any = document.getElementById("contact-email");
const subjectInput: any = document.getElementById("contact-subject");
const messageInput: any = document.getElementById("contact-message");
const submitButton: any = document.getElementById("contact-submit");

submitButton.addEventListener("click", function(){
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
});
