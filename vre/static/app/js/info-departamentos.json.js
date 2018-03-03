  /*
  * La variable departamentos_json queda declarada de manera global
  * para poder acceder a ella desde cualquier parte, y asi poder hacer
  * las peticiones como si fuera un API.
  * 
  * Ya en cada vista de los desarrollos, por ejemplo: Beistegui,
  * Indiana, Dakota, etc..
  * 
  * Se puede crear una variable que contenga solo la informacion de ese desarrollo
  * Ejemplo:
  * 
  * let beistegui = departamentos_json.departamentos.beistegui
  * 
  * El cual nos dara un objeto con la info de todos sus departamentos
  * y caracteristicas.
  */

  /*
  * Se transforma en una cadena valida JSON para su posterior
  * uso con JSON.parse().
  */

  var departamentos_text = JSON.stringify({
    "departamentos": {
      "iconos": {
        "metros": "",
        "recamaras": "",
        "banio": "",
        "estacionamiento": "",
        "terraza": "",
        "balcon": ""
      },
      "indiana": {
        "depa101": {
          "caracteristicas": {
            "metros": "77.5",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar Estacionamiento"
          }
        },
        "depa102": {
          "caracteristicas": {
            "metros": "105.6",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares Estacionamiento",
            "terraza": "Terraza"
          }
        },
        "depa201": {
          "caracteristicas": {
            "metros": "86.87",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar Estacionamiento",
            "balcon": "Balcón"
          }
        },
        "depa202": {
          "caracteristicas": {
            "metros": "81.6",
            "recamaras": "2 Recaámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares Estacionamiento"
          }
        },
        "depa301": {
          "caracteristicas": {
            "metros": "86.87",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares Estacionamiento",
            "balcon": "Balcón"
          }
        },
        "depa302": {
          "caracteristicas": {
            "metros": "81.6",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar Estacionamiento",
            "roof": "Roof Garden Privado"
          }
        }
      },
      "beistegui": {
        "depa101": {
          "caracteristicas": {
            "metros": "168.2 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar Estacionamiento",
            "terraza": "Terraza",
            "balcon": "Balcón"
          }
        },
        "depa102": {
          "caracteristicas": {
            "metros": "221.7 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "3.5 Baños",
            "estacionamiento": "3 Lugares Estacionamiento",
            "terraza": "Terraza",
            "balcon": "Balcón"
          }
        },
        "depa201": {
          "caracteristicas": {
            "metros": "129.3 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar Estacionamiento",
            "balcon": "Balcón"
          }
        },
        "depa202": {
          "caracteristicas": {
            "metros": "188.0 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "3.5 Baños",
            "estacionamiento": "3 Lugares Estacionamiento",
            "balcon": "Balcón"
          }
        },
        "depa301": {
          "caracteristicas": {
            "metros": "129.3 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar Estacionamiento",
            "balcon": "Balcón"
          }
        },
        "depa302": {
          "caracteristicas": {
            "metros": "188.0 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "3.5 Baños",
            "estacionamiento": "3 Lugares Estacionamiento",
            "balcon": "Balcón"
          }
        },
        "depa401": {
          "caracteristicas": {
            "metros": "179.8 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares Estacionamiento",
            "roof": "Roof Garden Privado",
            "balcon": "Balcón"
          }
        },
        "depa402": {
          "caracteristicas": {
            "metros": "233.4 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "3.5 Baños",
            "estacionamiento": "3 Lugares Estacionamiento",
            "roof": "Roof Garden Privado",
            "balcon": "Balcón"
          }
        }
      },
      "nebraska": {}
    }
  });

  /*
  * Se parsea la cadena valida JSON.
  */

  var departamentos_json = JSON.parse(departamentos_text);