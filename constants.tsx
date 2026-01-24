import React from 'react';
import { ServiceItem, ProjectItem, TestimonialItem, BrandItem } from './types';

export const ASSETS = {
  logo: (
    <img src="/resources/labflow-logo.png" alt="LabFlow Logo" className="h-10 w-auto object-contain" />
  ),
  robot: "/resources/flo-robot.png",
  heroGraphic: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/650233d59b9a7a16b10beb85_Group%2069.svg",
  heroStars: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/650347cc5ff83f6f05a40af2_Group%2060.svg",
  heroPattern: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65363b2d9ea7b7c5f9c07406_Grid.svg",
  heroBg: "/resources/lab-hero.png",
};

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "ISO 17025 Compliant",
    description: "Sistem kami dibangun di atas fondasi standar internasional ISO/IEC 17025 untuk menjamin kompetensi teknis laboratorium Anda. Kami memastikan setiap alur kerja, validasi metode, dan pelaporan hasil uji siap diaudit (audit-ready) kapan saja tanpa kerumitan administrasi manual.",
    image: "/resources/iso-17025.png",
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
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "LabFlow Assets",
    description: "Monitoring aset menyeluruh dengan jejak audit (audit trail) lengkap. Lacak siklus hidup instrumen dari kalibrasi hingga maintenance, serta manajemen reagen dari pemesanan hingga pemusnahan secara real-time dibantu oleh Flo",
    tags: ["Asset Monitoring", "Audit Trail", "Automation"],
    image: "/resources/labflow-work-1.png",
    link: "#"
  },
  {
    title: "AI Integrated LIMS",
    description: "Sistem LIMS custom yang beradaptasi dengan SOP Anda, bukan sebaliknya. Dilengkapi flow otomatis dari quotation hingga customer portal, skill matrix analis, dan compliance ISO 17025.",
    tags: ["ISO 17025", "Custom LIMS", "Flexibility"],
    image: "/resources/labflow-work-2.png",
    link: "#"
  },
  {
    title: "Flo - AI Chatbot",
    description: "Asisten AI pribadi yang memahami konteks laboratorium Anda. Flo membantu membaca stok inventori, memberikan panduan berbasis manual book/MSDS, dan membuat laporan performa tanpa mengkompromikan keamanan data.",
    tags: ["Private AI", "Safety Assistant", "Instructor"],
    image: "/resources/labflow-work-3.png",
    link: "#"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Ivan Sarifudin",
    role: "Founder & CEO of Labmania Indonesia",
    image: "/resources/profile-1.png",
    quote: "LabFlow mampu memecahkan masalah alur kerja kami, menjadi lebih efisien. Visi LabFlow ini sangat baik kedepannya, saya tidak sabar untuk menunggu project selanjutnya."
  },
  {
    name: "Ayu Melinda",
    role: "Trainer at Labmania Indonesia",
    image: "/resources/profile-2.png",
    quote: "Efisiensi kerja kami meningkat lebih dari 30% dan human-error team kami hampir hilang. Sebuah transformasi digital yang nyata."
  },
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