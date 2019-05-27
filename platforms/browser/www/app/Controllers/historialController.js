
//HISTORIAL CONTROLLER
function indexHistorial(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      document.getElementById('historialLoading').style.display='none';
      document.getElementById('historialContent').style.display='block';
    }else{
      document.querySelector("#myNavigator").pushPage('panel.html');
    }
  }
  function DetalleHistorial(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      document.getElementById('detallehistorialLoading').style.display='none';
      document.getElementById('detallehistorialContent').style.display='block';
    }else{
      document.querySelector("#myNavigator").pushPage('panel.html');
    }
  }
  function MapaHistorial(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      document.getElementById('mapahistorialLoading').style.display='none';
      document.getElementById('mapahistorialhistorialContent').style.display='block';
    }else{
      document.querySelector("#myNavigator").pushPage('panel.html');
    }
  }
  