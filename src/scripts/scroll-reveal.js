const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__content .header__btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".explore__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".explore__content .section__description", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".explore__content .explore__btn", {
    ...scrollRevealOption,
    delay: 1500,
});