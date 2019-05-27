
//EMERGECIAS CONTROLLER
function indexEmergencias(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      document.getElementById('emergenciasLoading').style.display='none';
      document.getElementById('emergenciasContent').style.display='block';
    }else{
      document.querySelector("#myNavigator").pushPage('panel.html');
    }
  }
  function detalleEmergencias(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      document.getElementById('detalleemergenciasLoading').style.display='none';
      document.getElementById('detalleemergenciasContent').style.display='block';
    }else{
      document.querySelector("#myNavigator").pushPage('panel.html');
    }
  }
  function mapaEmergencia(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      document.getElementById('mapaemergenciasLoading').style.display='none';
      document.getElementById('mapaemergenciasContent').style.display='block';
    }else{
      document.querySelector("#myNavigator").pushPage('panel.html');
    }
  }
  