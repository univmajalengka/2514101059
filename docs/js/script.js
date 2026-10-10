/* GANTI NOMOR INI DENGAN NOMOR WHATSAPP TUJUAN KAMU.
   Format: 628xxxxxxxxxx, tanpa + dan tanpa spasi. */

const WA_NUMBER = '6285142186970';

const data = {

  seaworld: {
    name: 'Sea World Ancol, Jakarta',
    category: 'keluarga',
    label: 'Edukasi & Keluarga',
    img: 'seaworld/braga-3.jpg',
    images: [
      'seaworld/braga-3.jpg',
      'seaworld/dunia-3.jpg',
      'seaworld/karangsong-3.jpg',
      'seaworld/seaworld-1.jpg',
      'seaworld/seaworld-3.jpg'
    ],
    desc: 'Destinasi edukasi keluarga dengan pengalaman melihat kehidupan bawah laut dan berbagai koleksi biota laut.',
    open: '09.00 - 18.00 WIB',
    days: 'Setiap hari',
    closed: 'Tidak ada',
    address: 'Taman Impian Jaya Ancol, Jakarta Utara',
    facility: 'Akuarium, area edukasi, spot foto, area keluarga',
    ticket: 'Rp120.000/orang',
    ticketNote: 'Harga tiket dapat berbeda menurut hari/promo. Tiket gerbang Ancol terpisah.',
    packages: [
      {
        name: 'Family Package',
        price: 'Rp2.000.000/4orang',
        image: 'seaworld/karangsong-3.jpg',
        include: 'Tiket Sea World + eksplorasi akuarium keluarga',
        status: 'Konfirmasi via WhatsApp'
      },
      {
        name: 'Ocean Explorer',
        price: 'Rp225.000/orang',
        image: 'seaworld/seaworld-3.jpg',
        include: 'Eksplorasi biota laut + sesi edukasi',
        status: 'Konfirmasi via WhatsApp'
      },
        
    ],
    social: {
      instagram: 'https://www.instagram.com/seaworld.ancol/',
      tiktok: 'https://vt.tiktok.com/ZS9DC4kgkEYrY-hOLbn/?poisharing=Sea-World-Indonesia',
      website: 'https://linktr.ee/ancol?...'
    },
    activity: [
      'Edukasi',
      'Akuarium',
      'Fotografi',
      'Keluarga'
    ],
    map: 'Sea World Ancol Jakarta',
    video: 'https://www.youtube.com/embed/ZzetAUpuYb0?si=et_p7eKa5_W7YiFN'
  },

  lembang: {
    name: 'Lembang Park & Zoo',
    category: 'keluarga',
    label: 'Satwa & Keluarga',
    img: 'lembang-park-zoo/cipeundeuy-2.jpg',
    images: [
      'lembang-park-zoo/cipeundeuy-2.jpg',
      'lembang-park-zoo/cipeundeuy-3.jpg'
    ],
    desc: 'Tempat rekreasi keluarga untuk menikmati koleksi satwa dan suasana sejuk kawasan Lembang.',
    open: '09.00 - 17.00 WIB',
    days: 'Setiap hari',
    closed: 'Tidak ada',
    address: 'Jl. Kolonel Masturi No.171, Lembang, Bandung Barat',
    facility: 'Kebun binatang, restoran, area keluarga, spot foto',
    ticket: 'Mulai Rp65.000/orang',
    ticketNote: 'Tarif WNI dapat berbeda antara weekdays dan weekend.',
    packages: [
  
      {
        name: 'Zoo Explorer',
        price: 'Rp150.000/orang',
        image: 'lembang-park-zoo/zoo-1.jpg',
        include: 'Eksplorasi area satwa + dokumentasi',
        status: 'Konfirmasi via WhatsApp'
      },
     
    ],
    social: {
      instagram: 'https://www.instagram.com/lembang_parkzoo?stkn=NTMwMTBmaWEzZmUx',
      tiktok: 'https://vt.tiktok.com/ZS9DCgKgKF45q-vSLP9/?poisharing=Lembang-Park-%26-Zoo',
      website: 'https://www.lembangparkzoo.co.id/visit?...'
    },
    activity: [
      'Satwa',
      'Keluarga',
      'Fotografi',
      'Rekreasi'
    ],
    map: 'Lembang Park & Zoo',
    video: 'https://www.youtube.com/embed/CYitbAKggYM?si=LAEeNMcpItlELrj_'
  },

  cisoka: {
    name: 'Perkebunan Teh Puncak Cisoka Sumedang',
    category: 'alam',
    label: 'Alam',
    img: 'puncak-cisoka/cisoka-2.jpg',
    images: [
      'puncak-cisoka/cisoka-2.jpg',
      'puncak-cisoka/cisoka-3.jpg',
      'puncak-cisoka/20240616_155635.jpg'
    ],
    desc: 'Hamparan hijau perkebunan teh dengan udara sejuk dan panorama yang cocok untuk menikmati alam.',
    open: '06.00 - 18.00 WIB',
    days: 'Setiap hari',
    closed: 'Tidak ada',
    address: 'Kawasan Puncak Cisoka, Jawa Barat',
    facility: 'Area foto, jalan santai, area menikmati pemandangan',
    ticket: 'Rp15.000/orang',
    ticketNote: 'Harga tiket perlu dikonfirmasi ke pengelola sebelum kunjungan.',
    packages: [
      {
        name: 'Paket Perahu',
        price: 'Rp35.000/orang',
        image: 'puncak-cisoka/cisoka-2.jpg',
        include: 'Mengitari danau dengan perahu',
        status: 'Konfirmasi via WhatsApp'
      },
  
      {
        name: 'Tea Garden Photo',
        price: 'Rp85.000/orang',
        image: 'puncak-cisoka/20240616_155635.jpg',
        include: 'Paket fotografi dan menikmati panorama kebun teh',
        status: 'Konfirmasi via WhatsApp'
      },
  
    ],
    social: {
      instagram: 'images/galeri/nothing.jpg',
      tiktok: 'images/galeri/nothing.jpg',
      website: 'images/galeri/nothing.jpg'
    },
    activity: [
      'Pemandangan',
      'Fotografi',
      'Jalan santai',
      'Piknik'
    ],
    map: 'Perkebunan Teh Puncak Cisoka',
    video: 'https://www.youtube.com/embed/rXxe4Nosvog?si=J_PPJJzENihv8rNT'
  },

  panya: {
    name: 'Panyaweuyan Majalengka',
    category: 'alam',
    label: 'Pegunungan',
    img: 'panyaweuyan/cisoka-1.jpg',
    images: [
      'panyaweuyan/cisoka-1.jpg',
      'panyaweuyan/panyaweuyan-1.jpg',
      'panyaweuyan/panyaweuyan-2.jpg',
      'panyaweuyan/panyaweuyan-3.jpg'
    ],
    desc: 'Lanskap perbukitan dan perkebunan yang menjadi salah satu daya tarik wisata alam Majalengka.',
    open: '05.00 - 18.00 WIB',
    days: 'Setiap hari',
    closed: 'Tidak ada',
    address: 'Argapura, Kabupaten Majalengka, Jawa Barat',
    facility: 'Area pandang, spot foto, area parkir',
    ticket: 'Rp15.000/orang',
    ticketNote: 'Harga tiket dapat berubah sesuai kebijakan pengelola.',
    packages: [
      {
        name: 'Panyaweuyan Explorer',
        price: 'Rp75.000/orang',
        image: 'panyaweuyan/panyaweuyan-1.jpg',
        include: 'Eksplorasi terasering + pemandu lokal + Fotographer',
        status: 'Konfirmasi via WhatsApp'
      },
      
    ],
    social: {
      instagram: 'https://www.instagram.com/terasering_panyaweuyan?stkn=ZWx0M3o3eW1peGlu',
      tiktok: 'images/galeri/nothing.jpg',
      website: 'images/galeri/nothing.jpg'
    },
    activity: [
      'Hiking',
      'Fotografi',
      'Sunrise',
      'Pemandangan'
    ],
    map: 'Panyaweuyan Majalengka',
    video: 'https://www.youtube.com/embed/KT-Gy-QIPb4?si=Zfk35jZvpjqRmRzL'
  },

  braga: {
    name: 'Jl. Braga Bandung',
    category: 'kota',
    label: 'Heritage & Kota',
    img: 'braga/braga-1.jpg',
    images: [
      'braga/braga-1.jpg',
      'braga/braga-2.jpg',
      'braga/lembang-2.jpg'
    ],
    desc: 'Kawasan ikonik Bandung untuk berjalan santai, menikmati arsitektur, kuliner, seni, dan suasana kota.',
    open: '24 jam (area jalan)',
    days: 'Setiap hari',
    closed: 'Tidak ada',
    address: 'Jl. Braga, Sumur Bandung, Kota Bandung, Jawa Barat',
    facility: 'Kuliner, kafe, toko, spot foto, area pejalan kaki',
    ticket: 'Gratis*',
    ticketNote: 'Area jalan Braga tidak memiliki tiket masuk; biaya parkir/aktivitas tertentu dapat berlaku.',
    packages: [
      
      {
        name: 'Heritage Photo Walk',
        price: 'Rp90.000/orang',
        image: 'braga/lembang-2.jpg',
        include: 'Eksplorasi spot foto dan arsitektur klasik',
        status: 'Konfirmasi via WhatsApp'
      },
     
    ],
    social: {
      instagram: 'images/galeri/nothing.jpg',
      tiktok: 'images/galeri/nothing.jpg',
      website: 'images/galeri/nothing.jpg'
    },
    activity: [
      'Heritage',
      'Kuliner',
      'Fotografi',
      'City Walk'
    ],
    map: 'Jalan Braga Bandung',
    video: 'https://www.youtube.com/embed/fa_LqmuWJzk?si=1-pIz7g9XBazIkBo'
  },

  dunia: {
    name: 'Wisata Keliling Dunia Majalengka',
    category: 'keluarga',
    label: 'Edukasi & Fotografi',
    img: 'keliling-dunia/seaworld-2.jpg',
    images: [
      'keliling-dunia/dunia-2.jpg',
      'keliling-dunia/lembang-1.jpg',
      'keliling-dunia/seaworld-2.jpg',
      'keliling-dunia/dunia-1.jpg'
    ],
    desc: 'Destinasi bertema dunia yang menarik untuk berfoto dan rekreasi bersama keluarga.',
    open: '08.00 - 17.00 WIB',
    days: 'Setiap hari',
    closed: 'Tidak ada',
    address: 'Majalengka, Jawa Barat',
    facility: 'Miniatur landmark, spot foto, area keluarga',
    ticket: 'Rp75.000/orang',
    ticketNote: 'Harga tiket perlu dikonfirmasi ke pengelola.',
    packages: [
     
      {
        name: 'World Family Day',
        price: 'Rp800.000/4orang',
        image: 'keliling-dunia/seaworld-2.jpg',
        include: 'Paket keluarga untuk menikmati seluruh area + Fotographer',
        status: 'Konfirmasi via WhatsApp'
      }
    ],
    social: {
      instagram: 'https://www.instagram.com/kelilingdunia.mjl/',
      tiktok: 'images/galeri/nothing.jpg',
      website: 'images/galeri/nothing.jpg'
    },
    activity: [
      'Fotografi',
      'Rekreasi',
      'Keluarga',
      'Edukasi'
    ],
    map: 'Wisata Keliling Dunia Majalengka',
    video: 'https://www.youtube.com/embed/-gWKMENFtnw?si=LSu4pFZ1nujLRxxP'
  },

  cipeundeuy: {
    name: 'Cipeundeuy Endah Majalengka',
    category: 'alam',
    label: 'Alam',
    img: 'cipeundeuy/cipeundeuy-1.jpg',
    images: [
      'cipeundeuy/20250705_183333.jpg',
      'cipeundeuy/20250705_183409.jpg',
      'cipeundeuy/cipeundeuy-1.jpg',
      'cipeundeuy/ogI7MBFfrEDKO9AJhbAAfJESQ9I5bzeDoAEd2E~tplv-sdweummd6v-text-logo-v1_QHJvc2FudHlpbmE0NQ==_q75.jpeg'
    ],
    desc: 'Destinasi wisata dengan suasana alam dan pengalaman rekreasi yang cocok untuk keluarga maupun komunitas.',
    open: '08.00 - 17.00 WIB',
    days: 'Setiap hari',
    closed: 'Tidak ada',
    address: 'Cipeundeuy, Jawa Barat',
    facility: 'Area rekreasi, spot foto, area berkumpul',
    ticket: 'Rp10.000/orang',
    ticketNote: 'Harga tiket perlu dikonfirmasi ke pengelola.',
    packages: [
     
      {
        name: 'Paket Camping & Outbound',
        price: 'Rp100.000/orang',
        image: 'cipeundeuy/20250705_183333.jpg',
        include: 'Eksplorasi alam + aktivitas outbound + area camping',
        status: 'Konfirmasi via WhatsApp'
      },
     
      {
        name: 'Paket River Tubing',
        price: 'Rp35.000/orang',
        image: 'cipeundeuy/ogI7MBFfrEDKO9AJhbAAfJESQ9I5bzeDoAEd2E~tplv-sdweummd6v-text-logo-v1_QHJvc2FudHlpbmE0NQ==_q75.jpeg',
        include: 'Jelajah sungai dengan peralatan tubing + pemandu',
        status: 'Konfirmasi via WhatsApp'
      }
    ],
    social: {
      instagram: 'https://www.instagram.com/cipeundeuyendah/',
      tiktok: 'images/galeri/nothing.jpg',
      facebook: 'images/galeri/nothing.jpg'
    },
    activity: [
      'Rekreasi',
      'Fotografi',
      'Alam',
      'Komunitas'
    ],
    map: 'Cipeundeuy Endah Majalengka',
    video: 'https://www.youtube.com/embed/HPoGKuvc380?si=PFt-Yw7D9Yuwp6oy'
  },

  karangsong: {
    name: 'Pantai Karangsong Indramayu',
    category: 'pantai',
    label: 'Pantai',
    img: 'karangsong/karangsong-2.jpg',
    images: [
      'karangsong/cikole-4.jpg',
      'karangsong/karangsong-1.jpg',
      'karangsong/karangsong-2.jpg'
    ],
    desc: 'Wisata pesisir untuk menikmati suasana pantai, aktivitas luar ruang, dan pemandangan laut.',
    open: '06.00 - 18.00 WIB',
    days: 'Setiap hari',
    closed: 'Tidak ada',
    address: 'Karangsong, Kabupaten Indramayu, Jawa Barat',
    facility: 'Area pantai, tempat duduk, spot foto, area kuliner',
    ticket: 'Rp15.000/orang',
    ticketNote: 'Harga tiket dapat berubah sesuai kebijakan pengelola.',
    packages: [
      
      {
        name: 'Susur Mangrove',
        price: 'Rp50.000/orang',
        image: 'karangsong/karangsong-3.jpeg',
        include: 'Menjelajahi kawasan mangrove dengan suasana alam yang tenang',
        status: 'Konfirmasi via WhatsApp'
      }
    ],
    social: {
      instagram: 'https://www.instagram.com/explore/locations/65531874/pantai-karangsong---indramayu/',
      tiktok: 'images/galeri/nothing.jpg',
      website: 'images/galeri/nothing.jpg'
    },
    activity: [
      'Pantai',
      'Fotografi',
      'Jalan santai',
      'Rekreasi'
    ],
    map: 'Pantai Karangsong Indramayu',
    video: 'https://www.youtube.com/embed/xr6rvDkyhZg?si=5IbiJQokMpX6ZKxX'
  },

  cikole: {
    name: 'Hutan Pinus Cikole Resort & Adventure Lembang',
    category: 'adventure',
    label: 'Adventure',
    img: 'cikole/cikole-3.jpg',
    images: [
      'cikole/cikole-1.jpg',
      'cikole/cikole-2.jpg',
      'cikole/cikole-3.jpg'
    ],
    desc: 'Kawasan hutan pinus dengan suasana sejuk dan berbagai pilihan aktivitas outdoor.',
    open: '08.00 - 17.00 WIB',
    days: 'Setiap hari',
    closed: 'Tidak ada',
    address: 'Jl. Raya Tangkuban Perahu, Cikole, Lembang, Bandung Barat',
    facility: 'Camping, outbound, area foto, penginapan',
    ticket: 'Rp40.000/orang',
    ticketNote: 'Harga tiket dan aktivitas dapat berbeda menurut fasilitas yang dipilih.',
    packages: [
      
      {
        name: 'Camping Trip',
        price: 'Rp175.000/orang',
        image: 'cikole/cikole-2.jpg',
        include: 'Area camping + perlengkapan sesuai paket',
        status: 'Konfirmasi via WhatsApp'
      },
      {
        name: 'Forest Photo Walk',
        price: 'Rp85.000/orang',
        image: 'cikole/cikole-1.jpg',
        include: 'Jalan santai + Fotographer untuk dokumentasi + spot foto',
        status: 'Konfirmasi via WhatsApp'
      },
    
    ],
    social: {
      instagram: 'https://www.instagram.com/orchidforestcikole/?hl=id',
      tiktok: 'images/galeri/nothing.jpg',
      website: 'images/galeri/nothing.jpg'
    },
    activity: [
      'Camping',
      'Adventure',
      'Hiking',
      'Fotografi'
    ],
    map: 'Hutan Pinus Cikole',
    video: 'https://www.youtube.com/embed/Gxeso8RuJa8?si=iuAzQGLZksb9d8cw'
  },

  situmpuk: {
    name: 'Situmpuk Hill Majalengka',
    category: 'adventure',
    label: 'Alam & Adventure',
    img: 'situmpuk/situmpuk-1.jpg',
    images: [
      'situmpuk/IMG_1075.jpg',
      'situmpuk/IMG_1126.jpg',
      'situmpuk/situmpuk-1.jpg',
      'situmpuk/situmpuk-2.jpg',
      'situmpuk/situmpuk-3.jpg',
      'situmpuk/situmpuk-4.jpg'
    ],
    desc: 'Destinasi perbukitan dengan panorama alam dan pengalaman pendakian yang menarik.',
    open: '05.00 - 18.00 WIB',
    days: 'Setiap hari',
    closed: 'Tidak ada',
    address: 'Situmpuk Hill, Majalengka, Jawa Barat',
    facility: 'Jalur pendakian, spot foto, area menikmati pemandangan',
    ticket: 'Rp35.000/orang',
    ticketNote: 'Harga tiket perlu dikonfirmasi ke pengelola sebelum berkunjung.',
    packages: [
      {
        name: 'Situmpuk Explorer',
        price: 'Rp75.000/orang',
        image: 'situmpuk/situmpuk-1.jpg',
        include: 'Eksplorasi jalur perbukitan + pemandu',
        status: 'Konfirmasi via WhatsApp'
      },
     
      {
        name: 'Camping',
        price: 'Rp90.000/orang',
        image: 'situmpuk/situmpuk-4.jpg',
        include: 'Area camping + perlengkapan sesuai paket + pemandu',
        status: 'Konfirmasi via WhatsApp'
      }
    ],
    social: {
      instagram: 'images/galeri/nothing.jpg',
      tiktok: 'images/galeri/nothing.jpg',
      facebook: 'images/galeri/nothing.jpg'
    },
    activity: [
      'Hiking',
      'Fotografi',
      'Sunrise',
      'Adventure'
    ],
    map: 'Situmpuk Hill Majalengka',
    video: 'https://www.youtube.com/embed/KXYlFFhtH30?si=lrpMe4942M0jCkUw'
  }

};

