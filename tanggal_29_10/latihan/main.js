let nama, nim, prodi, tugas, uts, uas, rataRata, dataMhs;

document.getElementById("submit").addEventListener("click", function () {
    nama = document.getElementById("nama").value;
    nim = document.getElementById("Nim").value;
    prodi = document.getElementById("prodi").value;
    tugas = parseFloat(document.getElementById("tugas").value);
    uts = parseFloat(document.getElementById("uts").value);
    uas = parseFloat(document.getElementById("uas").value);

    if (isNaN(tugas) || isNaN(uts) || isNaN(uas)) {
        document.getElementById("dataMhs").textContent = "Isi nilai tugas, UTS, dan UAS dengan angka.";
        return;
    }

    rataRata = (tugas + uts + uas) / 3;

    dataMhs = nama + " | " + nim + " | " + prodi +
        " | Tugas: " + tugas +
        " | UTS: " + uts +
        " | UAS: " + uas +
        " | Rata-rata: " + rataRata.toFixed(2);
    document.getElementById("dataMhs").textContent = dataMhs;
});