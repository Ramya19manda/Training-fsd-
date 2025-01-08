// Function to print even and odd numbers up to 100
function printEvenAndOddNumbers() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log("even:"+(i));
        } else {
            console.log("Odd:"+(i));
        }
    }
}

// Call the function
printEvenAndOddNumbers();
