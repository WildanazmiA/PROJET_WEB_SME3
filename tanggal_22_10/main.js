let mhs = "nama mahasisswa adalah doni";
console.log(mhs);

// escaping (\, \t, \n, " '' ")

let dataMhs2 = 'nama mahasiswa adalah "\doni\" ';
console.log(dataMhs2);

// literal string
let nama ='doni';
let nim = 123;
let prodi = 'teknik informatika';

let biodata = nama + " " + nim + " " + prodi;
console.log(biodata);
console.log(typeof biodata);

// template string literal
let BioDataLengkap = `mahasiswa dengan nama ${nama} dan nim ${nim} dari program studi ${prodi}`;
console.log(BioDataLengkap);
console.log(typeof BioDataLengkap);