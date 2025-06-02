document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            // Sprečava podrazumevano ponašanje
            
            // Uklanja "active" klasu sa svih linkova
            links.forEach(link => link.classList.remove("active"));

            // Dodaje "active" klasu kliknutom linku
            this.classList.add("active");

            // Pomeri stranicu ka sekciji
            let targetId = this.getAttribute("href"); 
            let targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});