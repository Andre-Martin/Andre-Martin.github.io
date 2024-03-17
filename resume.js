window.onload = function() {
    const date = new Date().toLocaleDateString();
    document.getElementById("today").innerHTML = date;
    
    let darkMode;

    if(localStorage.getItem("dark-mode")) {
        darkMode = localStorage.getItem("dark-mode");
    }
    else {
        darkMode = "light_mode"
    }
    
    localStorage.setItem("dark-mode", darkMode);
    
    if(localStorage.getItem("dark-mode") == "dark_mode") {
        document.body.classList.add("dark_mode");
        document.getElementById("darkMode").setAttribute("hidden", "hidden");
        document.getElementById("lightMode").removeAttribute("hidden");
    }
    
    document.getElementById("darkMode").addEventListener("click", function() {
        document.getElementById("darkMode").setAttribute("hidden", "hidden");
        document.getElementById("lightMode").removeAttribute("hidden");
        document.body.classList.add("dark_mode");
        
        localStorage.setItem("dark-mode", "dark_mode");
    });
    
    document.getElementById("lightMode").addEventListener("click", function() {
        document.getElementById("lightMode").setAttribute("hidden", "hidden");
        document.getElementById("darkMode").removeAttribute("hidden");
        document.body.classList.remove("dark_mode");
    
        localStorage.setItem("dark-mode", "light_mode");
    });
}