import React from 'react';
import { ServiceItem, ProjectItem, TestimonialItem, BrandItem } from './types';

export const ASSETS = {
  logo: (
    <img src="/resources/LabFlow (3).png" alt="LabFlow Logo" className="h-10 w-auto object-contain" />
  ),
  robot: "/resources/flo (2).png",
  heroGraphic: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/650233d59b9a7a16b10beb85_Group%2069.svg",
  heroStars: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/650347cc5ff83f6f05a40af2_Group%2060.svg",
  heroPattern: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65363b2d9ea7b7c5f9c07406_Grid.svg",
};

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "ISO 17025 Compliant",
    description: "Sistem kami dibangun di atas fondasi standar internasional ISO/IEC 17025 untuk menjamin kompetensi teknis laboratorium Anda. Kami memastikan setiap alur kerja, validasi metode, dan pelaporan hasil uji siap diaudit (audit-ready) kapan saja tanpa kerumitan administrasi manual.",
    image: "/resources/iso17025.png",
    link: "#"
  },
  {
    number: "02",
    title: "Traceable Data",
    description: "Dapatkan transparansi total dengan jejak audit (audit trail) digital yang merekam setiap aktivitas secara real-time. Dari penerimaan sampel hingga penerbitan sertifikat, setiap perubahan data dicatat lengkap dengan timestamp dan identitas user, menjamin integritas data yang aman dan tak terbantahkan",
    image: "/resources/audit-trail.png",
    link: "#"
  },
  {
    number: "03",
    title: "Reduce Human Error",
    description: "Hilangkan risiko kesalahan input manual dan perhitungan yang berulang. Dengan bantuan otomatisasi cerdas dan validasi AI, LabFlow mengambil alih tugas repetitif, memastikan konsistensi hasil pengujian, dan membiarkan analis Anda fokus pada hal yang paling krusial: akurasi dan presisi analisis.",
    image: "/resources/no-human-error.png",
    link: "#"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Drivelodge",
    description: "Founded as a passion project by enthusiasts David and Joanne, Drivelodge has built on its reputation for crafting high-quality high-top and elevating camper van roofs.",
    tags: ["Web Design/Development", "UI/UX Design", "Configurator"],
    image: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/68c13393a3119407825526b7_Graph.avif",
    link: "#"
  },
  {
    title: "Hacien",
    description: "HACIEN is a premium tequila brand supplying high-end hospitality and retail locations worldwide. They approached Phunk to undertake a comprehensive design project.",
    tags: ["Webflow Development", "UI/UX Design", "Graphic Design"],
    image: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411cf4f8251ab33a7d442b_HACIEN%20Thumbnail.webp",
    link: "#"
  },
  {
    title: "Mobilleo",
    description: "Mobilleo is a SaaS solution making it easy for organisations to manage global business travel for their employees.",
    tags: ["Splash Screens", "Illustrations", "Lottie Animations"],
    image: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411d0755e48e6b5ec08e9a_Mobilio%20Thumbnail.webp",
    link: "#"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Josh Gudgeon",
    role: "Breaking Bread",
    image: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65367dca7a29e74cf679b061_61e6ed77c904254d16048ee3_1612423437659-p-500.webp",
    quote: "Phunk Creative recently delivered on the branding of our new podcast. The team were responsive, professional & a real pleasure to work with."
  },
  {
    name: "Sarah Baugh",
    role: "Get Dynamic",
    image: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65367dca71de9b7b0c5f5dbf_61e6ee1171a9ee244c4cb9a7_1642174119631-p-500.webp",
    quote: "Our new website is so cool, really engaging and user friendly. Will definitely be using them again on future projects."
  },
  {
    name: "Stuart Crowder",
    role: "Mannson Freight",
    image: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65367dc97e9a87b13a2d3999_61e6ecef59d0b04f7727fb97_003.webp",
    quote: "Our brand means the world to us and if yours does too then we could not recommend any other partner more highly than Phunk Creative."
  }
];

export const BRANDS: BrandItem[] = [
  { name: "Wow Hydrate", logo: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/6501fb1b618f4d71653bd61c_Wow_Hydrate%20(1)%201.webp" },
  { name: "Nakd", logo: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/6501fb1b8b0748e20f682936_Isolation_Mode.webp" },
  { name: "Unilever", logo: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/6501fb1b78387e54d77a990d_Isolation_Mode-1.webp" },
  { name: "Yorkshire Wildlife Park", logo: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/6501fb1b2f0f4f498af511fc_Asset%204%402x%201.webp" },
  { name: "University of Sheffield", logo: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/6501fb1b1ef85a5a15912562_uos_logo_white-de0c1a34b6edf3611093555bc2b228fb22a085c8c82627f8a40ff286e4443c14%201.webp" },
  { name: "Majenta", logo: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/6501fb1be3413fa9db001636_Majenta%20Light%201.webp" },
  { name: "BoxIQ", logo: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/6501fb1bfe691484cd6e1b42_Layer_1.webp" }
];