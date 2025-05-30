// Correct key
        const CORRECT_KEY = "9C-16-2025-XYZ";
        
        // Get DOM elements
        const loginForm = document.getElementById('loginForm');
        const keyInput = document.getElementById('keyInput');
        const contactBtn = document.getElementById('contactBtn');
        const modal = document.getElementById('messageModal');
        const modalMessage = document.getElementById('modalMessage');
        const closeBtn = document.querySelector('.close');
        
        // Form submission handler
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const enteredKey = keyInput.value.trim();
            
            if (enteredKey === CORRECT_KEY) {
                // Correct key - redirect to home.html
                window.location.href = "home.html";
            } else {
                // Wrong key - show error message
                showModal("Invalid key! Please try again.");
                keyInput.value = ''; // Clear the input
                keyInput.focus(); // Focus back on the input
            }
        });
        
        // Contact button handler
        contactBtn.addEventListener('click', function() {
            showModal("Please contact the administrator to get your access key.");
        });
        
        // Close modal when clicking X
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
        
        // Function to show modal with message
        function showModal(message) {
            modalMessage.textContent = message;
            modal.style.display = "block";
        }