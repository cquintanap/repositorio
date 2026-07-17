const URL="https://TU-PROYECTO.supabase.co";

const KEY="TU_ANON_KEY";

const supabase = window.supabase.createClient(URL,KEY);

const formulario=document.getElementById("frmUsuario");

formulario.addEventListener("submit",async(e)=>{

e.preventDefault();

const {error}=await supabase

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