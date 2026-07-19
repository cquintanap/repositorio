const URL="https://syoxpjclsvbjyiskuxqr.supabase.co";

const KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5b3hwamNsc3Zianlpc2t1eHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxNzI2NjAsImV4cCI6MjA5OTc0ODY2MH0.u1jGVx4t40ivJU03q-ivHiSApw0wlm3jbTangW0MexU";

const db = window.supabase.createClient(URL,KEY);

const formulario=document.getElementById("frmUsuario");

formulario.addEventListener("submit",async(e)=>{

e.preventDefault();

const {error}=await db

.from("Usuario")

.insert({

username:document.getElementById("username").value,

contraseña:document.getElementById("contrasena").value,

nombres:document.getElementById("nombres").value,

apellidos:document.getElementById("apellidos").value,

dni:document.getElementById("dni").value,

telefono:document.getElementById("telefono").value,

email:document.getElementById("email").value,

direccion:document.getElementById("direccion").value,

cargo:document.getElementById("cargo").value,

fecha_ing:document.getElementById("fecha_ing").value,

fecha_nac:document.getElementById("fecha_nac").value

});

if(error){

document.getElementById("mensaje").innerHTML=
"❌ "+error.message;

}else{

document.getElementById("mensaje").innerHTML=
"✅ Usuario registrado correctamente";

formulario.reset();

}

});
