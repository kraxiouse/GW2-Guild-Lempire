// Exemple d'intégration d'une API
async function fetchGuildInfo() {
    try {
        // Remplacer par l'URL de ton API ou une API de jeu (exemple ici)
        const response = await fetch('https://api.example.com/guild/infos');
        const data = await response.json();

        // Mettre à jour la hiérarchie avec les données de l'API
        document.querySelector('.role:nth-child(1) p').innerText = data.generalsDescription;
        document.querySelector('.role:nth-child(2) p').innerText = data.lieutenantsDescription;
        document.querySelector('.role:nth-child(3) p').innerText = data.soldiersDescription;
        document.querySelector('.role:nth-child(4) p').innerText = data.membersDescription;

    } catch (error) {
        console.error('Erreur lors de la récupération des informations de la guilde:', error);
    }
}

// Appeler la fonction pour récupérer les infos de la guilde
fetchGuildInfo();
