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
      "indiana": {
        "depa101": {
          "caracteristicas": {
            "metros": "77.5 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar E.",
            "plano": "indiana-plano-101.jpg"
          }
        },
        "depa102": {
          "caracteristicas": {
            "metros": "105.6 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "terraza": "Terraza",
            "plano": "indiana-plano-102.jpg"
          }
        },
        "depa201": {
          "caracteristicas": {
            "metros": "86.87 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar E.",
            "balcon": "Balcón",
            "plano": "indiana-plano-201.jpg"
          }
        },
        "depa202": {
          "caracteristicas": {
            "metros": "81.6 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "plano": "indiana-plano-202.jpg"
          }
        },
        "depa301": {
          "caracteristicas": {
            "metros": "86.87 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "balcon": "Balcón",
            "plano": "indiana-plano-301.jpg"
          }
        },
        "depa302": {
          "caracteristicas": {
            "metros": "81.6 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar E.",
            "roof": "Roof Privado",
            "plano": "indiana-plano-302.jpg"
          }
        }
      },
      "dakota": {
        "depa101": {
          "caracteristicas": {
            "metros": "77.5 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar E.",
            "plano": "dakota-plano-101.jpg"
          }
        },
        "depa102": {
          "caracteristicas": {
            "metros": "116.63 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "terraza": "Terraza",
            "plano": "dakota-plano-102.jpg"
          }
        },
        "depa201": {
          "caracteristicas": {
            "metros": "86.87 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "balcon": "Balcón",
            "plano": "dakota-plano-201.jpg"
          }
        },
        "depa202": {
          "caracteristicas": {
            "metros": "86.5 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar E.",
            "plano": "dakota-plano-202.jpg"
          }
        },
        "depa301": {
          "caracteristicas": {
            "metros": "86.87 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "balcon": "Balcón",
            "plano": "dakota-plano-301.jpg"
          }
        },
        "depa302": {
          "caracteristicas": {
            "metros": "86.5 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar E.",
            "roof": "Roof Privado",
            "plano": "dakota-plano-302.jpg"
          }
        },
      },
      "tlacotalpan": {
        "depa101": {
          "caracteristicas": {
            "metros": "73.8 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "plano": "tlacotalpan-plano-101.jpg"
          }
        },
        "depa102": {
          "caracteristicas": {
            "metros": "96.7 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "terraza": "Terraza",
            "plano": "tlacotalpan-plano-102.jpg"
          }
        },
        "depa201": {
          "caracteristicas": {
            "metros": "156.8 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "3.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "balcon": "Balcón",
            "plano": "tlacotalpan-plano-201.jpg"
          }
        },
        "depa301": {
          "caracteristicas": {
            "metros": "201.5 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "3.5 Baños",
            "estacionamiento": "3 Lugares E.",
            "roof": "Roof Privado",
            "plano": "tlacotalpan-plano-301.jpg"
          }
        }
      },
      "nebraska": {
        "depa101": {
          "caracteristicas": {
            "metros": "77.2 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "plano": "nebraska-plano-101.jpg"
          }
        },
        "depa102": {
          "caracteristicas": {
            "metros": "104.8 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "2 Lugares E.",
            "terraza": "Terraza",
            "plano": "nebraska-plano-102.jpg"
          }
        },
        "depa201": {
          "caracteristicas": {
            "metros": "87.2 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar E.",
            "balcon": "Balcón",
            "plano": "nebraska-plano-201.jpg"
          }
        },
        "depa202": {
          "caracteristicas": {
            "metros": "78.5 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "plano": "nebraska-plano-202.jpg"
          }
        },
        "depa301": {
          "caracteristicas": {
            "metros": "87.2 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "balcon": "Balcón",
            "plano": "nebraska-plano-301.jpg"
          }
        },
        "depa302": {
          "caracteristicas": {
            "metros": "121.9 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "roof": "Roof Privado",
            "plano": "nebraska-plano-302.jpg"
          }
        }
      },
      "chicago": {
        "depa101": {
          "caracteristicas": {
            "metros": "64.5 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "plano": "chicago-plano-101.jpg"
          }
        },
        "depa102": {
          "caracteristicas": {
            "metros": "91.12 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "terraza": "Terraza",
            "plano": "chicago-plano-102.jpg"
          }
        },
        "depa201": {
          "caracteristicas": {
            "metros": "71.72 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "balcon": "Balcón",
            "plano": "chicago-plano-201.jpg"
          }
        },
        "depa202": {
          "caracteristicas": {
            "metros": "66.65 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "plano": "chicago-plano-202.jpg"
          }
        },
        "depa301": {
          "caracteristicas": {
            "metros": "71.5 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "balcon": "Balcón",
            "plano": "chicago-plano-301.jpg"
          }
        },
        "depa302": {
          "caracteristicas": {
            "metros": "99.3 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "roof": "Roof Privado",
            "plano": "chicago-plano-302.jpg"
          }
        }
      },
      "atlanta": {
        "depa101": {
          "caracteristicas": {
            "metros": "112.6 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "2 Lugares E.",
            "balcon": "Balcón",
            "plano": "atlanta-plano-101.jpg"
          }
        },
        "depa102": {
          "caracteristicas": {
            "metros": "112.1 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "terraza": "Terraza",
            "plano": "atlanta-plano-102.jpg"
          }
        },
        "depa201": {
          "caracteristicas": {
            "metros": "116.46 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "2 Lugares E.",
            "balcon": "Balcón",
            "plano": "atlanta-plano-201.jpg"
          }
        },
        "depa202": {
          "caracteristicas": {
            "metros": "79.6 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "plano": "atlanta-plano-202.jpg"
          }
        },
        "depa301": {
          "caracteristicas": {
            "metros": "166.96 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "2 Lugares E.",
            "roof": "Roof Privado",
            "balcon": "Balcón",
            "plano": "atlanta-plano-301.jpg"
          }
        },
        "depa302": {
          "caracteristicas": {
            "metros": "131.5 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2 Baños",
            "estacionamiento": "2 Lugar E.",
            "roof": "Roof Privado",
            "plano": "atlanta-plano-302.jpg"
          }
        }
      },
      "carolina": {
        "depa101": {
          "caracteristicas": {
            "metros": "112.5 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "2 Lugares E.",
            "balcon": "Balcón",
            "plano": "carolina-plano-101.jpg"
          }
        },
        "depa102": {
          "caracteristicas": {
            "metros": "112.1 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "2 Lugares E.",
            "terraza": "Terraza",
            "plano": "carolina-plano-102.jpg"
          }
        },
        "depa201": {
          "caracteristicas": {
            "metros": "116.7 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "2 Lugares E.",
            "balcon": "Balcón",
            "plano": "carolina-plano-201.jpg"
          }
        },
        "depa202": {
          "caracteristicas": {
            "metros": "79.6 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "plano": "carolina-plano-202.jpg"
          }
        },
        "depa301": {
          "caracteristicas": {
            "metros": "166.96 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "2 Lugares E.",
            "roof": "Roof Privado",
            "balcon": "Balcón",
            "plano": "carolina-plano-301.jpg"
          }
        },
        "depa302": {
          "caracteristicas": {
            "metros": "131.5 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.0 Baños",
            "estacionamiento": "1 Lugar E.",
            "roof": "Roof Privado",
            "plano": "carolina-plano-302.jpg"
          }
        }
      },
      "comercio": {
        "depa101": {
          "caracteristicas": {
            "metros": "130.1 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "balcon": "Balcón",
            "plano": "comercio-plano-101.jpg"
          }
        },
        "depa102": {
          "caracteristicas": {
            "metros": "168.2 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2 Baños",
            "estacionamiento": "2 Lugares E.",
            "terraza": "Terraza",
            "plano": "comercio-plano-102.jpg"
          }
        },
        "depa201": {
          "caracteristicas": {
            "metros": "136.4 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "balcon": "Balcón",
            "plano": "comercio-plano-201.jpg"
          }
        },
        "depa202": {
          "caracteristicas": {
            "metros": "99.3 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2 Baños",
            "estacionamiento": "2 Lugares E.",
            "plano": "comercio-plano-202.jpg"
          }
        },
        "depa301": {
          "caracteristicas": {
            "metros": "67.8 m&sup2;",
            "recamaras": "1 Recámara",
            "banio": "1 Baños",
            "estacionamiento": "1 Lugar E.",
            "balcon": "Balcón",
            "plano": "comercio-plano-301.jpg"
          }
        },
        "depa302": {
          "caracteristicas": {
            "metros": "99.3 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2 Baños",
            "estacionamiento": "2 Lugares E.",
            "plano": "comercio-plano-302.jpg"
          }
        },
        "depa303": {
          "caracteristicas": {
            "metros": "66.7 m&sup2;",
            "recamaras": "1 Recámara",
            "banio": "1 Baños",
            "estacionamiento": "1 Lugar E.",
            "balcon": "Balcón",
            "plano": "comercio-plano-303.jpg"
          }
        },
        "roof1": {
          "caracteristicas": {
            "metros": "46.7 m&sup2;",
            "plano": "comercio-plano-roof_1.jpg"
          }
        },
        "roof2": {
          "caracteristicas": {
            "metros": "43.8 m&sup2;",
            "plano": "comercio-plano-roof_2.jpg"
          }
        }
      },
      "beistegui": {
        "depa101": {
          "caracteristicas": {
            "metros": "168.2 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar E.",
            "terraza": "Terraza",
            "balcon": "Balcón",
            "plano": "beistegui-plano-101.jpg"
          }
        },
        "depa102": {
          "caracteristicas": {
            "metros": "221.7 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "3.5 Baños",
            "estacionamiento": "3 Lugares E.",
            "terraza": "Terraza",
            "balcon": "Balcón",
            "plano": "beistegui-plano-102.jpg"
          }
        },
        "depa201": {
          "caracteristicas": {
            "metros": "129.3 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar E.",
            "balcon": "Balcón",
            "plano": "beistegui-plano-201.jpg"
          }
        },
        "depa202": {
          "caracteristicas": {
            "metros": "188.0 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "3.5 Baños",
            "estacionamiento": "3 Lugares E.",
            "balcon": "Balcón",
            "plano": "beistegui-plano-202.jpg"
          }
        },
        "depa301": {
          "caracteristicas": {
            "metros": "129.3 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "1 Lugar E.",
            "balcon": "Balcón",
            "plano": "beistegui-plano-301.jpg"
          }
        },
        "depa302": {
          "caracteristicas": {
            "metros": "188.0 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "3.5 Baños",
            "estacionamiento": "3 Lugares E.",
            "balcon": "Balcón",
            "plano": "beistegui-plano-302.jpg"
          }
        },
        "depa401": {
          "caracteristicas": {
            "metros": "179.8 m&sup2;",
            "recamaras": "2 Recámaras",
            "banio": "2.5 Baños",
            "estacionamiento": "2 Lugares E.",
            "roof": "Roof Privado",
            "balcon": "Balcón",
            "plano": "beistegui-plano-401.jpg"
          }
        },
        "depa402": {
          "caracteristicas": {
            "metros": "233.4 m&sup2;",
            "recamaras": "3 Recámaras",
            "banio": "3.5 Baños",
            "estacionamiento": "3 Lugares E.",
            "roof": "Roof Privado",
            "balcon": "Balcón",
            "plano": "beistegui-plano-402.jpg"
          }
        }
      }
    }
  });

  /*
  * Se parsea la cadena valida JSON.
  */

  var departamentos_json = JSON.parse(departamentos_text);
