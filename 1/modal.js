// Get all Learn More buttons
const learnButtons = document.querySelectorAll(".learn-btn");

// Get all modals
const modals = document.querySelectorAll(".modal");

// Get all Close buttons
const closeButtons = document.querySelectorAll(".close-btn");


// Open a modal when Learn More is clicked
learnButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the ID of the modal
        const modalId = button.getAttribute("data-modal");

        // Find the modal using its ID
        const modal = document.getElementById(modalId);

        // Show the modal
        modal.style.display = "block";

        // Prevent the page from scrolling
        document.body.style.overflow = "hidden";

    });

});


// Close modal using the Close button
closeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Find the modal containing the button
        const modal = button.closest(".modal");

        // Hide the modal
        modal.style.display = "none";

        // Allow scrolling again
        document.body.style.overflow = "auto";

    });

});


// Close modal when clicking outside it
modals.forEach(function(modal) {

    modal.addEventListener("click", function(event) {

        // Check if the modal itself was clicked
        if (event.target === modal) {

            modal.style.display = "none";

            document.body.style.overflow = "auto";

        }

    });

});


// Close modal when Escape is pressed
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        modals.forEach(function(modal) {

            modal.style.display = "none";

        });

        document.body.style.overflow = "auto";

    }

});