register : `{
  "email": "user@nutech-integrasi.com",
  "first_name": "User",
  "last_name": "Nutech",
  "password": "abcdef1234"
}`

profile: `{
  "status": 0,
  "message": "Sukses",
  "data": {
    "email": "user@nutech-integrasi.com",
    "first_name": "User",
    "last_name": "Nutech",
    "profile_image": "https://yoururlapi.com/profile.jpeg"
  }
}`

banner : `{
  "status": 0,
  "message": "Sukses",
  "data": [
    {
      "banner_name": "Banner 1",
      "banner_image": "https://nutech-integrasi.app/dummy.jpg",
      "description": "Lerem Ipsum Dolor sit amet"
    },
    {
      "banner_name": "Banner 2",
      "banner_image": "https://nutech-integrasi.app/dummy.jpg",
      "description": "Lerem Ipsum Dolor sit amet"
    },
    {
      "banner_name": "Banner 3",
      "banner_image": "https://nutech-integrasi.app/dummy.jpg",
      "description": "Lerem Ipsum Dolor sit amet"
    },
    {
      "banner_name": "Banner 4",
      "banner_image": "https://nutech-integrasi.app/dummy.jpg",
      "description": "Lerem Ipsum Dolor sit amet"
    },
    {
      "banner_name": "Banner 5",
      "banner_image": "https://nutech-integrasi.app/dummy.jpg",
      "description": "Lerem Ipsum Dolor sit amet"
    },
    {
      "banner_name": "Banner 6",
      "banner_image": "https://nutech-integrasi.app/dummy.jpg",
      "description": "Lerem Ipsum Dolor sit amet"
    }
  ]
}`

services: `{
  "status": 0,
  "message": "Sukses",
  "data": [
    {
      "service_code": "PAJAK",
      "service_name": "Pajak PBB",
      "service_icon": "https://nutech-integrasi.app/dummy.jpg",
      "service_tariff": 40000
    },
    {
      "service_code": "PLN",
      "service_name": "Listrik",
      "service_icon": "https://nutech-integrasi.app/dummy.jpg",
      "service_tariff": 10000
    },
    {
      "service_code": "PDAM",
      "service_name": "PDAM Berlangganan",
      "service_icon": "https://nutech-integrasi.app/dummy.jpg",
      "service_tariff": 40000
    },
    {
      "service_code": "PULSA",
      "service_name": "Pulsa",
      "service_icon": "https://nutech-integrasi.app/dummy.jpg",
      "service_tariff": 40000
    },
    {
      "service_code": "PGN",
      "service_name": "PGN Berlangganan",
      "service_icon": "https://nutech-integrasi.app/dummy.jpg",
      "service_tariff": 50000
    },
    {
      "service_code": "MUSIK",
      "service_name": "Musik Berlangganan",
      "service_icon": "https://nutech-integrasi.app/dummy.jpg",
      "service_tariff": 50000
    },
    {
      "service_code": "TV",
      "service_name": "TV Berlangganan",
      "service_icon": "https://nutech-integrasi.app/dummy.jpg",
      "service_tariff": 50000
    },
    {
      "service_code": "PAKET_DATA",
      "service_name": "Paket data",
      "service_icon": "https://nutech-integrasi.app/dummy.jpg",
      "service_tariff": 50000
    },
    {
      "service_code": "VOUCHER_GAME",
      "service_name": "Voucher Game",
      "service_icon": "https://nutech-integrasi.app/dummy.jpg",
      "service_tariff": 100000
    },
    {
      "service_code": "VOUCHER_MAKANAN",
      "service_name": "Voucher Makanan",
      "service_icon": "https://nutech-integrasi.app/dummy.jpg",
      "service_tariff": 100000
    },
    {
      "service_code": "QURBAN",
      "service_name": "Qurban",
      "service_icon": "https://nutech-integrasi.app/dummy.jpg",
      "service_tariff": 200000
    },
    {
      "service_code": "ZAKAT",
      "service_name": "Zakat",
      "service_icon": "https://nutech-integrasi.app/dummy.jpg",
      "service_tariff": 300000
    }
  ]
}`

