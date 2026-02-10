export type Locale = "en" | "id";

const en = {
  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Our Journey", href: "#timeline" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Locations", href: "#locations" },
    ],
    cta: "CONTACT US",
  },

  hero: {
    badge: "Holding Company",
    headline: ["GATE TO", "STRATEGIC", "PROJECT"],
    headlineHighlight: "CONTROL",
    subtitle: ["Investment", "Management", "Execution"],
    description:
      "National holding company overseeing Indonesia's integrated mining ecosystem, from licensed explosives distribution and precision blasting to strategic logistics across the archipelago.",
    cta: "LEARN MORE",
    subsidiaryLabel: "Subsidiary Overview",
    subsidiaries: [
      { name: "Licensed Explosives Distribution", statLabel: "Ton/Year" },
      { name: "Precision Blasting & Drilling", statLabel: "Projects" },
      { name: "Integrated Mining Logistics", statLabel: "Nationwide" },
      { name: "Explosive & Chemical Engineering", statLabel: "Projects" },
    ],
  },

  stats: {
    items: [
      { label: "Years of Track Record" },
      { label: "Total Project Value" },
      { label: "Provinces Reached" },
    ],
  },

  addedValue: {
    badge: "The Nuskara Added Value",
    headlineTop: "SIMPLIFYING",
    headlineHighlight: "COMPLEXITY",
    headlineBottom: "AT SCALE",
    description:
      "National holding company ensuring safe and compliant execution of strategically critical mining operations through strict regulatory governance, cross-subsidiary coordination, and integrated resource management across Indonesia.",
    values: [
      {
        title: "Mining Safety & Compliance (K3L)",
        desc: "Upholding the highest health, safety, and environmental standards across all mining and logistics operations.",
      },
      {
        title: "Licensed & Regulated Operations",
        desc: "Operating under strict government licensing in explosives distribution, transport, and mining services nationwide.",
      },
      {
        title: "Integrated Mining Ecosystem",
        desc: "Connecting distribution, blasting, drilling, logistics, and maritime services under one unified holding structure.",
      },
    ],
    established: "Established",
    ecosystem: {
      nodes: [
        { abbr: "DAN", label: "Distribution" },
        { abbr: "SSM", label: "Blasting" },
        { abbr: "GBN", label: "Logistics" },
        { abbr: "MCA", label: "Engineering" },
      ],
    },
  },

  bod: {
    badge: "Our Leadership",
    headline: "Board of",
    headlineHighlight: "Directors",
    closeLabel: "Close",
    members: [
      {
        name: "Raditya Wardhana",
        title: "President Director",
        photo: "/images/bod-raditya.webp",
        bio: [
          "Founder operator who has built an integrated mining ecosystem <strong>since 2006</strong>. With <strong>over 15 years</strong> of leadership, he oversees <strong>three active mining operations</strong> in West Java across mining, commercial explosives, drilling and blasting, logistics, and industrial technologies.",
          "He <strong>founded BlastPro</strong>, introducing <strong>LOx Breaker technology</strong> for precision and safety. Today, <strong>five companies</strong> operate in synergy under PT Nusantara Karya Raya Indonesia.",
        ],
        quote: "Success is built by creating systems that scale, endure, and deliver real impact.",
      },
      {
        name: "Dien Hartati",
        title: "President Commissioner",
        photo: "/images/bod-dien.webp",
        bio: [
          "Dien Hartati is a senior corporate banking professional with <strong>more than a decade of experience</strong>, particularly in Corporate Banking. Her career was built within the banking industry, where she held a range of strategic roles from <strong>Account Manager to Assistant Vice President</strong>, managing large-scale corporate client portfolios, conducting rigorous credit analysis, and cultivating long-term, trust-based business relationships.",
          "As President Commissioner of PT Nusantara Karya Raya Indonesia, Dien plays a key role in <strong>safeguarding the company's strategic direction and governance framework</strong>, ensuring alignment with principles of sustainability, integrity, and long-term value creation.",
        ],
        quote: "Strategic leadership is not only about vision, but the courage to stay the course, even in times of constant change.",
      },
      {
        name: "Sarah Shivina",
        title: "Finance Director",
        photo: "/images/bod-sarah.webp",
        bio: [
          "Sarah Shivina is a senior finance executive with <strong>over 25 years of experience</strong> across <strong>banking, logistics, mining, education, and international operations</strong>. With a strong academic foundation in finance and international business management, she brings a rare combination of strategic insight and hands-on operational leadership.",
          "As Finance Director of PT Nusantara Karya Raya Indonesia, Sarah leads <strong>strategic financial planning</strong> and strengthens the Group's financial structure, supporting disciplined growth and long-term value creation.",
        ],
        quote: "Vision is not only about seeing the future, but about creating one worth building.",
      },
      {
        name: "Stefaan De Beleyr",
        title: "Chief Technology Officer",
        photo: "/images/bod-stefaan.webp",
        bio: [
          "Stefaan De Beleyr is a senior technology and business professional with <strong>more than 25 years of cross-industry experience</strong> spanning <strong>oil and gas, logistics, and information technology in Europe</strong>. After building his career in Belgium, he is now based in Jakarta, where he leads digital transformation and enterprise information systems at PT Nusantara Karya Raya Indonesia.",
          "As Chief Technology Officer, Stefaan drives the company's <strong>digital strategy</strong> to enhance operational efficiency, data-driven decision-making, and long-term innovation.",
        ],
        quote: "Digital transformation is not just about technology, but about how technology enables efficiency and innovation in pursuit of long-term vision.",
      },
      {
        name: "Arie Arrachman",
        title: "Finance & Accounting Manager",
        photo: "/images/bod-arie.webp",
        bio: [
          "Arie Arrachman is a seasoned finance and accounting professional with <strong>more than 20 years of experience</strong> across banking and corporate sectors. His career progressed from customer-facing and card services roles into SME banking, where he later earned the trust to lead a branch as <strong>Branch Manager at one of Indonesia's largest state-owned banks</strong>.",
          "Currently, he holds a strategic role as Finance & Accounting Manager at PT Nusantara Karya Raya Indonesia, overseeing <strong>group-level treasury operations</strong> and ensuring financial continuity across its subsidiaries.",
        ],
        quote: "Successful financial management is not only about numbers, but about building trust and leading with integrity.",
      },
    ],
  },

  portfolio: {
    badge: "Our Work",
    headline: "PROJECT",
    headlineHighlight: "PORTFOLIO",
    viewAll: "View All Projects",
    readMore: "Read More",
    projects: [
      {
        title: "Strategic Investment in LNG Terminal Expansion Project",
        category: "Energy Infrastructure",
      },
      {
        title: "Safety & Compliance Certification for Mining Site Operations",
        category: "Mining Compliance",
      },
      {
        title:
          "Groundbreaking Ceremony for Industrial Development in Kalimantan",
        category: "Industrial Development",
      },
    ],
  },

  locations: {
    badge: "Nationwide Presence",
    headline: "STRATEGIC LOCATIONS",
    headlineHighlight: "COVERAGE",
    description:
      "Operational coverage spanning major mining regions and industrial corridors across Indonesia, from resource-rich Kalimantan to strategic logistics hubs in Java and Sumatra.",
    cta: "SEE ALL PROJECTS",
    names: [
      "Jakarta",
      "South Kalimantan",
      "East Kalimantan",
      "Central Java",
      "West Java",
      "Riau",
      "South Sumatra",
      "North Sulawesi",
      "Papua",
    ],
  },

  map: {
    locations: [
      "Jakarta (HQ)",
      "West Java",
      "Central Java",
      "Riau",
      "South Sumatra",
      "South Kalimantan",
      "East Kalimantan",
      "North Sulawesi",
      "Papua",
    ],
    hqLabel: "HQ",
  },

  news: {
    badge: "Latest Updates",
    headline: "NEWS &",
    headlineHighlight: "MEDIA",
    viewAll: "View All News",
    articles: [
      {
        date: "January 15, 2025",
        title:
          "Nuskara Group Strengthens Mining Distribution Network in Eastern Indonesia",
        excerpt:
          "Expanding licensed explosives distribution capacity through new strategic warehouse facilities in Kalimantan.",
        category: "Partnership",
      },
      {
        date: "December 28, 2024",
        title:
          "K3L Safety Standards Audit Achieves Excellent Rating Across Subsidiaries",
        excerpt:
          "Annual occupational health, safety, and environmental review confirms adherence to national mining regulations.",
        category: "Compliance",
      },
      {
        date: "November 10, 2024",
        title:
          "New Logistics Route Supports Mining Operations in South Kalimantan",
        excerpt:
          "Integrated transport route connecting Java logistics hub to mining operational zones in Kalimantan.",
        category: "Logistics",
      },
    ],
  },

  contact: {
    badge: "Get in Touch",
    headlineTop: "CONTACT",
    headlineHighlight: "US",
    description:
      "For strategic partnerships, mining service inquiries, or corporate communications, reach out to our team directly.",
    emailLabel: "Email",
    officeLabel: "Office",
    officeValue: "Jakarta, Indonesia",
    form: {
      name: "Full Name",
      namePlaceholder: "Enter your name",
      email: "Email Address",
      emailPlaceholder: "Enter your email",
      message: "Message",
      messagePlaceholder: "Write your message...",
      submit: "SEND MESSAGE",
    },
  },

  timeline: {
    badge: "Our Journey",
    headline: "Building the",
    headlineHighlight: "Ecosystem",
    description:
      "From a single logistics company to an integrated mining and resource holding. Over a decade of disciplined expansion, strategic acquisitions, and value creation.",
    milestones: [
      {
        year: "2013",
        title: "The Foundation",
        description:
          "PT Garuda Bakti Nusantara was established as the foundation of PT Nusantara Karya Raya Indonesia in the logistics sector, with a primary focus on freight forwarding services for commercial explosives. The establishment of this company marked the beginning of the group's business network development.",
      },
      {
        year: "2015",
        title: "Mining Expansion",
        description:
          "PT Nusantara Karya Raya Indonesia expanded its business scope into quarry mining and general construction by establishing PT Siliwangi Sumber Makmur, specializing in precision blasting and drilling services.",
      },
      {
        year: "2019",
        title: "Strategic Acquisition",
        description:
          "PT Nusantara Karya Raya Indonesia acquired ownership shares of PT Distribusi Ammo Nusantara as a licensed distributor of commercial explosives and provider of drilling and blasting services, particularly in coal mining and mineral sectors. In the same year, the group began expanding into telecommunications industry services.",
      },
      {
        year: "2021",
        title: "Telecom Integration",
        description:
          "PT Nusantara Karya Raya Indonesia continued its business expansion by acquiring partial shares of PT Fardis Jasa Indonesia to strengthen its commitment to cellular telecommunications service innovation.",
      },
      {
        year: "2023",
        title: "Workforce Solutions",
        description:
          "PT Nusantara Karya Raya Indonesia made a strategic move by collaborating with PT Fardis Cakrawala Indonesia as a human resources solutions provider specializing in the mining sector, adding a new dimension to the group's business portfolio.",
      },
      {
        year: "2024",
        title: "Maritime & Technology",
        description:
          "To complete its planned business expansion, PT Nusantara Karya Raya Indonesia entered the maritime industry by establishing PT Pelayaran Garuda Bakti Nusantara, and PT Mitra Cuan Abadi under the commercial brand BlastPro, specializing in drilling heavy equipment distribution and LOX breaker technology innovation solutions.",
      },
      {
        year: "2025",
        title: "Investment Holding",
        description:
          "PT Nusantara Karya Raya Indonesia officially transformed into an Investment Company, serving as the parent entity for all subsidiaries, with a focus on business portfolio management, operational oversight, and providing strategic support.",
      },
    ],
  },

  footer: {
    description:
      "PT Nuskara Karya Raya Indonesia. National holding company for Indonesia's integrated mining and resource ecosystem.",
    companyTitle: "Company",
    companyLinks: [
      { label: "About Us", href: "#about" },
      { label: "Our Portfolio", href: "#portfolio" },
      { label: "Locations", href: "#locations" },
      { label: "News & Media", href: "#news" },
    ],
    subsidiariesTitle: "Subsidiaries",
    subsidiariesLinks: [
      { label: "PT DAN", href: "#subsidiaries" },
      { label: "PT SSM", href: "#subsidiaries" },
      { label: "PT GBN", href: "#subsidiaries" },
      { label: "PT MCA", href: "#subsidiaries" },
    ],
    contactTitle: "Contact",
    contactLinks: [
      { label: "info@nuskara.co.id", href: "mailto:info@nuskara.co.id" },
      { label: "Jakarta, Indonesia", href: "#contact" },
    ],
    copyright: "PT Nuskara Karya Raya Indonesia. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
};

