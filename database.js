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
    {
        id: "BOK-11",
        level: "sd",
        grade: "Kelas 1",
        subject: "Pendidikan Pancasila dan Kewarganegaraan (PPKn)",
        author: "Canny Ilmiati, Etika Indah Febriani, Elisa Seftriyana",
        driveId: "1CbQXGmDLT6LsvufTn7zg-WpGtJ20djMR" 
    },
    {
        id: "BOK-12",
        level: "sd",
        grade: "Kelas 1",
        subject: "Pendidikan Jasmani Olahraga dan Kesehatan (PJOK)",
        author: "Puji Rahayu & Umi Hariyani",
        driveId: "15spwz2RjR_6GHo7fOf2riZs4rxUZ44S3" 
    },

    // --- BUKU SD kelas 2 --- 
    {
        id: "BOK-13",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Agama Buddha dan Budi Pekerti",
        author: "Pujimin & Roch Aksiadi",
        driveId: "1Xvr4P2Flltz1XOiVBpSd2y35gB3lIk8c",
        coverBackup: "buddhasd2.png"
    },
    
    {
        id: "BOK-14",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Agama Hindu dan Budi Pekerti",
        author: "I Nengah Asrama Juta Ningrat",
        driveId: "1jDfYCl1LUqdJGfxOeLgfThaWWA1UPvnJ" 
    },
    {
        id: "BOK-15",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Agama Islam dan Budi Pekerti",
        author: "A. Zainal Abidin & Siti Kusrini",
        driveId: "12DoEo8C8zdqj_muJvB9_lBdw4GFN4mIU" 
    },
    {
        id: "BOK-16",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Agama Katolik dan Budi Pekerti",
        author: "Susi Bonardy & Yenny Suria",
        driveId: "1rgKVehcT1l6AZtUIibK7Cpj04oiV1D07",
        coverBackup: "katoliksd2.png"
    },
    {
        id: "BOK-17",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Agama Khonghucu dan Budi Pekerti",
        author: "Dewi Setiawan & Hanna Hadipranoto",
        driveId: "1IsQaTYvd6Jnp0g5zTsCs-csTXDMxh6uX" 
    },
    {
        id: "BOK-18",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Agama Kristen dan Budi Pekerti",
        author: "Veronika Hematang",
        driveId: "1osuMAtGNsxQ0UsWCMdX7_Xhenyyc1eQt",
        coverBackup: "kristensd2.png"
    },
    {
        id: "BOK-19",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Kepercayaan Terhadap Tuhan Yang Maha Esa dan Budi Pekerti",
        author: "Tasminto & Surani",
        driveId: "1mXS5z7qoDN0wXAzzUqrkKFi__sUkbMkf" 
    },
    {
        id: "BOK-20",
        level: "sd",                // Pilihan: 'sd', 'smp', 'sma'
        grade: "Kelas 2",           // Kelas
        subject: "Bahasa Indonesia",// Mata Pelajaran
        title: "Keluargaku Unik",        // Judul Buku Spesifik
        author: "Widjati Hartiningtyas & Eni Priyanti",     // Nama Penulis
        driveId: "1EnWGmfvNe3L4vDRNHHjKGp2Lq26B51VA" // <--- MASUKIN ID PDF GOOGLE DRIVE DI SINI
    },
    {
        id: "BOK-21",
        level: "sd",
        grade: "Kelas 2",
        subject: "Matematika",
        title: "Belajar Bersama Temanmu VOL 1",
        author: "Tim Gakko Tosho",
        driveId: "1o3dfbDuMthMakg0ETbc1lrdRLrGF09Nn"
    },
    {
        id: "BOK-22",
        level: "sd",
        grade: "Kelas 2",
        subject: "Matematika",
        title: "Belajar Bersama Temanmu VOL 2",
        author: "Tim Gakko Tosho",
        driveId: "10AQFJ3EFY7FwaRjO4Ep4cy05Gagofhpg",
        coverBackup: "matsd2.png"
    },
    {
        id: "BOK-23",
        level: "sd",
        grade: "Kelas 2",
        subject: "Bahasa Inggris",
        title: "My Next Words",
        author: "EYLC Team",
        driveId: "19CDmfhrCtJZzFEs923wab3nF6srgirFB" 
    },
    {
        id: "BOK-24",
        level: "sd",
        grade: "Kelas 2",
        subject: "Pendidikan Pancasila dan Kewarganegaraan (PPKn)",
        author: "Shoia Nurun Alanur S, Resha Hadi Sucipto, Soeharti",
        driveId: "1K5UMCFizHv9uPdEeLC6m4DH3zFIFHTkN" 
    },

    // --- BUKU SD kelas 3 ---    
    {
        id: "BOK-25",
        level: "sd",
        grade: "Kelas 3",
        subject: "Pendidikan Agama Buddha dan Budi Pekerti",
        author: "Sri Winarni & Widi Astiyono",
        driveId: "1Ezbmk6U1soA64eLtRZRbZXJWYY9oebDP",
        coverBackup: "buddhasd3.png"
    },
    
    {
        id: "BOK-26",
        level: "sd",
        grade: "Kelas 3",
        subject: "Pendidikan Agama Hindu dan Budi Pekerti",
        author: "I Made Rajendra",
        driveId: "1gsNKvFCF_nAKHhGHJ1YvLZmUcsYUqdMH" 
    },
    {
        id: "BOK-27",
        level: "sd",
        grade: "Kelas 3",
        subject: "Pendidikan Agama Islam dan Budi Pekerti",
        author: "Moh. Ghozali & Erwin Wasti",
        driveId: "1OVvgI1hI3sdn9i_nIxH6YFOrC2SL5hfO",
        coverBackup: "islamsd3.png"
    },
    {
        id: "BOK-28",
        level: "sd",
        grade: "Kelas 3",
        subject: "Pendidikan Agama Katolik dan Budi Pekerti",
        author: "Susi Bonardy & Yenny Suria",
        driveId: "1HyLo-Q21_GdZnaqN7K8TPt0LYIqBLTMa",
        coverBackup: "katoliksd3.png"
    },
    {
        id: "BOK-29",
        level: "sd",
        grade: "Kelas 3",
        subject: "Pendidikan Agama Khonghucu dan Budi Pekerti",
        author: "Sienny Vivi Irawati & Rika Lisnia Putri",
        driveId: "1DSAHogxg0uk3WMK9vDOJCSOAw55uOg1G" 
    },
    {
        id: "BOK-30",
        level: "sd",
        grade: "Kelas 3",
        subject: "Pendidikan Agama Kristen dan Budi Pekerti",
        author: "Poppy Febrina Purba",
        driveId: "1TXSYPg0_bgklEDqQJp34Ct_YP44zCwa3",
        coverBackup: "kristensd3.png"
    },
    {
        id: "BOK-31",
        level: "sd",
        grade: "Kelas 3",
        subject: "Pendidikan Kepercayaan Terhadap Tuhan Yang Maha Esa dan Budi Pekerti",
        author: "Poltak Sirait",
        driveId: "1rCwEgL9-dZ4QF7_O09hzC02FPJ294P0n",
        coverBackup: "kepercayaansd3.png"
    },
    {
        id: "BOK-32",
        level: "sd",                // Pilihan: 'sd', 'smp', 'sma'
        grade: "Kelas 3",           // Kelas
        subject: "Bahasa Indonesia",// Mata Pelajaran
        title: "Kawan Seiring",        // Judul Buku Spesifik
        author: "Anna Farida K. & Helva Nurhidayah",     // Nama Penulis
        driveId: "1ylwYwxq7jZHpMhcWdcw7Wsweez2Kyr5M" // <--- MASUKIN ID PDF GOOGLE DRIVE DI SINI
    },
    {
        id: "BOK-33",
        level: "sd",
        grade: "Kelas 3",
        subject: "Matematika",
        author: "Susanto, Arika Indah Kristiana, Arif Fatahillah, Eko Waluyo, Ridho Alfarisi, Hobri",
        driveId: "1jxcaMgWFxT-U283mVKLdlWVvxY8TuZYy"
    },
    {
        id: "BOK-34",
        level: "sd",
        grade: "Kelas 3",
        subject: "Bahasa Inggris",
        title: "My Next Words",
        author: "EYLC Team",
        driveId: "1G19Aawtyanu83sEoZ6UaDSRNwPWNea2P" 
    },
    {
        id: "BOK-35",
        level: "sd",
        grade: "Kelas 3",
        subject: "Ilmu Pegetahuan Alam dan Sosial (IPAS)",
        author: "Amalia Fitri, dkk.",
        driveId: "1lqc41bk-pTVRjBQV_hi6-UfeSrrpjZwp" 
    },
    {
        id: "BOK-36",
        level: "sd",
        grade: "Kelas 3",
        subject: "Pendidikan Pancasila dan Kewarganegaraan (PPKn)",
        author: "Ressi Kartika Dewi, Kamala Rahayu Candra Sary, Hani Hanifah",
        driveId: "1w2PLWIz3EOIBN61fwatru0lClOfc599r" 
    },


    // --- BUKU SD kelas 4-    
    {
        id: "BOK-37",
        level: "sd",
        grade: "Kelas 4",
        subject: "Pendidikan Agama Buddha dan Budi Pekerti",
        author: "Suyatno & Rustam",
        driveId: "1V1hOQUY_Xiwu3DLv5Fc-FxrNYrcpyuI0"
    },
    
    {
        id: "BOK-38",
        level: "sd",
        grade: "Kelas 4",
        subject: "Pendidikan Agama Hindu dan Budi Pekerti",
        author: "Komang Edi Putra",
        driveId: "1GbFJGXDxuTLblU8gEqWOS3Rz2By0tJRq" 
    },
    {
        id: "BOK-39",
        level: "sd",
        grade: "Kelas 4",
        subject: "Pendidikan Agama Islam dan Budi Pekerti",
        author: "Ahmad Faozan & Jamaluddin",
        driveId: "1mGYpCpS7rviAS5jiZhbNjAf1yQGBdsHc"
    },
    {
        id: "BOK-40",
        level: "sd",
        grade: "Kelas 4",
        subject: "Pendidikan Agama Katolik dan Budi Pekerti",
        author: "Daniel Boli Kotan & Marianus Didi Kasmudi",
        driveId: "1tF4b-nxra9L9DduOOIQfc-fTB3QiXSqz"
    },
    {
        id: "BOK-41",
        level: "sd",
        grade: "Kelas 4",
        subject: "Pendidikan Agama Khonghucu dan Budi Pekerti",
        author: "Po Budi Wijaya & Yessica Kusumohadi",
        driveId: "1uppvhZ-A9Rd1s8wseEL_0jsdyXnmPxk9" 
    },
    {
        id: "BOK-42",
        level: "sd",
        grade: "Kelas 4",
        subject: "Pendidikan Agama Kristen dan Budi Pekerti",
        author: "Norita Yudiet Tompah & Novy Amelia Elisabeth Sine",
        driveId: "1p4OGMXrpiRhS9sSvm21w4AYg8-533aNb"
    },
    {
        id: "BOK-43",
        level: "sd",
        grade: "Kelas 4",
        subject: "Pendidikan Kepercayaan Terhadap Tuhan Yang Maha Esa dan Budi Pekerti",
        author: "Feby Lestari Supriyono",
        driveId: "1OWg5wr7PyHTn2wPeZSFhbw6wdnyd0463"
    },
    {
        id: "BOK-44",
        level: "sd",                // Pilihan: 'sd', 'smp', 'sma'
        grade: "Kelas 4",           // Kelas
        subject: "Bahasa Indonesia",// Mata Pelajaran
        title: "Lihat Sekitar",        // Judul Buku Spesifik
        author: "Eva Yulia Nukman & Cicilia Erni Setyowati",     // Nama Penulis
        driveId: "1OvZfJrrwn3KlsL-3d3mbsJ8VJmPnZFgk" // <--- MASUKIN ID PDF GOOGLE DRIVE DI SINI
    },
    {
        id: "BOK-45",
        level: "sd",
        grade: "Kelas 4",
        subject: "Matematika",
        author: "Hobri, dkk.",
        driveId: "1Puq9LVr1UO8yYmo-K4fvzXf-KNhuA6HT"
    },
    {
        id: "BOK-46",
        level: "sd",
        grade: "Kelas 4",
        subject: "Bahasa Inggris",
        title: "My Next Words",
        author: "Lilin Rahmawati, Nur FItria Angrisia, Lili Nailufary",
        driveId: "1I4hB3U1Dch7Ni8AZFVcf7ZzblMY24G0-" 
    },
    {
        id: "BOK-47",
        level: "sd",
        grade: "Kelas 4",
        subject: "Ilmu Pegetahuan Alam dan Sosial (IPAS)",
        author: "Amalia Fitri, dkk.",
        driveId: "1lqc41bk-pTVRjBQV_hi6-UfeSrrpjZwp" 
    },
    {
        id: "BOK-48",
        level: "sd",
        grade: "Kelas 4",
        subject: "Pendidikan Pancasila dan Kewarganegaraan (PPKn)",
        author: "Dede Kurniawan, Dwi Nanta Priharto, Yusnawan Lubis",
        driveId: "1B_AwuU9FL80kS12hidVR9pWHyedJDv4h" 
    },
    {
        id: "BOK-49",
        level: "sd",
        grade: "Kelas 4",
        subject: "Pendidikan Jasmani Olahraga dan Kesehatan (PJOK)",
        author: "Alda Indrawan & Tri Agus Prasetijo",
        driveId: "1-xYVbmgREbn-MjG-sevtYUMsIwa-T6IA" 
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