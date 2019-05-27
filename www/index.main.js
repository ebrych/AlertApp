//MAIN
 var ServiceUrl="https://www.tutolapp.com/servicios/";

document.addEventListener('init', function(event) {
    var page = event.target;
  
    if (page.id === 'home') {
      //HOME
      homeViewFormat();
      indexHome();
        page.querySelector('#btnGoLogin').onclick = function(){
        document.querySelector("#myNavigator").pushPage('login.html'); 
      }
      page.querySelector('#btnGoRegister').onclick = function(){
        document.querySelector("#myNavigator").pushPage('register.html');
      }
    }else if(page.id=="login"){
        //LOGIN
        internalViewFormat();
        indexLogin();
        //event iniciar sesion
        document.querySelector("#btnLogin").onclick = function(){
          iniciarSesion();
        }
        document.querySelector('#backToHome').onclick=function(){
          homeViewFormat();
        }
        page.querySelector('#linkRegister').onclick = function(){
            document.querySelector("#myNavigator").pushPage('register.html');
        }
        
    }else if(page.id=="register"){
      //REGISTER
        internalViewFormat();
        indexRegister();
        document.querySelector("#btnRegistra").onclick = function(){
          guardarDatos();
          //ons.notification.alert("Valida e registra");
        }
        document.querySelector('#backToHome').onclick=function(){
          homeViewFormat();
        }
    }else if(page.id=="panel"){
      //PANEL
      internalViewFormat();
      indexPanel();
      document.querySelector("#btnSalir").onclick = function(){
        exit();
      }
      document.querySelector("#btnConfig").onclick = function(){
        document.querySelector("#myNavigator").pushPage('config.html');
      }
      document.querySelector('#btnReportar').onclick = function(){
        document.querySelector("#myNavigator").pushPage('reportar.html');
      }
      document.querySelector('#btnHistorial').onclick = function(){
        document.querySelector("#myNavigator").pushPage('historial.html');
      }
      document.querySelector('#btnEmergencias').onclick = function(){
        document.querySelector('#myNavigator').pushPage('emergencias.html');
      }
    }else if(page.id=="config"){
      //CONFIG
      indexConfig();
      document.querySelector("#btnGuardarMisDatos").onclick = function(){
        guardarDatosUsuario();
      }
    }else if(page.id=="reportar"){
      //REPORTAR
      indexReportar();
      document.querySelector('#btnGuardarReporte').onclick = function(){
        agregarReporte();
      }
      document.querySelector('#btntakePicture').onclick = function(){
        

      }
    }else if(page.id=="historial"){
      //HISTORIAL
      indexHistorial();
      document.querySelector('#btnDetalleListaReporte').onclick = function(){
        document.querySelector("#myNavigator").pushPage('detallehistorial.html');
      }
    }else if(page.id=="detallehistorial"){
      DetalleHistorial();
      document.querySelector('#btnMapaDetalleHistorial').onclick = function(){
        document.querySelector("#myNavigator").pushPage('mapahistorial.html');
      }
    }else if(page.id=="mapahistorial"){
      MapaHistorial();
    }else if(page.id=="emergencias"){
      //EMERGENCIAS
      indexEmergencias();
      document.querySelector('#btnDetalleListaEmergencia').onclick = function(){
        document.querySelector("#myNavigator").pushPage('detalleemergencias.html');
      }
    }else if(page.id=="detalleemergencias"){
      detalleEmergencias();
      document.querySelector('#btnMapaEmergencia').onclick = function(){
        document.querySelector("#myNavigator").pushPage('mapaemergencias.html');
      }
    }else if(page.id=="mapaemergencias"){
      mapaEmergencia();
    }
  
    });
  
  