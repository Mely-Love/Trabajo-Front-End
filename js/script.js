const imagenes =[
    {
    real:"images/pingu2.jpg",
    mini:"images/pingu2.jpg",
    link:"https://es.wallpapers.com/pinguino"
    },{
    real:"images/pingu3.jpg",
    mini:"images/pingu3.jpg",
    link:"https://misanimales.com/pinguino-adelia-la-dura-vida-en-colonia/"
    },{
    real:"images/pingu4.jpg",
    mini:"images/pingu4.jpg",
    link:"https://supercurioso.com/datos-curiosos-de-los-pinguinos/"
    },{
    real:"images/pingu5.jpeg",
    mini:"images/pingu5.jpeg",
    link:"https://codexverde.cl/el-misterio-de-los-pinguinos-crestados/mapa-pinguinos-eudyptes-juan-pablo-bravo/"
    },{
    real:"images/pingu6.jpg",
    mini:"images/pingu6.jpg",
    link:"https://centrocampillo.com/tag/biogeografia/"
    },{
    real:"images/pingu7.jpg",
    mini:"images/pingu7.jpg",
    link:"https://expertoanimal.elperiodico.com/que-comen-los-pinguinos-20768.html"
    },{
    real:"images/pingu8.webp",
    mini:"images/pingu8.webp",
    link:"https://www.magicochilemio.cl/region-de-magallanes/la-vida-del-oceano/"
    },{
    real:"images/pingu9.jpg",
    mini:"images/pingu9.jpg",
    link:"https://revistabiologica.com/como-se-reproducen-los-pinguinos/"
    }
];

const contenedor = document.getElementById("galeriax");

imagenes.forEach(item => {
  const bloque = document.createElement("div");
  bloque.classList.add("bloque");

  const imgReal = document.createElement("img");
  imgReal.src = item.real;
  imgReal.classList.add("real");

  const enlace = document.createElement("a");
  enlace.href = item.link;
  enlace.target = "_blank";

  const imgMini = document.createElement("img");
  imgMini.src = item.mini;
  imgMini.classList.add("mini");

  enlace.appendChild(imgMini);

  bloque.appendChild(imgReal);
  bloque.appendChild(enlace);

  contenedor.appendChild(bloque);
});
