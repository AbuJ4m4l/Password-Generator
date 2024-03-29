function generatePassword() {
      const passwordLength = document.getElementById('password-length').value;
      const includeUppercase = document.getElementById('include-uppercase').checked;
      const includeLowercase = document.getElementById('include-lowercase').checked;
      const includeNumbers = document.getElementById('include-numbers').checked;
      const includeSymbols = document.getElementById('include-symbols').checked;

      let characters = '';
      if (includeUppercase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }
      if (includeLowercase) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
      }
      if (includeNumbers) {
        characters += '0123456789';
      }
      if (includeSymbols) {
        characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
      }

      let password = '';
      for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      document.getElementById('password').value = password;
    }

    function copyPassword() {
      const passwordInput = document.getElementById('password');
      passwordInput.select();
      document.execCommand('copy');
      alert('Password copied to clipboard!');
    }
