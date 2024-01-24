document.addEventListener('DOMContentLoaded', function() {
    var maVideo = document.getElementById('maVideo');

    // Sauvegarder le temps actuel de la vidéo dans le stockage local lorsque la page est quittée
    window.addEventListener('beforeunload', function() {
        localStorage.setItem('videoTime', maVideo.currentTime);
    });

    // Charger le temps de la vidéo à partir du stockage local lors du chargement de la page
    var savedTime = localStorage.getItem('videoTime');
    if (savedTime) {
        maVideo.currentTime = parseFloat(savedTime);
    }

    // Ajouter un gestionnaire d'événements pour le changement de pages
    document.querySelectorAll('.page').forEach((lienPageSuivante) => {
        lienPageSuivante.addEventListener('click', (event) => {
            // Empêcher le lien de naviguer immédiatement
            event.preventDefault();

            // Enregistrez le temps actuel de la vidéo dans le stockage local
            localStorage.setItem('videoTime', maVideo.currentTime);

            // Naviguer vers la page suivante
            window.location.href = event.target.href;
        });
    });
});