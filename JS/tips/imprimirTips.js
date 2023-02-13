const id = "1g3mr-QsB2FbP7HVNIho6aAkRrFF0b2HcwI_90y9eD8s";
const rango = "Tips!A:F";
const claveAPI = "AIzaSyAj8EroyGMKAfgLOvYrgw8jd2q2RXnDomY";
const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${rango}?key=${claveAPI}`;

const headerNombreTip = document.getElementById("titulo-categoria-tip");

var indice = 0;

function informacion(tech) {
  indice++;

  const container = document.querySelector(".categoria-container");

  const contenedorsote = document.createElement("li");
  container.appendChild(contenedorsote);

  const contenedor = document.createElement("div");
  contenedor.classList.add("product-container");
  contenedor.setAttribute(
    "style",
    `background-image:linear-gradient(148deg, rgba(5,80,119,0.400) 0%, rgba(107,193,231,0.250) 35%, rgba(114,192,208,0.000) 100%),url('${tech.Imagen}');`
  );
  contenedorsote.appendChild(contenedor);

  const field = document.querySelector("#field");
  const ball = document.querySelector("#titulo-categoria-tip");
  function makeEaseOut(timing) {
    return function (timeFraction) {
      return 1 - timing(1 - timeFraction);
    };
  }

  function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return (
          -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        );
      }
    }
  }

  function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
  }
  contenedorsote.onclick = function () {
    let height = field.clientHeight - ball.clientHeight;
    let width = 100;
    animate({
      duration: 700,
      timing: makeEaseOut(bounce),
      draw: function (progress) {
        ball.style.bottom = height * progress + "px";
      },
    });

    animate({
      duration: 100,
      timing: makeEaseOut(quad),
      draw: function (progress) {
        ball.style.center = width * progress + "px";
      },
    });
  };

  if (indice == 1) {
    contenedor.classList.add("nueva-categoria");
    contenedor.classList.add("categoria-seleccionada");
    const imprimirNuevo = async () => {
      fetch(url)
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((infoJson) => {
          let entries = infoJson.values;
          let numFilas = entries.length;
          let campos = [];
          let datos = [];
          for (var f = 0; f < numFilas; f++) {
            let fila = entries[f];
            let obj = {};
            for (var c = 0; c < fila.length; c++) {
              let celda = fila[c];

              if (f == 0) {
                campos.push(celda);
              } else {
                obj[campos[c]] = celda;
              }
            }
            if (f > 0) datos.push(obj);
          }
          return datos;
        })

        .then((resultado) => {
          let eventos = "";
          var i = 0;
          var PalabraBuscar = contenedorsote.textContent;
          headerNombreTip.textContent = PalabraBuscar;
          for (let index = 0; index < resultado.length; index++) {
            var x = 0;
            if (resultado[(x = index)].Nombre_de_Categoria == PalabraBuscar) {
              for (let index = x + 1; index < resultado.length; index++) {
                const element = resultado[index];

                if (!resultado[(x = index)].Titulo_Tip) {
                  break;
                }
                var direccion = "";
                if (index % 2) {
                  direccion = "";
                } else {
                  direccion = "right";
                }

                var videoInsertar = "";
                if (resultado[(x = index)].Video) {
                  videoInsertar =
                    "<div class='video'><p class='cinta-video'></p><div class='video-tiktok'></div></div>";
                } else {
                  var videoInsertar = "";
                }
                var imagen = "";
                if (resultado[(x = index)].Imagen) {
                  var imagen = `<div class="multimedia"> <p class="cinta-imagen"></p></div><div class="cntr-img"><div class="container-imagen"><img class="imagen" src=${resultado[(x = index)].Imagen
                    } alt="" srcset=""></div></div>`;
                } else {
                  var imagen = "";
                }
                eventos += ` 
                                                            
                                                        <div class="timeline-item">
                                                        <div class="timeline-icon" style="background-image: url('../Imagenes/redondeadas/${iconoResultado.toUpperCase()}.png'); color:black;">
                                                        </div>
                                                        <div class="timeline-content ${direccion}">
                                                            <h2>${resultado[
                    (x = index)
                  ].Titulo_Tip
                  }</h2>
                                                            <p>
                                                                ${resultado[
                    (x = index)
                  ].Contenido
                  }
                                                            </p>
                                                             ${imagen}
                                                         
                                                             ${videoInsertar}
                                                        </div>
                                                        
                                                        </div>
                                                        
                                                        `;
                                     document.getElementById("timeline").innerHTML = eventos;
              }
            }
          }
        });
    };

    imprimirNuevo();
  }

  const fondo = document.createElement("p");
  fondo.classList.add("texto-categoria");
  fondo.textContent = tech.Nombre_de_Categoria;
  contenedor.appendChild(fondo);

  contenedorsote.addEventListener("click", function () {
    var PalabraBuscar = contenedorsote.textContent;
    var rojos = document.getElementsByClassName("product-container");

    for (var i = 0; i < rojos.length; i++) {
      if (PalabraBuscar == rojos[i].textContent) {
        rojos[i].classList.add("categoria-seleccionada");
      } else {
        rojos[i].classList.remove("categoria-seleccionada");
      }
    }
  });

  var iconoResultado = "";
  if (tech.Icono_bandera == "") {
    var iconoResultado = "avionTrazo";
   
  } else {
    var iconoResultado = tech.Icono_bandera;
  
  }

  contenedorsote.addEventListener("click", function () {
    var PalabraBuscar = contenedorsote.textContent;
    headerNombreTip.textContent = PalabraBuscar;
    const consultarAPI = async () => {
      fetch(url)
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((infoJson) => {
          let entries = infoJson.values;
          let numFilas = entries.length;

          //Procesamos los datos
          let campos = [];
          let datos = [];
          for (var f = 0; f < numFilas; f++) {
            let fila = entries[f];
            let obj = {};
            for (var c = 0; c < fila.length; c++) {
              let celda = fila[c];

              if (f == 0) {
                campos.push(celda);
              } else {
                obj[campos[c]] = celda;
              }
            }
            if (f > 0) datos.push(obj);
          }

          return datos;
        })

        .then((resultado) => {
          let eventos = "";
          var i = 0;
          for (let index = 0; index < resultado.length; index++) {
            var x = 0;
            if (resultado[(x = index)].Nombre_de_Categoria == PalabraBuscar) {
              for (let index = x + 1; index < resultado.length; index++) {
                const element = resultado[index];

                if (!resultado[(x = index)].Titulo_Tip) {
                  break;
                }
                var direccion = "";

                if (index % 2) {
                  direccion = "";
                } else {
                  direccion = "right";
                }

                var imagen = "";
                if (resultado[(x = index)].Imagen) {
                  var imagen = `<div class="multimedia"> <p class="cinta-imagen"></p></div><div class="cntr-img"><div class="container-imagen"><img class="imagen" src=${resultado[(x = index)].Imagen
                    } alt="" srcset=""></div></div>`;
                } else {
                  var imagen = "";
                }
                eventos += ` 
                                                            
                                                        <div class="timeline-item">
                                                        <div class="timeline-icon" style="background-image: url('../Imagenes/redondeadas/${iconoResultado.toUpperCase()}.png'); color:black;">
                                                        </div>
                                                        <div class="timeline-content ${direccion}">
                                                            <h2>${resultado[
                    (x = index)
                  ].Titulo_Tip
                  }</h2>
                                                            <p>
                                                                ${resultado[
                    (x = index)
                  ].Contenido
                  }
                                                            </p>
                                                            <!-- -->
                                                        ${imagen} 

                                                        <div id="player"></div>


                                                        </div>
                                                    </div>
                                                        `;
                document.getElementById("timeline").innerHTML = eventos;
              }
            }
          }
        });
    };
    consultarAPI();
  });
}

function limpiador() {
  const elements = document.getElementsByClassName("card-events");

  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function corre() {
  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((infoJson) => {
      let entries = infoJson.values;
      let numFilas = entries.length;

      let campos = [];
      let datos = [];
      for (var f = 0; f < numFilas; f++) {
        let fila = entries[f];

        let obj = {};
        for (var c = 0; c < fila.length; c++) {
          let celda = fila[c];
          if (f == 0) {
            campos.push(celda);
          } else {
            obj[campos[c]] = celda;
          }
        }
        if (f > 0) datos.push(obj);
      }
      return datos;
    })

    .then((resultado) => {
      resultado.reverse().forEach((tech) => {
        if (!tech.Nombre_de_Categoria) {
        } else {
          informacion(tech);
        }
      });
    });
}

corre();
