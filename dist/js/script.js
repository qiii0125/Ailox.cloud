//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');  
    navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function(e){
  if(e.target != hamburger && e.target !=navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

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
            "jpn": "Japan",
            "kor": "Korea",
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
            "jpn": "Jepang",
            "kor": "Korea",
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
        "jp": {
          "pilih": "言語を選択",
          "eng": "英語",
          "ind": "インドネシア語",
          "jpn": "日本",
          "kor": "韓国",
        "Home": "家",
        "About": "私たちに関しては",
        "Feature": "特徴",
        "Client": "クライアント",
        "Contact": "コンタクト",
        "start": "始める",
        "whyus": "なんで私達なの",
        "whatis": "AiloxCloudとは?",
        "ACis": "AiloxCloud は、パブリック インターネットまたは特別なプライベート ネットワーク接続のいずれかを介してアクセスするクラウド コンピューティング プロバイダーを介して、インターネット上のデータおよびファイル ストレージを可能にするクラウド コンピューティング モデルです。",
        "whyAC": "AiloxCloud を選ぶ理由",
        "why1": "サービスレベルを上げる",
        "why2": "精度を上げる",
        "why3": "視認性を高める",
        "why4": "速度を上げます",
        "why5": "運用コストを削減",
        "ACfeature": "AiloxCloud 機能",
        "acFeature": "お客様の特定の要件に合わせてカスタマイズされたソリューションを設計するには、まず、お客様の基本的な目的と主要な目的を調査して理解することから始めます。 次に、お客様の運用および IT チームと話し合い、お客様の運用に最も適した機能フローとビジネス プロセスを定義すると同時に、業界のベスト プラクティスに関するフィードバックを提供します。 合意された機能フローに基づいて、お客様のビジネスとプロセスの要件を満たすために、特定のサプライ チェーン ソリューションを設計および開発します。",
        "inbound": "INBOUND(インバウンド)",
        "inboundIsi": "商品を受け取り、保管するプロセス。 受け取った商品は、生産、サプライヤーの転送、または返品からのものです。",
        "inventory": "INVENTORY(在庫)",
        "inventoryIsi": "手持ち在庫と移動中のアイテムの詳細と概要を表示します。 在庫には、倉庫にある商品の性質に応じた多くの情報があります。",
        "outbound": "OUTBOUND(アウトバウンド)",
        "outboundIsi": "好みに応じて、個別に、またはバッチに基づいて収集します。 支出のプロセスをスピードアップし、オペレーターの分業もスピードアップします。",
        "qr": "QR CODE/BARCODE(QRコード)",
        "qrIsi": "倉庫でのリアルタイムの取引を促進し、より迅速かつ正確なデータ収集を実現します。 これにより、操作の速度、倉庫取引の正確さが向上し、人的介入と事務処理/文書化が減少します。",
        "ic": "INTEGRATION CAPABILITY",
        "icIsi": "さまざまな統合方法による、バックエンド システムへのシームレスな統合。 精度を向上させ、データ入力オペレーターの要件を軽減します",
        "hv": "HIGH VISIBILITY(高い視認性)",
        "hvIsi": "ダッシュボード、ビジネス インテリジェンス (BI)、およびレポート用の追加モジュールを使用できます",
        "OC": "当社のクライアント",
        "FAQ": "よくある質問",
        "FAQ1": "Ailox wms を使用できる業界は?",
        "FAQ1isi": "倉庫を持つすべての業界は、倉庫管理システムまたは WMS を使用できますし、使用する必要があります。 製造業、小売業、レンタル倉庫、3PLなど。",
        "FAQ2": "Ailox wms はどのような倉庫で使用できますか?",
        "FAQ2isi": "ほとんどすべての倉庫で Ailox wms を使用できます。 セレクティブ ラック、ダブル ディープ、ドライブイン、シングルまたはマルチレベル フロア、オープン ヤードなどを使用したストレージを備えた倉庫であるかどうか。",
        "FAQ3": "実装にはどのくらいかかりますか？",
        "FAQ3isi": "実装時間は、倉庫のサイズ、操作、商品の種類、およびその他のいくつかのパラメーターによって異なります。 ただし、一般的には、特定の要因がなければ、実装にはキックオフからライブまで 3 か月かかります。",
        "FAQ4": "Ailox wms を購入する必要がありますか、それともレンタル システムはありますか?",
        "FAQ4isi": "Ailox wms には 2 種類のライセンスがあります。",
        "FAQ4isi1": "1. 1 つ目は、Ailox WMS ソフトウェアを購入し、倉庫サーバー (オンプレミス) にインストールすることです。",
        "FAQ4isi2": "2. 2 つ目は、3 か月ごとに支払いができるレンタル (SaaS) です。 SaaS の場合、ソフトウェアは当社のサーバーにある Ailox wms SaaS を使用し、インターネット ネットワークを使用してどこからでもアクセスできます。",
        "FAQ5": "Ailox wms を実行するには何が必要ですか?",
        "FAQ5isi": "Ailox wms は、ハンドヘルド/ペーパーレス モードまたはペーパーベース モードで実行できます。 必要なデバイスは、サーバー、PC、1D/2D スキャナー (Android ベース) を備えたモバイル コンピューティング、バーコード プリンター、アクセス ポイントです。",
        "cu": "お問い合わせ",
        "name": "名前",
        "email": "電子メールアドレス",
        "message": "メッセージ",
        "send": "送信",
        "link": "リンク",
        "sosmed": "ソーシャルメディア",

      },

      "kr": {
        "pilih": "언어 선택",
        "eng": "영어",
        "ind": "인도네시아 인",
        "jpn": "일본",
        "kor": "한국",
      "Home": "집",
      "About": "회사 소개",
      "Feature": "특징",
      "Client": "클라이언트",
      "Contact": "연락하다",
      "start": "시작",
      "whyus": "우린 왜",
      "whatis": "AiloxCloud란 무엇입니까?",
      "ACis": "AiloxCloud는 공용 인터넷 또는 특수 사설 네트워크 연결을 통해 액세스하는 클라우드 컴퓨팅 공급자를 통해 인터넷에서 데이터 및 파일 저장을 허용하는 클라우드 컴퓨팅 모델입니다.",
      "whyAC": "왜 AiloxCloud인가?",
      "why1": "서비스 수준 향상",
      "why2": "정확도 향상",
      "why3": "가시성 증가",
      "why4": "속도 증가",
      "why5": "운영 비용 절감",
      "ACfeature": "AiloxCloud 기능",
      "acFeature": "귀하의 특정 요구 사항에 맞게 맞춤형 솔루션을 설계하기 위해 우리는 귀하의 기본 목표와 주요 목표를 연구하고 이해하는 것부터 시작할 것입니다. 그런 다음 귀사의 운영 및 IT 팀과 함께 귀사의 운영에 가장 적합한 기능적 흐름과 비즈니스 프로세스를 정의하는 동시에 업계의 모범 사례에 대한 피드백을 제공합니다. 합의된 기능 흐름을 기반으로 귀사의 비즈니스 및 프로세스 요구 사항을 충족하기 위해 특정 공급망 솔루션을 설계하고 개발합니다.",
      "inbound": "INBOUND(인바운드)",
      "inboundIsi": "물품을 수령하고 보관하는 과정. 수령한 상품은 생산, 공급업체 이전 또는 반품 상품일 수 있습니다.",
      "inventory": "INVENTORY(목록)",
      "inventoryIsi": "현재 재고 및 운송 중인 항목의 세부 정보 및 요약을 표시합니다. 재고는 창고에 있는 상품의 특성에 따라 많은 정보를 가지고 있습니다.",
      "outbound": "OUTBOUND(배 밖으로)",
      "outboundIsi": "선호도에 따라 개별적으로 또는 Batch 기반으로 수집합니다. 지출 프로세스와 노동 운영자의 분할 속도를 높입니다.",
      "qr": "QR CODE/BARCODE(QR 코드)",
      "qrIsi": "창고에서 실시간 거래를 촉진하고 더 빠르고 정확한 데이터 캡처. 그러면 운영 속도, 창고 거래의 정확성이 향상되고 사람의 개입과 서류 작업/문서화가 줄어들 것입니다.",
      "ic": "INTEGRATION CAPABILITY(통합 기능)",
      "icIsi": "Seamless integration into your back end systems, via different integration methods. Improve the accuracy and reduce the requirement for data entry operator",
      "hv": "HIGH VISIBILITY(높은 가시성)",
      "hvIsi": "대시보드, 비즈니스 인텔리전스(BI) 및 보고서에 대한 추가 모듈을 사용할 수 있습니다.",
      "OC": "우리 고객",
      "oc": "우리 고객",
      "FAQ": "자주 묻는 질문",
      "FAQ1": "어떤 산업에서 Ailox wms를 사용할 수 있습니까?",
      "FAQ1isi": "창고가 있는 모든 산업은 창고 관리 시스템 또는 WMS를 사용할 수 있고 사용해야 합니다. 제조업, 소매업, 창고 임대, 3PL 등.",
      "FAQ2": "어떤 종류의 창고가 Ailox wms를 사용할 수 있습니까?",
      "FAQ2isi": "거의 모든 창고에서 Ailox wms를 사용할 수 있습니다. 선택적인 랙킹, 이중 깊이, 드라이브인, 단층 또는 다층 바닥, 열린 마당 등을 사용하는 창고가 있는 창고인지 여부.",
      "FAQ3": "구현하는 데 얼마나 걸립니까?",
      "FAQ3isi": "구현 시간은 창고의 크기, 작업, 상품 유형 및 기타 여러 매개변수에 따라 다릅니다. 그러나 일반적으로 특정 요인이 없는 경우 구현은 Kick-off에서 Live까지 3개월이 소요됩니다.",
      "FAQ4": "Ailox wms를 구매해야 합니까, 아니면 렌탈 시스템이 있습니까?",
      "FAQ4isi": "Ailox wms에는 두 가지 유형의 라이센스가 있습니다.",
      "FAQ4isi1": "1. 첫 번째는 Ailox WMS 소프트웨어를 구입하여 웨어하우스 서버(온프레미스)에 설치하는 것입니다.",
      "FAQ4isi2": "2. 두 번째 방법은 3(3)개월마다 결제가 가능한 임대(SaaS)입니다. SaaS의 경우 소프트웨어는 서버에 있는 Ailox wms SaaS를 사용하며 인터넷 네트워크를 사용하여 어디에서나 액세스할 수 있습니다.",
      "FAQ5": "Ailox wms를 실행하려면 무엇이 필요합니까?",
      "FAQ5isi": "Ailox wms는 핸드헬드/종이 없는 모드 또는 종이 기반 모드에서 실행할 수 있습니다. 필요한 장치는 서버, PC, 1D/2D 스캐너(안드로이드 기반)가 있는 모바일 컴퓨팅, 바코드 프린터, 액세스 포인트입니다.",
      "cu": "문의하기",
      "name": "이름",
      "email": "이메일",
      "message": "메시지",
      "send": "보내다",
      "link": "링크",
      "sosmed": "소셜 미디어",

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



//     const pilihan = document.querySelector('#pilih');
//     const bahasa = document.querySelector('#bahasa');

// pilihan.addEventListener('click', function() {
//     pilihan.classList.toggle('pilihan-active');  
//     bahasa.classList.toggle('hidden');
// });

// window.addEventListener('click', function(e){
//   if(e.target != pilihan && e.target !=bahasa) {
//     pilihan.classList.remove('pilihan-active');
//     bahasa.classList.add('hidden');
//   }
// });


