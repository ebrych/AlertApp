//REGISTER CONTROLLER
function indexRegister(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      document.querySelector("#myNavigator").pushPage('panel.html');
    }else{
      document.getElementById('RegisterLoading').style.display='none';
      document.getElementById('registerContent').style.display='block';
    }
  }
  