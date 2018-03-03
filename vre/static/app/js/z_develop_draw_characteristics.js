/*

<li class="list-item">
  <img src="{% static "img/vre/vre-metros.svg" %}" alt="" />
  <p>230 m<sup>2</sup></p>
</li>
*/

var draw_characteristics = function(depa, desarollo) {

  var desarrollo = departamentos_json.departamentos[desarollo];
  var caracteristicas = desarrollo[depa].caracteristicas;

  var template_li = "";


  for(var caracteristica in caracteristicas) {
    console.log(caracteristicas[caracteristica]);

    template_li += "<li class='list-item'><img src='/static/vre/" + caracteristica + ".svg' /><p>" + caracteristicas[caracteristica] + "</p></li>";
  }

  return template_li;
}

draw_characteristics("depa101", "beistegui");