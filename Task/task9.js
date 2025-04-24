//keep asking for a number until the user enters a number greater than 10 by do while loop

function suraj(){
    let number;
    do {
        number = parseInt(prompt("Enter a number greater than 10:"));
    } while (number <= 10);
    console.log("You entered:", number);
    
}
suraj();