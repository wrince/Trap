// Function to change the background image when a new image is selected
function changeBackgroundImage(event) {
    const file = event.target.files[0];  // Get the selected file
    const reader = new FileReader();  // Create a new FileReader object
    
    // When the file is loaded, set the background image of the body
    reader.onload = function(e) {
        document.body.style.backgroundImage = `url(${e.target.result})`;  // Set the image URL as the background
    };
    
    reader.readAsDataURL(file);  // Convert the selected file into a data URL
}

// Function to append numbers or operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the expression in the display
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}