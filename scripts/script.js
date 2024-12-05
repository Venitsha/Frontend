// JavaScript Document
console.log("hi");
 

// https://www.w3schools.com/howto/howto_js_slideshow.asp  slider

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll("section:nth-of-type(3) ul li");
    const prevButton = document.querySelector("button.prev");
    const nextButton = document.querySelector("button.next");

    // Functie om de actieve afbeelding te tonen
    function showImage(index) {
        // Verberg alle afbeeldingen
        images.forEach((image, i) => {
            image.classList.remove("active");
        });
        
        // Zorg ervoor dat de afbeelding op de huidige index wordt weergegeven
        images[index].classList.add("active");
    }

    // Functie om de vorige afbeelding weer te geven
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    // Functie om de volgende afbeelding weer te geven
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });

    // Initieel de eerste afbeelding tonen
    showImage(currentIndex);
});
