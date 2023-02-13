const id = '1g3mr-QsB2FbP7HVNIho6aAkRrFF0b2HcwI_90y9eD8s'
const rango = 'Eventos!A:H'
const claveAPI = 'AIzaSyAj8EroyGMKAfgLOvYrgw8jd2q2RXnDomY';
const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${rango}?key=${claveAPI}`
function informacion(tech) {

  var inp22 = tech.fecha
  var varDate = inp22.split('/');
  var fechaConvertida = varDate[2] + ',' + varDate[1] + ',' + varDate[0];

  const fechaEvento = new Date(fechaConvertida);

  const opcionFechaCorta = { year: 'numeric', month: 'short', day: 'numeric' };
  const opcionFechaMediana = { year: 'numeric', month: 'short', day: 'numeric' };
  const opcionFechaLarga = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var fechaCortaTransf = (fechaEvento.toLocaleDateString('es-mx', opcionFechaCorta));
  const fechaCortaRmveSpace = (textoOriginal) => {
    let text1 = textoOriginal
    let text2 = text1.replace(/ /g, "/");
    return text2
  }

  var fechaCorta = (fechaCortaRmveSpace(fechaCortaTransf))
  var fechaLarga = (fechaEvento.toLocaleDateString('es-mx', opcionFechaLarga));
  var fechaMediana = (fechaEvento.toLocaleDateString('es-mx', opcionFechaMediana))

  const container = document.querySelector('.cards-events')
  const contenedor = document.createElement('div')
  contenedor.classList.add('card-events')
  container.appendChild(contenedor)

  const fondo = document.createElement('div')
  fondo.classList.add('background')
  fondo.style.backgroundImage = `url('${tech.imagen}')`
  contenedor.appendChild(fondo)

  const texto = document.createElement('div')
  texto.classList.add('text')
  contenedor.appendChild(texto)

  const featured = document.createElement('span')
  featured.classList.add('featured')
  featured.textContent = (tech.pais)
  texto.appendChild(featured)


  const fecha = document.createElement('span')
  fecha.classList.add('date')
  fecha.textContent = (tech.fecha)
  texto.appendChild(fecha)

  const hora = document.createElement('span')
  hora.classList.add('date')
  hora.textContent = (tech.hora)
  texto.appendChild(hora)

  const estadoDeEvento = document.createElement('span')
  estadoDeEvento.classList.add('estado-evento')
  texto.appendChild(estadoDeEvento)


  const titulo = document.createElement('h2')
  titulo.classList.add('title')
  titulo.textContent = (tech.titulo)
  texto.appendChild(titulo)

  const descripcion = document.createElement('h3')
  descripcion.classList.add('subtitle')
  descripcion.textContent = (tech.descripcion)
  texto.appendChild(descripcion)

  const buttonCards = document.createElement('div')
  buttonCards.classList.add('card-button', 'button-space', 'wrap')
  texto.appendChild(buttonCards)

  const buttonVer = document.createElement('a')
  buttonVer.classList.add('read-now', 'button-blanco', 'js-open-modal')
  buttonVer.setAttribute('id', 'open')
  buttonVer.textContent = ('Ver más')
  buttonCards.appendChild(buttonVer)


  const contenedorMayorModal = document.createElement('div')
  contenedorMayorModal.setAttribute('id', 'mask')
  contenedorMayorModal.classList.add('hidden')
  buttonCards.appendChild(contenedorMayorModal)

  const cntr = document.createElement('div')
  cntr.setAttribute('id', 'modal')
  cntr.classList.add('hidden')
  texto.appendChild(cntr)




  const tituloDetalles = document.createElement('h3')
  tituloDetalles.classList.add('nombreBold', 'tituloModal')
  tituloDetalles.textContent = ('Detalles de Evento')
  cntr.appendChild(tituloDetalles)






  const contenedorFlex = document.createElement('div')
  contenedorFlex.classList.add('centrar-detalles-ventana')
  cntr.appendChild(contenedorFlex)

  const contenedorTexto = document.createElement('div')
  contenedorTexto.classList.add('contenedor-texto')
  contenedorFlex.appendChild(contenedorTexto)






  const nombreBold = document.createElement('a')
  nombreBold.classList.add('nombreBold')
  nombreBold.textContent = ('Evento')
  contenedorTexto.appendChild(nombreBold)

  const textoM = document.createElement('p')
  textoM.classList.add('modal__content')
  textoM.textContent = (tech.titulo)
  contenedorTexto.appendChild(textoM)


  const nombreBold2 = document.createElement('a')
  nombreBold2.classList.add('nombreBold')
  nombreBold2.textContent = ('Lugar')
  contenedorTexto.appendChild(nombreBold2)

  const textoM2 = document.createElement('p')
  textoM2.classList.add('modal__content')
  textoM2.textContent = (tech.pais)
  contenedorTexto.appendChild(textoM2)



  const nombreBold4 = document.createElement('a')
  nombreBold4.classList.add('nombreBold')
  nombreBold4.textContent = ('Fecha y Hora')
  contenedorTexto.appendChild(nombreBold4)

  const textoM4 = document.createElement('p')
  textoM4.classList.add('modal__content')
  textoM4.textContent = (`${tech.fecha} - ${tech.hora}`)
  contenedorTexto.appendChild(textoM4)


  var mensajeCorreo = `Gracias por tu interés en el evento "${tech.titulo}", te esperamos el día ${fechaLarga} a las ${tech.hora}, tu link de ingreso es: ${tech.link}`

  var date = new Date()
  var day = `${(date.getDate())}`.padStart(2, '0');
  var month = `${(date.getMonth() + 1)}`.padStart(2, '0');
  var year = date.getFullYear();
  var fechaActual = `${day}/${month}/${year}`


  var inp1 = fechaActual
  var inp2 = tech.fecha
  var tmp = inp1.split('/');
  var fini = tmp[2] + tmp[1] + tmp[0];
  tmp = inp2.split('/');
  var ffin = tmp[2] + tmp[1] + tmp[0];


  if (fini > ffin) {
    estadoDeEvento.textContent = ('Evento pasado📆')
    estadoDeEvento.classList.add('estado-evento-pasado')


    var nested = document.getElementById("inscribirme");
    if (nested == "") {
    } else {
      var top = document.getElementById("button-cards");

    }
  }


  if (fini < ffin) {
    estadoDeEvento.textContent = ('Próximo🕒')
    estadoDeEvento.classList.add('estado-evento-proximo')
  }
  if (fini == ffin) {
    estadoDeEvento.textContent = ('🎉¡Es hoy!🎊')
    estadoDeEvento.classList.add('estado-evento-hoy')
  }

  if (fini == ffin || fini < ffin) {
    const buttonInscribirme = document.createElement('a')
    buttonInscribirme.classList.add('read-now', 'button-rojo', 'js-open-modal')
    buttonInscribirme.setAttribute('id', 'inscribirme')
    buttonInscribirme.textContent = ('Apuntarme')
    buttonCards.appendChild(buttonInscribirme)

    const contenedorMayorModals = document.createElement('div')
    contenedorMayorModals.setAttribute('id', 'mask')
    contenedorMayorModals.classList.add('hidden')
    buttonCards.appendChild(contenedorMayorModals)


    const cntr = document.createElement('div')
    cntr.setAttribute('id', 'modal')
    cntr.classList.add('hidden')
    texto.appendChild(cntr)

    const tituloDetalles = document.createElement('h3')
    tituloDetalles.classList.add('nombreBold', 'tituloModal')
    tituloDetalles.textContent = ('¡QUIERO PARTICIPAR!')
    cntr.appendChild(tituloDetalles)

    const codigoUnicoCadaEvento = Math.random().toString(32).substring(2) + Date.now().toString(32);

    var idForm = `${codigoUnicoCadaEvento}`
    const form = document.createElement('form')
    form.setAttribute('id', idForm)
    form.setAttribute('name', idForm)
    cntr.appendChild(form)


    const fieldExito = document.createElement('div')
    cntr.appendChild(fieldExito)

    const fieldRellenaCampos = document.createElement('div')
    fieldRellenaCampos.classList.add('field')
    form.appendChild(fieldRellenaCampos)
    const labelRellenaCampos = document.createElement('label')
    labelRellenaCampos.textContent = ('')
    labelRellenaCampos.classList.add('rellena-campos')
    fieldRellenaCampos.appendChild(labelRellenaCampos)



    const field3 = document.createElement('div')
    field3.classList.add('field-oculto')
    form.appendChild(field3)
    const label3 = document.createElement('label')
    label3.setAttribute('for', 'mensaje')
    label3.textContent = ('Mensaje')
    const mensaje = document.createElement('input')
    mensaje.setAttribute('type', 'text')
    mensaje.setAttribute('name', 'mensaje')
    mensaje.setAttribute('id', 'mensaje')
    mensaje.setAttribute('value', mensajeCorreo)
    field3.appendChild(mensaje)

    const field1 = document.createElement('div')
    field1.classList.add('field')
    form.appendChild(field1)
    const label1 = document.createElement('label')
    label1.setAttribute('for', 'name')
    label1.textContent = ('Nombre')
    field1.appendChild(label1)

    const input1 = document.createElement('input')
    input1.setAttribute('type', 'text')
    input1.setAttribute('name', 'Nombre')
    input1.setAttribute('id', 'name')
    field1.appendChild(input1)




    const field2 = document.createElement('div')
    field2.classList.add('field')
    form.appendChild(field2)
    const label2 = document.createElement('label')
    label2.setAttribute('for', 'email')
    label2.textContent = ('Correo electrónico')
    field2.appendChild(label2)

    const input2 = document.createElement('input')
    input2.setAttribute('type', 'text')
    input2.setAttribute('name', 'Correo')
    input2.setAttribute('id', 'email')
    field2.appendChild(input2)




    const field4 = document.createElement('div')
    field4.classList.add('field')
    form.appendChild(field4)

    const label4 = document.createElement('label')
    label4.setAttribute('for', 'Teléfono')
    label4.textContent = ('Teléfono')
    field4.appendChild(label4)

    const input4 = document.createElement('input')
    input4.setAttribute('type', 'text')
    input4.setAttribute('name', 'Teléfono')
    input4.setAttribute('id', 'email')
    field4.appendChild(input4)




    const field5 = document.createElement('div')
    field5.classList.add('field')
    form.appendChild(field5)

    const label5 = document.createElement('label')
    label5.setAttribute('for', 'País')
    label5.textContent = ('País')
    field5.appendChild(label5)

    const input5 = document.createElement('input')
    input5.setAttribute('type', 'text')
    input5.setAttribute('name', 'País')
    input5.setAttribute('id', 'email')
    field5.appendChild(input5)




    const buttonEnviar = document.createElement('input')
    buttonEnviar.setAttribute('type', 'submit')
    buttonEnviar.setAttribute('value', 'Enviar')
    buttonEnviar.setAttribute('id', 'enviarCorreo')
    form.appendChild(buttonEnviar)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzrn9xqedV7R6O9PZQGOHD9lJ-he7fjsgGNkMI0gHgNnqzQK_sX4WXBe8TkhxWW0o82xw/exec'
    const formSheet = document.forms[idForm]

    formSheet.addEventListener('submit', e => {
      e.preventDefault()

      if (input1.value == '' || input2.value == "" || input4.value == "" || input5.value == "") {
        labelRellenaCampos.textContent = ('¡Completa todos los campos!')
      } else {

        fetch(scriptURL, { method: 'POST', body: new FormData(formSheet) })
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))
      }

    })


    const btn = document.getElementById('enviarCorreo');

    document.getElementById(idForm)
      .addEventListener('submit', function (event) {
        event.preventDefault();
        if (input1.value == '' || input2.value == "" || input4.value == "" || input5.value == "") {
          labelRellenaCampos.textContent = ('¡Completa todos los campos!')
        } else {
          const serviceID = 'default_service';
          const templateID = 'template_cwebhw6';

          emailjs.sendForm(serviceID, templateID, this)

            .then(() => {
              const elements2 = document.getElementById(idForm);
              while (elements2.length > 0) {
                elements2[0].parentNode.classList.add('field-oculto')
                elements2[0].parentNode.removeChild(elements2[0]);
              }
              const exitoCorreo = document.createElement('p')
              exitoCorreo.classList.add('nombreBold', 'texto-exito')
              exitoCorreo.textContent = (`¡Te esperamos este ${tech.fecha} a las ${tech.hora}!`)
              fieldExito.appendChild(exitoCorreo)

              const exitoCorreo3 = document.createElement('a')
              exitoCorreo3.classList.add('texto-exito')
              exitoCorreo3.setAttribute('href', `${tech.link}`)
              exitoCorreo3.textContent = ('Link de enlace')
              fieldExito.appendChild(exitoCorreo3)


              const exitoIcono = document.createElement('i')
              exitoIcono.classList.add('fa-solid', 'fa-check', 'fa-3x', 'fa-bounce', 'icono-exito')
              fieldExito.appendChild(exitoIcono)

              const exitoCorreo2 = document.createElement('p')
              exitoCorreo2.classList.add('texto-pequeño')
              exitoCorreo2.textContent = ('Hemos enviado un mensaje a tu correo electrónico con los datos')
              fieldExito.appendChild(exitoCorreo2)

            }, (err) => {
              const elements2 = document.getElementById(idForm);
              while (elements2.length > 0) {
                elements2[0].parentNode.classList.add('field-oculto')
                elements2[0].parentNode.removeChild(elements2[0]);
              }

              const exitoCorreo = document.createElement('h1')
              exitoCorreo.classList.add('nombreBold', 'texto-exito')
              exitoCorreo.textContent = ('!VAYA, ALGO HA SALIDO MAL, INTENTALO NUEVAMENTE¡')
              fieldExito.appendChild(exitoCorreo)
            })
        }
      });
    const cerrarModals = document.createElement('a')
    cerrarModals.classList.add('js-close')
    cerrarModals.setAttribute('id', 'close')
    cerrarModals.textContent = ('Cerrar')
    cntr.appendChild(cerrarModals)

    buttonInscribirme.addEventListener('click', function () {
      cntr.classList.remove('hidden');
      contenedorMayorModals.classList.remove('hidden');
    });
    cerrarModals.addEventListener('click', function () {
      cntr.classList.add('hidden');
      contenedorMayorModals.classList.add('hidden');
    });
    contenedorMayorModals.addEventListener('click', function () {
      cntr.classList.add('hidden');
      contenedorMayorModals.classList.add('hidden');
    });
  }
  if (fini > ffin) {

    const buttonInscribirme = document.createElement('a')
    buttonInscribirme.classList.add('read-now', 'button-naranja', 'js-open-modal')
    buttonInscribirme.setAttribute('id', 'inscribirme')
    buttonInscribirme.textContent = ('Revivir Evento')
    buttonCards.appendChild(buttonInscribirme)

    const contenedorMayorModals = document.createElement('div')
    contenedorMayorModals.setAttribute('id', 'mask')
    contenedorMayorModals.classList.add('hidden')
    buttonCards.appendChild(contenedorMayorModals)

    const cntr = document.createElement('div')
    cntr.setAttribute('id', 'modal')
    cntr.classList.add('hidden')
    texto.appendChild(cntr)

    const tituloDetalles = document.createElement('h3')
    tituloDetalles.classList.add('nombreBold', 'tituloModal')
    tituloDetalles.textContent = ('¡REVIVE EL EVENTO!')
    cntr.appendChild(tituloDetalles)

    const txtDetalles = document.createElement('p')
    txtDetalles.classList.add('revivir-evento')
    txtDetalles.textContent = ('¡Revive este evento dando clic al botón de enlace!')
    cntr.appendChild(txtDetalles)

    const linkButtonDetalles = document.createElement('a')
    linkButtonDetalles.classList.add('revivir-evento', 'revivir-button')
    
    if (tech.link_revivir_evento) {
      linkButtonDetalles.setAttribute('href', `${tech.link_revivir_evento}`)
    }

    linkButtonDetalles.setAttribute('target', '_blank')
    linkButtonDetalles.textContent = ('ENLACE')
    cntr.appendChild(linkButtonDetalles)

    const cerrarModals = document.createElement('a')
    cerrarModals.classList.add('js-close')
    cerrarModals.setAttribute('id', 'close')
    cerrarModals.textContent = ('Cerrar')
    cntr.appendChild(cerrarModals)

    buttonInscribirme.addEventListener('click', function () {
      cntr.classList.remove('hidden');
      contenedorMayorModals.classList.remove('hidden');
    });
    cerrarModals.addEventListener('click', function () {
      cntr.classList.add('hidden');
      contenedorMayorModals.classList.add('hidden');
    });
    contenedorMayorModals.addEventListener('click', function () {
      cntr.classList.add('hidden');
      contenedorMayorModals.classList.add('hidden');
    });
  }


  const contenedorImagen = document.createElement('img')
  contenedorImagen.classList.add('background-detalles')

  contenedorImagen.src = tech.imagen
  contenedorFlex.appendChild(contenedorImagen)


  const nombreBold3 = document.createElement('a')
  nombreBold3.classList.add('nombreBold')
  nombreBold3.textContent = ('Descripción')
  cntr.appendChild(nombreBold3)

  const textoM3 = document.createElement('p')
  textoM3.classList.add('modal__content')
  textoM3.textContent = (tech.descripcion)
  cntr.appendChild(textoM3)


  //CERRAR MODAL
  const cerrarModal = document.createElement('a')
  cerrarModal.classList.add('js-close')
  cerrarModal.setAttribute('id', 'close')
  cerrarModal.textContent = ('Cerrar')
  cntr.appendChild(cerrarModal)


  buttonVer.addEventListener('click', function () {
    cntr.classList.remove('hidden');
    contenedorMayorModal.classList.remove('hidden');
  });
  cerrarModal.addEventListener('click', function () {
    cntr.classList.add('hidden');
    contenedorMayorModal.classList.add('hidden');
  });
  contenedorMayorModal.addEventListener('click', function () {
    cntr.classList.add('hidden');
    contenedorMayorModal.classList.add('hidden');
  });



}

function limpiador() {
  const elements = document.getElementsByClassName("card-events");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  const elements2 = document.getElementsByClassName("sin-resultado");
  while (elements2.length > 0) {
    elements2[0].parentNode.removeChild(elements2[0]);
  }

}


var foco = false

var checkbox = document.querySelector("#checkbox");
checkbox.addEventListener('change', function () {

  if (this.checked) {
    foco = true
    limpiador()
    corre()

  } else {
    foco = false
    limpiador()
    corre()

  }
})

function corre() {

  var date = new Date()
  var day = `${(date.getDate())}`.padStart(2, '0');
  var month = `${(date.getMonth() + 1)}`.padStart(2, '0');
  var year = date.getFullYear();
  var fechaActual = `${day}/${month}/${year}`

  var cont = 0

  fetch(url)
    .then((respuesta) => {
      return respuesta.json()
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
          }
          else {
            obj[campos[c]] = celda;
          }
        }
        if (f > 0) datos.push(obj);
      }
      return datos;
    })

    .then((resultado) => {
      let eventos = '';
      resultado.reverse().forEach(tech => {
        var inp1 = fechaActual
        var inp2 = tech.fecha
        var tmp = inp1.split('/');
        var fini = tmp[2] + tmp[1] + tmp[0];
        tmp = inp2.split('/');
        var ffin = tmp[2] + tmp[1] + tmp[0];


        if (foco == false) {
          informacion(tech)
          cont++
        }
        if (foco == true && fini <= ffin) {
          informacion(tech)
          cont++
        }
      })
      const container = document.querySelector('.eventoss')

      const contenedorAviso = document.createElement('div')
      contenedorAviso.classList.add('contenedor-aviso')
      container.appendChild(contenedorAviso)
      const sinResultado = document.createElement('p')

      contenedorAviso.appendChild(sinResultado)
      if (cont == 0) {
        sinResultado.classList.add('sin-resultado')
        sinResultado.textContent = ('Aún no hay eventos próximos, mantente al pendiente')
      } if (cont > 0) {
        const container = document.querySelector('.eventoss')
        sinResultado.classList.remove('sin-resultado')
      }

    })
}
corre()