// Jadwal fleksibel:
// contoh jika tutup Jumat:
// days: 'Senin-Kamis, Sabtu-Minggu',
// closed: 'Jumat'

const order = [
  'seaworld',
  'lembang',
  'cisoka',
  'panya',
  'braga',
  'dunia',
  'cipeundeuy',
  'karangsong',
  'cikole',
  'situmpuk'
];


// ===============================
// WHATSAPP
// ===============================

function waUrl(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}


// ===============================
// NAVBAR MOBILE
// ===============================

const mb = document.getElementById('menuBtn');
const nv = document.getElementById('nav');

if (mb && nv) {

  mb.onclick = () => {
    nv.classList.toggle('show');
  };

  nv.querySelectorAll('a').forEach(a => {

    a.onclick = () => {
      nv.classList.remove('show');
    };

  });

}


// ===============================
// KARTU DESTINASI + FILTER
// ===============================

const grid = document.getElementById('destinationGrid');

if (grid) {

  function render(f = 'all') {

    grid.innerHTML = order
      .filter(k => {
        return f === 'all' || data[k].category === f;
      })
      .map(k => {

        const d = data[k];

        return `
                    <article class="card">

                        <div
                            class="cardImg"
                            style="background-image:url('images/${d.img}')"
                        >
                            <span class="tag">
                                ${d.label}
                            </span>
                        </div>

                        <div class="cardBody">

                            <small>
                                DESTINASI
                            </small>

                            <h3>
                                ${d.name}
                            </h3>

                            <p>
                                ${d.desc}
                            </p>

                            <a
                                class="detailLink"
                                href="detail.html?wisata=${k}"
                            >
                                Lihat Detail →
                            </a>

                        </div>

                    </article>
                `;

      })
      .join('');

  }


  render();


  document
    .querySelectorAll('.filter')
    .forEach(b => {

      b.onclick = () => {

        document
          .querySelectorAll('.filter')
          .forEach(x => {
            x.classList.remove('active');
          });


        b.classList.add('active');


        render(
          b.dataset.filter
        );

      };

    });

}


