  // Simple form submission handling
        // document.getElementById('appointment-form').addEventListener('submit', function(e) {
        //     e.preventDefault();
            
        //     // Get form values
        //     const name = document.getElementById('name').value;
        //     const service = document.getElementById('service').value;
        //     const serviceText = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
            
        //     // In a real application, you would send this data to a server
        //     // For this demo, we'll just show an alert
        //     alert(`Thank you, ${name}! Your appointment request for ${serviceText} has been received. We will contact you shortly to confirm your booking.`);
            
        //     // Reset the form
        //     this.reset();
        // });

       
    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');

    hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
    });

    // Close mobile menu when clicking on links
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
        
        // Set minimum date to today for the date picker
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').setAttribute('min', today);