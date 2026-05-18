
            // chargement
            // Attend que tout soit chargé (images, CSS, etc.)
            window.addEventListener("load", function () {
                // Cache le loader
                document.getElementById("loader").style.display = "none";

                // Affiche le contenu principal
                document.getElementById("content").classList.remove("hidden");
                document.getElementById("content").classList.add("show");
            });

            // blocs

            function ouvrir() {
                document.getElementById('fenetre').style.display = 'block';
            }
            function fermer() {
                document.getElementById('fenetre').style.display = 'none';
            }
            // Quand tu clique à coté le fenetre doit se fermé
            window.onclick = function (event) {
                const modal = document.getElementById('fenetre');

                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            }