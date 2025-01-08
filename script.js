// Function to update the time
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
  
    // Get hours, minutes, and seconds
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Display the current time
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock immediately
  updateClock();
  