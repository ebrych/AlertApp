//HOME CONTROLLER
function indexHome(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      document.querySelector("#myNavigator").pushPage('panel.html');
    }else{
      var hgt=(document.documentElement.clientHeight*0.75);
      var alt=hgt+'px';
      document.getElementById('headerContent').style.height=alt;
      document.getElementById('homeLoading').style.display='none';
      document.getElementById('homeContent').style.display='block';
     
    }
  }
  function loginHome(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      document.querySelector("#myNavigator").pushPage('panel.html');
    }else{
      document.getElementById('loginLoading').style.display='none';
      document.getElementById('loginContent').style.display='block';
    }
  }