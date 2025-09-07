  document.addEventListener('DOMContentLoaded', function() {
        // Get all navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Add click event listeners to each navigation link
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Hide all sections
                const sections = document.querySelectorAll('section');
                sections.forEach(section => section.classList.remove('active'));
                
                // Show the targeted section
                const targetSection = document.querySelector(this.getAttribute('href'));
                if (targetSection) {
                    targetSection.classList.add('active');
                    window.scrollTo(0, 0);
                }
            });
        });
        
        // Show home section by default
        document.getElementById('home').classList.add('active');
    });