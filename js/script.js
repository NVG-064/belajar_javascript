window.addEventListener('load', function () {
    // let input;
    let output;

    // input = document.getElementById("paragraphs").innerText;
    output = document.getElementById("output");

    // output.innerHTML = input;


    // output.innerHTML = perolehNama();

    // // Pemanggilan fungsi tanpa parameter
    // console.log(perolehNama());

    // // Pemanggilan fungsi dengan parameter
    // cetakNamaBerparameter(3.0000000004);

    // console.log(hitungLuasPersegiPanjang(4, 2));

    // console.log(9 / 2); // 4.5
    // Operator modulo (mod)
    // console.log(9 % 3); // 4.5
    output.innerHTML = cetakNama();
})

// Function tanpa kembalian dan tanpa parameter
function cetakNama() {
    console.log("Nama gue");
}

// Function punya kembalian, tetapi tanpa parameter
function perolehNama() {
    return "Lenovo";
}

// Function tidak punya kembalian, tetapi punya parameter
function cetakNamaBerparameter(nama) {
    console.log(nama);
}

// Function punya kembalian dan punya parameter
function blender(buah) {
    return "Jus " + buah;
}

function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

// Menentukan bilangan ganjil dan genap
function isOddEven(angka) {
    return angka % 2;
}

// document.onload = function () {
//     let input;
//     let output;

//     input = document.getElementById("paragraphs").innerText;
//     output = document.getElementById("output");

//     output.innerHTML = input;
// }

// let output = document.getElementById("output");

// document.getElementById("output").innerHTML = "Hello";