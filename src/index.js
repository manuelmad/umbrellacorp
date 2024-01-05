// CÓDIGO PARA QUE EL ÍCONO DE MENÚ DESPLEGABLE MUESTRE/OCULTE EL MENÚ
const menu_icon = document.getElementById('menu_icon');
menu_icon.addEventListener('click', interactiveMenu);

const dropdown_menu = document.getElementById('dropdown_menu');
dropdown_menu.style.display = 'none';

function interactiveMenu() {
    if(dropdown_menu.style.display == 'none') {
        dropdown_menu.style.display = 'block';
        menu_icon.style.color = '#03fbfa';
    } else if(dropdown_menu.style.display == 'block') {
        dropdown_menu.style.display = 'none';
        menu_icon.style.color = '#ffffff';
    }
}

// CÓDIGO PARA LLENAR LOS CONTENEDORES DE HTML CON LAS NOTICIAS

// Variable que guardará la noticia a ver en detalle
let detailedNew;

// TENDENCIAS
import { trends } from "./database.js";

/* 1 */
document.getElementById("description1").innerHTML = trends[0].short;
document.getElementById("trend1_img").innerHTML = `<img src="${trends[0].imgUrl}">`;

// Evento para que el link "Leer más..." guarde en localStorage la noticia a ver en detalle
let linkTrend1 = document.getElementById("link_trend1");

linkTrend1.addEventListener('click', ()=> {
    detailedNew = trends[0];
    let string = JSON.stringify(detailedNew);
    localStorage.setItem("detailedNew", string);
});

/* 2 */
document.getElementById("description2").innerHTML = trends[1].short;
document.getElementById("trend2_img").innerHTML = `<img src="${trends[1].imgUrl}">`;

let linkTrend2 = document.getElementById("link_trend2");

linkTrend2.addEventListener('click', ()=> {
    detailedNew = trends[1];
    let string = JSON.stringify(detailedNew);
    localStorage.setItem("detailedNew", string);
});

/* 3 */
document.getElementById("description3").innerHTML = trends[2].short;
document.getElementById("trend3_img").innerHTML = `<img src="${trends[2].imgUrl}">`;

let linkTrend3 = document.getElementById("link_trend3");

linkTrend3.addEventListener('click', ()=> {
    detailedNew = trends[2];
    let string = JSON.stringify(detailedNew);
    localStorage.setItem("detailedNew", string);
});


// GAMER TIPS
import { gamerTips } from "./database.js";

/* 1 */
document.getElementById("tip1_description").innerHTML = gamerTips[0].short;
document.getElementById("tip1_img").innerHTML = `<img src="${gamerTips[0].imgUrl}">`;

// Evento para que el link "Leer más..." guarde en localStorage la noticia a ver en detalle
let linkTip1 = document.getElementById("link_tip1");

linkTip1.addEventListener('click', ()=> {
    detailedNew = gamerTips[0];
    let string = JSON.stringify(detailedNew);
    localStorage.setItem("detailedNew", string);
});

/* 2 */
document.getElementById("tip2_description").innerHTML = gamerTips[1].short;
document.getElementById("tip2_img").innerHTML = `<img src="${gamerTips[1].imgUrl}">`;

let linkTip2 = document.getElementById("link_tip2");

linkTip2.addEventListener('click', ()=> {
    detailedNew = gamerTips[1];
    let string = JSON.stringify(detailedNew);
    localStorage.setItem("detailedNew", string);
});

/* 3 */
document.getElementById("tip3_description").innerHTML = gamerTips[2].short;
document.getElementById("tip3_img").innerHTML = `<img src="${gamerTips[2].imgUrl}">`;

let linkTip3 = document.getElementById("link_tip3");

linkTip3.addEventListener('click', ()=> {
    detailedNew = gamerTips[2];
    let string = JSON.stringify(detailedNew);
    localStorage.setItem("detailedNew", string);
});


// LANZAMIENTOS
import { launches } from "./database.js";

/* 1 */
document.getElementById("launch1_description").innerHTML = launches[0].short;
document.getElementById("launch1_img").innerHTML = `<img src="${launches[0].imgUrl}">`;

// Evento para que el link "Leer más..." guarde en localStorage la noticia a ver en detalle
let linkLaunch1 = document.getElementById("link_launch1");

linkLaunch1.addEventListener('click', ()=> {
    detailedNew = launches[0];
    let string = JSON.stringify(detailedNew);
    localStorage.setItem("detailedNew", string);
});

/* 2 */
document.getElementById("launch2_description").innerHTML = launches[1].short;
document.getElementById("launch2_img").innerHTML = `<img src="${launches[1].imgUrl}">`;

let linkLaunch2 = document.getElementById("link_launch2");

