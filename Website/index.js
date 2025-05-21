fetch("names.json")
    .then(Response => Response.json())
    .then(values => values.forEach(value => console.log(value.age)))
    .catch(error => console.error(error));