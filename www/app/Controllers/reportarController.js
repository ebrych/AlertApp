//REPORTAR CONTROLLER
var datoGeolocalizacion=null;
function indexReportar(){
    var MySes=window.sessionStorage.getItem("session");
    if(MySes=="true"){
      document.getElementById('reportarLoading').style.display='none';
      document.getElementById('reportarContent').style.display='block';
    }else{
      document.querySelector("#myNavigator").pushPage('panel.html');
    }
  }
  function agregarReporte(){
    //ons.notification.alert("Guardar Reporte");
    getGeoLocalitation();
    console.log(datoGeolocalizacion);
  }




  //private
  function getGeoLocalitation(){
    var geo;
    navigator.geolocation.getCurrentPosition(onSuccess, onError,{enableHighAccuracy:true});
    function onSuccess(position) {
          geo = { lat:position.coords.latitude ,long: position.coords.longitude };
          datoGeolocalizacion=geo;
          /*console.log('Latitude: '           + position.coords.latitude              + '<br />' +
                              'Longitude: '          + position.coords.longitude             + '<br />' +
                              'Altitude: '           + position.coords.altitude              + '<br />' +
                              'Accuracy: '           + position.coords.accuracy              + '<br />' +
                              'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                              'Heading: '            + position.coords.heading               + '<br />' +
                              'Speed: '              + position.coords.speed                 + '<br />' +
                              'Timestamp: '          + position.timestamp                    + '<br />');*/
      }
    function onError(error) {
          /*alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');*/
      }
  }
  