balance : `{
  "status": 0,
  "message": "Get Balance Berhasil",
  "data": {
    "balance": 1000000
  }
}`

transaksi : `{
  "status": 0,
  "message": "Transaksi berhasil",
  "data": {
    "invoice_number": "INV17082023-001",
    "service_code": "PLN_PRABAYAR",
    "service_name": "PLN Prabayar",
    "transaction_type": "PAYMENT",
    "total_amount": 10000,
    "created_on": "2023-08-17T10:10:10.000Z"
  }
}`

transaksi_hist : `{
  "status": 0,
  "message": "Get History Berhasil",
  "data": {
    "offset": 0,
    "limit": 3,
    "records": [
      {
        "invoice_number": "INV17082023-001",
        "transaction_type": "TOPUP",
        "description": "Top Up balance",
        "total_amount": 100000,
        "created_on": "2023-08-17T10:10:10.000Z"
      },
      {
        "invoice_number": "INV17082023-002",
        "transaction_type": "PAYMENT",
        "description": "PLN Pascabayar",
        "total_amount": 10000,
        "created_on": "2023-08-17T11:10:10.000Z"
      },
      {
        "invoice_number": "INV17082023-003",
        "transaction_type": "PAYMENT",
        "description": "Pulsa Indosat",
        "total_amount": 40000,
        "created_on": "2023-08-17T12:10:10.000Z"
      }
    ]
  }
}`

# Assignment API Programmer

Tugas ini untuk menguji kemampuan Anda dalam membuat REST API berdasarkan
spesifikasi yang diberikan dalam bentuk dokumen Kontrak API (Swagger) dan ketentuan
request / response body berada di persyaratan poin nomor 2. Pastikan Anda membaca dan
memahami persyaratan yang terdapat pada dokumen ini.
REST API yang dibuat memiliki modul Registrasi, Login, Cek Saldo, Top Up dan
Transaksi. Pada Transaksi dapat melakukan layanan pembayaran seperti Pulsa, Voucher Game
dan lain-lain.
Persyaratan :

1. Framework yang digunakan :
   ●Untuk kandidat Java Programmer (Spring Boot).
   ●Untuk kandidat NodeJs Programmer (ExpressJs).
2. Kontrak API (Swagger) bisa dilihat pada link https://api-doc-tht.nutech-integrasi.com
3. Deploy aplikasi ke cloud (Alternatif layanan gratis seperti railway.app).
4. Simpan source code pada layanan Git (Github atau Gitlab).
5. Sertakan design database kedalam repository aplikasi (DDL).
6. Deadline 3 hari, dimulai dari diterimanya dokumen ini.
   Kriteria Penilaian :
7. Kesesuaian REST API dengan spesifikasi Kontrak API (Swagger).
8. Design database terhadap aplikasi yang dibuat.
9. Wajib menggunakan raw query dengan implementasi prepared statement.
10. Kesesuaian Saldo/Balance sesuai perhitungan (penambahan saldo topup & pengurangan
    saldo saat transaksi).
11. Error handling dengan baik (misalnya, validasi input).
12. Kode yang bersih, terstruktur dan mudah dipahami.

    Pengiriman :
    Apabila tugas telah diselesaikan, kirimkan ke alamat email puji.prasetyo.nutech@gmail.com, kusnadi.nutech@gmail.com, ilham@nutech-integrasi.com, hrd@nutech-integrasi.com dan cc ke deddy.nutech@gmail.com dengan subject “Test Praktek API Programmer”, dan sertakan di dalam email URL Aplikasi yang sudah di hosting, beserta URL repository nya. Semoga sukses dalam menyelesaikan tugas ini! Selamat mengerjakan!
