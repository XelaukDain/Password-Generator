// Locate button element
const button = document.getElementById('generate');

// Event listener for button click
button.addEventListener('click', () => {
        //function to generate password
        function generatePassword() {
            var password = "";
            var L = "abcdefghijklmnopqrstuvwxyz";
            var N = "0123456789";
            var S = "!@#$%^&*()_+";
            var UL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var charset = "";
            
            if (lowerCase === true) {
                charset += L;
            }
            if (upperCase === true) {
                charset += UL;
            }
            if (numbers === true) {
                charset += N;
            }
            if (special === true) {
                charset += S;
            }
        
            
            for (var i = 0, n = charset.length; i < length; ++i) {
                password += charset.charAt(Math.floor(Math.random() * n));
            }
        
            document.getElementById("password").innerHTML = password;
            console.log(password);
            }  


    // Prompt the user for length
    var length = prompt('Select a length (8-128)', "");
    
    // Validate user input
    if (length < 8 || length > 128) {
        alert("Please select a length between 8 and 128");
        return;
    }

    // Create a dialog box with checkboxes for options
    var lowerCase = confirm("Use lowercase letters?");
    var upperCase = confirm("Use uppercase letters?");  
    var numbers  = confirm("use numbers?");
    var special = confirm("use special characters?");
    
    // Generate password based on user input
    generatePassword();

});