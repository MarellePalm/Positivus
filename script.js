document.querySelectorAll(".toggleButton").forEach(function(button) {
    button.addEventListener("click", function() {
        var extraContent = this.closest('.ourWorkingProcessBoxOneLabel').querySelector('.extraContent');
        var image = this.querySelector(".toggleImage");
        var box = this.closest('.ourWorkingProcessBoxes'); 

        
        extraContent.classList.toggle("show");

        
        box.classList.toggle("active");

        
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
    
    const leftArrow = document.querySelector(".testimonialsArrowLeft");
    const rightArrow = document.querySelector(".testimonialsArrowRight");

    let currentIndex = 0;

    
    function moveLeft() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = 2; 
        }
        updateCarouselPosition();
    }

    
    function moveRight() {
        if (currentIndex < 2) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateCarouselPosition();
    }

    
    function updateCarouselPosition() {
        const testimonialsCards = document.querySelector('.testimonialsCards');
        testimonialsCards.style.transform = `translateX(-${currentIndex * 320}px)`; 
    }

    
    leftArrow.addEventListener("click", moveLeft);
    rightArrow.addEventListener("click", moveRight);
});


document.getElementById("contactButton").addEventListener("click", function() {
    window.location.href = "#contactUsSection"; 
});

document.getElementById("consultationButton").addEventListener("click", function() {
    window.location.href = "#contactUsSection"; 
});

document.getElementById("freeProposal").addEventListener("click", function() {
    window.location.href = "#contactUsSection"; 
});
