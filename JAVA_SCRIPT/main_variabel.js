// // variabel => WADAH DAN TEMPAT UNTUK MENYIMPAN SEBUAH DATA (var, let, const)

// //var 
// var mhs1 = "doni";
// mhs1 = "dino";
// console.log(mhs1);

// //let
// let mhs2 = "doni";
// mhs2 = "dino";
// console.log(mhs2);

// //const
// const mhs3 = "doni";
// // mhs3 = "dino"; // ini akan menyebabkan error
// console.log(mhs3);


//PERILAKU VAR
var mhs1 = "doni";
{
    var mhs1 = "dani";
    console.log(mhs1);
}
console.log(mhs1);


//PERILAKU LET
let mhs2 = "doni";
{
    let mhs2 = "dani";
    console.log(mhs2);
}
console.log(mhs2);
