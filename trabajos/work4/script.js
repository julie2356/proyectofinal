document.addEventListener('DOMContentLoaded', () => {
    const books = document.querySelectorAll('.book');
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlayImg');

    books.forEach(book => {
        book.addEventListener('click', () => {
            const imgSrc = book.querySelector('img').src;
            overlayImg.src = imgSrc;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});
