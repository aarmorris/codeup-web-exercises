function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean" || value === null );
}

function isNan(value) {
    if (isNaN(value)) {
        return 'Not a Number!';
    }
    return value * 1000;
}

// Bootstrap script code down below:
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous">