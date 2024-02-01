let btn = document.getElementById("btnLoginJs");


btn.addEventListener('click', ()=>{
 document.getElementById("password").value = "";
 document.getElementById("email").value = "";
 document.getElementById("email").focus();
})
