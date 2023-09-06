// const names = (["Guadalupe", "Ollie", "Aki"], "suprise");

function writeCards(names) {
    let greetings = []
    for (let i = 0; i < names.length; i++) {
        greetings.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    debugger;
    }
    return greetings;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--
    }
}