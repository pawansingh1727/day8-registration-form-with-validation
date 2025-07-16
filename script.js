const form = document.getElementById('registerForm');
const formMsg = document.getElementById('formMsg');
const passwordInput = document.getElementById('password');
const strengthMsg = document.getElementById('strengthMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // stop form from submitting

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const branch = document.getElementById('branch').value.trim();
  const year = document.getElementById('year').value.trim();
  const password = passwordInput.value;

  // Validation
  if (!name || !email || !branch || !year || !password) {
    formMsg.textContent = "All fields are required.";
    return;
  }

  if (!email.includes('@')) {
    formMsg.textContent = "Email must contain '@'.";
    return;
  }

  if (password.length < 6) {
    formMsg.textContent = "Password must be at least 6 characters long.";
    return;
  }

  // If all valid
  formMsg.style.color = "green";
  formMsg.textContent = "Registration successful!";
});

passwordInput.addEventListener('input', function() {
  const pwd = passwordInput.value;
  let strength = "Weak";
  let color = "red";

  if (pwd.length >= 8 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) {
    strength = "Strong";
    color = "green";
  } else if (pwd.length >= 6) {
    strength = "Medium";
    color = "orange";
  }

  strengthMsg.textContent = `Strength: ${strength}`;
  strengthMsg.style.color = color;
});