// ===============================
// GALERI
// ===============================

const g = document.getElementById('gallery');

if (g) {

  const imgs = [
    '20240616_154624.jpg',
    'IMG20220507113551.jpg',
    '20240630_102343.jpg',
    'IMG20220515115558.jpg',
    '20240915_100612.jpg',
    'IMG_1132.jpg',
    '20250705_183333.jpg',
    'IMG-20250707-WA0017.jpg'
  ];


  g.innerHTML = imgs
    .map(x => {

      return `
                <img
                    src="images/galeri/${x}"
                    alt="Galeri wisata"
                >
            `;

    })
    .join('');

}


// ===============================
// DAFTAR LOKASI
// ===============================

const l = document.getElementById('locationList');

if (l) {

  l.innerHTML = order
    .map(k => {

      return `
                <a
                    target="_blank"
                    href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data[k].map)}"
                >
                    📍 ${data[k].name}
                </a>
            `;

    })
    .join('');

}


// ===============================
// TOMBOL PAKET → WHATSAPP
// ===============================

const packageButtons =
  document.querySelectorAll('.wa-package');


packageButtons.forEach(btn => {

  const packageName =
    btn.dataset.package;


  btn.href = waUrl(
    `Halo TRIPNUSA, saya tertarik dengan paket ${packageName}. Mohon informasi lebih lanjut.`
  );


  btn.target = '_blank';

});


