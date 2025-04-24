// Ask the user to enter a day of the week (1 for month, 2 for tuesday,etc.) and display the name of the day by switch

let dayNumber = prompt("Enter a number (1 for Monday, 2 for Tuesday, ..., 7 for Sunday):");

dayNumber = parseInt(dayNumber); 

switch (dayNumber) {
    case 1:
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    case 3:
        alert("Wednesday");
        break;
    case 4:
        alert("Thursday");
        break;
    case 5:
        alert("Friday");
        break;
    case 6:
        alert("Saturday");
        break;
    case 7:
        alert("Sunday");
        break;
    default:
        alert("Invalid input!");
}
