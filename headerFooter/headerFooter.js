document.addEventListener("DOMContentLoaded", function(){
    const pageTitle = document.getElementById("page-title");

     // Carregar o rodapé
    fetch("/assets/components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
    
})