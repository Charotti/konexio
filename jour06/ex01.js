
function formatDate(strDate) {
    const date = new Date(strDate);
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`
    }
    return `${date.getDate()}/${month}/${date.getFullYear()}`
}


console.log(formatDate("2022-01-04"));
