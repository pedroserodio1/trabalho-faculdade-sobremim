document.addEventListener("DOMContentLoaded", function() {
    //seleciona os elementos do menu para poder manipular as tabs
    const tabs = document.querySelectorAll(".menu ul li a");

    //seleciona os conteudos para demonstrar na tela
    const contents = document.querySelectorAll(".content");



    tabs.forEach(tab => {
        tab.addEventListener("click", function(e) {
            e.preventDefault();

            //tira a classe ativa dos elementos das tabs
            tabs.forEach(tab => {
                tab.classList.remove("active");
            });

            // coloca a classe ativa na tab selecionada
            this.classList.add("active");

            // oculta todos os conteudos
            contents.forEach(content => {
                content.style.display = "none";
            });

            // coloca o conteudo da tab selecionada 
            const targetContentId = this.getAttribute("href").substring(1);
            const targetContent = document.getElementById(targetContentId);
            targetContent.style.display = "block";
        });
    });

    // exibe o primeiro conteudo quando abrir a pagina
    tabs[0].click();
});
