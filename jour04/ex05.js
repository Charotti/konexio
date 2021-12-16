function addUp (num){
    let total = 0
    for( let i = 1; i <= num; i++){
        total = i + total;
    }
    console.log(total);
};

addUp(12);