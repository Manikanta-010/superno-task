// Handle form submission
document.getElementById('login-form').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Clear previous error messages
  const errorMessage = document.getElementById('error-message');
  errorMessage.style.display = 'none';

  // Simple client-side validation
  if (!email || !password) {
    showError('Please fill in both email and password.');
    return;
  }

  try {
    // Send login request to the API
    const response = await fetch('https://your-api-endpoint.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Handle successful login
      alert('Login successful!');
      window.location.href = '/dashboard'; // Replace with your dashboard URL
    } else {
      // Show server-provided error message
      showError(data.message || 'Invalid email or password.');
    }
  } catch (error) {
    // Handle network errors
    showError('Something went wrong. Please try again later.');
    console.error('Error:', error);
  }
});

// Function to show error messages
function showError(message) {
  const errorMessage = document.getElementById('error-message');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}
