document.addEventListener('DOMContentLoaded', function() {
    
    // Select the first img element within .app_bar .left
const closeButton = document.querySelector('.app_bar .left img:nth-child(1)');

// Add an event listener to close the window when the image is clicked
closeButton.addEventListener('click', function() {
    window.close();
});

// Select the button within .search
const searchButton = document.querySelector('.search button');

// Add an event listener to perform a search when the button is clicked
searchButton.addEventListener('click', function() {
    // Get the value of the text input within .search
    const searchTerm = document.querySelector('.search input[type="text"]').value;
    // Select the main container
    const container = document.querySelector('.container');

    // Unmark previous text by removing <mark> tags
    container.innerHTML = container.innerHTML.replace(/<mark>(.*?)<\/mark>/g, '$1');

    // Mark new text if there is a search term
    if (searchTerm) {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        container.innerHTML = container.innerHTML.replace(regex, '<mark>$1</mark>');
    }
});

    // Add an event listener to show/hide additional information when the image is clicked
    document.querySelector('.container .logo .info_bar img:first-child').addEventListener('click', function() {
        var info = document.querySelector('.container .logo .info');
        var img = document.querySelector('.container .logo .info_bar img:first-child');
        if (info.style.display === 'none' || info.style.display === '') {
            // Show the information and change the image to 'arrow_down.png'
            info.style.display = 'block';
            img.src = 'arrow_down.png'; // Canvia a la imatge original
        } else {
            // Hide the information and change the image to 'arrow_up.png'
            info.style.display = 'none';
            img.src = 'arrow_up.png';
        }
    });

    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    const sliderContainer = document.querySelector('.slider-container');

    let currentIndex = 0; // Tracks the current slide index
    let autoSlideInterval; // Will hold the interval ID for auto-sliding

    // Function to update the active dot indicator
    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Function to display a specific slide based on the index
    function showSlides(index) {
        if (index >= slides.length) {
            currentIndex = 0; // Reset to first slide if at the end
        } else if (index < 0) {
            currentIndex = slides.length - 1; // Go to last slide if at the beginning
        } else {
            currentIndex = index; // Otherwise, set to the provided index
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Slide transition
        updateDots(); // Update the dots to reflect the current slide
    }

    // Function to move to the next slide
    function nextSlide() {
        showSlides(currentIndex + 1);
    }

    // Function to move to the previous slide
    function prevSlide() {
        showSlides(currentIndex - 1);
    }

    // Start the automatic sliding of images
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000); // Slide every 4 seconds
    }

    // Stop the automatic sliding
    function stopAutoSlide() {
        clearInterval(autoSlideInterval); // Clear the interval
    }

    // Add click event listeners to dots for direct slide navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoSlide(); // Stop auto-slide when manually selecting a slide
            showSlides(parseInt(dot.dataset.index)); // Show the selected slide
            startAutoSlide(); // Restart auto-slide
        });
    });

    // Add event listeners for navigation buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Stop auto-slide when the mouse enters the slider container
    sliderContainer.addEventListener('mouseover', stopAutoSlide);

    // Restart auto-slide when the mouse leaves the slider container
    sliderContainer.addEventListener('mouseout', startAutoSlide);

    // Start auto-slide when the page loads
    startAutoSlide();
    updateDots(); // Initialize the dots
});