document.getElementById('life-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs du formulaire
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;

    // Calculer les semaines écoulées et restantes
    var userWeeksLived = age * 52; // Âge de l'utilisateur en semaines
    var userWeeksLeft = (90 - age) * 52; // Semaines restantes pour l'utilisateur

    // Calculer le pourcentage de temps restant total passé avec les parents
    var avgParentTime = gender === 'male' ? 76 : 81; // Pourcentage moyen pour le genre masculin ou féminin
    var userParentTime = gender === 'male' ? 76 : 81; // Pourcentage pour l'utilisateur

    // Mettre à jour les valeurs dans le tableau
    document.getElementById('user-weeks-lived').textContent = userWeeksLived;
    document.getElementById('user-weeks-left').textContent = userWeeksLeft;
    document.getElementById('user-parent-time').textContent = userParentTime + '%';
    
});