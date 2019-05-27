//PANEL CONTROLLER
function indexPanel(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      document.getElementById('PanelLoading').style.display='none';
      document.getElementById('PanelContent').style.display='block';
      var name=window.sessionStorage.getItem("nombre");
      document.getElementById('lblName').innerHTML = name;
    }else{
      document.querySelector("#myNavigator").pushPage('home.html');
    }
    //document.querySelector("#lblNombre").textContent("hola mundo")
  }

function exit(){
    window.sessionStorage.clear();
    location.reload();
    
}
  