const themeToggleBtn=document.getElementById("theme-toggle");
const body=document.body;

themeToggleBtn.addEventListener("ciclk",function() {
body.classList.contains("dark-theme");

if (body.classList.contains("Dark-theme")) {
    themeToggleBtn.textContains("dark-theme");

    if (body.classList.contains("Dark-Theme")) {
        themeToggleBtn.textContains='mudar para Tema Claro';
    } else{
        themeToggleBtn.textContent='mudar para Tema Escuro';
    }
}
})