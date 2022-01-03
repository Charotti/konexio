function generatePassword (num){
    if (num < 6 || num > 15){
        console.log("error")/*LE GUARD PERMET DE VERIFIER SI LA CONDITION IF EST VERIFIEE. ICI ON PEUT INVERSER LE IF ET LE FOR CAR IL FAUT MIEUX VERIFIER LA CONDITION IF AVANT DE RENTRER DANS LA BOUCLE - ARRET DE LA FONCTION*/

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    //const length = alphabet.length; pour avoir la longueur du tableau et eviter d'utiliser les chiffres//
    for(let i = 1; i <= num; i++ ){

        let index =Math.floor( Math.random()*(25-0) + 0);//Math.random() * length//
        //console.log(index);//
        //console.log(alphabet[index]);//
        password += alphabet[index];

    }
  
    }
    console.log( "password:", password);
    //return password;//
}

generatePassword (8);
//const nexPassword= generatePassword (8);//
//console.log(newPassword);//





