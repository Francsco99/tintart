function changePhoto(photoSrc) {
    const $largeImage = $("#largeImage"); // Seleziona l'immagine utilizzando jQuery
    $largeImage.css("opacity", 0); // Inizia la dissolvenza impostando l'opacità a 0

    setTimeout(() => {
        $largeImage.attr("src", photoSrc); // Cambia la sorgente dell'immagine
        $largeImage.css("opacity", 1); // Ripristina l'opacità a 1
    }, 300); // Durata della dissolvenza (300ms)
}

$(function () {
    // Seleziona l'elemento service
    $('.service').hover(
      function () {
        // Quando il mouse entra, mostra il testo con fadeToggle
        $(this).find('.service-text').fadeIn(600);
      },
      function () {
        // Quando il mouse esce, nascondi il testo con fadeToggle
        $(this).find('.service-text').fadeOut(400);
      }
    );
  });

$(document).ready(function () {
    const $hoverImage = $('#hover-image'); // Seleziona l'immagine di hover
    const $tableRows = $('.hover-row'); // Seleziona tutte le righe con la classe .hover-row

    // Gestione degli eventi per hover
    $tableRows.on('mouseenter', function () {
        const imageSrc = $(this).data('img'); // Ottieni l'attributo data-img
        if (imageSrc) {
            $hoverImage.css('display', 'block');
            $hoverImage.find('img').attr('src', imageSrc); // Cambia la sorgente dell'immagine
        }
    });

    $tableRows.on('mousemove', function (e) {
        $hoverImage.css({
            top: e.pageY + 10 + 'px', // Posizionamento verticale
            left: e.pageX + 10 + 'px', // Posizionamento orizzontale
        });
    });

    $tableRows.on('mouseleave', function () {
        $hoverImage.css('display', 'none'); // Nascondi l'immagine
    });

    // Gestione degli eventi per il click su .border-row
    $('.border-row').on('click', function () {
        // Recupera l'attributo data-href e reindirizza
        window.location.href = $(this).data('href');
    });
});
