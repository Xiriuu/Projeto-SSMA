document.addEventListener("DOMContentLoaded", () => {
    const loadFooter = async () => {
        try {
            const response = await fetch("/headerFooter/footer.html");
            if (!response.ok) {
                throw new Error(
                    `Erro ao carregar o rodapé: ${response.statusText}`
                );
            }
            const footerHTML = await response.text();
            document.body.insertAdjacentHTML("beforeend", footerHTML);
        } catch (error) {
            console.error("Erro ao carregar o rodapé:", error);
        }
    };

    loadFooter();

    const loadHeader = async () => {
        try {
            const response = await fetch("/headerFooter/header.html");
            if (!response.ok) {
                throw new Error(
                    `Erro ao carregar o cabeçalho: ${response.statusText}`
                );
            }
            const headerHTML = await response.text();
            document.body.insertAdjacentHTML("afterbegin", headerHTML);
        } catch (error) {
            console.error("Erro ao carregar o cabeçalho:", error);
        }
    };

    loadHeader();

    const linkHeaderCSS = () => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/headerFooter/header-footer.css";
        document.head.appendChild(link);
    };

    linkHeaderCSS();
});

document.addEventListener("click", event => {
    if (event.target.classList.contains("icon-menu")) {
        event.target.classList.replace("icon-menu", "icon-cross");
    } else if (event.target.classList.contains("icon-cross")) {
        event.target.classList.replace("icon-cross", "icon-menu");
    }
});