linkLaunch2.addEventListener('click', ()=> {
    detailedNew = launches[1];
    let string = JSON.stringify(detailedNew);
    localStorage.setItem("detailedNew", string);
});

/* 3 */
document.getElementById("launch3_description").innerHTML = launches[2].short;
document.getElementById("launch3_img").innerHTML = `<img src="${launches[2].imgUrl}">`;

let linkLaunch3 = document.getElementById("link_launch3");

linkLaunch3.addEventListener('click', ()=> {
    detailedNew = launches[2];
    let string = JSON.stringify(detailedNew);
    localStorage.setItem("detailedNew", string);
});


// NOTIFICACIONES
import { notifications } from "./database.js";

/* 1 */
document.getElementById("notification1_description").innerHTML = notifications[0].short;
document.getElementById("notification1_img").innerHTML = `<img src="${notifications[0].imgUrl}">`;

// Evento para que el link "Leer más..." guarde en localStorage la noticia a ver en detalle
let linkNotification1 = document.getElementById("link_notification1");

linkNotification1.addEventListener('click', ()=> {
    detailedNew = notifications[0];
    let string = JSON.stringify(detailedNew);
    localStorage.setItem("detailedNew", string);
});

/* 2 */
document.getElementById("notification2_description").innerHTML = notifications[1].short;
document.getElementById("notification2_img").innerHTML = `<img src="${notifications[1].imgUrl}">`;

let linkNotification2 = document.getElementById("link_notification2");

linkNotification2.addEventListener('click', ()=> {
    detailedNew = notifications[1];
    let string = JSON.stringify(detailedNew);
    localStorage.setItem("detailedNew", string);
});

/* 3 */
document.getElementById("notification3_description").innerHTML = notifications[2].short;
document.getElementById("notification3_img").innerHTML = `<img src="${notifications[2].imgUrl}">`;

let linkNotification3 = document.getElementById("link_notification3");

linkNotification3.addEventListener('click', ()=> {
    detailedNew = notifications[2];
    let string = JSON.stringify(detailedNew);
    localStorage.setItem("detailedNew", string);
});


// NOSOTROS
import { us } from "./database.js";

/* 1 */
document.getElementById("us1_description").innerHTML = us[0].description;
document.getElementById("us1_img").innerHTML = `<img src="${us[0].imgUrl}">`;

/* 2 */
document.getElementById("us2_description").innerHTML = us[1].description;
document.getElementById("us2_img").innerHTML = `<img src="${us[1].imgUrl}">`;

/* 3 */
document.getElementById("us3_description").innerHTML = us[2].description;
document.getElementById("us3_img").innerHTML = `<img src="${us[2].imgUrl}">`;


// TORNEOS
import { tournaments } from "./database.js";

/* 1 */
document.getElementById("tournaments1_description").innerHTML = tournaments[0].description;
document.getElementById("tournaments1_img").innerHTML = `<img src="${tournaments[0].imgUrl}">`;

// APLICACIONES
import { apps } from "./database.js";

/* 1 */
document.getElementById("apps1_description").innerHTML = apps[0].description;
document.getElementById("apps1_img").innerHTML = `<img src="${apps[0].imgUrl}">`;

/* 2 */
document.getElementById("apps2_description").innerHTML = apps[1].description;
document.getElementById("apps2_img").innerHTML = `<img src="${apps[1].imgUrl}">`;

/* 3 */
document.getElementById("apps3_description").innerHTML = apps[2].description;
document.getElementById("apps3_img").innerHTML = `<img src="${apps[2].imgUrl}">`;



// DETECTAR SCROLL Y HACER CRECER EL MENÚ CUANDO BAJAMOS

// Nombre de la clase en CSS que hará crecer al menú
// const desktop = 'desktop';

// Acceder al menú
// const main_nav_bar = document.getElementById('main_nav_bar');

// Evento de scroll sobre la ventana
// window.addEventListener('scroll', showVerticalScroll);

// function showVerticalScroll() {
//     // Detectar el scroll actual
//     let vertical_scroll = window.pageYOffset;

//     // Si el scroll actual está entre 0 y 120, dejar la apariencia original del menú
//     if(window.innerWidth > 700) {
//         if (vertical_scroll >= 0 && vertical_scroll < 120) {
//             main_nav_bar.style.width = '80%';
//             main_nav_bar.classList.remove(desktop);
//         } // Si el scroll es mayor a 120, agregar la clase al menú para que cambie de apariencia
//         else if (vertical_scroll > 120) {
//             main_nav_bar.style.width = '100%';
//             main_nav_bar.classList.add(desktop);
//         }
//     } else {
//         main_nav_bar.classList.remove(desktop);
//     }
// }