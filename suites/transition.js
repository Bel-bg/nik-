window.addEventListener('load', () => {
    // Attends que la page se charge
    setTimeout(() => {
        // Cache la page de transition
        document.getElementById('loading-screen').style.display = 'none';
        
        // Affiche la page principale avec l'animation de fade-in
        const mainContent = document.querySelector('.main-content');
        mainContent.style.display = 'block';
        mainContent.classList.add('fade-in');
    }, 3000); // 3 secondes de délai pour laisser le loader visible
});
