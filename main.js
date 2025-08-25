function loadHTML(containerId, file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
    }


loadHTML("header", "files/header.html")    
loadHTML("hero-section", "files/hero-section.html")    
loadHTML("second-section", "files/second-section.html")    
// loadHTML("slider-section", "files/slider-section.html")   
loadHTML("pricing-section", "files/pricing-section.html")   
loadHTML("FAQ", "files/FAQ.html")   
loadHTML("footer", "files/footer.html")   





