document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can add more complex validation)
    if (username === 'lyncoln' && password === 'programming') {
        document.getElementById('homeLink').style.display = 'block';
        document.getElementById('homeLink').click(); // Click the link to navigate to the home page
    } else {
        alert('Invalid username or password.');
    }
});
