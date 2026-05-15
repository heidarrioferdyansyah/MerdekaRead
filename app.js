class MerdekaApp {
    constructor(database) {
        this.db = database;
        this.currentLevel = 'all';
        this.currentGrade = 'all';
        
        this.els = {
            body: document.body,
            grid: document.getElementById('libraryGrid'),
            mainNavs: document.querySelectorAll('.nav-btn'),
            subContainer: document.getElementById('subFilterContainer'),
            searchBox: document.getElementById('searchEngine'),
            bookCount: document.getElementById('bookCount'),
            
            // Login Elements
            loginOverlay: document.getElementById('loginOverlay'),
            loginForm: document.getElementById('loginForm'),
            userNameInput: document.getElementById('userName'),
            userLevelSelect: document.getElementById('userLevel'),
            displayName: document.getElementById('displayName'),
            displayAvatar: document.getElementById('displayAvatar'),
            btnProfile: document.getElementById('btnProfile'),
            btnCancelLogin: document.getElementById('btnCancelLogin'),
            
            // Reader Modal Elements
            readerModal: document.getElementById('readerModal'),
            pdfFrame: document.getElementById('pdfFrame'),
            readerTitle: document.getElementById('readerTitle'),
            closeReader: document.getElementById('closeReader'),
            
            // Credits Modal Elements
            btnCredits: document.getElementById('btnCredits'),
            creditsModal: document.getElementById('creditsModal'),
            closeCredits: document.getElementById('closeCreditsBtn')
        };
        this.init();
    }

    init() {
        this.setupAuth();
        this.setupEventListeners();
        this.applyFilters();
    }

    setupAuth() {
        this.els.btnProfile.onclick = () => this.els.loginOverlay.classList.remove('hidden');
        this.els.btnCancelLogin.onclick = () => this.els.loginOverlay.classList.add('hidden');

        this.els.loginForm.onsubmit = (e) => {
            e.preventDefault();
            const level = this.els.userLevelSelect.value;
            this.els.body.setAttribute('data-theme', level);
            this.els.displayName.innerText = this.els.userNameInput.value.substring(0, 10);
            
            let avatarUrl = "";

if (level === 'sd') {
    avatarUrl = "ppsd.png"; // Ganti sama nama file atau link foto SD lu
} else if (level === 'smp') {
    avatarUrl = "ppsmp.png"; // Ganti sama nama file atau link foto SMP lu
} else if (level === 'sma') {
    avatarUrl = "ppsma.png"; // Ganti sama nama file atau link foto SMA lu
}

this.els.displayAvatar.src = avatarUrl;
            
            this.els.loginOverlay.classList.add('hidden');
        };
    }

    setupEventListeners() {
        this.els.mainNavs.forEach(btn => {
            btn.onclick = () => {
                this.els.mainNavs.forEach(n => n.classList.remove('active'));
                btn.classList.add('active');
                this.currentLevel = btn.dataset.level;
                this.currentGrade = 'all';
                this.els.searchBox.value = '';
                this.generateSubFilters();
                this.applyFilters();
            };
        });

        this.els.searchBox.oninput = () => this.applyFilters();
        
        // MODAL TOGGLES
        this.els.closeReader.onclick = () => {
            this.els.readerModal.classList.add('hidden');
            this.els.pdfFrame.src = "";
        };
        this.els.btnCredits.onclick = () => this.els.creditsModal.classList.remove('hidden');
        this.els.closeCredits.onclick = () => this.els.creditsModal.classList.add('hidden');
    }

    generateSubFilters() {
        this.els.subContainer.innerHTML = '';
        if (this.currentLevel === 'all') return;
        const grades = {
            sd: ['Kelas 1', 'Kelas 2', 'Kelas 3', 'Kelas 4', 'Kelas 5', 'Kelas 6'],
            smp: ['Kelas 7', 'Kelas 8', 'Kelas 9'],
            sma: ['Kelas 10', 'Kelas 11', 'Kelas 12']
        };
        this.createSubBtn('Semua Kelas', 'all', true);
        grades[this.currentLevel].forEach(g => this.createSubBtn(g, g, false));
    }

    createSubBtn(label, val, active) {
        const btn = document.createElement('button');
        btn.className = `sub-btn ${active ? 'active' : ''}`;
        btn.innerText = label;
        btn.onclick = () => {
            document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.currentGrade = val;
            this.applyFilters();
        };
        this.els.subContainer.appendChild(btn);
    }

    applyFilters() {
        // Ambil kata kunci dan bersihkan spasi liar
        const term = this.els.searchBox.value.toLowerCase().trim();
        
        // Mulai dari database lengkap SMKN 7 Semarang
        let filteredResults = this.db;

        // 1. Filter Tingkat (SD/SMP/SMA)
        // Kalau di Beranda (all), lewati filter ini biar keluar semua
        if (this.currentLevel !== 'all') {
            filteredResults = filteredResults.filter(book => book.level === this.currentLevel);
        }

        // 2. Filter Kelas (Contoh: Kelas 1, Kelas 7, dsb)
        // Hanya jalan kalau user sudah milih tingkat tertentu
        if (this.currentGrade !== 'all') {
            filteredResults = filteredResults.filter(book => book.grade === this.currentGrade);
        }

        // 3. Eksekusi Pencarian (Mapel, Judul, Penulis)
        if (term !== "") {
            filteredResults = filteredResults.filter(book => {
                // Pastikan data ada isinya sebelum di-search biar gak error
                const subjectMatch = (book.subject || "").toLowerCase().includes(term);
                const titleMatch = (book.title || "").toLowerCase().includes(term);
                const authorMatch = (book.author || "").toLowerCase().includes(term);
                
                return subjectMatch || titleMatch || authorMatch;
            });
        }

        // Tampilkan hasil akhir ke Grid
        this.renderBooks(filteredResults);
    }

    renderBooks(data) {
        this.els.grid.innerHTML = ''; 
        this.els.bookCount.innerText = data.length;
        
        if (data.length === 0) {
            this.els.grid.innerHTML = `<h3 style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">Buku tidak ditemukan.</h3>`;
            return;
        }

        data.forEach((book, index) => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.style.animationDelay = `${index * 0.05}s`; 
            
            const driveId = book.driveId.trim();
            const fallbackCover = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600";
            const autoCoverUrl = `https://lh3.googleusercontent.com/d/${driveId}=w600`;
            const initialCover = autoCoverUrl;

            // --- LOGIKA JUDUL OPSIONAL ---
            // Kalau book.title ada isinya, gabungin pake strip. Kalau kosong, nama mapel doang.
            const displayTitle = book.title ? `${book.subject} - ${book.title}` : book.subject;

            card.innerHTML = `
                <div class="class-tag">${book.grade}</div>
                <img src="${initialCover}" class="card-cover" loading="lazy" 
                     onerror="this.onerror=null; this.src='${book.coverBackup || fallbackCover}';">
                
                <div class="card-info">
                    <h3>${displayTitle}</h3>
                    <p><i class="fa-solid fa-pen-nib"></i> ${book.author}</p>
                    <div class="btn-group">
                        <button class="btn-read btn-action">Baca Buku</button>
                        <a href="https://drive.google.com/uc?export=download&id=${driveId}" 
                           class="btn-dl btn-action" target="_blank">Unduh</a>
                    </div>
                </div>`;
                
            card.querySelector('.btn-read').onclick = () => {
                // Modal juga pake displayTitle biar seragam
                this.els.readerTitle.innerText = displayTitle;
                this.els.pdfFrame.src = `https://drive.google.com/file/d/${driveId}/preview`;
                this.els.readerModal.classList.remove('hidden');
            };
            
            this.els.grid.appendChild(card);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => new MerdekaApp(AppDatabase));