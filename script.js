function updateImage() {
  const img = document.getElementById('profile-pic');
  if (window.innerWidth <= 576) {
    img.src = 'assest/IMG_SM.png'; // Path to the new image for small screens


  } else {
    img.src = 'ssest/IMG_20241110_180700_611 copy.png';

  }
}

// Run on load and on resize
window.addEventListener('load', updateImage);
window.addEventListener('resize', updateImage);

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function (event) {
    // Navigate to the href target
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Scroll to the target
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    // Collapse the navbar
    const navbarCollapse = document.querySelector('#navbarTogglerDemo01');
    if (navbarCollapse.classList.contains('show')) {
      const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
      // Use a slight delay to ensure the navigation happens first
      setTimeout(() => collapseInstance.hide(), 300);
    }
  });
});








//para sa process bar

document.addEventListener("DOMContentLoaded", function () {
 
  const BarPhotoShop = document.querySelector('.progress-PhotoShop');
  const BarAi = document.querySelector('.progress-Ai');
  const BarAf = document.querySelector('.progress-Af');
  const BarPr = document.querySelector('.progress-Pr');
  const Barhtml = document.querySelector('.progress-html');
  const BarCss = document.querySelector('.progress-css');
  const BarReact = document.querySelector('.progress-react');
 

  const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        // Simulan ang animasyon kapag ang progress bar ay lumitaw sa screen
       
        BarCss.style.width = '80%';
        BarCss.setAttribute('aria-valuenow', 80);
        BarReact.style.width = '60%';
        BarReact.setAttribute('aria-valuenow', 60);

        Barhtml.style.width = '70%';
        Barhtml.setAttribute('aria-valuenow', 70);
        BarAf.style.width = '75%';
        BarAf.setAttribute('aria-valuenow', 75);
        BarPr.style.width = '60%';
        BarPr.setAttribute('aria-valuenow', 60);
        BarPhotoShop.style.width = '95%';
        BarPhotoShop.setAttribute('aria-valuenow', 95);
        BarAi.style.width = '85%';
        BarAi.setAttribute('aria-valuenow', 85);
        
      }
    });
  }, { threshold: 1.0 }); // Mag-trigger kapag 50% ng progress bar ay nasa screen
  observer.observe(Barhtml, BarCss, BarReact, BarAf, BarPhotoShop, BarAi);


});



function openCarousel(index) {
  const carousel = new bootstrap.Modal(document.getElementById('carouselModal'));
  carousel.show();

  // Update active slide based on clicked index
  const carouselElement = document.getElementById('imageCarousel');
  const carouselInstance = bootstrap.Carousel.getInstance(carouselElement);
  carouselInstance.to(index);
}

// Get form elements
const btn = document.getElementById('btnSubmit');
const form = document.getElementById('form');

// Add submit event listener
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_xjdhjy9';

  // Prepare data to send
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  // Use emailjs.send with custom data
  emailjs.send(serviceID, templateID, formData)
    .then(() => {
      btn.value = 'Send Email';
      form.reset(); // Clear the form after successful submission
      alert('Email Sent Successfully!');
    })
    .catch((err) => {
      btn.value = 'Send Email';
      alert('Failed to send email: ' + JSON.stringify(err));
    });
});

