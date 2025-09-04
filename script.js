document.getElementById("formContact").addEventListener("submit", function(e){
    e.preventDefault();
    let prenom=document.getElementById("prenom").value
    let nom=document.getElementById("nom").value
    let message=document.getElementById("message").value
    let sujet=document.getElementById("sujet").value

    if (prenom && nom && sujet && message){
        alert("Merci "  + prenom + " " + nom + " Votre message a bien été envoyé.");
        this.reset();
    } else{
        alert("Veuillez remplir tous les champs.");
    }
}
);