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

    // --- BUKU SD kelas 5-    
    {
        id: "BOK-50",
        level: "sd",
        grade: "Kelas 5",
        subject: "Pendidikan Agama Buddha dan Budi Pekerti",
        author: "Sulan & Suyoto",
        driveId: "14t3EEE-LqJEj0HwXCALSBfxfxxJMBSUc"
    },
    
    {
        id: "BOK-51",
        level: "sd",
        grade: "Kelas 5",
        subject: "Pendidikan Agama Hindu dan Budi Pekerti",
        author: "Made Mardika",
        driveId: "1AiwXasAmmsaIoBLZlH5nJRZqMmBo85E5" 
    },
    {
        id: "BOK-52",
        level: "sd",
        grade: "Kelas 5",
        subject: "Pendidikan Agama Islam dan Budi Pekerti",
        author: "Soleh Baedowi & Hairil Muhammad Anwar",
        driveId: "1-ocnjsgt8md8kQmi7jO8EV4qbxXwkozf",
        coverBackup: "islamsd5.png"
    },
    {
        id: "BOK-53",
        level: "sd",
        grade: "Kelas 5",
        subject: "Pendidikan Agama Katolik dan Budi Pekerti",
        author: "FX. Dapiyanta & Marianus Didi Kasmudi",
        driveId: "10HVv2OCD1YSbbgDzZUkAYaoechLLt--r"
    },
    {
        id: "BOK-54",
        level: "sd",
        grade: "Kelas 5",
        subject: "Pendidikan Agama Khonghucu dan Budi Pekerti",
        author: "Imelda & Lany Guito",
        driveId: "1wluZrF7QTpT32iBYwGSk57oEGJHLcI2T" 
    },
    {
        id: "BOK-55",
        level: "sd",
        grade: "Kelas 5",
        subject: "Pendidikan Agama Kristen dan Budi Pekerti",
        author: "Norita Yudiet Tompah",
        driveId: "1d9DvmkuycaCNOdxi1t3zmoilbqIxtP_S"
    },
    {
        id: "BOK-56",
        level: "sd",
        grade: "Kelas 5",
        subject: "Pendidikan Kepercayaan Terhadap Tuhan Yang Maha Esa dan Budi Pekerti",
        author: "I Gayes Mahestu & Octama Dwitaningsih",
        driveId: "1MQAaZP-7U4ATYSp_CI_pWAM9IJXz84-3"
    },
    {
        id: "BOK-57",
        level: "sd",                // Pilihan: 'sd', 'smp', 'sma'
        grade: "Kelas 5",           // Kelas
        subject: "Bahasa Indonesia",// Mata Pelajaran
        title: "Bergerak Bersama",        // Judul Buku Spesifik
        author: "Evy Verawaty & Zulqarnain",     // Nama Penulis
        driveId: "12HGOQosqZVxa0gKICuUkqOz1pSkvL9cx" // <--- MASUKIN ID PDF GOOGLE DRIVE DI SINI
    },
    {
        id: "BOK-58",
        level: "sd",
        grade: "Kelas 5",
        subject: "Matematika",
        author: "Meita Fitrianawati, Ika Surtiani, Ait Istiandaru",
        driveId: "1INWlFBvgO8txeuixZvUXcIzdnDnXGGrI"
    },
    {
        id: "BOK-59",
        level: "sd",
        grade: "Kelas 5",
        subject: "Bahasa Inggris",
        title: "My Next Words",
        author: "EYLC Team",
        driveId: "12PUDLtxei_Ang63DAiu5sS6zS4JMlfhi" 
    },
    {
        id: "BOK-60",
        level: "sd",
        grade: "Kelas 5",
        subject: "Ilmu Pegetahuan Alam dan Sosial (IPAS)",
        author: "Amalia Fitri Ghaniem, dkk.",
        driveId: "19dr3Hx7wtgBZaPO7_5pjA96iIAQEEsx4" 
    },
    {
        id: "BOK-61",
        level: "sd", 
        grade: "Kelas 5",
        subject: "Pendidikan Pancasila dan Kewarganegaraan (PPKn)",
        author: "Adi Darma Indra, Abdul Azis, Luh Gede Maya Wirastuti Dewi",
        driveId: "1G5Iu5tszbTP8kQ5T_lPOYxHmYsBguvZC" 
    },

    // --- BUKU SD kelas 6-    
    {
        id: "BOK-62",
        level: "sd",
        grade: "Kelas 6",
        subject: "Pendidikan Agama Buddha dan Budi Pekerti",
        author: "Nurwito & Umarnatu",
        driveId: "1HZr-XS-QMtz5ulpa_8E8S-MzkMa1fNLq"
    },
    
    {
        id: "BOK-63",
        level: "sd",
        grade: "Kelas 6",
        subject: "Pendidikan Agama Hindu dan Budi Pekerti",
        author: "Sukirno Hadi Raharjo",
        driveId: "1gk5VlgFnzh5cZtyTwj0CDQ78ekffwx2t" 
    },
    {
        id: "BOK-64",
        level: "sd",
        grade: "Kelas 6",
        subject: "Pendidikan Agama Islam dan Budi Pekerti",
        author: "Nazirwan & Kholili Abdullah",
        driveId: "13BYCLR-5OwEm_TZhOYbS2MmocTLYmPeo"
    },
    {
        id: "BOK-65",
        level: "sd",
        grade: "Kelas 6",
        subject: "Pendidikan Agama Katolik dan Budi Pekerti",
        author: "FX. Dapiyanta & Marianus Didi Kasmudi",
        driveId: "1sFQh4Vsab7L6rYtguc1sjla7sHnrEax3"
    },
    {
        id: "BOK-66",
        level: "sd",
        grade: "Kelas 6",
        subject: "Pendidikan Agama Khonghucu dan Budi Pekerti",
        author: "Yugi Yuniardi & Fandy Maramis",
        driveId: "1cYwsKCXVjlTp9Z0kFb0HA7g8PUULw-Vi" 
    },
    {
        id: "BOK-67",
        level: "sd",
        grade: "Kelas 6",
        subject: "Pendidikan Agama Kristen dan Budi Pekerti",
        author: "Novy Amelia Elisabeth Sine",
        driveId: "1pxRZ2LgmzGU0dO6tcgqVczr1jHPw8_xK"
    },
    {
        id: "BOK-68",
        level: "sd",
        grade: "Kelas 6",
        subject: "Pendidikan Kepercayaan Terhadap Tuhan Yang Maha Esa dan Budi Pekerti",
        author: "Andri Hernandi",
        driveId: "1WxP0EWejW93qz1rBds5pp4XbcRyAdCyy"
    },
    {
        id: "BOK-69",
        level: "sd",                // Pilihan: 'sd', 'smp', 'sma'
        grade: "Kelas 6",           // Kelas
        subject: "Bahasa Indonesia",// Mata Pelajaran
        title: "Anak-Anak yang Mengubah Dunia",        // Judul Buku Spesifik
        author: "Ade Kumalasari & Latifah",     // Nama Penulis
        driveId: "1U-p001uoiVqFz9NqY0JzxAFVA456xnb9" // <--- MASUKIN ID PDF GOOGLE DRIVE DI SINI
    },
    {
        id: "BOK-70",
        level: "sd",
        grade: "Kelas 6",
        subject: "Matematika",
        author: "Dicky Susanto, Savitri Sihombing, Ambarsari Kusuma Wardani, Ummy Salmah, Eunice Salim",
        driveId: "1m5vRGe8hmJMaI0O9tiUT83TJiJsWZj7S"
    },
    {
        id: "BOK-71",
        level: "sd",
        grade: "Kelas 6",
        subject: "Bahasa Inggris",
        title: "My Next Words",
        author: "EYLC Team",
        driveId: "19-094PiR-dnbWwD4zogYFdrsf2nnQKza" 
    },
    {
        id: "BOK-72",
        level: "sd",
        grade: "Kelas 6",
        subject: "Ilmu Pegetahuan Alam dan Sosial (IPAS)",
        author: "Amalia Fitri, dkk.",
        driveId: "1xy4MmY6Q6OAx1hDGRTOZZ9AdNBzTgjOa",
        coverBackup: "ipassd6.png"
    },
    {
        id: "BOK-73",
        level: "sd", 
        grade: "Kelas 6",
        subject: "Pendidikan Pancasila dan Kewarganegaraan (PPKn)",
        author: "Mohamad Alwi Luti, Listia, Khristina Antariningsih",
        driveId: "17ez3fCVXjeF0DHSIMEKnnk5qnuZUXaSo" 
    },
    

    // --- BUKU SMP kelas 7---
    {
        id: "BOK-74",
        level: "smp",
        grade: "Kelas 7",
        subject: "Pendidikan Agama Buddha dan Budi Pekerti",
        author: "Mujiyanto & Wiryanto",
        driveId: "1a3hARUJppRhkueOkYwEVkhjGrMkyrcV_"
    },
    
    {
        id: "BOK-75",
        level: "smp",
        grade: "Kelas 7",
        subject: "Pendidikan Agama Hindu dan Budi Pekerti",
        author: "I Gusti Agung Made Swebawa",
        driveId: "1hVGCa1mzpImhyWvP3mJZrBenq6jv6LiT" 
    },
    {
        id: "BOK-76",
        level: "smp",
        grade: "Kelas 7",
        subject: "Pendidikan Agama Islam dan Budi Pekerti",
        author: "Rudi Ahmad Suryadi & Sumiyati",
        driveId: "1z0y9-I1hx1QeE70eyB9JxoFZMPunQOKr"
    },
    {
        id: "BOK-77",
        level: "smp",
        grade: "Kelas 7",
        subject: "Pendidikan Agama Katolik dan Budi Pekerti",
        author: "Lorensius Atrik Wibawa & Maman Sutarman",
        driveId: "1TSGMGXa0U-w9b9kXieYXrLQ6Cu7QjSZ-"
    },
    {
        id: "BOK-78",
        level: "smp",
        grade: "Kelas 7",
        subject: "Pendidikan Agama Khonghucu dan Budi Pekerti",
        author: "Hartono & Lucky Cahya Wanditra",
        driveId: "1E207RzPwGBGxKNr91YS3xVZTNFhwIsnl" 
    },
    {
        id: "BOK-79",
        level: "smp",
        grade: "Kelas 7",
        subject: "Pendidikan Agama Kristen dan Budi Pekerti",
        author: "Janse Belandina Non-Serrano",
        driveId: "1yrErL835CwCMrFeIkliDx0U_5x7kfr-8"
    },
    {
        id: "BOK-80",
        level: "smp",
        grade: "Kelas 7",
        subject: "Pendidikan Kepercayaan Terhadap Tuhan Yang Maha Esa dan Budi Pekerti",
        author: "Jaya Damanik",
        driveId: "1NRZ4TuHG2c0Fz7pVwMEknna_9jZ1hhXg"
    },
    {
        id: "BOK-81",
        level: "smp",
        grade: "Kelas 7",
        subject: "Bahasa Indonesia",// Mata Pelajaran
        author: "Eugenia Rakhma Subarna, Soie Dewayani, Cicilia Erni Setyowati",     // Nama Penulis
        driveId: "1gXMxBKMoPINe6QI4JjTP20JyZbsHxnPq" // <--- MASUKIN ID PDF GOOGLE DRIVE DI SINI
    },
    {
        id: "BOK-82",
        level: "smp",
        grade: "Kelas 7",
        subject: "Matematika",
        author: "Dicky Susanto, dkk.",
        driveId: "1FK5kj_DAWyeVo6rEPJgeV-X3Nryh4p10"
    },
    {
        id: "BOK-83",
        level: "smp",
        grade: "Kelas 7",
        subject: "Bahasa Inggris",
        title: "ENGLISH FOR NUSANTARA",
        author: "Ika Lestari Damayanti, dkk",
        driveId: "1yL3HsQo2LJPbgIETUejW74smFYbqfDA_",
        coverBackup: "englishsmp7.png"
    },
    {
        id: "BOK-84",
        level: "smp",
        grade: "Kelas 7",
        subject: "Ilmu Pegetahuan Alam (IPA)",
        author: "Amalia Fitri, dkk.",
        driveId: "1xy4MmY6Q6OAx1hDGRTOZZ9AdNBzTgjOa",
        coverBackup: "ipassd6.png"
    },
    {
        id: "BOK-85",
        level: "smp",
        grade: "Kelas 7",
        subject: "Ilmu Pegetahuan Sosial (IPS)",
        author: "Muhammad Nursa’ban & Supardi",
        driveId: "11r8aiiJjHIKl-ZLd6lmysVFLKNybPuFO"
    },
    {
        id: "BOK-86",
        level: "smp",
        grade: "Kelas 7",
        subject: "Informatika",
        author: "Maresha Caroline Wijanto, dkk.",
        driveId: "1qTKtbZNo7vN0oHzoEM5-wuC1lKgk3IRV"
    },
    {
        id: "BOK-87",
        level: "smp",
        grade: "Kelas 7",
        subject: "Pendidikan Pancasila dan Kewarganegaraan (PPKn)",
        author: "Yayat Suryatna, Ai Tin Sumartini, Devita Puspa Sari, Dwi Indah Mustiko Ningrum",
        driveId: "1hsQRjliH4F_x8vSrj3t6kDwPPW4_t5yL" 
    },
    {
        id: "BOK-88",
        level: "smp",
        grade: "Kelas 7",
        subject: "Pendidikan Jasmani Olahraga dan Kesehatan (PJOK)",
        author: "Alda Indrawan & Tri Agus Prasetijo",
        driveId: "1SPvoDWmOMLy9vCUqSKTsJCyisiSc1CK1" 
    },
    

    // --- BUKU SMA/SMK ---
    
    
    // Tinggal copy-paste blok di atas buat nambah buku ke-6, ke-7, dst...
];