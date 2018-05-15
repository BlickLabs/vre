// Obtiene el elemento padre de la lista de caracteristicas,
// Para poder eliminar y agregar las nuevas caractetristicas segun el,
// desarrollo y departamento seleccionado.
var lista_de_caracteristicas = document.querySelector('.department-icons');

var activar_elemento = function(el) {
  var length             = el.parentNode.children.length;
  var elementos_de_lista = el.parentNode.children;

  for(var i = 0; i < length ; i++) {
    if( elementos_de_lista[i].classList.contains('active') ) {
      elementos_de_lista[i].classList.remove('active');
    }
    el.classList.add('active');
  }
};


/*
* Actualiza la lista y la imagen del plano.
*/
var actualizar_caracteristicas = function(el, desarrollo) {
  var lista_actual    = document.querySelector('.icons-list');
  var plano           = document.querySelector('.department-img img');
  var departamento    = el.dataset.id;
  var info_desarrollo = departamentos_json.departamentos[desarrollo][departamento];
  var nuevas_caracteristicas = '';

  nuevas_caracteristicas = caracteristicas(departamento, desarrollo);
  lista_de_caracteristicas.removeChild(lista_actual);
  lista_de_caracteristicas.appendChild(nuevas_caracteristicas);
  activar_elemento(el);
  plano.src = '/static/img/vre/' + desarrollo + '/' + info_desarrollo.caracteristicas.plano;

};


/*
* Retorna el elemento UL.
* Y sus elementos hijos LI ya con las caracteristicas.
*/
var caracteristicas = function(depa, desa) {

  // Se obtiene toda la informacion del departamento.
  // departamentos_json es parte del archivo info-departamentos.json.js
  // Contiene en formato JSON toda la inforamcion.
  var desarrollo      = departamentos_json.departamentos[desa];
  var caracteristicas = desarrollo[depa].caracteristicas;

  // Se crean elementos de listam, con las caracteristicas del departamento.
  var ul       = document.createElement('ul');
  ul.className = 'icons-list';

  for(var caracteristica in caracteristicas) {
    if (caracteristica != 'plano') {
      var li  = document.createElement('li');
      var img = document.createElement('img');
      var p   = document.createElement('p');

      li.className = 'list-item';
      img.src      = '/static/img/vre/' + caracteristica + '.png';
      p.innerHTML  = caracteristicas[caracteristica];

      li.appendChild(img);
      li.appendChild(p);
      ul.appendChild(li);
    }
  }

  if (ul.children.length == 1) {
    ul.classList.add('icons-center');
    return ul;
  } else {
    return ul;
  }
};
