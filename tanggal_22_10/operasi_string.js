// operasi stirng

// char at
let dataMhs = "Doni mahsiswa tenknik teknik informatika";
console.log(dataMhs);
console.log(dataMhs.charAt(3));

// concat
let namaDepan = "doni";
let namaBelakang = "dino";
let namaLengkap = namaDepan.concat(" ", namaBelakang);
console.log(namaLengkap);

// indexOF
console.log(dataMhs.indexOf('m'));

// substringq
console.log(dataMhs.substring(5, 15));
console.log(dataMhs.substring(15, 5));

// slice
console.log(dataMhs.slice(5, 15));
console.log(dataMhs.slice(15, 5));  // data kosong

// replace
ubahData = dataMhs.replace("doni", "dion");
console.log(ubahData);

// toLowercase
console.log(dataMhs.toLowerCase());

// toUppercase
console.log(dataMhs.toUpperCase());