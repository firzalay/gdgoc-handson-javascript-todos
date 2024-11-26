const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let daftarTugas = [];

function tampilkanMenu() {
    console.log("\nOpsi Menu");
    console.log("=================")
    console.log("1.Tambah Tugas\n2.Lihat Daftar Tugas\n3.Update Tugas\n4.Hapus Tugas\n5.Keluar");
    console.log("=================")
    readline.question("Pilih aksi: ", pilihan => {
        switch (pilihan) {
            case "1":
                readline.question("\nMasukkan nama tugas: ", (tugas) => {
                    daftarTugas.push(tugas);
                    console.log(`${tugas} telah ditambahkan ke dalam daftar tugas.`);
                    tampilkanMenu();
                });
                break;
            case "2":
                tampilkanDaftarTugas();
                tampilkanMenu();
                break;
            case "3":
                tampilkanDaftarTugas();
                readline.question("Masukkan nomor tugas yang ingin diubah: ", (nomor) => {
                    let index = nomor - 1;

                    if (index > -1 && index < daftarTugas.length) {
                        readline.question("Ubah tugas: ", (tugas) => {
                            daftarTugas[index] = tugas;
                            console.log("Tugas berhasil diubah!")
                            tampilkanMenu();
                        });
                    } else {
                        console.log("Nomor tidak ditemukan. Silahkan coba lagi!")
                        tampilkanMenu();
                    }

                });
                break;
            case "4":
                tampilkanDaftarTugas();
                readline.question("Masukkan nomor tugas yang ingin dihapus: ", (nomor) => {
                    let index = nomor - 1;

                    if (index > -1 && index < daftarTugas.length) {
                        daftarTugas.splice(index, 1);
                        console.log("Tugas berhasil dihapus!")
                        tampilkanMenu();
                    } else {
                        console.log("Nomor tidak ditemukan. Silahkan coba lagi!")
                        tampilkanMenu();
                    }
                });
                break;
            case "5":
                console.log("Terimakasih...");
                process.exit();
            default:
                console.log("Pilihan tidak valid, silahkan coba lagi!");
                tampilkanMenu();
                break;
        }
    });
}

tampilkanMenu();

function tampilkanDaftarTugas() {
    console.log("\nDaftar Tugas: ");
    console.log("================");
    let no = 1;

    if (daftarTugas.length == 0) {
        console.log("Belum ada tugas.");
    }

    daftarTugas.forEach((tugas) => console.log(`${no++}. ${tugas}`))
    console.log("================");
}





