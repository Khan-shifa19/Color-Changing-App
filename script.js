function change() {
    event.preventDefault(); // Prevent form from submitting and refreshing

    const Color = event.submitter.value.toLowerCase(); // Get button value like 'Red', 'Blue'

    if (Color === "red") {
        document.body.style.backgroundColor = "red";
    } else if (Color === "blue") {
        document.body.style.backgroundColor = "blue";
    } else if (Color === "yellow") {
        document.body.style.backgroundColor = "yellow";
    }
}
