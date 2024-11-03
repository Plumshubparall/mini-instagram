function mostrarConsejo() {
    const frases = [
       "Octubre, el mejor mes del año", 
       "Ya falta poco para el finde, igual trabajo pero no importa",
       "Mañana es jueves, el mejor dia de la semana",
       "Se viene el aguinaldo!",
       "seguí estudiando para tener un mejor trabajo 💜"
    ];

    //seleccionar una frase de manea aleatoria

    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

    const toastuno = document.getElementById("toastuno");

     toastuno.textContent = fraseAleatoria;
     toastuno.classList.add("show");

     setTimeout(() => {
       toastuno.classList.remove("show");
     },3000)
  }  
  