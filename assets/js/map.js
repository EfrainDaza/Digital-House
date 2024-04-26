document.addEventListener("DOMContentLoaded", (e) => { /* cuanto se cargue toda la vista del DOM es una propiedad nativa */ 
        /*controlamos el tiempo  de carga del mapa en el DOM */                
       setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML =  `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99611.45927458827!2d-62.33877404821463!3d-38.72106669464275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcabdc1302bd%3A0x76d1d88d241e7a11!2sBah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1713299415655!5m2!1ses!2sar"></iframe>
        `  ;
       }, 500);
})