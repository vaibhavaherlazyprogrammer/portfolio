
// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = "↑";
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

// Show/Hide "Back to Top" Button on Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});

// Scroll Back to Top
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// Typing Animation for Header (Optional)
const headerText = document.querySelector('header h1');
const text = "Vaibhav Aher";
let index = 0;

function typeWriter() {
  if (index < text.length) {
      headerText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 150); // Adjust speed here
  }
}

// Start typing animation
window.onload = () => {
  headerText.innerHTML = ""; // Clear the header text
  typeWriter();
};


// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach((section) => observer.observe(section));


const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

