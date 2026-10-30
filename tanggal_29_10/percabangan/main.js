let x = 10;
let y = 20;

// if 
if(x = 10) {
    console.log(`nilai x adalah ${x}`)
}

// if else
if(x > y){
    console.log(`nilai x adalah ${x}`)
}

else{
    console.log(`nilai x kosong`)
}

// else-if
if(x != 10){
    console.log(`nilai x adalah ${x}`)
}
else if(y != 20){
    console.log(`nilai y adalah ${y}`)
}
else{
    console.log(`nilai tidak di temukan!`)
}

// switch-case
switch(x){
    case 10:
        console.log(`nilai x adalah ${x}`)
        break;
    case 20:
        console.log(`nilai x adalah ${x}`)
        break;
    default:
        console.log("nilai tidak ditemukan!")
        break;
}