let a = +prompt('Введите число')

if (a > 1) {

    cycle: 
    for (i=2; i < a; i++) {
        if (a % i === 0){
            console.log(i)
            break cycle;        
        }
        else if (i !==2 && a % i !== 0) {
            console.log(a)
        }
    }
}
else {
    console.log(NaN)
}