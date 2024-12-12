// JavaScript Document
console.log("hi");
 

// https://www.w3schools.com/howto/howto_js_slideshow.asp  slider

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll("section:nth-of-type(3) ul li");
    const prevButton = document.querySelector("button.prev");
    const nextButton = document.querySelector("button.next");

    function showImage(index) {
        images.forEach((image, i) => {
            image.classList.remove("active");
        });
        images[index].classList.add("active");
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});


