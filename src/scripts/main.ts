const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener("error", (e) => {
        img.classList.add("unloaded");
    })
})