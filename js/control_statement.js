var adalahGenap = false

/*
Sintaks if:
if (kondisi) {
    // Lakukan apa yang ingin dilakukan apabila kondisi benar
}
*/

// Akan mencetak ke console browser apabila bilangan genap
if (adalahGenap) {
    // console.log("Termasuk bilangan genap")
}

/*
Sintaks if else:
if (kondisi) {
    // Lakukan apa yang ingin dilakukan apabila kondisi benar
} else {
    // Lakukan apa yang ingin dilakukan apabila kondisi if salah
}
*/

/*
Sintaks if ... else if ... else:
if (kondisi) {
    // Lakukan apa yang ingin dilakukan apabila kondisi benar
} else if () {
    // Lakukan apa yang ingin dilakukan apabila kondisi if salah
} else {
    // Lakukan apa yang ingin dilakukan apabila kondisi if dan else if salah
}
*/

let nilai = 77

// Nilai 80 - 100 = A
// Nilai 69 - 79 = B
// Nilai 49 - 68 = C

if (nilai >= 80 && nilai <= 100) {
    // console.log("A")
} else if (nilai >= 69 && nilai <= 79) {
    // console.log("B")
} else {
    // console.log("C")
}

/*
Sintaks nested if:
if (kondisi) {
    if (kondisi 2) {
        Lakukan apa yang ingin dilakukan apabila kondisi 2 benar
    }
    // Lakukan apa yang ingin dilakukan apabila kondisi benar
}
*/

let weekday = true
let day = "Senin"

if (weekday) {
    if (day == "Senin") {
        // console.log("Hari ini adalah hari Senin")
    } else if (day == "Selasa") {
        // console.log("Hari ini adalah hari Selasa")
    }
} else {
    // console.log("Ini adalah weekend")
}

/*
Sintaks switch case:
switch (nilai) {
    case nilai1:
        // Lakukan apa yang ingin dilakukan apabila nilai sesuai dengan nilai1
        break;

    case nilai2:
        // Lakukan apa yang ingin dilakukan apabila nilai sesuai dengan nilai2
        break;
    
    ...

    default:
        // Lakukan apa yang ingin dilakukan apabila nilai tidak sesuai dengan semua case
        break;
}
*/

let abjad = 'A'

if (abjad == 'A') {
    console.log("A");
} else if (abjad == 'B') {
    console.log("B");
} else if (abjad == 'C') {
    console.log("C");
} else {
    console.log("Bukan abjad");
}

switch (abjad) {
    case 'A':
        console.log("A");
        break;

    case 'B':
        console.log("B");
        break;

    case 'C':
        console.log("C");
        break;

    case 'D':
        console.log("D");
        break;

    default:
        console.log("Bukan abjad");
        break;
}
