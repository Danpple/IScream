const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.remove("hidden");
            entry.target.classList.add("appear");
        }
        else {
            entry.target.classList.add("hidden");
            entry.target.classList.remove("appear");
        }
    });
});



const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));