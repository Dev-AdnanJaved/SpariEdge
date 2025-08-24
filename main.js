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