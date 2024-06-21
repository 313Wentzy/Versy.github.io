const cards = document.querySelectorAll('.card');
let currentCard = 0;

function showCard(index) {
    cards.forEach((card, idx) => {
        if (idx === index) {
            card.style.opacity = 1;
            card.style.transform = 'translateX(0)';
        } else {
            card.style.opacity = 0;
            card.style.transform = `translateX(${(idx < index) ? '-' : ''}100%)`;
        }
    });

    // Disable horizontal scrolling
    document.body.style.overflowX = 'hidden';
}

function shuffleEffect(direction) {
    let newIndex;
    if (direction === 'next') {
        newIndex = (currentCard + 1) % cards.length;
    } else {
        newIndex = (currentCard - 1 + cards.length) % cards.length;
    }
    showCard(newIndex);
    currentCard = newIndex;
}

const nextCardButton = document.getElementById('nextCard');
const prevCardButton = document.getElementById('prevCard');

nextCardButton.addEventListener('click', () => shuffleEffect('next'));
prevCardButton.addEventListener('click', () => shuffleEffect('prev'));

showCard(currentCard);

document.addEventListener('DOMContentLoaded', function() {
    const letters = document.querySelectorAll('.typing');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = '1';
        }, index * 1000);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.querySelector('.button-container');
    
    setTimeout(() => {
        buttonContainer.classList.add('fade-in');
    }, 2000); // Adjust the delay if needed
});