// ===============================
// HALAMAN DETAIL
// ===============================

const key =
  new URLSearchParams(location.search)
    .get('wisata');


if (key && data[key]) {

  const d = data[key];


  // ===========================
  // JUDUL HALAMAN
  // ===========================

  document.title =
    d.name + ' — TRIPNUSA';


  // ===========================
  // INFORMASI UTAMA
  // ===========================

  document.getElementById('title')
    .textContent = d.name;


  document.getElementById('subtitle')
    .textContent = d.label;


  document.getElementById('heading')
    .textContent = d.name;


  document.getElementById('description')
    .textContent = d.desc;


  // ===========================
  // GAMBAR UTAMA
  // ===========================

  document.getElementById('mainImage')
    .src = 'images/' + d.images[0];


  // ===========================
  // THUMBNAIL
  // ===========================

  document.getElementById('thumbs')
    .innerHTML = d.images
      .map(x => {

        return `
                <img
                    src="images/${x}"
                    alt="${d.name}"
                >
            `;

      })
      .join('');


  document
    .querySelectorAll('#thumbs img')
    .forEach(im => {

      im.onclick = () => {

        document.getElementById(
          'mainImage'
        ).src = im.src;

      };

    });


  // ===========================
  // AKTIVITAS
  // ===========================

  document.getElementById('activities')
    .innerHTML = d.activity
      .map(x => {

        return `
                <span>
                    ✓ ${x}
                </span>
            `;

      })
      .join('');


  // ===========================
  // INFORMASI DESTINASI
  // ===========================

  document.getElementById('infoCards')
    .innerHTML = `

            <div class="infoCard ticketCard">

                <small>
                    TIKET MASUK
                </small>

                <strong>
                    ${d.ticket}
                </strong>

                <span>
                    ${d.ticketNote}
                </span>

            </div>


            <div class="infoCard">

                <small>
                    JAM BUKA
                </small>

                <strong>
                    ${d.open}
                </strong>

            </div>


            <div class="infoCard">

                <small>
                    HARI OPERASIONAL
                </small>

                <strong>
                    ${d.days}
                </strong>

            </div>


            <div class="infoCard">

                <small>
                    HARI TUTUP
                </small>

                <strong>
                    ${d.closed}
                </strong>

            </div>


            <div class="infoCard">

                <small>
                    KATEGORI
                </small>

                <strong>
                    ${d.label}
                </strong>

            </div>


            <div class="infoCard wide">

                <small>
                    ALAMAT
                </small>

                <strong>
                    ${d.address}
                </strong>

            </div>


            <div class="infoCard wide">

                <small>
                    FASILITAS
                </small>

                <strong>
                    ${d.facility}
                </strong>

            </div>

        `;


  // ===========================
  // PAKET WISATA
  // ===========================

  const packageBox =
    document.getElementById(
      'detailPackages'
    );


  if (packageBox) {

    packageBox.innerHTML =
      d.packages
        .map(p => {

          return `

                        <article class="detailPackage">
                            <div class="packageImage">
                                <img src="images/${p.image}" alt="${p.name} di ${d.name}" loading="lazy">
                                <span class="packageBadge">${p.status}</span>
                            </div>
                            <div class="packageContent">
                                <small class="packageLabel">${p.status || 'Konfirmasi via WhatsApp'}</small>
                                <h3>${p.name}</h3>
                                <strong>${p.price}</strong>
                                <p>${p.include}</p>
                                <button
                                    type="button"
                                    class="btn small packageDetailBtn"
                                    data-package-index="${d.packages.indexOf(p)}"
                                >
                                    Lihat Detail Paket
                                </button>
                            </div>
                        </article>

                    `;

        })
        .join('');

  }


  // ===========================
  // SOCIAL MEDIA
  // ===========================

  document.getElementById('socials')
    .innerHTML = `

            <a
                href="${d.social.instagram}"
                target="_blank"
            >
                ◎ Instagram
            </a>


            <a
                href="${d.social.tiktok}"
                target="_blank"
            >
                ♪ TikTok
            </a>


            <a
                href="${d.social.website || d.social.facebook || '#'}"
                target="_blank"
            >
                @ Website
            </a>

        `;


  // ===========================
  // GOOGLE MAPS
  // ===========================

  const q =
    encodeURIComponent(d.map);


  document.getElementById('maps')
    .href =
    `https://www.google.com/maps/search/?api=1&query=${q}`;


  document.getElementById('map')
    .src =
    `https://www.google.com/maps?q=${q}&output=embed`;


  // ===========================
  // YOUTUBE
  // ===========================

  document.getElementById('video')
    .src = d.video;


  // ===========================
  // WHATSAPP DETAIL
  // ===========================

  const wa =
    document.getElementById(
      'waDetail'
    );


  if (wa) {

    wa.href = waUrl(
      `Halo TRIPNUSA, saya ingin mendapatkan informasi paket wisata untuk ${d.name}. Mohon info harga dan ketersediaannya.`
    );


    wa.target = '_blank';

  }

}

