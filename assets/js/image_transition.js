function changePhoto(photoSrc) {
    const largeImage = document.getElementById("largeImage");
    largeImage.style.opacity = 0; // Inizia la dissolvenza
    setTimeout(() => {
        largeImage.src = photoSrc;
        largeImage.style.opacity = 1; // Ripristina l'opacità
    }, 300); // Durata della dissolvenza deve coincidere con la durata della transizione
}