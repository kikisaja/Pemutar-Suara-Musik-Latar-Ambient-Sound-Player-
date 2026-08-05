# 🎧 Ambient Sound Player (HTML5 Audio Instance Controller)

Aplikasi pemutar audio instan relaksasi produktivitas (*Ambient Sound Player*) menggunakan kolaborasi objek native **HTML5 Audio API** dan **Vanilla JavaScript**. Fokus utama pengerjaan proyek ini bagi pemula adalah mempelajari teknik memanipulasi *audio streaming container* di balik memori peramban tanpa merusak sinkronisasi elemen visual DOM luar.

Skat direkomendasikan bagi siswa SMK Jurusan RPL/PPLG tingkat dasar untuk melatih kemahiran manajemen instansiasi objek multimedia secara eksklusif tunggal (*Single Instance State*).

---

## 🚀 Fitur Utama

* **Native Audio Instance Switching:** Memanfaatkan konstruktor orisinal JavaScript `new Audio(url)` untuk membangun pemutar musik tanpa membutuhkan tag `<audio>` pada struktur HTML.
* **Exclusive Single-Playback Management:** Dilengkapi algoritma interseptor guna mendeteksi, menghentikan, dan meriset durasi trek lagu lama sebelum memulai memproduksi frekuensi gelombang instans baru.
* **Infinite Looping Activation:** Mengunci status properti properti `.loop = true` guna memastikan instans suara latar berjalan terus menerus secara kontinu menemani siklus fokus pengerjaan tugas pengguna.
* **Promise-Based Playback Protection:** Membungkus perintah eksekusi `.play()` dalam skema penanganan asinkronus `.then().catch()` untuk menangkap kegagalan transmisi jaringan data internet secara aman.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur baris deck boks panel kartu, atribut tautan sumber audio, dan penampung ikon emosional
├── style.css        # Desain layout kartu neomorphism ambles, token hijau sukses putar, dan penata letak simetris flex
└── script.js        # Instansiasi pengontrol audio memori, interseptor multi-pemutar, dan sakelar teks status
