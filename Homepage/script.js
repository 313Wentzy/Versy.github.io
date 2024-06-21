document.addEventListener('DOMContentLoaded', function() {
    const letters = document.querySelectorAll('.typing');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = '1';
        }, index * 1000);
    });

    // Add this to start the right box animation on page load
    const rightBox = document.querySelector('.right-box');
    setTimeout(() => {
        rightBox.style.opacity = '1';
        rightBox.style.transform = 'translateY(0)';
    }, 500); // Adjust the delay if needed
});

const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const continueButton = document.getElementById('continueButton');
const sendButton = document.getElementById('sendButton');
const textBox = document.querySelector('.text-box');

function openPopup() {
    popup.style.display = 'block';
    popup.style.opacity = '1'; 
    popup.querySelector('.popup-content').style.transform = 'translateY(0)'; 
}

function closePopupFunction() {
    popup.style.opacity = '0'; 
    popup.querySelector('.popup-content').style.transform = 'translateY(-30%)';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500); 
}

function redirectToLink() {
    window.open('https://discord.com/oauth2/authorize?client_id=1199388208132264027&permissions=8&scope=bot+applications.commands', '_blank'); 
    closePopupFunction();
}

sendButton.addEventListener('click', openPopup);

closePopup.addEventListener('click', closePopupFunction);

continueButton.addEventListener('click', redirectToLink);

textBox.addEventListener('input', () => {
    sendButton.disabled = textBox.value.trim() === '';
});

window.addEventListener('click', function(event) {
    if (event.target === popup) {
        closePopupFunction();
    }
});
// typing/fade effect

document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.querySelector('.button-container');
    
    setTimeout(() => {
        buttonContainer.classList.add('fade-in');
    }, 1000); // Adjust the delay if needed
});