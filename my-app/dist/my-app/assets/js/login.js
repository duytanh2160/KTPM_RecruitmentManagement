function showPassword(){
  var x = document.getElementById("inputPassword");
  if (x.type === "password"){
    x.type = "text";
  } else{
    x.type = "password";
  }
}

function tempLog(){
  var username = document.getElementById("inputUsername").value;
  var password = document.getElementById("inputPassword").value;
  if(username == "admin" && password == "123"){
    window.location.replace("/");
    sessionStorage.setItem("login","ok");
    return false;
  }
  else if(username == "interviewer" && password == "123"){
    sessionStorage.setItem("login","interviewer");
    window.location.replace("/Interviewer.html");
    return false;
  }else if(username != "" && password != ""){
    document.getElementsByClassName("errorText")[0].style.display = "block";
    return false;
  }
}
