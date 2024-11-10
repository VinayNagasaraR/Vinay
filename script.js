document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const aboutLink = document.querySelector("a[href='#About']");
    const servicesLink = document.querySelector("a[href='#Services']");
    const contactLink = document.querySelector("a[href='#Contact']");
    
    const aboutSection = document.getElementById("about");
    const servicesSection = document.getElementById("services");
    const contactSection = document.getElementById("contact");

    // Add click event listeners to scroll to sections
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    servicesLink.addEventListener("click", function (event) {
        event.preventDefault();
        servicesSection.scrollIntoView({ behavior: "smooth" });
    });

    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const aboutLink = document.querySelector("a[href='#About']");
    const servicesLink = document.querySelector("a[href='#Services']");
    const contactLink = document.querySelector("a[href='#Contact']");
    
    const aboutSection = document.getElementById("about");
    const servicesSection = document.getElementById("services");
    const contactSection = document.getElementById("contact");

    // Add click event listeners to scroll to sections
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    servicesLink.addEventListener("click", function (event) {
        event.preventDefault();
        servicesSection.scrollIntoView({ behavior: "smooth" });
    });

    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        contactSection.scrollIntoView({ behavior: "smooth" });
    });

    // Get contact form elements
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    // Add submit event listener to the contact form
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get values
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        // Validate inputs
        if (!fullName) {
            formMessage.textContent = "Please enter your full name.";
            formMessage.style.color = "red";
            return;
        }

        if (!email) {
            formMessage.textContent = "Please enter your email.";
            formMessage.style.color = "red";
            return;
        }

        // Simple email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        if (!message) {
            formMessage.textContent = "Please enter your message.";
            formMessage.style.color = "red";
            return;
        }

        // Simulate form submission
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";

        // Clear the form fields
        contactForm.reset();
        contactForm.hidden();
    });
});

