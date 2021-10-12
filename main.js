// Seleccionando Elementos

// Por ID
let elementoPorId = document.getElementById('parrafo1');
elementoPorId.innerHTML = 'HTML';

// Por nombre de la clase
let elementosPorClase = document.getElementsByClassName('parrafos');
console.log(elementosPorClase.length);
elementosPorClase[1].innerHTML = 'CSS';

// Por etiqueta
let elementosPorEtiquetas = document.getElementsByTagName('p');
console.log(elementosPorEtiquetas.length);
elementosPorEtiquetas[2].innerHTML = 'Javascript';

// Modificando estilos
elementoPorId.style.background = 'black';
elementoPorId.style.color = 'white';
elementoPorId.style.borderRadius = '8px';
elementoPorId.style.width = '250px';
elementoPorId.style.textAlign = 'center';


