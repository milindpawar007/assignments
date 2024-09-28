document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById('submit');
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const emailInput = document.getElementById('email');
    const errorDiv = document.getElementById('error');
    const summaryTableBody = document.getElementById('summaryTable').querySelector('tbody');
    const noResultDiv = document.getElementById('noResult');
  
    // Function to validate inputs
    function validateInputs() {
        const name = nameInput.value.trim();
        const mobile = mobileInput.value.trim();
        const email = emailInput.value.trim();
  
        // Reset error message
        errorDiv.classList.add('dn');
  
        // Validate Name
        const namePattern = /^[A-Za-z\s]{1,20}$/;
        if (!name || !namePattern.test(name)) {
            errorDiv.textContent = "Contact Name is required, must contain only letters and spaces, and be <= 20 characters.";
            errorDiv.classList.remove('dn');
            return false;
        }
  
        // Validate Mobile Number
        const mobilePattern = /^\d{10}$/;
        if (!mobile || !mobilePattern.test(mobile)) {
            errorDiv.textContent = "Mobile Number is required and must be exactly 10 digits.";
            errorDiv.classList.remove('dn');
            return false;
        }
  
        // Validate Email
        const emailPattern = /^[a-zA-Z][\w.]{1,10}@[a-zA-Z]{2,20}\.[a-zA-Z]{2,10}$/;
  if (!email || !emailPattern.test(email)) {
      errorDiv.textContent = "Email is required and must start with a letter, contain 2-10 characters before '@', and follow the specified format (e.g., john.doe3@gmail.com).";
      errorDiv.classList.remove('dn');
      return false;
  }
  
        return true;
    }
  
    // Add contact on button click
    submitButton.addEventListener('click', function () {
        if (validateInputs()) {
            const newContact = {
                name: nameInput.value.trim(),
                mobile: mobileInput.value.trim(),
                email: emailInput.value.trim(),
            };
  
            // Add the new contact to the table
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${newContact.name}</td>
                <td>${newContact.mobile}</td>
                <td>${newContact.email}</td>
            `;
            summaryTableBody.appendChild(row);
  
            // Clear inputs
            nameInput.value = '';
            mobileInput.value = '';
            emailInput.value = '';
  
            // Hide error message if visible
            errorDiv.classList.add('dn');
  
            // Show "No Results Found" if there are no contacts
            noResultDiv.classList.add('dn');
            if (summaryTableBody.children.length === 0) {
                noResultDiv.classList.remove('dn');
            }
        }
    });
  });
  