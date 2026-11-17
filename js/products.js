"use strict";

(function (global) {
  const storeConfig = Object.freeze({
    name: "Watch Club Venezuela",
    whatsapp: "584125268377",
    whatsappDisplay: "0412-5268377",
    instagram: "@watchclub.vzla",
    instagramUrl: "https://www.instagram.com/watchclub.vzla/",
    currency: "USD",
    payments: Object.freeze([
      "Zelle",
      "Binance USDT",
      "Pago Móvil a tasa Euro BCV"
    ]),
    delivery: Object.freeze({
      city: "Caracas",
      local: "Punto de entrega a convenir",
      national: "Envíos a nivel nacional"
    }),
    colors: Object.freeze({
      black: "#121212",
      copper: "#D07A2D",
      cream: "#F4F1EC",
      white: "#FFFFFF",
      gray: "#6C6C6C"
    })
  });

  const products = Object.freeze([
    Object.freeze({
      id: "expedition-acadia-verde",
      brand: "Timex",
      original: true,
      model: "Expedition Acadia",
      variant: "Beige / Verde Oliva",
      price: 80,
      currency: "USD",
      available: true,
      featured: true,
      shortDescription: "Un clásico de inspiración militar y outdoor, con excelente legibilidad y carácter para el uso diario.",
      description: "Un clásico de inspiración militar y outdoor. El dial beige, la caja oscura y la correa verde oliva ofrecen excelente legibilidad y una estética versátil para el uso diario.",
      specifications: Object.freeze({
        diameter: "40 mm",
        movement: "Cuarzo",
        illumination: "INDIGLO®",
        waterResistance: "WR 50M",
        timeFormat: "12/24 horas",
        calendar: "Fecha",
        strap: "Verde oliva estilo NATO"
      }),
      images: Object.freeze([
        "assets/products/expedition-acadia-verde/01.webp",
        "assets/products/expedition-acadia-verde/02.webp",
        "assets/products/expedition-acadia-verde/03.webp",
        "assets/products/expedition-acadia-verde/04.webp",
        "assets/products/expedition-acadia-verde/05.webp"
      ]),
      whatsappMessage: "Hola Watch Club, estoy interesado en el Timex Expedition Acadia Beige / Verde Oliva de $80. Quisiera confirmar disponibilidad."
    }),

    Object.freeze({
      id: "expedition-negro-marron",
      brand: "Timex",
      original: true,
      model: "Expedition",
      variant: "Negro / Marrón",
      price: 80,
      currency: "USD",
      available: true,
      featured: false,
      shortDescription: "Un Expedition robusto de estética militar, con dial negro, correa marrón y detalle naranja.",
      description: "Un Expedition de estética robusta y militar. El dial negro y la caja oscura contrastan con la correa marrón y el detalle naranja del segundero.",
      specifications: Object.freeze({
        diameter: "40 mm",
        movement: "Cuarzo",
        illumination: "INDIGLO®",
        waterResistance: "WR 50M",
        timeFormat: "12/24 horas",
        calendar: "Fecha",
        strap: "Marrón",
        secondHand: "Detalle naranja"
      }),
      images: Object.freeze([
        "assets/products/expedition-negro-marron/01.webp",
        "assets/products/expedition-negro-marron/02.webp",
        "assets/products/expedition-negro-marron/03.webp",
        "assets/products/expedition-negro-marron/04.webp"
      ]),
      whatsappMessage: "Hola Watch Club, estoy interesado en el Timex Expedition Negro / Marrón de $80. Quisiera confirmar disponibilidad."
    }),

    Object.freeze({
      id: "expedition-metalico-azul",
      brand: "Timex",
      original: true,
      model: "Expedition",
      variant: "Metálico / Azul",
      price: 70,
      currency: "USD",
      available: true,
      featured: false,
      shortDescription: "Una versión fresca y deportiva del Expedition, con caja metálica, dial claro y correa azul marino.",
      description: "Una versión fresca y deportiva del Expedition. La caja metálica y el dial claro se combinan con una correa textil azul marino para crear un reloj cómodo y fácil de leer.",
      specifications: Object.freeze({
        diameter: "36 mm",
        movement: "Cuarzo",
        illumination: "INDIGLO®",
        waterResistance: "WR 50M",
        timeFormat: "12/24 horas",
        calendar: "Fecha",
        case: "Metálica",
        strap: "Textil azul marino"
      }),
      images: Object.freeze([
        "assets/products/expedition-metalico-azul/01.webp",
        "assets/products/expedition-metalico-azul/02.webp",
        "assets/products/expedition-metalico-azul/03.webp",
        "assets/products/expedition-metalico-azul/04.webp"
      ]),
      whatsappMessage: "Hola Watch Club, estoy interesado en el Timex Expedition Metálico / Azul de $70. Quisiera confirmar disponibilidad."
    }),

    Object.freeze({
      id: "classic-easy-reader",
      brand: "Timex",
      original: true,
      model: "Classic / Easy Reader",
      variant: "Plateado / Dial Negro",
      price: 80,
      currency: "USD",
      available: true,
      featured: false,
      shortDescription: "Un clásico atemporal con dial negro de alta legibilidad y brazalete extensible de acero.",
      description: "Un clásico sencillo y atemporal. El dial negro de alta legibilidad combina con el acabado plateado y el brazalete extensible de acero para una propuesta cómoda y elegante de uso diario.",
      specifications: Object.freeze({
        diameter: "38 mm",
        movement: "Cuarzo",
        illumination: "INDIGLO®",
        waterResistance: "WR 30M",
        calendar: "Fecha",
        dial: "Negro",
        finish: "Plateado",
        bracelet: "Acero inoxidable extensible"
      }),
      images: Object.freeze([
        "assets/products/classic-easy-reader/01.webp",
        "assets/products/classic-easy-reader/02.webp",
        "assets/products/classic-easy-reader/03.webp"
      ]),
      whatsappMessage: "Hola Watch Club, estoy interesado en el Timex Classic / Easy Reader Plateado / Dial Negro de $80. Quisiera confirmar disponibilidad."
    })
  ]);

  function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function validateCatalog() {
    if (!/^\d{10,15}$/.test(storeConfig.whatsapp)) {
      throw new Error("Watch Club: WhatsApp inválido.");
    }

    const ids = new Set();

    products.forEach((product, index) => {
      const label = `Producto ${index + 1}`;

      if (!isNonEmptyString(product.id) || !/^[a-z0-9-]+$/.test(product.id)) {
        throw new Error(`${label}: ID inválido.`);
      }
      if (ids.has(product.id)) {
        throw new Error(`ID duplicado: ${product.id}`);
      }
      ids.add(product.id);

      ["brand", "model", "variant", "currency", "description", "shortDescription", "whatsappMessage"].forEach((key) => {
        if (!isNonEmptyString(product[key])) {
          throw new Error(`${product.id}: falta ${key}.`);
        }
      });

      if (!Number.isFinite(product.price) || product.price <= 0) {
        throw new Error(`${product.id}: precio inválido.`);
      }
      if (typeof product.available !== "boolean" || typeof product.original !== "boolean") {
        throw new Error(`${product.id}: estado booleano inválido.`);
      }
      if (!product.specifications || Object.keys(product.specifications).length === 0) {
        throw new Error(`${product.id}: faltan especificaciones.`);
      }
      if (!Array.isArray(product.images) || product.images.length === 0) {
        throw new Error(`${product.id}: faltan imágenes.`);
      }

      product.images.forEach((image) => {
        if (!/^assets\/products\/[a-z0-9-]+\/\d{2}\.webp$/.test(image)) {
          throw new Error(`${product.id}: ruta de imagen inválida: ${image}`);
        }
      });
    });

    return true;
  }

  function getProductById(id) {
    if (!isNonEmptyString(id)) return null;
    return products.find((product) => product.id === id) || null;
  }

  function getAvailableProducts() {
    return products.filter((product) => product.available);
  }

  function getFeaturedProduct() {
    return products.find((product) => product.available && product.featured) || getAvailableProducts()[0] || null;
  }

  function getRelatedProducts(id, limit = 3) {
    const safeLimit = Number.isInteger(limit) && limit > 0 ? limit : 3;
    return products.filter((product) => product.available && product.id !== id).slice(0, safeLimit);
  }

  function formatPrice(product) {
    if (!product || !Number.isFinite(product.price)) return "";
    return product.currency === "USD" ? `$${product.price}` : `${product.price} ${product.currency}`;
  }

  function getWhatsAppUrl(product = null) {
    const message = product && isNonEmptyString(product.whatsappMessage)
      ? product.whatsappMessage
      : "Hola Watch Club, quisiera conocer la disponibilidad de sus relojes.";

    return `https://wa.me/${storeConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  }

  validateCatalog();

  global.WatchClubCatalog = Object.freeze({
    storeConfig,
    products,
    getProductById,
    getAvailableProducts,
    getFeaturedProduct,
    getRelatedProducts,
    formatPrice,
    getWhatsAppUrl
  });
})(window);
