document.addEventListener('DOMContentLoaded', function () {
    // Récupérer les données depuis votre API Django
    fetch('http://127.0.0.1:8000/beyondShop/orders/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de récupération des données');
            }
            return response.json();
        })
        .then(data => {
            // Traitement des données et affichage sur la page
            displayData(data);
        })
        .catch(error => {
            console.log('Erreur : ', error);
        });

    // Fonction pour afficher les données sur la page
    function displayData(data) {
        var container = document.getElementById('data-container2');
        container.innerHTML = '';  // Effacer le contenu précédent, au cas où

        // Parcourir les données et les ajouter au conteneur
        data.forEach(item => {
            container.innerHTML += `<p>${item.created_at}</p><p>${item.total_amount}$</p>`;
            // Assurez-vous de remplacer "name" et "price" par les noms réels de vos champs
        });
    }
});