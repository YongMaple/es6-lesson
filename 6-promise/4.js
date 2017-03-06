//fetch
fetch(url).then(response => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(e => {
    console.log("Oops, error");
});
