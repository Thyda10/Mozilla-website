
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (name === '' || password === '') {
      alert('Please fill out all fields.');
      return false; 
    }
    return true; 
  }