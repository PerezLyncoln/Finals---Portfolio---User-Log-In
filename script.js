document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can add more complex validation)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'https://teams.microsoft.com/v2/'; // Redirect to another page
    } else {
        alert('Invalid username or password.');
    }
});
