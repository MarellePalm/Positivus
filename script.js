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