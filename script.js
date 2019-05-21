
function isFirstLetterUpperCase(str) {
    let regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is upper case");
    } else {
        console.log("String's first character is not upper case");
    }
}