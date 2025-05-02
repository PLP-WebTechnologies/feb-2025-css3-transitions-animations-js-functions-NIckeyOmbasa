document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("animatedButton");

    // Load saved preferences
    if (localStorage.getItem("buttonClicked") === "true") {
        button.classList.add("clicked");
    }

    button.addEventListener("click", () => {
        button.classList.toggle("clicked");

        // Store user preference in localStorage
        localStorage.setItem("buttonClicked", button.classList.contains("clicked"));
    });
});
