function getTicketPrice(age) {
    let price;
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else {
        price = 20;
    }
    return `The ticket price is $${price}.`;
}

// Example usage:
console.log(getTicketPrice(10)); // The ticket price is $10.
console.log(getTicketPrice(15)); // The ticket price is $15.
console.log(getTicketPrice(25)); // The ticket price is $20.
