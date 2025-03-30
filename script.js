// Fonction de recherche de pages
function searchPages() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const pages = document.querySelectorAll('.wiki-page');
    
    pages.forEach(page => {
        const title = page.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            page.style.display = '';
        } else {
            page.style.display = 'none';
        }
    });
}

// Fonction de suppression d'une page
function deletePage(event) {
    const page = event.target.closest('.wiki-page');
    page.remove(); // Supprime la page
}

// Création d'une page
document.getElementById("wiki-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des données du formulaire
    const title = document.getElementById("page-title").value;
    const content = document.getElementById("page-content").value;
    const imageUrl = document.getElementById("page-image").value;

    // Création de l'élément pour afficher la page
    const pageDiv = document.createElement("div");
    pageDiv.classList.add("wiki-page");

    // Titre de la page
    const pageTitle = document.createElement("h3");
    pageTitle.textContent = title;
    pageDiv.appendChild(pageTitle);

    // Contenu de la page
    const pageContent = document.createElement("p");
    pageContent.textContent = content;
    pageDiv.appendChild(pageContent);

    // Ajouter l'image si l'URL est présente
    if (imageUrl) {
        const pageImage = document.createElement("img");
        pageImage.src = imageUrl;
        pageImage.alt = "Image de la page";
        pageDiv.appendChild(pageImage);
    }

    // Bouton de suppression de la page
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", deletePage);
    pageDiv.appendChild(deleteButton);

    // Ajout de la page dans la section des pages
    document.getElementById("wiki-pages").appendChild(pageDiv);

    // Réinitialiser le formulaire après la soumission
    document.getElementById("wiki-form").reset();
});