// ===========================
// MODAL DETAIL PAKET
// ===========================

function getPackageMeta(p) {
  const name = (p.name || '').toLowerCase();

  if (name.includes('banana')) {
    return { duration: '15 menit', people: 'Minimal 4 orang', facilities: ['Peralatan banana boat', 'Pelampung keselamatan', 'Pendamping/petugas aktivitas'] };
  }
  if (name.includes('jet ski')) {
    return { duration: '15 menit', people: '1 orang', facilities: ['Jet ski', 'Pelampung keselamatan', 'Briefing keselamatan'] };
  }
  if (name.includes('speed boat')) {
    return { duration: '20 menit', people: 'Minimal 6 orang', facilities: ['Speed boat', 'Pelampung keselamatan', 'Pemandu perjalanan'] };
  }
  if (name.includes('mangrove')) {
    return { duration: '30 menit', people: 'Minimal 6 orang', facilities: ['Perahu susur mangrove', 'Pelampung keselamatan', 'Pemandu lokal'] };
  }

  return {
    duration: p.duration || 'Menyesuaikan paket',
    people: p.people || 'Menyesuaikan paket',
    facilities: p.facilities || ['Akses sesuai paket', 'Pendamping aktivitas', 'Dokumentasi area wisata']
  };
}

function openPackageModal(packageIndex) {
  const modal = document.getElementById('packageModal');
  const d = data[key];
  if (!modal || !d || !d.packages[packageIndex]) return;

  const p = d.packages[packageIndex];
  const meta = getPackageMeta(p);

  document.getElementById('modalPackageImage').src = `images/${p.image}`;
  document.getElementById('modalPackageImage').alt = `${p.name} di ${d.name}`;
  document.getElementById('modalPackageName').textContent = p.name;
  document.getElementById('modalPackageDescription').textContent = p.description || p.include;
  document.getElementById('modalPackagePrice').textContent = p.price;

  document.getElementById('modalPackageMeta').innerHTML = `
    <div><span>⏱</span><b>Durasi</b><strong>${meta.duration}</strong></div>
    <div><span>👥</span><b>Peserta</b><strong>${meta.people}</strong></div>
  `;

  document.getElementById('modalPackageFacilities').innerHTML = meta.facilities
    .map(item => `<li>${item}</li>`).join('');

  document.getElementById('modalPackageWa').href = waUrl(
    `Halo TRIPNUSA, saya tertarik dengan paket ${p.name} untuk ${d.name}. Mohon informasi harga, fasilitas, durasi, dan ketersediaannya.`
  );

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closePackageModal() {
  const modal = document.getElementById('packageModal');
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.addEventListener('click', function(e) {
  const button = e.target.closest('.packageDetailBtn');
  if (button) {
    openPackageModal(Number(button.dataset.packageIndex));
    return;
  }

  if (e.target.closest('[data-close-package]')) {
    closePackageModal();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closePackageModal();
});
