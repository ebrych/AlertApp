//CONFIG CONTROLLER
function indexConfig(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      var usr=window.sessionStorage.getItem("id");
      var tkn=window.sessionStorage.getItem("token");
      var formData = {user:usr,token:tkn};
      $.ajax({
        url : ServiceUrl+'infoUser.php',
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
              document.getElementById('txtName').value=datax.nombre;
              document.getElementById('txtApellidos').value=datax.apellidos;
              document.getElementById('txtDni').value=datax.dni;
              document.getElementById('txtMail').value=datax.correo;
              document.getElementById('txtName').value=datax.nombre;

              document.getElementById('ConfigLoading').style.display='none';
              document.getElementById('configContent').style.display='block';
            }else{
              ons.notification.alert("Usuario no encontrado");
            }
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          console.log(textStatus);
        }
    });

    }else{
      document.querySelector("#myNavigator").pushPage('home.html');
    }
}

function guardarDatosUsuario(){
  document.getElementById('configContent').style.display='none';
  document.getElementById('ConfigLoading').style.display='block';
  var nombre=document.getElementById('txtName').value;
  var apellidos=document.getElementById('txtApellidos').value;
  var numeroDni=document.getElementById('txtDni').value;
  var correo=document.getElementById('txtMail').value;
  var pass=document.getElementById('txtpsa').value;
  var usr=window.sessionStorage.getItem("id");
  var tkn=window.sessionStorage.getItem("token");
  //valida pass
  if(pass==""){
    pass="null";
  }
  var formData = {
    user:usr,
    token:tkn,
    nombre:nombre,
    apellidos:apellidos,
    numeroDni:numeroDni,
    correo:correo,
    pass:pass};
  $.ajax({
    url : ServiceUrl+'actualizaDataUsr.php',
    type: "POST",
    headers: {  
      'Access-Control-Allow-Credentials' : true,  
      'Access-Control-Allow-Origin': '*',  
      'Access-Control-Allow-Methods':'POST',  
      'Access-Control-Allow-Headers':'application/json',  
      },
    data : formData,
    success: function(data, textStatus, jqXHR)
    {
        if(data!="null"){
            if(data=="1"){
              ons.notification.alert("Se actualizaron los datos");
            }else if(data=="2"){
              ons.notification.alert("No se puedo actulizar los datos");
            }else{
              ons.notification.alert("error del servicio");
            }
        }else{
          ons.notification.alert("Usuario no encontrado");
        }
        document.getElementById('configContent').style.display='block';
        document.getElementById('ConfigLoading').style.display='none';
    },
    error: function (jqXHR, textStatus, errorThrown)
    {
      ons.notification.alert("Error "+textStatus);
        document.getElementById('configContent').style.display='block';
        document.getElementById('ConfigLoading').style.display='none';
    }
    });
    
}