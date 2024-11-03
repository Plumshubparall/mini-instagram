function ChangeDarkMode(){
    //alternar la clase dark mode
    document.body.classList.toggle("dark-mode");
    
    const button = document.getElementById("darkModeSwitch");
    
    //cambiar el boton segun el modo.
    if(document.body.classList.contains("dark-mode")){
       button.textContent = 'es de noche 🌙';
    }else{
       button.innerHTML = 'es de dia ☀️';
    }

    
    };