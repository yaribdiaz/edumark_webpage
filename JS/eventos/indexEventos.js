
    const id='1g3mr-QsB2FbP7HVNIho6aAkRrFF0b2HcwI_90y9eD8s'
    const rango='Eventos!A:H'
    const claveAPI = 'AIzaSyAj8EroyGMKAfgLOvYrgw8jd2q2RXnDomY';
    const url= `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${rango}?key=${claveAPI}`  



     const consultarAPI = async() => {
     fetch(url)
        .then( (respuesta) => {
            return respuesta.json()
        })
        .then( (infoJson) => {
            let entries = infoJson.values;
            let numFilas = entries.length;
           // console.log('Número de filas: ' + numFilas);

            //Procesamos los datos
            let campos = [];
            let datos = [];
            for(var f=0; f<numFilas; f++) {
                let fila = entries[f];

                //Recorremos cada fila por columnas
                //creamos un nuevo objeto
                let obj = {};
                for(var c=0; c<fila.length; c++) {
                    let celda = fila[c];
                    if (f == 0){    //Si es la fila 0, son los nombres de los campos
                        //Anotamos el nombre en la lista de campos
                        campos.push(celda);
                    }
                    else {  //En las ddemás filas
                        //Asignamos la propiedad que corresponda según la posición
                        obj[campos[c]] = celda;
                    }
                }
                //Añadimos el nuevo objeto a la colección de datos (si no es la primera fila)
                if (f > 0) datos.push(obj);
            }
          // console.log(datos);
            
            return datos;
        })
        
        .then( (resultado) => {
            let eventos = '';
            var i=0
            resultado.reverse().forEach( res => {
                if(i>=4){

                }else{
                    eventos += `     
                    <div class="card-events"> 
                        <div class="background" style="background-image: url('${res.imagen}');"></div>
                        <div class="text">
                        <div>
                        <div id="evento-div"><span class="span-texto">${res.pais}</span></div>
                        <div id="fecha-div"><span class="span-texto">${res.fecha}</span></div>
                        </div>
                        <br>
                        <!-- <span class="featured">${res.pais}</span>
                        <span class="date"><strong>${res.fecha}</strong></span> -->
                        <h2 class="title">${res.titulo}</h2>
                        <h3 class="subtitle">${res.descripcion}</h3>
                        <!--<a href="#" class="read-now">Leer más</a>-->
                        </div>
                    </div>
                    
                    `
                    i++
                }

            }  )

            document.getElementById('contenedor').innerHTML = eventos;
            i=0
        })
        
        }
        
consultarAPI()

        




     //https://jsonplaceholder.typicode.com/users/1





