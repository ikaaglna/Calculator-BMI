function hitungBMI() {

    let beratBadan, usia, tinggiBadan, hasil;

    beratBadan = parseInt(document.getElementById("beratBadan").value); //parseInt -> mem-parsing string ke Int
    usia = parseInt(document.getElementById("usia").value);
    tinggiBadan = parseInt(document.getElementById("tinggiBadan").value) * 0.01; // cm ke m = 0.01

    hasil = (beratBadan / (tinggiBadan * tinggiBadan)).toFixed(1);  // toFixed pembulatan berapa nomor di belakang koma 

    document.getElementById("hasil").innerHTML = hasil;
}