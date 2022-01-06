function calculateAge (strBirthDate) {
 const currentDate= new Date();
 const currentYear= currentDate.getFullYear();
 const birthDate= new Date(strBirthDate);
 const birthYear= birthDate.getFullYear();
 if(birthDate.getMonth() < currentDate.getMonth()) {
     return currentYear - birthYear
 } else {
return (currentYear - birthYear) - 1
 }
}
console.log(calculateAge("1973-06-13"));
