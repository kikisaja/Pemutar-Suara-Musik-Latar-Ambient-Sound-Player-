// --- 1. SELEKSI ELEMEN DOM ---
const kelompokSoundCard = document.querySelectorAll(".sound-card");

// --- 2. STATE MANAGEMENT POINTER AUDIO MURNI ---
// Variabel penampung untuk menyimpan objek Audio() dan elemen kartu yang sedang aktif
let audioAktif = null;
let kartuAktif = null;

// --- 3. FUNGSI LOGIKA UTAMA ---

function kelolaPemutarAudio(e) {
    const tombolKlik = e.currentTarget;
    const kartuTarget = tombolKlik.parentElement;
    const urlAudio = kartuTarget.dataset.audioUrl; // Mengambil tautan MP3 dari atribut 'data-audio-url'

    // --- KONDISI A: Menekan tombol kartu yang SAMA dan sedang BERMAIN ---
    if (kartuAktif === kartuTarget && audioAktif) {
        if (!audioAktif.paused) {
            audioAktif.pause(); // Perintahkan pause audio native HTML5
            setVisualBerhenti(kartuTarget, tombolKlik);
        } else {
            audioAktif.play(); // Lanjutkan putar kembali
            setVisualBermain(kartuTarget, tombolKlik);
        }
        return;
    }

    // --- KONDISI B: Menukar audio baru (Mematikan lagu lama yang sedang menyala) ---
    if (audioAktif) {
        audioAktif.pause();
        if (kartuAktif) {
            const tombolLama = kartuAktif.querySelector(".btn-play-state");
            setVisualBerhenti(kartuAktif, tombolLama);
        }
    }

    // --- KONDISI C: Membuka Instansiasi Objek Audio Baru ---
    audioAktif = new Audio(urlAudio);
    audioAktif.loop = true; // Mengaktifkan mode putar berulang otomatis (infinite loop)
    kartuAktif = kartuTarget;

    audioAktif.play()
        .then(() => {
            setVisualBermain(kartuTarget, tombolKlik);
        })
        .catch(err => {
            alert("Gagal memuat file audio, periksa koneksi internet Anda! ⚠️");
            setVisualBerhenti(kartuTarget, tombolKlik);
        });

    // Pasang sensor pengaman tambahan jika audio terhenti mendadak di sistem luar
    audioAktif.addEventListener("ended", () => {
        setVisualBerhenti(kartuTarget, tombolKlik);
    });
}

// --- FUNGSI UTALITAS PEMBANTU REFAKTOR VISUAL ---
function setVisualBermain(kartu, tombol) {
    kartu.classList.add("playing");
    tombol.innerText = "JEDA ⏸️";
}

function setVisualBerhenti(kartu, tombol) {
    kartu.classList.remove("playing");
    tombol.innerText = "PUTAR ▶️";
}

// --- 4. BINDING EVENT LISTENERS ---
// Menempelkan fungsi pengontrol suara ke setiap tombol putar di dalam kartu ambient
kelompokSoundCard.forEach(kartu => {
    const tombolPlay = kartu.querySelector(".btn-play-state");
    tombolPlay.addEventListener("click", kelolaPemutarAudio);
});
