document.addEventListener('DOMContentLoaded', () => {
    const hoverImage = document.getElementById('hover-image');
    const tableRows = document.querySelectorAll('.hover-row');

    tableRows.forEach(row => {
        row.addEventListener('mouseenter', (e) => {
            const imageSrc = row.getAttribute('data-img'); // Ottieni l'immagine dalla riga
            if (imageSrc) {
                hoverImage.style.display = 'block';
                hoverImage.querySelector('img').src = imageSrc; // Imposta l'immagine
            }
        });

        row.addEventListener('mousemove', (e) => {
            hoverImage.style.top = `${e.pageY + 10}px`; // Posizionamento verticale
            hoverImage.style.left = `${e.pageX + 10}px`; // Posizionamento orizzontale
        });

        row.addEventListener('mouseleave', () => {
            hoverImage.style.display = 'none'; // Nascondi l'immagine
        });
    });
});
