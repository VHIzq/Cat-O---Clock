const app = () => {
  //función reloj.
  let time = new Date(); //crea un objeto de tipo Date
  let hr = formHour(time.getHours()); //extrae horas del objeto Date
  let min = formHour(time.getMinutes()); //extrae min
  let sec = formHour(time.getSeconds()); //extrae seg 
  let timeNow = `${hr}: ${min}: ${sec}`; //las template literals son asignadas a una variable (timeNow)
  document.getElementById("time").innerHTML = timeNow; //se accede al DOM y se asigna con timeNow
};
//formatear hora a dos dígitos
function formHour(hour){
  if(hour < 10)
    hour = "0" + hour;
    return hour;
}
setInterval(app, 1000);