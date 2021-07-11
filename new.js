for (let i = 1000000, a= 0; i < 4000000; a++) {
    i = i + i/100
    i >= 4000000 ? console.log(a/30,i/2):''
}