function showPopUp() {
  // Display the pop-up with the book of flowers and shayari
  document.getElementById('popUp').style.display = 'block';
  document.getElementById('shayari').innerText = "Your Shayari goes here!";
}

// Falling Flowers & Hearts Animation
function createFallingElement(type) {
  const element = document.createElement('div');
  element.classList.add('falling-element');
  element.style.animationDuration = `${Math.random() * 3 + 3}s`;
  element.style.left = `${Math.random() * 100}vw`;
  
  const symbol = type === 'flower' ? '🌸' : '❤️';
  element.innerText = symbol;
  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 5000);
}

// Create falling flowers and hearts continuously
setInterval(() => createFallingElement('flower'), 500);
setInterval(() => createFallingElement('heart'), 1000);
