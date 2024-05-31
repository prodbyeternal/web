
function changeTheme(){
    var elements = document.getElementsByClassName('dt');
    for(let i = 0;  i < elements.length; i++){
        elements[i].classList.toggle("dark-mode");
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('theme-toggle').addEventListener('click', function() {
        changeTheme();
    });
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        changeTheme();
    }
});





