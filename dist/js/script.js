//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');  
    navMenu.classList.toggle('hidden');
});

// window.addEventListener('click', function(e){
//   if(e.target != hamburger && e.target !=navMenu) {
//     hamburger.classList.remove('hamburger-active');
//     navMenu.classList.add('hidden');
//   }
// });

//navbar fix
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
};


const ItemHeaders = document.querySelectorAll('#tanya');

ItemHeaders.forEach(ItemHeader => {
    ItemHeader.addEventListener('click', event => {
        ItemHeader.classList.toggle('active');
        
        const ItemBody = ItemHeader.nextElementSibling;
        
        if(ItemHeader.classList.contains('active')){
            ItemBody.style.maxHeight = ItemBody.scrollHeight + 'px';
        }else{
            ItemBody.style.maxHeight = 0;
        }
    })
});




    var arrLang = {
        "en": {
            "pilih": "Select Languages",
            "eng": "English",
            "ind": "Indonesian",
          "Home": "Home",
          "About": "About Us",
          "Feature": "Feature",
          "Client": "Clients",
          "Contact": "Contact",
          "start": "Start",
          "whyus": "Why Us",
          "whatis": "What is AiloxCloud?",
          "ACis": "AiloxCloud is a cloud computing model that allows data and file storage on the internet through a cloud computing provider that you access, either via the public internet or a special private network connection.",
          "whyAC": "Why AiloxCloud?",
          "why1": "Increase Service Level",
          "why2": "Increase Accuracy",
          "why3": "Increase Visibility",
          "why4": "Increase Speed",
          "why5": "Reduce Operational Cost",
          "ACfeature": "AiloxCloud Feature",
          "acFeature": "To design a solution customized to suit your specific requirements, we would start by studying and understanding your underlying and principal objectives. We would then sit down with your operational and IT team to define the functional flows and business processes most suitable to your operations, while also providing the feedback on the best practices in the industries. Based on the agreed functional flows, we would then design and develop a specific supply chain solution, in order to fulfill your business and process requirements.",
          "inbound": "INBOUND",
          "inboundIsi": "The process of receiving and storing goods. Goods received can be from production, supplier transfers or returned goods.",
          "inventory": "INVENTORY",
          "inventoryIsi": "Displays details and a summary of stock-on-hand and in-transit items. Inventory has a lot of information according to the character of the goods in the warehouse.",
          "outbound": "OUTBOUND",
          "outboundIsi": "Collection individually or based on Batch according to preference. Speed up the process of spending and also the division of labor operators.",
          "qr": "QR CODE/BARCODE",
          "qrIsi": "Facilitate real time transactions in the warehouse, quicker and more accurate data capture. It will in turn improve the speed of operations, accuracy of the warehouse transactions, and less human intervention and paper work / documentation",
          "ic": "INTEGRATION CAPABILITY",
          "icIsi": "Seamless integration into your back end systems, via different integration methods. Improve the accuracy and reduce the requirement for data entry operator",
          "hv": "HIGH VISIBILITY",
          "hvIsi": "Can use additional modules for Dashboard, Business Intelligence (BI) and Reports",
          "OC": "Our Client",
          "FAQ": "Frequently Asked Questions",
          "FAQ1": "What industries can use Ailox wms?",
          "FAQ1isi": "All industries that have warehouses can and should use a warehouse management system or WMS. Whether it's the manufacturing industry, retail, warehouse rental, 3PL and others.",
          "FAQ2": "What kind of warehouse can use Ailox wms?",
          "FAQ2isi": "Almost all warehouses can use Ailox wms. Whether it's a warehouse that has storage using selective racking, double deep, drive-in, single or multi-level floors, open yards and others.",
          "FAQ3": "How long will it take for implementation?",
          "FAQ3isi": "The implementation time varies, depending on the size of the warehouse, operations, types of goods and several other parameters. But in general, if there are no certain factors, implementation takes 3 (three) months from the Kick-off to Live.",
          "FAQ4": "Do you have to buy or is there a rental system for Ailox wms?",
          "FAQ4isi": "Ailox wms has two types of licenses:",
          "FAQ4isi1": "1. The first is by purchasing the Ailox WMS software and installing it on a warehouse server (on-premises).",
          "FAQ4isi2": "2. The second way is to rent (SaaS) where payments can be made every 3 (three) months. For SaaS, the software uses Ailox wms SaaS which is on our server, and can be accessed from anywhere using the internet network.",
          "FAQ5": "What do you need to be able to run Ailox wms?",
          "FAQ5isi": "Ailox wms can run in handheld/paperless mode or in paperbased mode. The devices needed are servers, PCs, mobile computing with 1D/2D scanners (android based), barcode printers, access points.",
          "cu": "Contact us",
          "name": "Name",
          "email": "Email",
          "message": "Messages",
          "send": "Send",
          "link": "Link",
          "sosmed": "Social Media",

        },
        "id": {
            "pilih": "Pilih Bahasa",
            "eng": "Inggris",
            "ind": "Indonesia",
          "Home": "Beranda",
          "About": "Tentang Kami",
          "Feature": "Fitur",
          "Client": "Klien",
          "Contact": "Kontak",
          "whyus": "Mengapa Kami",
          "start": "Mulai",
          "whatis": "Apa itu AiloxCloud",
          "ACis": "AiloxCloud adalah model komputasi awan yang memungkinkan penyimpanan data dan file di internet melalui penyedia komputasi awan yang Anda akses, baik melalui internet publik atau koneksi jaringan pribadi khusus.",
          "whyAC": "Mengapa AioxCloud?",
          "why1": "Meningkatkan Tingkat Layanan",
          "why2": "Meningkatkan Akurasi",
          "why3": "Meningkatkan Visibilitas",
          "why4": "Meningkatkan kecepatan",
          "why5": "Mengurangi Biaya Operasional",
          "ACfeature": "Fitur AiloxCloud",
          "acFeature": "Untuk merancang solusi yang disesuaikan dengan kebutuhan spesifik Anda, kami akan mulai dengan mempelajari dan memahami tujuan dasar dan utama Anda. Kami kemudian akan duduk bersama tim operasional dan TI Anda untuk menentukan alur fungsional dan proses bisnis yang paling sesuai dengan operasi Anda, sekaligus memberikan umpan balik tentang praktik terbaik di industri. Berdasarkan alur fungsional yang disepakati, kami kemudian akan merancang dan mengembangkan solusi rantai pasokan khusus, untuk memenuhi kebutuhan bisnis dan proses Anda.",
          "inbound": "INBOUND(MASUK)",
          "inboundIsi": "Proses penerimaan dan penyimpanan barang. Barang yang diterima bisa dari hasil produksi, transfer supplier atau barang retur.",
          "inventory": "INVENTORY(INVENTARIS)",
          "inventoryIsi": "Menampilkan detail dan ringkasan stok barang yang ada dan dalam perjalanan. Persediaan memiliki banyak informasi sesuai dengan karakter barang di gudang.",
          "outbound": "OUTBOUND(KELUAR)",
          "outboundIsi": "Koleksi individual atau berdasarkan Batch sesuai preferensi. Mempercepat proses pengeluaran dan juga pembagian tenaga kerja operator.",
          "qr": "QR CODE/BARCODE(KODE QR)",
          "qrIsi": "Memfasilitasi transaksi real time di gudang, pengambilan data lebih cepat dan akurat. Hal ini pada gilirannya akan meningkatkan kecepatan operasi, keakuratan transaksi gudang, dan mengurangi campur tangan manusia serta kertas kerja/dokumentasi",
          "ic": "INTEGRATION CAPABILITY(KEMAMPUAN INTEGRASI)",
          "icIsi": "Integrasi mulus ke dalam sistem back end Anda, melalui metode integrasi yang berbeda. Tingkatkan akurasi dan kurangi persyaratan untuk operator entri data",
          "hv": "HIGH VISIBILITY(VISIBILITAS TINGGI)",
          "hvIsi": "Dapat menggunakan modul tambahan untuk Dashboard, Business Intelligence (BI) dan Reports",
          "OC": "Klien kami",
          "FAQ": "Pertanyaan yang Sering Diajukan",
          "FAQ1": "Industri apa saja yang dapat menggunakan Ailox wms?",
          "FAQ1isi": "Semua industri yang memiliki gudang dapat dan harus menggunakan sistem manajemen gudang atau WMS. Baik itu industri manufaktur, retail, sewa gudang, 3PL dan lain-lain.",
          "FAQ2": "Gudang seperti apa yang bisa menggunakan Ailox wms?",
          "FAQ2isi": "Hampir semua gudang bisa menggunakan Ailox wms. Baik itu gudang yang memiliki penyimpanan dengan menggunakan Selective Racking, Double Deep, Drive-in, Single atau Multi Level Floor, Open Yard dan lain-lain.",
          "FAQ3": "Berapa lama waktu yang dibutuhkan untuk implementasi?",
          "FAQ3isi": "Waktu pelaksanaannya bervariasi, tergantung dari ukuran gudang, operasional, jenis barang dan beberapa parameter lainnya. Namun secara umum, jika tidak ada faktor tertentu, pelaksanaan membutuhkan waktu 3 (tiga) bulan dari Kick-off hingga Live.",
          "FAQ4": "Apa harus beli atau ada sistem sewa wms ailox?",
          "FAQ4isi": "Ailox wms memiliki dua jenis lisensi:",
          "FAQ4isi1": "1. Yang pertama dengan membeli software Ailox WMS dan menginstalnya di server gudang (on-premises).",
          "FAQ4isi2": "2. Cara kedua adalah dengan menyewa (SaaS) dimana pembayaran dapat dilakukan setiap 3 (tiga) bulan sekali. Untuk SaaS software menggunakan Ailox wms SaaS yang ada di server kami, dan dapat diakses dari mana saja dengan menggunakan jaringan internet.",
          "FAQ5": "Apa yang Anda perlukan untuk dapat menjalankan Ailox wms?",
          "FAQ5isi": "Ailox wms dapat dijalankan dalam mode genggam/tanpa kertas atau dalam mode berbasis kertas. Perangkat yang dibutuhkan adalah server, PC, mobile computing dengan scanner 1D/2D (berbasis android), printer barcode, access point.",
          "cu": "Hubungi kami",
          "name": "Nama",
          "email": "Email",
          "message": "Pesan",
          "send": "Kirim",
          "link": "Tautan",
          "sosmed": "Media Sosial",

        },
      };

      $(document).ready(function() {
        // The default language is English
        var lang = "en";
        $(".lang").each(function(index, element) {
          $(this).text(arrLang[lang][$(this).attr("key")]);
        });
      });

      // get/set the selected language
      $(".translate").click(function() {
        var lang = $(this).attr("id");

        $(".lang").each(function(index, element) {
          $(this).text(arrLang[lang][$(this).attr("key")]);
        });
      });



    const pilihan = document.querySelector('#pilih');
    const bahasa = document.querySelector('#bahasa');

pilihan.addEventListener('click', function() {
    pilihan.classList.toggle('pilihan-active');  
    bahasa.classList.toggle('hidden');
});

window.addEventListener('click', function(e){
  if(e.target != pilihan && e.target !=bahasa) {
    pilihan.classList.remove('pilihan-active');
    bahasa.classList.add('hidden');
  }
});


