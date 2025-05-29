const text = document.getElementById("typewriting-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Frontend Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Fullstack Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Dedicated Freelancer";
    }, 8000);
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } 
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

document.getElementById("pokemonapp").addEventListener("click", function() {
    window.location.href = "https://zenaspokemonapp.netlify.app/ ";
});

textLoad();
setInterval(textLoad, 12000);
