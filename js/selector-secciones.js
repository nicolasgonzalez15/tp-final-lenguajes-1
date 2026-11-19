const btntodo = document.getElementById("selector-todo"); 
const btnlugares = document.getElementById("selector-lugares-interes"); 
const btngastronomia = document.getElementById("selector-gastronomia"); 
const btnexcursiones = document.getElementById("selector-excursiones"); 

btntodo.addEventListener("click", function() {
    document.getElementById("lugares-interes").style.display = "block"; 
    document.getElementById("gastronomia").style.display = "block"; 
    document.getElementById("excursiones").style.display = "block"; 
});

btnlugares.addEventListener("click", function() {
    document.getElementById("lugares-interes").style.display = "block"; 
    document.getElementById("gastronomia").style.display = "none"; 
    document.getElementById("excursiones").style.display = "none"; 
});     

btngastronomia.addEventListener("click", function() {
    document.getElementById("lugares-interes").style.display = "none"; 
    document.getElementById("gastronomia").style.display = "block"; 
    document.getElementById("excursiones").style.display = "none"; 
}); 

btnexcursiones.addEventListener("click", function() {
    document.getElementById("lugares-interes").style.display = "none"; 
    document.getElementById("gastronomia").style.display = "none"; 
    document.getElementById("excursiones").style.display = "block"; 
});