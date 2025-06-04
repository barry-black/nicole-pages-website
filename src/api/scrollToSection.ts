export const scrollToSection = (id: string) => {
    const scrollTo = () => {
        const section = document.getElementById(id);
        const header = document.querySelector("header");

        if (section && header) {
            const yOffset = -header.offsetHeight;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    // Scroll immédiatement
    scrollTo();

    // Re-scroll après animation (prévient bugs liés à whileInView)
    setTimeout(() => {
        scrollTo();
    }, 600);
};
