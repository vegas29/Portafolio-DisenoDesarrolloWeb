document.addEventListener('DOMContentLoaded', ()=>{
    cargarPortafolio();
});

function cargarPortafolio(){
    fetch('datos.json')
    .then((respuesta)=>{
        return respuesta.json(); 
    })
    .then(datos=>{
        let html = '';
        datos.portafolio.forEach( portafolio =>{
            //Crear template

            html += `
                <div class="elemento">
                    <img src="img/${portafolio.id}.jpg">
                    <div class="contenido">
                        <h3>${portafolio.nombre}<h3>
                        <p>${portafolio.desc}<p>
                    </div>    
                </div>
                `;
        });

        //Despues de crear el template, se inyecta el html

        document.querySelector('#listado').innerHTML = html;

    })
}