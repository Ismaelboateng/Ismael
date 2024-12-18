const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


function donateNow() {
    alert("Thank you for considering to donate!");
}

document.addEventListener("DOMContentLoaded", function() {
    const donationSection = document.querySelector('.donation');
    
    // Function to fade in the donation text
    const fadeIn = () => {
        donationSection.style.opacity = '1'; // Set opacity to 1 (visible)
        donationSection.style.transition = 'opacity 1s'; // Transition effect
    };

    // Function to fade out the donation text
    const fadeOut = () => {
        donationSection.style.opacity = '0'; // Set opacity to 0 (invisible)
        donationSection.style.transition = 'opacity 1s'; // Transition effect
    };

    // Initial fade out when the page loads
    fadeOut();

    // Fade in on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            fadeIn(); // Fade in when scrolling down
        } else {
            fadeOut(); // Fade out when at the top
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const partnerItems = document.querySelectorAll('.partner-item');

    function handleScroll() {
        partnerItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            // Check if the item is in the viewport
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                item.classList.add('show'); // Add 'show' class to trigger animation
            } 
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Trigger scroll event once on page load
    handleScroll();
});

document.addEventListener('scroll', function() {
    const image = document.querySelector('.animated-image');
    const windowHeight = window.innerHeight;
    const imagePosition = image.getBoundingClientRect().top;

    // Check if the image is in the viewport
    if (imagePosition < windowHeight - 100) { // Adjust threshold as needed
        image.classList.add('show'); // Fade in
    } else {
        image.classList.remove('show'); // Fade out
    }
});









function submitForm(event) {
        event.preventDefault(); // Prevent the default form submission

        const form = document.getElementById("contactForm");
        
        // Send form data to Web3Forms API
        fetch(form.action, {
            method: "POST",
            body: new FormData(form)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Message sent successfully!");
                form.reset(); // Clear the form fields
            } else {
                alert("There was an error. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error sending message.");
        });
    }
