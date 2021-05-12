function sendMail(contactForm) {
    emailjs.send("gmail", "contact", {
        "from_name": contactForm.name.value,
        "from_emailaddress": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
        function myFunction() {
        alert("Thanks for getting in touch <3");
        }
}

document.addEventListener("submit", function(event) {
  event.preventDefault()
  event.target.reset()
})

