"use strict";
(function (global) {
  const store = Object.freeze({
    name: "Watch Club Venezuela",
    whatsapp: "584125268377",
    instagram: "watchclub.vzla",
    locale: "es-VE"
  });
  const products = Object.freeze([
    {id:"expedition-acadia-verde",brand:"Timex",model:"Expedition Acadia",variant:"Beige / Verde Oliva",price:80,image:"assets/images/acadia.webp",gallery:["assets/images/acadia.webp","assets/images/hero.webp"],description:"Un reloj de inspiración militar y outdoor, ligero, resistente y fácil de leer.",specs:{Diámetro:"40 mm",Movimiento:"Cuarzo",Iluminación:"INDIGLO®",Agua:"WR 50M",Correa:"Verde oliva estilo NATO",Calendario:"Fecha"}},
    {id:"expedition-negro-marron",brand:"Timex",model:"Expedition",variant:"Negro / Marrón",price:80,image:"assets/images/negro.webp",gallery:["assets/images/negro.webp"],description:"Una combinación robusta de caja negra, dial oscuro y correa marrón.",specs:{Diámetro:"40 mm",Movimiento:"Cuarzo",Iluminación:"INDIGLO®",Agua:"WR 50M",Correa:"Marrón",Calendario:"Fecha"}},
    {id:"expedition-metalico-azul",brand:"Timex",model:"Expedition",variant:"Metálico / Azul",price:70,image:"assets/images/azul.webp",gallery:["assets/images/azul.webp"],description:"Caja metálica, esfera clara y correa azul para un estilo casual y deportivo.",specs:{Diámetro:"40 mm",Movimiento:"Cuarzo",Iluminación:"INDIGLO®",Agua:"WR 50M",Correa:"Textil azul marino",Calendario:"Fecha"}},
    {id:"classic-easy-reader",brand:"Timex",model:"Classic / Easy Reader",variant:"Plateado / Dial Negro",price:80,image:"assets/images/classic.webp",gallery:["assets/images/classic.webp"],description:"Un clásico atemporal con banda extensible de acero y excelente legibilidad.",specs:{Diámetro:"38 mm",Movimiento:"Cuarzo",Iluminación:"INDIGLO®",Agua:"WR 30M",Correa:"Acero inoxidable",Calendario:"Fecha"}}
  ]);
  const byId=id=>products.find(p=>p.id===id)||null;
  const price=p=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(p.price);
  const wa=(p)=>{const text=p?`Hola Watch Club, estoy interesado en el ${p.brand} ${p.model} ${p.variant} de ${price(p)}. Quisiera confirmar disponibilidad.`:"Hola Watch Club, quisiera conocer la disponibilidad de sus relojes.";return `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(text)}`;};
  global.WatchClub=Object.freeze({store,products,byId,price,wa});
})(window);