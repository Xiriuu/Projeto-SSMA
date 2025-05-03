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
    const icon = event.target;
    const menu = document.getElementById("menu");

    if (icon.classList.contains("icon-menu")) {
        icon.classList.replace("icon-menu", "icon-cross");
        if (menu) menu.classList.remove("hidden");
    } else if (icon.classList.contains("icon-cross")) {
        icon.classList.replace("icon-cross", "icon-menu");
        if (menu) menu.classList.add("hidden");
    }
});

