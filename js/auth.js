function intentarLogin() {
    const user = document.getElementById("user").value.trim().toUpperCase();
    const pass = document.getElementById("pass").value.trim();
    const errorMsg = document.getElementById("error-msg");
    const btn = document.querySelector(".btn-login");

    // Credenciales correctas
    if (user === "DC ESPORT" && pass === "1234") {
        
        // Efecto visual de carga
        btn.innerText = "VERIFICANDO...";
        btn.style.opacity = "0.7";
        btn.disabled = true;

        // Pequeña pausa para simular seguridad y desvanecer la pantalla
        setTimeout(() => {
            document.getElementById("login-screen").style.opacity = "0";
            document.getElementById("login-screen").style.transition = "0.5s";
            
            // Redirección oficial
            setTimeout(() => {
                window.location.href = "inicio.html";
            }, 500);
            
        }, 1000);

    } else {
        // En caso de error
        errorMsg.innerText = "❌ ACCESO DENEGADO: CREDENCIALES INVÁLIDAS";
        
        // Animación de sacudida (opcional)
        document.querySelector(".login-card").classList.add("shake");
        setTimeout(() => {
            document.querySelector(".login-card").classList.remove("shake");
        }, 300);
    }
}