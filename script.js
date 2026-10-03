
console.log("Portfolio website loaded successfully!");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function() {
        console.log("Opening: " + this.textContent);
    });
});