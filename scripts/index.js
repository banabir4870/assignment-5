document.getElementById('btn-signIn').addEventListener('click', function(){
    const userNameInput = document.getElementById("username-input");
    const userName = userNameInput.value;
    if(userName != "admin" || userName == " "){
        alert("Invalid User Name");
        return;
    }
    const passInput = document.getElementById("pass-input");
    const pass = passInput.value;
    if(pass != "admin123" || pass == " "){
        alert("Invalid Password");
        return;
    }
    else{
        alert("Welcome Admin");
        window.location.href = "main.html";
    }
})