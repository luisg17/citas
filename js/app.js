//Revisar si el navegador soporta service worker

var url = window.location.href;
var swLocation = '/citas/sw.js';

if(navigator.serviceWorker){

  if(url.includes('localhost')){
    swLocation = '/sw.js';
  }
  //registramos nuestro sw.js y esto nos retornara un Promise
  navigator.serviceWorker.register(swLocation)
      .then(registrado => console.log('Se instalo correctamente', registrado))
      .catch(error => console.log('Fallo la instalacion', error))
}else{
  console.log('Service Workers no soportados');
}


