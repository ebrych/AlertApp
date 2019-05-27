//LOGIN CONTROLLER
function indexLogin(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      document.querySelector("#myNavigator").pushPage('panel.html');
    }else{
      document.getElementById('loginLoading').style.display='none';
      document.getElementById('loginContent').style.display='block';
    }
  }



  function iniciarSesion(){
    var username = document.getElementById('txtUser').value;
    var password = document.getElementById('txtPass').value;
    if(username!="" && password!=""){
        var formData = {user:username,pass:password}; 
        //load
        document.getElementById('loginLoading').style.display='block';
        document.getElementById('loginContent').style.display='none';
        //peticion
        $.ajax({
            url : ServiceUrl+'sesiones.php',
            type: "POST",
            headers: {  
              'Access-Control-Allow-Credentials' : true,  
              'Access-Control-Allow-Origin': '*',  
              'Access-Control-Allow-Methods':'POST',  
              'Access-Control-Allow-Headers':'application/json',  
              },
            data : formData,
            //dataType: "json"
            success: function(data, textStatus, jqXHR)
            {
                if(data!="null"){
                  var datax = JSON.parse(data);
                  window.sessionStorage.setItem("id", datax.id);
                  window.sessionStorage.setItem("nombre", datax.nombre);
                  window.sessionStorage.setItem("correo", datax.id);
                  window.sessionStorage.setItem("estado", datax.estado);
                  window.sessionStorage.setItem("token", datax.token);
                  window.sessionStorage.setItem("rol", datax.rol);
                  window.sessionStorage.setItem("session", datax.session);
                  document.querySelector("#myNavigator").pushPage('panel.html');
                }else{
                  document.getElementById('loginLoading').style.display='none';
                  document.getElementById('loginContent').style.display='block';
                  ons.notification.alert("Usuario o contraseña no validas");
                }
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
              console.log(textStatus);
            }
        });
    }else{
      ons.notification.alert("Ingresa un Usuario con su contraseña");
    }
    

  }
  