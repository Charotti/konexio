function format (num){
    let hrs= Math.floor(num/3600);

    let hRest = num - ( hrs * 3600); 

    let min = Math.floor(hRest/60);

    let sec = hRest - (min*60);

    console.log (`${hrs} : ${min} : ${sec}`)
    //console.log(hrs + " : " + min + " : " + sec)//

};
format(3700);

