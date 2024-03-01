document.addEventListener("DOMContentLoaded", () => { 
   const texto = document.body.querySelector("#texto");
   texto.addEventListener("click",() => {
     if (texto.textContent === "Hello World")
        texto.textContent = "Olá Mundo";
     else 
         texto.textContent = "Hello World";
   });
});
