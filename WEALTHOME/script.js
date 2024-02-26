const header = document.querySelector("header");

    const hamburgerBtn = document.querySelector("#hamburger-btn");

    const closeMenuBtn = document.querySelector("#close-menu-btn");


    // Toggle mobile menu on hamburger button click

    hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

    // Close mobile menu on close button click

    closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

    const searchBar = document.getElementById("search-bar");

    searchBar.addEventListener("keyup", (event) => {
      const searchTerm = event.target.value.toLowerCase();
    
      // Replace with your actual list of page paths
      const pages = ["index.html", "Service page.html", "About Us page.html", "Contact page.html"];
    
      for (const page of pages) {
        fetch(page)
          .then((response) => response.text())
          .then((text) => {
            if (text.toLowerCase().includes(searchTerm)) {
              console.log(`Found "${searchTerm}" in ${page}`);
            }
          });
      }
    });
    
    