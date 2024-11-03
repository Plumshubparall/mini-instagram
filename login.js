document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    // basecita de datos

    let validUsername = 'ProgramacionI';
    let validPassword = 'contrasena123';

    // validar lo que el usuario escribe

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (username === validUsername && password === validPassword){
        localStorage.setItem('logueado', 'true');
        window.location.href = 'index.html';
    }else{
        Swal.fire({
            icon: "error",
            title: "No se pudo iniciar sesión",
            text: "Credenciales incorrectas.",
            footer: '<a href="#">¿Por qué tengo este problema?</a>'
        });
    }
});
