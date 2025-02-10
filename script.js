document.getElementById("toggleButton").addEventListener("click", function() {
    var extraContent = document.getElementById("extraContent");
    var image = document.getElementById("toggleImage");

    extraContent.classList.toggle("show");

    // Vaheta pilt sõltuvalt olekust
    if (extraContent.classList.contains("show")) {
        image.src = "failid/minusIcon.png"; // Kui sisu on avatud
        image.alt = "Sulge";
        box.classList.add("show");
    } else {
        image.src = "failid/plusIcon.png"; // Kui sisu on suletud
        image.alt = "Ava";
        box.classList.remove("show");
    }
});