function changePhoto(photoSrc) {
    const $largeImage = $("#largeImage"); // Seleziona l'immagine utilizzando jQuery
    $largeImage.css("opacity", 0); // Inizia la dissolvenza impostando l'opacità a 0

    setTimeout(() => {
        $largeImage.attr("src", photoSrc); // Cambia la sorgente dell'immagine
        $largeImage.css("opacity", 1); // Ripristina l'opacità a 1
    }, 300); // Durata della dissolvenza (300ms)
}
