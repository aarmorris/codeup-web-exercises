function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean" || value === null );
}

function isNan(value) {
    if (isNaN(value)) {
        return 'Not a Number!';
    }
    return value * 1000;
}
