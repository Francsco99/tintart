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
  