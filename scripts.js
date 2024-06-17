document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const userDetailsForm = document.getElementById('userDetailsForm');
    const courseSelectionForm = document.getElementById('courseSelectionForm');
    const uploadForm = document.getElementById('uploadForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            fetch('http://localhost:3000/register', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                alert(data); // Display response from server
                window.location.href = 'course-selection.html'; // Redirect after successful registration
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
        }); 
		
        document.getElementById('createNewUser').addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'user-details.html';
        });
    }

    if (userDetailsForm) {
        userDetailsForm.addEventListener('submit', function (e) {
            e.preventDefault();
            window.location.href = 'index.html';
			alert('Registration successfully !!');
        });
    }
	
    if (courseSelectionForm) {
        courseSelectionForm.addEventListener('submit', function (e) {
            e.preventDefault();
            window.location.href = 'admin.html';
        });
    }

    if (uploadForm) {
        uploadForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('File uploaded successfully!');
        });
    }
});

// scripts.js

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Simulate login functionality (replace with actual backend call)
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Example: Check credentials (replace with actual backend logic)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!'); // Replace with redirect or other action
    } else {
        alert('Login failed. Please check your username and password.');
    }
});

