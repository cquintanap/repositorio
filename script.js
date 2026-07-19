// Usamos el constructor String y eliminamos cualquier espacio al inicio o final
const SUPABASE_URL = String("https://syoxpjclsvbjyiskuxqr.supabase.co").trim();
const SUPABASE_KEY = String("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5b3hwamNsc3Zianlpc2t1eHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxNzI2NjAsImV4cCI6MjA5OTc0ODY2MH0.u1jGVx4t40ivJU03q-ivHiSApw0wlm3jbTangW0MexU").trim();

// Inicializamos usando las variables limpias
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const formulario = document.getElementById("frmUsuario");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Ponemos un mensaje de carga visual
    document.getElementById("mensaje").innerHTML = "⏳ Guardando usuario...";

    const { error } = await client
        .from("Usuario")
        .insert({
            username: document.getElementById("username").value,
            contrasena: document.getElementById("contrasena").value, 
            nombres: document.getElementById("nombres").value,
            apellidos: document.getElementById("apellidos").value,
            dni: document.getElementById("dni").value,
            telefono: document.getElementById("telefono").value,
            email: document.getElementById("email").value,
            direccion: document.getElementById("direccion").value,
            cargo: document.getElementById("cargo").value,
            fecha_ing: document.getElementById("fecha_ing").value || null, // Si está vacío, envía null
            fecha_nac: document.getElementById("fecha_nac").value || null  // Si está vacío, envía null
        });

    if (error) {
        console.error("Detalle del error:", error); // Esto te ayudará a ver el error real en la consola
        document.getElementById("mensaje").innerHTML = "❌ Error: " + error.message;
    } else {
        document.getElementById("mensaje").innerHTML = "✅ Usuario registrado correctamente";
        formulario.reset();
    }
});
