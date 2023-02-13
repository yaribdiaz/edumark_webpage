const
  screen = {
    small: 0,
    medium: 200,
    large: 560
  };

window.addEventListener('resize', resizeHandler);

resizeHandler();

function resizeHandler() {

  const iw = window.innerWidth;
 
  let size = null;
  for (let s in screen) {
    if (iw >= screen[s]) size = s;
  }

  const container = document.querySelector('.img')

if(size=='large'){
    //console.log('large')
    container.setAttribute('src','../Imagenes/contacto.jpg')
}
if(size=='medium'){
    //console.log('medium')
    container.setAttribute('src','../Imagenes/contacto_movil.jpg')
}

}