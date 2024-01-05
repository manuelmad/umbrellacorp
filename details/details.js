// Accedo al string de localStorage y lo vuelvo objeto
const selectedNew = JSON.parse(localStorage.getItem("detailedNew"));

// Agregó los valores del objeto de localStorage en el DOM
document.getElementById("description1").innerHTML = selectedNew.description;
document.querySelector('.img1-container').innerHTML = `<img src=${"."+selectedNew.imgUrl}>`;

// Función para darle color a los links
function colorLink(array, color) {
    array.forEach(item => {
        let nodes = item.childNodes;
        if(nodes) {
            nodes.forEach(item => {
                if(item.localName === 'a') {
                    item.style.color = color;
                }
            });
        }
    });
}

// Condicional para darle color a los links según el tipo de noticia
if(selectedNew.type === "trend") {
    let color = '#03fbfa';
    document.querySelector('h3').style.color = color;
    let array = document.querySelectorAll('p');
    colorLink(array, color);
} else if(selectedNew.type === "tip") {
    let color = '#7E03FB';
    document.querySelector('h3').style.color = color;
    let array = document.querySelectorAll('p');
    colorLink(array, color);
} else if(selectedNew.type === "launch") {
    let color = '#fe009d';
    document.querySelector('h3').style.color = color;
    let array = document.querySelectorAll('p');
    colorLink(array, color);
} else if(selectedNew.type === "notification") {
    let color = '#c40d24';
    document.querySelector('h3').style.color = color;
    let array = document.querySelectorAll('p');
    colorLink(array, color);
}


