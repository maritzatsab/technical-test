// Nomor 1
const buahAndi = [
    "Apel",
    "Kurma",
    "Manggis",
    "Jeruk Bali",
    "Salak"
];

console.log(buahAndi);

// Nomor 2
const buahImport = ["Apel", "Salak"]
if (buahImport != [
    "Manggis",
    "Jeruk Bali",
    "Salak"
]) {
    console.log("Local");
} else {
    console.log("Import")
}

// Nomor 3
    // Import = 100
const numApel = 60;
const numKurma = 40;

const sumImport = numApel + numKurma;

console.log(sumImport);

    // Local = 260  
const numManggis = 100;
const numJerukBali = 10;
const numSalak = 150;

const sumLocal = numManggis + numJerukBali + numSalak;

console.log(sumLocal);

// Nomor 4
var commentA = 'Sebaiknya fruitId tidak digunakan pada data karena penempatan wadah berdasarkan fruitType agar mempermudah penghitungan data'

console.log(commentA);