const id: typeof en = {
  nav: {
    links: [
      { label: "Beranda", href: "#home" },
      { label: "Tentang", href: "#about" },
      { label: "Perjalanan Kami", href: "#timeline" },
      { label: "Portofolio", href: "#portfolio" },
      { label: "Lokasi", href: "#locations" },
    ],
    cta: "HUBUNGI KAMI",
  },

  hero: {
    badge: "Perusahaan Induk",
    headline: ["GERBANG", "KENDALI", "PROYEK"],
    headlineHighlight: "STRATEGIS",
    subtitle: ["Investasi", "Manajemen", "Eksekusi"],
    description:
      "Perusahaan induk nasional yang mengelola ekosistem pertambangan terintegrasi di Indonesia, mulai dari distribusi bahan peledak berlisensi dan peledakan presisi hingga logistik strategis di seluruh kepulauan.",
    cta: "SELENGKAPNYA",
    subsidiaryLabel: "Ikhtisar Anak Perusahaan",
    subsidiaries: [
      { name: "Distribusi Bahan Peledak Berlisensi", statLabel: "Ton/Tahun" },
      { name: "Peledakan & Pengeboran Presisi", statLabel: "Proyek" },
      { name: "Logistik Pertambangan Terintegrasi", statLabel: "Nasional" },
      { name: "Rekayasa Bahan Peledak & Kimia", statLabel: "Proyek" },
    ],
  },

  stats: {
    items: [
      { label: "Tahun Rekam Jejak" },
      { label: "Total Nilai Proyek" },
      { label: "Provinsi Terjangkau" },
    ],
  },

  addedValue: {
    badge: "Nilai Tambah Nuskara",
    headlineTop: "MENYEDERHANAKAN",
    headlineHighlight: "KOMPLEKSITAS",
    headlineBottom: "BERSKALA BESAR",
    description:
      "Perusahaan induk nasional yang memastikan pelaksanaan operasi pertambangan yang aman dan patuh melalui tata kelola regulasi yang ketat, koordinasi lintas anak perusahaan, dan pengelolaan sumber daya terintegrasi di seluruh Indonesia.",
    values: [
      {
        title: "Keselamatan & Kepatuhan Pertambangan (K3L)",
        desc: "Menjunjung standar kesehatan, keselamatan, dan lingkungan tertinggi di seluruh operasi pertambangan dan logistik.",
      },
      {
        title: "Operasi Berlisensi & Teregulasi",
        desc: "Beroperasi di bawah perizinan pemerintah yang ketat dalam distribusi bahan peledak, transportasi, dan layanan pertambangan nasional.",
      },
      {
        title: "Ekosistem Pertambangan Terintegrasi",
        desc: "Menghubungkan distribusi, peledakan, pengeboran, logistik, dan layanan maritim dalam satu struktur holding terpadu.",
      },
    ],
    established: "Didirikan",
    ecosystem: {
      nodes: [
        { abbr: "DAN", label: "Distribusi" },
        { abbr: "SSM", label: "Peledakan" },
        { abbr: "GBN", label: "Logistik" },
        { abbr: "MCA", label: "Rekayasa" },
      ],
    },
  },

  bod: {
    badge: "Kepemimpinan Kami",
    headline: "Dewan",
    headlineHighlight: "Direksi",
    closeLabel: "Tutup",
    members: [
      {
        name: "Raditya Wardhana",
        title: "Direktur Utama",
        photo: "/images/bod-raditya.webp",
        bio: [
          "Pendiri dan operator yang membangun ekosistem pertambangan terintegrasi <strong>sejak 2006</strong>. Dengan <strong>lebih dari 15 tahun</strong> kepemimpinan, ia mengawasi <strong>tiga operasi pertambangan aktif</strong> di Jawa Barat meliputi pertambangan, bahan peledak komersial, pengeboran dan peledakan, logistik, serta teknologi industri.",
          "Ia <strong>mendirikan BlastPro</strong>, memperkenalkan <strong>teknologi LOx Breaker</strong> untuk presisi dan keselamatan. Saat ini, <strong>lima perusahaan</strong> beroperasi secara sinergis di bawah PT Nusantara Karya Raya Indonesia.",
        ],
        quote: "Kesuksesan dibangun dengan menciptakan sistem yang dapat berkembang, bertahan, dan memberikan dampak nyata.",
      },
      {
        name: "Dien Hartati",
        title: "Komisaris Utama",
        photo: "/images/bod-dien.webp",
        bio: [
          "Dien Hartati adalah profesional perbankan korporat senior dengan <strong>pengalaman lebih dari satu dekade</strong>, khususnya di bidang Perbankan Korporasi. Kariernya dibangun dalam industri perbankan, di mana ia memegang berbagai peran strategis mulai dari <strong>Account Manager hingga Assistant Vice President</strong>, mengelola portofolio klien korporat berskala besar, melakukan analisis kredit yang ketat, dan membangun hubungan bisnis jangka panjang berbasis kepercayaan.",
          "Sebagai Komisaris Utama PT Nusantara Karya Raya Indonesia, Dien memainkan peran kunci dalam <strong>menjaga arah strategis dan kerangka tata kelola perusahaan</strong>, memastikan keselarasan dengan prinsip keberlanjutan, integritas, dan penciptaan nilai jangka panjang.",
        ],
        quote: "Kepemimpinan strategis bukan hanya tentang visi, tetapi keberanian untuk tetap pada jalur, bahkan di tengah perubahan yang terus-menerus.",
      },
      {
        name: "Sarah Shivina",
        title: "Direktur Keuangan",
        photo: "/images/bod-sarah.webp",
        bio: [
          "Sarah Shivina adalah eksekutif keuangan senior dengan <strong>pengalaman lebih dari 25 tahun</strong> di bidang <strong>perbankan, logistik, pertambangan, pendidikan, dan operasi internasional</strong>. Dengan fondasi akademik yang kuat di bidang keuangan dan manajemen bisnis internasional, ia membawa kombinasi langka antara wawasan strategis dan kepemimpinan operasional langsung.",
          "Sebagai Direktur Keuangan PT Nusantara Karya Raya Indonesia, Sarah memimpin <strong>perencanaan keuangan strategis</strong> dan memperkuat struktur keuangan Grup, mendukung pertumbuhan terdisiplin dan penciptaan nilai jangka panjang.",
        ],
        quote: "Visi bukan hanya tentang melihat masa depan, tetapi tentang menciptakan masa depan yang layak dibangun.",
      },
      {
        name: "Stefaan De Beleyr",
        title: "Chief Technology Officer",
        photo: "/images/bod-stefaan.webp",
        bio: [
          "Stefaan De Beleyr adalah profesional teknologi dan bisnis senior dengan <strong>pengalaman lebih dari 25 tahun lintas industri</strong> meliputi <strong>minyak dan gas, logistik, dan teknologi informasi di Eropa</strong>. Setelah membangun kariernya di Belgia, ia kini berbasis di Jakarta, di mana ia memimpin transformasi digital dan sistem informasi enterprise di PT Nusantara Karya Raya Indonesia.",
          "Sebagai Chief Technology Officer, Stefaan mendorong <strong>strategi digital</strong> perusahaan untuk meningkatkan efisiensi operasional, pengambilan keputusan berbasis data, dan inovasi jangka panjang.",
        ],
        quote: "Transformasi digital bukan hanya tentang teknologi, tetapi tentang bagaimana teknologi memungkinkan efisiensi dan inovasi dalam mengejar visi jangka panjang.",
      },
      {
        name: "Arie Arrachman",
        title: "Manajer Keuangan & Akuntansi",
        photo: "/images/bod-arie.webp",
        bio: [
          "Arie Arrachman adalah profesional keuangan dan akuntansi berpengalaman dengan <strong>lebih dari 20 tahun pengalaman</strong> di sektor perbankan dan korporasi. Kariernya berkembang dari peran layanan nasabah ke perbankan UKM, di mana ia kemudian dipercaya memimpin cabang sebagai <strong>Branch Manager di salah satu bank BUMN terbesar di Indonesia</strong>.",
          "Saat ini, ia memegang peran strategis sebagai Manajer Keuangan & Akuntansi di PT Nusantara Karya Raya Indonesia, mengawasi <strong>operasi perbendaharaan tingkat grup</strong> dan memastikan kelangsungan keuangan di seluruh anak perusahaan.",
        ],
        quote: "Manajemen keuangan yang berhasil bukan hanya tentang angka, tetapi tentang membangun kepercayaan dan memimpin dengan integritas.",
      },
    ],
  },

  portfolio: {
    badge: "Karya Kami",
    headline: "PORTOFOLIO",
    headlineHighlight: "PROYEK",
    viewAll: "Lihat Semua Proyek",
    readMore: "Baca Selengkapnya",
    projects: [
      {
        title: "Investasi Strategis dalam Proyek Ekspansi Terminal LNG",
        category: "Infrastruktur Energi",
      },
      {
        title: "Sertifikasi Keselamatan & Kepatuhan untuk Operasi Tambang",
        category: "Kepatuhan Tambang",
      },
      {
        title: "Peresmian Pembangunan Kawasan Industri di Kalimantan",
        category: "Pembangunan Industri",
      },
    ],
  },

  locations: {
    badge: "Kehadiran Nasional",
    headline: "CAKUPAN LOKASI",
    headlineHighlight: "STRATEGIS",
    description:
      "Cakupan operasional yang menjangkau wilayah pertambangan utama dan koridor industri di seluruh Indonesia, dari Kalimantan yang kaya sumber daya hingga pusat logistik strategis di Jawa dan Sumatera.",
    cta: "LIHAT SEMUA PROYEK",
    names: [
      "Jakarta",
      "Kalimantan Selatan",
      "Kalimantan Timur",
      "Jawa Tengah",
      "Jawa Barat",
      "Riau",
      "Sumatera Selatan",
      "Sulawesi Utara",
      "Papua",
    ],
  },

  map: {
    locations: [
      "Jakarta (Kantor Pusat)",
      "Jawa Barat",
      "Jawa Tengah",
      "Riau",
      "Sumatera Selatan",
      "Kalimantan Selatan",
      "Kalimantan Timur",
      "Sulawesi Utara",
      "Papua",
    ],
    hqLabel: "KP",
  },

  news: {
    badge: "Pembaruan Terkini",
    headline: "BERITA &",
    headlineHighlight: "MEDIA",
    viewAll: "Lihat Semua Berita",
    articles: [
      {
        date: "15 Januari 2025",
        title:
          "Grup Nuskara Memperkuat Jaringan Distribusi Pertambangan di Indonesia Timur",
        excerpt:
          "Memperluas kapasitas distribusi bahan peledak berlisensi melalui fasilitas gudang strategis baru di Kalimantan.",
        category: "Kemitraan",
      },
      {
        date: "28 Desember 2024",
        title:
          "Audit Standar Keselamatan K3L Meraih Peringkat Unggul di Seluruh Anak Perusahaan",
        excerpt:
          "Tinjauan tahunan kesehatan, keselamatan, dan lingkungan kerja mengonfirmasi kepatuhan terhadap regulasi pertambangan nasional.",
        category: "Kepatuhan",
      },
      {
        date: "10 November 2024",
        title:
          "Rute Logistik Baru Mendukung Operasi Pertambangan di Kalimantan Selatan",
        excerpt:
          "Rute transportasi terintegrasi menghubungkan pusat logistik Jawa ke zona operasional pertambangan di Kalimantan.",
        category: "Logistik",
      },
    ],
  },

  contact: {
    badge: "Hubungi Kami",
    headlineTop: "HUBUNGI",
    headlineHighlight: "KAMI",
    description:
      "Untuk kemitraan strategis, pertanyaan layanan pertambangan, atau komunikasi korporat, hubungi tim kami secara langsung.",
    emailLabel: "Email",
    officeLabel: "Kantor",
    officeValue: "Jakarta, Indonesia",
    form: {
      name: "Nama Lengkap",
      namePlaceholder: "Masukkan nama Anda",
      email: "Alamat Email",
      emailPlaceholder: "Masukkan email Anda",
      message: "Pesan",
      messagePlaceholder: "Tulis pesan Anda...",
      submit: "KIRIM PESAN",
    },
  },

  timeline: {
    badge: "Perjalanan Kami",
    headline: "Membangun",
    headlineHighlight: "Ekosistem",
    description:
      "Dari satu perusahaan logistik menjadi holding pertambangan dan sumber daya terintegrasi. Lebih dari satu dekade ekspansi terencana, akuisisi strategis, dan penciptaan nilai.",
    milestones: [
      {
        year: "2013",
        title: "Fondasi Awal",
        description:
          "PT Garuda Bakti Nusantara didirikan sebagai fondasi dari PT Nusantara Karya Raya Indonesia di sektor logistik dengan fokus utama di layanan freight forwarding khusus bahan peledak komersial. Pendirian perusahaan ini menandai awal dari pengembangan jaringan bisnis grup.",
      },
      {
        year: "2015",
        title: "Ekspansi Pertambangan",
        description:
          "PT Nusantara Karya Raya Indonesia memperluas cakupan bisnis ke sektor pertambangan quarry dan konstruksi umum dengan mendirikan PT Siliwangi Sumber Makmur dengan spesialisasi utama sebagai penyedia jasa peledakan dan pengeboran.",
      },
      {
        year: "2019",
        title: "Akuisisi Strategis",
        description:
          "PT Nusantara Karya Raya Indonesia membeli kepemilikan saham dari PT Distribusi Ammo Nusantara sebagai distributor bahan peledak komersial serta penyedia jasa pengeboran dan peledakan, khususnya di sektor pertambangan batu bara dan mineral. Pada tahun yang sama, grup mulai bergerak ke jasa di bidang industri telekomunikasi.",
      },
      {
        year: "2021",
        title: "Integrasi Telekomunikasi",
        description:
          "PT Nusantara Karya Raya Indonesia melanjutkan ekspansi bisnisnya dengan mengakuisisi sebagian saham dari PT Fardis Jasa Indonesia untuk memperkuat komitmen inovasi layanan telekomunikasi seluler.",
      },
      {
        year: "2023",
        title: "Solusi Tenaga Kerja",
        description:
          "PT Nusantara Karya Raya Indonesia membuat langkah strategis yaitu kolaborasi dengan PT Fardis Cakrawala Indonesia sebagai penyedia solusi sumber daya manusia khususnya pada sektor pertambangan, untuk menambah dimensi baru dalam portofolio bisnis grup.",
      },
      {
        year: "2024",
        title: "Maritim & Teknologi",
        description:
          "Untuk melengkapi visi ekspansi bisnis secara terencana, PT Nusantara Karya Raya Indonesia merambah industri pelayaran dengan mendirikan PT Pelayaran Garuda Bakti Nusantara serta PT Mitra Cuan Abadi dengan brand komersial BlastPro yang bergerak di bidang distributor alat berat pengeboran dan solusi inovasi teknologi LOX breaker.",
      },
      {
        year: "2025",
        title: "Investment Holding",
        description:
          "PT Nusantara Karya Raya Indonesia secara resmi bertransformasi menjadi Perusahaan Investasi, yang berperan sebagai induk usaha untuk seluruh anak perusahaan, dengan fokus pada pengelolaan portofolio bisnis dan pengawasan operasional, serta pemberian dukungan yang bersifat strategis.",
      },
    ],
  },

  footer: {
    description:
      "PT Nuskara Karya Raya Indonesia. Perusahaan induk nasional untuk ekosistem pertambangan dan sumber daya terintegrasi di Indonesia.",
    companyTitle: "Perusahaan",
    companyLinks: [
      { label: "Tentang Kami", href: "#about" },
      { label: "Portofolio Kami", href: "#portfolio" },
      { label: "Lokasi", href: "#locations" },
      { label: "Berita & Media", href: "#news" },
    ],
    subsidiariesTitle: "Anak Perusahaan",
    subsidiariesLinks: [
      { label: "PT DAN", href: "#subsidiaries" },
      { label: "PT SSM", href: "#subsidiaries" },
      { label: "PT GBN", href: "#subsidiaries" },
      { label: "PT MCA", href: "#subsidiaries" },
    ],
    contactTitle: "Kontak",
    contactLinks: [
      { label: "info@nuskara.co.id", href: "mailto:info@nuskara.co.id" },
      { label: "Jakarta, Indonesia", href: "#contact" },
    ],
    copyright: "PT Nuskara Karya Raya Indonesia. Seluruh hak dilindungi.",
    privacyPolicy: "Kebijakan Privasi",
    termsOfService: "Syarat & Ketentuan",
  },
};

export const translations: Record<Locale, typeof en> = { en, id };
export type Translations = typeof en;
