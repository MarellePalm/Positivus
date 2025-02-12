document.querySelectorAll(".toggleButton").forEach(function(button) {
    button.addEventListener("click", function() {
        var extraContent = this.closest('.ourWorkingProcessBoxOneLabel').querySelector('.extraContent');
        var image = this.querySelector(".toggleImage");
        var box = this.closest('.ourWorkingProcessBoxes');  // Kasutame closest(), et saada õige box div

        // Vaheta sisu nähtavust
        extraContent.classList.toggle("show");

        // Taustavärvi muutus
        box.classList.toggle("active");

        // Pildi vahetus
        if (extraContent.classList.contains("show")) {
            image.src = "failid/minusIcon.png"; 
            image.alt = "Sulge";
        } else {
            image.src = "failid/plusIcon.png"; 
            image.alt = "Ava";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Liikumisfunktsioonide määramine noolele
    const leftArrow = document.querySelector(".testimonialsArrowLeft");
    const rightArrow = document.querySelector(".testimonialsArrowRight");

    let currentIndex = 0;

    // Liigu vasakule
    function moveLeft() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = 2; // Kui oleme esimese kaardi peal, liigu viimasele
        }
        updateCarouselPosition();
    }

    // Liigu paremale
    function moveRight() {
        if (currentIndex < 2) {
            currentIndex++;
        } else {
            currentIndex = 0; // Kui oleme viimase kaardi peal, liigu esimesele
        }
        updateCarouselPosition();
    }

    // Uuenda karusselli asukohta
    function updateCarouselPosition() {
        const testimonialsCards = document.querySelector('.testimonialsCards');
        testimonialsCards.style.transform = `translateX(-${currentIndex * 320}px)`; // 320px on kaardi laius + margin
    }

    // Lisa kuulajad nooltele
    leftArrow.addEventListener("click", moveLeft);
    rightArrow.addEventListener("click", moveRight);
});



