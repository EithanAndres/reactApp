function mostrarComidas(region) {
  var comidasDiv = document.getElementById('comidas');
  comidasDiv.innerHTML = '';

  var comidas = obtenerComidasPorRegion(region);

  if (comidas.length > 0) {
    var listaComidas = document.createElement('ul');

    for (var i = 0; i < comidas.length; i++) {
      var comida = document.createElement('li');
      comida.textContent = comidas[i];
      listaComidas.appendChild(comida);
    }

    comidasDiv.appendChild(listaComidas);
  } else {
    comidasDiv.textContent = 'No se encontraron comidas para esta región.';
  }
}

function obtenerComidasPorRegion(region) {
  var comidas = [];

  if (region === 'costa') {
    comidas = ['Ceviche', 'Encebollado', 'Guatita'];
  } else if (region === 'sierra') {
    comidas = ['Cuy asado', 'Hornado', 'Llapingachos'];
  } else if (region === 'amazonia') {
    comidas = ['Maito de pescado', 'Suri', 'Yuca con chicha'];
  } else if (region === 'galapagos') {
    comidas = ['Pescado encocado', 'Lobster', 'Locro de papa'];
  }

  return comidas;
}