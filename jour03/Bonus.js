for ( let i = 0; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizz buzz");
    }else if (i % 3 === 0){
        console.log ("fizz");
    }else if ( i % 5 === 0){
            console.log("buzz");
        }else if (i % 7 === 0){
            continue
    }else{
  console.log(i);
    }
};


