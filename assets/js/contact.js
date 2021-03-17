window.onload = function() {
            document.getElementById('contactForm').addEventListener('submit', function(event) {
                event.preventDefault();
                
                this.contact_number.value = Math.random() * 100000 | 0;
                
                emailjs.sendForm('contact_service', 'contactForm', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }


/*--

function sendMail(contactForm) {
    emailjs.send("gmail", "contact", {
        "from_name": contactForm.name.value,
        "from_emailaddress": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}

--*/