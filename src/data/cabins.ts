import type { Cabin } from "../interfaces/cabain.interface";

export const cabins: Cabin[] = [
  {
    name: "Alpina",
    slug:"alpina",
    description: "Diseño triangular moderno, ideal para climas boscosos y espacios íntimos.",
    price: 774000,
    size:"55 m²",
    images: [
      "/imgs/alpina/alpina_1.jpg",
      "/imgs/alpina/alpina_2.jpg",
      "/imgs/alpina/alpina_3.jpg",
      "/imgs/alpina/alpina_4.jpg",
      "/imgs/alpina/alpina_5.jpg",
    ],
    distribution: [
      "1 Recamara",
      "1 Mezzanine",
      "Baños completos",
      "Espacio para comedor",
      "Espacio para sala",
      "Cocina"
    ],
    equipment : [
      "Parrilla eléctrica",
      "Tinaco para agua",
      "Biodigestor",
      "Panel solar",
      "Boiler de paso",
      "Minisplit / Chimenea",
      "Terraza",
    ],
    financing: {
      downPayment: 77400,
      invoiceFee: 61920,
      plans: [
        {
          label: "3 mensualidades para cubrir 50% de construcción",
          amount: 103200
        },
        {
          label: "12 mensualidades sin intereses",
          amount: 32250
        },
        {
          label: "24 mensualidades",
          amount: 18060,
          note: "6% anual"
        }
      ]
    } 
  },
  {
    name: "Aurum",
    slug:"aurum",
    description: "Modelo contemporáneo con acabados premium y amplios ventanales.",
    price: 936000,
    size:"71 m²",
    images: [
      "/imgs/aurum/aurum_1.jpg",
      "/imgs/aurum/aurum_2.jpg",
      "/imgs/aurum/aurum_3.jpg",
      "/imgs/aurum/aurum_4.jpg",
      "/imgs/aurum/aurum_5.jpg",
    ],
    distribution: [
      "2 recamaras y un estudio",
      "Baño completo",
      "Sala techo alto",
      "Cocina"
    ],
    equipment : [
      "Parrilla electrica",
      "Tinaco para agua",
      "Biodigestor",
      "Panel solar",
      "Boiler de paso",
      "Mini split / Chimenea"
    ],
    financing: {
      downPayment: 93600,
      invoiceFee: 74880,
      plans: [
        {
          label: "3 mensualidades para cubrir 50% de construcción",
          amount: 124800
        },
        {
          label: "12 mensualidades sin intereses",
          amount: 39000
        },
        {
          label: "24 mensualidades",
          amount: 21840,
          note: "6% anual"
        }
      ]
    } 
  },
  {
    name: "Brisa",
    slug:"brisa",
    description: "Espacios abiertos y frescos, perfecta para zonas cálidas y vistas panorámicas.",
    price: 1620000,
    size:"83 m²",
    images: [
      "/imgs/brisa/brisa_1.jpg",
      "/imgs/brisa/brisa_2.jpg",
      "/imgs/brisa/brisa_3.jpg",
      "/imgs/brisa/brisa_4.jpg",
      "/imgs/brisa/brisa_5.jpg",
    ],
    distribution: [
      "2 recamaras / opcional 3",
      "Baño completo",
      "Espacio para comedor",
      "Espacio para sala",
      "Cocina"
    ],
    equipment : [
      "Parilla electrica",
      "Tinaco para agua",
      "Biodigestor",
      "Panel solar",
      "Mini split / Chimenea",
      "Boiler de paso",
      "Terraza"
    ],
    financing: {
      downPayment: 162000,
      invoiceFee: 129600,
      plans: [
        {
          label: "3 mensualidades para cubrir 50% de construcción",
          amount: 216000
        },
        {
          label: "12 mensualidades sin intereses",
          amount: 67500
        },
        {
          label: "24 mensualidades",
          amount: 37800,
          note: "6% anual"
        }
      ]
    } 
  },
  {
    name: "Villa",
    slug:"villa",
    description: "Mayor amplitud y confort para quienes buscan una experiencia residencial completa.",
    price: 1926000,
    size:"120 m²",
    images: [
      "/imgs/villa/villa_1.jpg",
      "/imgs/villa/villa_2.jpg",
      "/imgs/villa/villa_3.jpg",
      "/imgs/villa/villa_4.jpg",
      "/imgs/villa/villa_4.jpg",
    ],
    distribution: [
      "3 recamaras",
      "2 Baños completos",
      "Espacio para comedor",
      "Espacio para sala",
      "Cocina",
    ],
    equipment : [
      "Parrilla electrica",
      "Tinaco para agua",
      "Biodigestor",
      "Panel solar",
      "Boiler de paso",
      "Mini split / Chimenea",
      "Terraza"
    ],
    financing: {
      downPayment: 192600,
      invoiceFee: 154000,
      plans: [
        {
          label: "3 mensualidades para cubrir 50% de construcción",
          amount: 256800
        },
        {
          label: "12 mensualidades sin intereses",
          amount: 80250
        },
        {
          label: "24 mensualidades",
          amount: 44940,
          note: "6% anual"
        }
      ]
    } 
  },
];
