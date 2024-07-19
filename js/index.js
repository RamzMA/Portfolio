//typewriter effect
document.addEventListener('DOMContentLoaded', function() {
  const typewriter = document.getElementById('typewriter');
  const originalText = typewriter.textContent;
  const typingSpeed = 100;  
  let isDeleting = false;
  let charIndex = originalText.length;

  function type() {
    if (isDeleting) {
      typewriter.textContent = originalText.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        charIndex = 0;
      }
    } else {
      typewriter.textContent = originalText.substring(0, charIndex++);
      if (charIndex > originalText.length) {
        isDeleting = true;
        charIndex = originalText.length;
      }
    }
    setTimeout(type, typingSpeed);
  }

  type();
});