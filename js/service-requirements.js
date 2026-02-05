// service-requirements.js
document.addEventListener('DOMContentLoaded', function() {
    // Data persyaratan dokumen berdasarkan jenis layanan
    const serviceRequirements = {
        skmht: {
            name: "SKMHT (Surat Kuasa Membebankan Hak Tanggungan)",
            documents: [
                { name: "SERTIFIKAT ASLI", required: true, note: "" },
                { name: "KTP AN. PEMEGANG HAK", required: true, note: "" },
                { name: "KTP PERSETUJUAN PEMEGANG HAK", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA", required: true, note: "" },
                { name: "FOTOKOPI SURAT NIKAH", required: true, note: "" },
                { name: "FOTOKOPI PBB TAHUN BERJALAN", required: false, note: "" },
                { name: "FOTOKOPI PERJANJIAN KREDIT", required: true, note: "" },
                { name: "FOTOKOPI KTP PIHAK BANK", required: true, note: "" },
                { name: "FOTOKOPI SK PIHAK BANK", required: true, note: "" }
            ]
        },
        fidusia: {
            name: "Akta Jaminan Fidusia",
            documents: [
                { name: "FOTOKOPI BPKB KENDARAAN BERMOTOR", required: true, note: "" },
                { name: "FOTOKOPI STNK KENDARAAN BERMOTOR", required: true, note: "" },
                { name: "KTP DEBITUR", required: true, note: "" },
                { name: "KTP PERSETUJUAN DEBITUR", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA", required: true, note: "" },
                { name: "FOTOKOPI SURAT NIKAH", required: true, note: "" },
                { name: "FOTOKOPI PERJANJIAN KREDIT", required: true, note: "" },
                { name: "FOTOKOPI KWITANSI PEMBELIAN KENDARAAN (APABILA BPKB + STNK BUKAN ATAS NAMA DEBITUR)", required: false, note: "" },
                { name: "SURAT PERNYATAAN KEPEMILIKAN JAMINAN (APABILA BPKB + STNK BUKAN ATAS NAMA DEBITUR)", required: false, note: "" },
                { name: "FOTOKOPI KTP PIHAK BANK", required: true, note: "" },
                { name: "FOTOKOPI SK PIHAK BANK", required: true, note: "" }
            ]
        },
        ajb: {
            name: "AKTA PENGIKATAN JUAL BELI",
            documents: [
                { name: "SERTIFIKAT ASLI", required: true, note: "" },
                { name: "KTP AN. PEMEGANG HAK", required: true, note: "" },
                { name: "KTP PERSETUJUAN PEMEGANG HAK", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA", required: true, note: "" },
                { name: "FOTOKOPI SURAT NIKAH", required: true, note: "" },
                { name: "FOTOKOPI PBB TAHUN BERJALAN", required: true, note: "" },
                { name: "FOTOKOPI KTP PEMBELI", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA PEMBELI", required: true, note: "" },
                { name: "NOMOR TELEPON + EMAIL PEMBELI", required: true, note: "" },
                { name: "SHARELOKASI TANAH", required: true, note: "" },
                { name: "FOTO LOKASI", required: true, note: "" }
            ]
        },
        skmenjual: {
            name: "AKTA SURAT KUASA UNTUK MENJUAL",
            documents: [
                { name: "SERTIFIKAT ASLI", required: true, note: "" },
                { name: "KTP AN. PEMEGANG HAK", required: true, note: "" },
                { name: "KTP PERSETUJUAN PEMEGANG HAK", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA", required: true, note: "" },
                { name: "FOTOKOPI SURAT NIKAH", required: true, note: "" },
                { name: "FOTOKOPI PBB TAHUN BERJALAN", required: true, note: "" },
                { name: "FOTOKOPI KTP PEMBELI", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA PEMBELI", required: true, note: "" },
                { name: "NOMOR TELEPON + EMAIL PEMBELI", required: true, note: "" },
                { name: "SHARELOKASI TANAH", required: true, note: "" },
                { name: "FOTO LOKASI", required: true, note: "" }
            ]
        },
        sewa: {
            name: "AKTA PERJANJIAN SEWA MENYEWA",
            documents: [
                { name: "SERTIFIKAT ASLI", required: true, note: "" },
                { name: "KTP AN. PEMEGANG HAK", required: true, note: "" },
                { name: "KTP PERSETUJUAN PEMEGANG HAK", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA", required: true, note: "" },
                { name: "FOTOKOPI SURAT NIKAH", required: true, note: "" },
                { name: "FOTOKOPI KTP PIHAK PENYEWA", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA PIHAK PENYEWA", required: true, note: "" },
                { name: "FOTOKOPI PBB TAHUN BERJALAN", required: true, note: "" }
            ]
        },
        royac: {
            name: "AKTA CONSEN ROYA",
            documents: [
                { name: "SERTIFIKAT ASLI", required: true, note: "" },
                { name: "KTP AN. PEMEGANG HAK", required: true, note: "" },
                { name: "KTP PERSETUJUAN PEMEGANG HAK", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA", required: true, note: "" },
                { name: "FOTOKOPI SURAT NIKAH", required: true, note: "" },
                { name: "SURAT KETERANGAN LUNAS DARI BANK", required: true, note: "" },
                { name: "SURAT KEHILANGAN DARI DESA", required: true, note: "" },
                { name: "SURAT KEHILANGAN DARI POLRES SESUAI DOMISILI OBYEK", required: true, note: "" },
                { name: "PENGANTAR ROYA DARI BANK", required: true, note: "" },
                { name: "FOTOKOPI PBB TAHUN BERJALAN", required: true, note: "" }
            ]
        },
        pjkredit: {
            name: "AKTA PERJANJIAN KREDIT",
            documents: [
                { name: "SERTIFIKAT ASLI", required: true, note: "" },
                { name: "KTP AN. PEMEGANG HAK", required: true, note: "" },
                { name: "KTP PERSETUJUAN PEMEGANG HAK", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA", required: true, note: "" },
                { name: "FOTOKOPI SURAT NIKAH", required: true, note: "" },
                { name: "FOTOKOPI PBB TAHUN BERJALAN", required: true, note: "" },
                { name: "FOTOKOPI PERJANJIAN KREDIT", required: true, note: "" },
                { name: "FOTOKOPI KTP PIHAK BANK", required: true, note: "" },
                { name: "FOTOKOPI SK PIHAK BANK", required: true, note: "" }
            ]
        },
        yayasan: {
            name: "AKTA PENDIRIAN YAYASAN",
            documents: [
                { name: "FOTOKOPI KTP SELURUH ANGGOTA", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA SELURUH ANGGOTA", required: true, note: "" },
                { name: "SUSUNAN/DAFTAR PENGURUS", required: true, note: "A. KETUA PEMBINA, ANGGOTA B. KETUA PENGURUS C. SEKRETARIS D. BENDAHARA E. KETUA PENGAWAS, ANGGOTA" },
                { name: "SURAT KETERANGAN DOMISILI", required: true, note: "DIBUAT SETELAH AKTA JADI" },
                { name: "FOTOKOPI NPWP PRIBADI MASING MASING PENGURUS", required: true, note: "" },
                { name: "BERGERAK DALAM BIDAN APA YAYASAN TERSEBUT", required: true, note: "" },
                { name: "NAMA YAYASAN", required: true, note: "TERDIRI DARI 3 KATA DAN TIDAK BOLEH SINGKATAN SERTA EJAAN" },
                { name: "FOTOKOPI NPWP YAYASAN", required: true, note: "" },
                { name: "FOTOKOPI BUKU TABUNGAN AN. YAYASAN", required: true, note: "" }
            ]
        },
        pt: {
            name: "AKTA PENDIRIAN PT",
            documents: [
                { name: "FOTOKOPI KTP DIREKTUR, KOMISARIS, PEMEGANG SAHAM", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA DIREKTUR, KOMISARIS, PEMEGANG SAHAM", required: true, note: "" },
                { name: "FOTOKOPI NPWP DIREKTUR, KOMISARIS, PEMEGANG SAHAM", required: true, note: "" },
                { name: "NOMOR TELEPON + EMAIL DIREKTUR, KOMISARIS, PEMEGANG SAHAM", required: true, note: "" },
                { name: "MODAL AWAL", required: true, note: "" },
                { name: "MODAL YANG DITEMPATKAN", required: true, note: "" },
                { name: "JUMLAH SAHAM", required: true, note: "" },
                { name: "JUMLAH SAHAM YANG DITEMPATKAN", required: true, note: "" },
                { name: "NAMA PT", required: true, note: "TERDIRI DARI 3 KATA" },
                { name: "ALAMAT LENGKAP PT", required: true, note: "" },
                { name: "KEGIATAN USAHA", required: true, note: "SESUAI KBLI 2021 CARI DI GOOGLE" },
                { name: "FOTOKOPI NPWP PT", required: true, note: "" },
                { name: "FOTOKOPI BUKTI SETOR MODAL", required: true, note: "BUKU TABUNGAN, REKENING KORAN, BUKTI TRANSFER KE REKENING AN. PERSERO" },
                { name: "SURAT KETERANGAN DOMISILI DARI DESA", required: true, note: "SETELAH AKTA JADI" }
            ]
        },
        cv: {
            name: "AKTA PENDIRIAN/PERUBAHAN CV",
            documents: [
                { name: "FOTOKOPI KTP DIREKTUR, KOMANDITER", required: true, note: "" },
                { name: "FOTOKOPI KARTU KELUARGA DIREKTUR, KOMANDITER", required: true, note: "" },
                { name: "FOTOKOPI NPWP DIREKTUR, KOMANDITER", required: true, note: "" },
                { name: "NOMOR TELEPON + EMAIL CV", required: true, note: "" },
                { name: "ALAMAT LENGKAP", required: true, note: "" },
                { name: "NAMA CV", required: true, note: "TERDIRI DARI 3 KATA" },
                { name: "MODAL AWAL USAHA", required: true, note: "" },
                { name: "KONTRIBUSI MODAL MASING MASING PESERO", required: true, note: "" },
                { name: "KEGIATAN USAHA", required: true, note: "SESUAI KBLI 2021 CARI DI GOOGLE" },
                { name: "SURAT KETERANGAN DOMISILI", required: true, note: "SETELAH AKTA JADI" },
                { name: "FOTOKOPI NPWP CV", required: true, note: "" }
            ]
        }
    };

    // Fungsi untuk membuat elemen dokumen
    function createDocumentElement(doc, index) {
        const docId = `doc-${index}`;
        const requiredClass = doc.required ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 ring-red-600/10' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 ring-blue-600/10';
        const requiredText = doc.required ? 'Mandatory' : 'Secondary';
        const noteValue = doc.note ? doc.note : '';
        const noteClass = doc.note ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-200 ring-amber-300 dark:ring-amber-700' : 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white ring-slate-300 dark:ring-slate-700';
        
        return `
            <div class="grid grid-cols-12 gap-4 items-start py-2 group">
                <div class="col-span-5 md:col-span-4 flex items-start gap-3 pl-2">
                    <div class="flex h-6 items-center">
                        <input class="size-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700 dark:ring-offset-slate-800" id="${docId}" type="checkbox"/>
                    </div>
                    <div class="text-sm">
                        <label class="font-medium text-slate-900 dark:text-white cursor-pointer select-none" for="${docId}">${doc.name}</label>
                        ${doc.note ? `<p class="text-xs text-slate-500 dark:text-slate-400">${doc.note}</p>` : ''}
                    </div>
                </div>
                <div class="col-span-2 flex justify-center pt-0.5">
                    <span class="inline-flex items-center rounded-md ${requiredClass} px-2 py-1 text-xs font-medium ring-1 ring-inset">${requiredText}</span>
                </div>
                <div class="col-span-5 md:col-span-6">
                    <input class="form-input block w-full rounded-md border-0 ${noteClass} py-1.5 px-3 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 placeholder:text-slate-400 transition-all opacity-60 hover:opacity-100 focus:opacity-100 focus:bg-white dark:focus:bg-slate-900" placeholder="Add note..." type="text" value="${noteValue}"/>
                    ${doc.note ? `<p class="text-[10px] text-amber-600 dark:text-amber-400 mt-1 pl-1">⚠ Catatan khusus</p>` : ''}
                </div>
            </div>
        `;
    }

    // Fungsi untuk memperbarui daftar dokumen
    function updateDocuments(serviceType) {
        const documentsContainer = document.querySelector('.space-y-4');
        const serviceData = serviceRequirements[serviceType];
        
        if (!serviceData) return;
        
        // Update judul dan SLA
        const sectionTitle = document.querySelector('.bg-surface-light .flex.items-center.justify-between h3');
        if (sectionTitle) {
            sectionTitle.textContent = `Required Documents - ${serviceData.name}`;
        }
        
        // Kosongkan kontainer dokumen
        documentsContainer.innerHTML = '';
        
        // Tambahkan header tabel
        documentsContainer.innerHTML = `
            <div class="grid grid-cols-12 gap-4 pb-2 border-b border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <div class="col-span-5 md:col-span-4 pl-2">Document Name</div>
                <div class="col-span-2 text-center">Required</div>
                <div class="col-span-5 md:col-span-6">Status / Notes</div>
            </div>
        `;
        
        // Tambahkan dokumen
        serviceData.documents.forEach((doc, index) => {
            documentsContainer.innerHTML += createDocumentElement(doc, index);
        });
        
        // Tambahkan tombol untuk menambah dokumen kustom
        documentsContainer.innerHTML += `
            <div class="mt-6 flex justify-center">
                <button class="text-xs font-medium text-primary hover:text-primary-dark flex items-center gap-1 transition-colors" type="button">
                    <span class="material-symbols-outlined text-[16px]">add</span>
                    Add Custom Document Requirement
                </button>
            </div>
        `;
        
        // Tambahkan animasi
        const docItems = documentsContainer.querySelectorAll('.grid.grid-cols-12');
        docItems.forEach((item, index) => {
            if (index > 0) { // Skip header
                item.style.animation = `slideUp 0.3s ease-out ${index * 0.05}s`;
                item.style.animationFillMode = 'both';
            }
        });
    }

    // Event listener untuk perubahan pada select service type
    const serviceTypeSelect = document.querySelector('select');
    if (serviceTypeSelect) {
        serviceTypeSelect.addEventListener('change', function() {
            updateDocuments(this.value);
        });
        
        // Inisialisasi dengan nilai default
        if (serviceTypeSelect.value) {
            updateDocuments(serviceTypeSelect.value);
        }
    }
});