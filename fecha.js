let fecha = new Date();
let dia = fecha.getDate();
const opcionesDias = {weekday:'long'}
const nombreDia = fecha.toLocaleDateString('es-Es', opcionesDias);
const opcionesMes = {month: 'long'}
const nombreMes = fecha.toLocaleDateString('es-Es', opcionesMes);


document.getElementById('fecha-hora').innerHTML = `Hoy es ${nombreDia}, ${dia} de ${nombreMes}`;
