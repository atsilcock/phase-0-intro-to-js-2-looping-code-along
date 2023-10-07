// const names = (["Guadalupe", "Ollie", "Aki"], "suprise");

// Task 1
// create a function writeCards
// i = counter
// 0 = start location
// ++ adding 1 to i, everytime it loops

function writeCards(names, event){
    let cards = [] 
    for (let i = 0; i<names.length; i++){
       cards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        }
        return cards;
}

function countDown(startnum){
    var countdownvar = startnum
    while (countdownvar >= 0){
    console.log(countdownvar)
    countdownvar--
    }
}