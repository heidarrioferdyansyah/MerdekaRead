/**
 * DATABASE - MERDEKAREAD PRO (MANUAL INPUT)
 * Lu cuma perlu masukin driveId, sistem yang bakal ngurus Cover, Link Baca, dan Download.
 */

const AppDatabase = [
    // --- BUKU SD kelas 1 --- 
    {
        id: "BOK-01",
        level: "sd",
        grade: "Kelas 1",
        subject: "Pendidikan Agama Buddha dan Budi Pekerti",
        author: "Duwijo",
        driveId: "1cRRLFyrGmGcDzVL0US0BVZwhcu2z4FVv" 
    },
    {
        id: "BOK-02",
        level: "sd",
        grade: "Kelas 1",
        subject: "Pendidikan Agama Hindu dan Budi Pekerti",
        author: "Bodhi Asih & Sulaiman",
        driveId: "1T7stllIgrPxmexi31f_HbRspiIoAwUBl" 
    },
    {
        id: "BOK-03",
        level: "sd",
        grade: "Kelas 1",
        subject: "Pendidikan Agama Islam dan Budi Pekerti",
        author: "Muhammad Nurzakun",
        driveId: "1tFzOkW-L9eL8nyNY531-7n0UHEYOLcWF" 
    },
    {
        id: "BOK-04",
        level: "sd",
        grade: "Kelas 1",
        subject: "Pendidikan Agama Katolik dan Budi Pekerti",
        author: "Susi Bonardy & Yenny Suria",
        driveId: "1ZDFZhLLU4KqdvyPBCQcKk2LHcJZVbCSx" 
    },
    {
        id: "BOK-05",
        level: "sd",
        grade: "Kelas 1",
        subject: "Pendidikan Agama Khonghucu dan Budi Pekerti",
        author: "Novita Sari & Liana Tri Hapsari",
        driveId: "1HM6lUSu4_O93c7xzp3VKBx3zoLYDfyTb" 
    },
    {
        id: "BOK-06",
        level: "sd",
        grade: "Kelas 1",
        subject: "Pendidikan Agama Kristen dan Budi Pekerti",
        author: "Veronika Hematang",
        driveId: "1XERJk9V8QYqV0F38WAETkZed1HL9DvWp" 
    },
    {
        id: "BOK-07",
        level: "sd",
        grade: "Kelas 1",
        subject: "Pendidikan Kepercayaan Terhadap Tuhan Yang Maha Esa dan Budi Pekerti",
        author: "Ade Witarsa",
        driveId: "1mXIr0Ou2zBCh1QFyR55i6PmHtBDpWTLO" 
    },
    {
        id: "BOK-08",
        level: "sd",                // Pilihan: 'sd', 'smp', 'sma'
        grade: "Kelas 1",           // Kelas
        subject: "Bahasa Indonesia",// Mata Pelajaran
        title: "Aku Bisa!",        // Judul Buku Spesifik
        author: "Sofie Dewayani",     // Nama Penulis
        driveId: "1Ww5GAGhTsvOEwqGik0JY7_p5SI3BZllq", // <--- MASUKIN ID PDF GOOGLE DRIVE DI SINI
        coverBackup: "indosd1.png"
    },
    {
        id: "BOK-09",
        level: "sd",
        grade: "Kelas 1",
        subject: "Matematika",
        title: "Belajar Bersama Temanmu",
        author: "Tim Gakko Tosho",
        driveId: "1LEztmGm3gn8JnWnd-2_o71jGj8yom19H"
    },
    {
        id: "BOK-10",
        level: "sd",
        grade: "Kelas 1",
        subject: "Bahasa Inggris",
        title: "My Next Words",
        author: "Lala Intan Gemala",
        driveId: "11E6x5QIYbOdbC37gaW9RwhQke0sRbDlM" 
    },

    // --- BUKU SD kelas 2 --- 
    {
        id: "BOK-11",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Agama Buddha dan Budi Pekerti",
        author: "Pujimin & Roch Aksiadi",
        driveId: "1Xvr4P2Flltz1XOiVBpSd2y35gB3lIk8c",
        coverBackup: "buddhasd2.png"
    },
    
    {
        id: "BOK-12",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Agama Hindu dan Budi Pekerti",
        author: "I Nengah Asrama Juta Ningrat",
        driveId: "1jDfYCl1LUqdJGfxOeLgfThaWWA1UPvnJ" 
    },
    {
        id: "BOK-13",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Agama Islam dan Budi Pekerti",
        author: "A. Zainal Abidin & Siti Kusrini",
        driveId: "12DoEo8C8zdqj_muJvB9_lBdw4GFN4mIU" 
    },
    {
        id: "BOK-14",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Agama Katolik dan Budi Pekerti",
        author: "Susi Bonardy & Yenny Suria",
        driveId: "1rgKVehcT1l6AZtUIibK7Cpj04oiV1D07",
        coverBackup: "katoliksd2.png"
    },
    {
        id: "BOK-15",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Agama Khonghucu dan Budi Pekerti",
        author: "Dewi Setiawan & Hanna Hadipranoto",
        driveId: "1IsQaTYvd6Jnp0g5zTsCs-csTXDMxh6uX" 
    },
    {
        id: "BOK-16",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Agama Kristen dan Budi Pekerti",
        author: "Veronika Hematang",
        driveId: "1osuMAtGNsxQ0UsWCMdX7_Xhenyyc1eQt",
        coverBackup: "kristensd2.png"
    },
    {
        id: "BOK-17",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Kepercayaan Terhadap Tuhan Yang Maha Esa dan Budi Pekerti",
        author: "Tasminto & Surani",
        driveId: "1mXS5z7qoDN0wXAzzUqrkKFi__sUkbMkf" 
    },
    {
        id: "BOK-18",
        level: "sd",                // Pilihan: 'sd', 'smp', 'sma'
        grade: "Kelas 2",           // Kelas
        subject: "Bahasa Indonesia",// Mata Pelajaran
        title: "Keluargaku Unik",        // Judul Buku Spesifik
        author: "Widjati Hartiningtyas & Eni Priyanti",     // Nama Penulis
        driveId: "1EnWGmfvNe3L4vDRNHHjKGp2Lq26B51VA" // <--- MASUKIN ID PDF GOOGLE DRIVE DI SINI
    },
    {
        id: "BOK-19",
        level: "sd",
        grade: "Kelas 2",
        subject: "Matematika",
        title: "Belajar Bersama Temanmu VOL 1",
        author: "Tim Gakko Tosho",
        driveId: "1o3dfbDuMthMakg0ETbc1lrdRLrGF09Nn"
    },
    {
        id: "BOK-20",
        level: "sd",
        grade: "Kelas 2",
        subject: "Matematika",
        title: "Belajar Bersama Temanmu VOL 2",
        author: "Tim Gakko Tosho",
        driveId: "10AQFJ3EFY7FwaRjO4Ep4cy05Gagofhpg",
        coverBackup: "matsd2.png"
    },
    {
        id: "BOK-21",
        level: "sd",
        grade: "Kelas 2",
        subject: "Bahasa Inggris",
        title: "My Next Words",
        author: "EYLC Team",
        driveId: "19CDmfhrCtJZzFEs923wab3nF6srgirFB" 
    },



    // --- BUKU SMP ---
    {
        id: "BOK-0111",
        level: "smp",
        grade: "Kelas 8",
        subject: "Informatika",
        title: "Berpikir Komputasional",
        author: "Tim Litbang Kemdikbud",
        driveId: "1_F8E_YVd_v7D5A6zGjH8I9J0K1L2M3N4"
    },

    // --- BUKU SMA/SMK ---
    {
        id: "BOK-0112",
        level: "sma",
        grade: "Kelas 10",
        subject: "tes 1",
        title: "Fisika Dasar & Mekanika",
        author: "Prof. Yohanes",
        driveId: "1mfNnrrfziwdCLVi-tJLDVQg8zFUzsTW3"
    },
    {
        id: "BOK-0113",
        level: "sma",
        grade: "Kelas 11",
        subject: "tes 2",
        title: "Dasar Pemrograman Web",
        author: "Heidar Rio Ferdyansyah", // Misal lu nulis buku sendiri 😎
        driveId: "1JuxSiaJMGKAS04B3iKJXL3a2DcN9btVJ",
        coverBackup: "ppsd.png"
    }
    
    // Tinggal copy-paste blok di atas buat nambah buku ke-6, ke-7, dst...
];