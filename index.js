document.addEventListener('DOMContentLoaded', function () {
            // Toggle functionality for sections
            document.querySelectorAll('.section h2').forEach(sectionHeader => {
                sectionHeader.addEventListener('click', function () {
                    const content = this.nextElementSibling;
                    content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
                });
            });

            // Search functionality
            document.getElementById('searchInput').addEventListener('input', function () {
                const searchTerm = this.value.toLowerCase();
                document.querySelectorAll('.section').forEach(section => {
                    const headerText = section.querySelector('h2').textContent.toLowerCase();
                    section.style.display = headerText.includes(searchTerm) ? 'block' : 'none';
                });
            });

            // Modal functionality
            const modals = document.querySelectorAll('.modal');
            const triggers = document.querySelectorAll('.modal-trigger');
            const closeButtons = document.querySelectorAll('.modal-close');

            // Open modal
            triggers.forEach(trigger => {
                trigger.addEventListener('click', (event) => {
                    event.preventDefault();
                    const modalId = trigger.getAttribute('data-modal');
                    openModal(modalId);
                });
            });

            // Close modal when clicking the close button
            closeButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const modalId = button.getAttribute('data-modal');
                    closeModal(modalId);
                });
            });

            // Close modal when clicking outside of the modal content
            window.addEventListener('click', (event) => {
                modals.forEach(modal => {
                    if (event.target.classList.contains('modal')) {
                        closeModal(modal.id);
                    }
                });
            });

            // Navigation functionality
            const links = document.querySelectorAll("nav ul li a");
            const sections = document.querySelectorAll(".section");

            links.forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    const sectionId = this.getAttribute("href").substring(1); // Remove the '#' from href

                    // Toggle active link
                    links.forEach(l => l.classList.remove("active-link"));
                    this.classList.add("active-link");

                    // Toggle section visibility
                    sections.forEach(section => {
                        const content = section.querySelector(".section-content");
                        if (section.id === sectionId) {
                            content.classList.toggle("active");
                        } else {
                            content.classList.remove("active");
                        }
                    });
                });
            });
        });

        // Functions to open and close modals
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = 'none';
        }

        document.addEventListener('DOMContentLoaded', () => {
            const carousel = document.querySelector('.carousel');
            const slides = document.querySelectorAll('.carousel-slide');
            const totalSlides = slides.length;
            let currentIndex = 0;

            // Show the next slide
            function showNextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            }

            // Show the previous slide
            function showPrevSlide() {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateCarousel();
            }

            // Update the carousel transform to show the current slide
            function updateCarousel() {
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            // Event listeners for buttons
            document.querySelector('.carousel-button.next').addEventListener('click', showNextSlide);
            document.querySelector('.carousel-button.prev').addEventListener('click', showPrevSlide);

            // Automatic sliding with animation
            setInterval(showNextSlide, 5000); // Change slide every 5 seconds
        });

        document.addEventListener('DOMContentLoaded', () => {
            const carousel = document.querySelector('.carousel');
            const slides = document.querySelectorAll('.carousel-slide');
            const totalSlides = slides.length;
            let currentIndex = 0;

            // Show the next slide
            function showNextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            }

            // Show the previous slide
            function showPrevSlide() {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateCarousel();
            }

            // Update the carousel transform to show the current slide
            function updateCarousel() {
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            // Event listeners for buttons
            document.querySelector('.carousel-button.next').addEventListener('click', showNextSlide);
            document.querySelector('.carousel-button.prev').addEventListener('click', showPrevSlide);

            // Automatic sliding with animation
            setInterval(showNextSlide, 5000); // Change slide every 5 seconds
        });
        

        document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');

    hamburgerBtn.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('show');
    });

    // Close sidebar when a link is clicked
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('show');
        });
    });
});

function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('navbarOverlay');
            sidebar.classList.toggle('show');
            overlay.style.display = sidebar.classList.contains('show') ? 'block' : 'none';
        }

        function closeSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('navbarOverlay');
            sidebar.classList.remove('show');
            overlay.style.display = 'none';
        }
