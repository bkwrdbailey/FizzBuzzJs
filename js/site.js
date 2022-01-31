// Gets the values from the app.html page
function fizzBuzzValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // Turns inputted values into integers to be used for math operations
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // Conditional to check if integers were given to avoid errors with wrong data types being used
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        let fbArray = generateFizzBuzz(fizzValue, buzzValue);
        displayFizzBuzz(fbArray);
    } else {
        alert("Error: Non-integer entered");
    }
}

// Creates fizzbuzz array loaded with Fizz, Buzz, or a number based on the fizz value and buzz value given by user
function generateFizzBuzz(fizzValue, buzzValue) {
    
    let fizzBuzz = [];

    // Loops through one hundred values and checks if they are divisible by the fizz value or the buzz value
    for (let index = 1; index <= 100; index++) {
        
        if ((index % fizzValue) == 0 && (index % buzzValue) == 0) {
            fizzBuzz.push("FizzBuzz");
        } else if ((index % fizzValue) == 0) {
            fizzBuzz.push("Fizz");
        } else if ((index % buzzValue) == 0) {
            fizzBuzz.push("Buzz");
        } else {
            fizzBuzz.push(index);
        }
    }

    return fizzBuzz;
}

// Displays FizzBuzz Table to the user
function displayFizzBuzz(fbArray) {

    // Grabs table element section
    let tableBody = document.getElementById("results");

    // Grabs table template to be used for styling the data
    let templateRow = document.getElementById("fbTemplate");

    // Clears any data within the table
    tableBody.innerHTML = "";

    // Loops through FizzBuzz array to place each array element into a table data tag
    // Only fills five table data elements then jumps five index places to create table rows that are five levels deep
    for (let index = 0; index < fbArray.length; index += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        // Acquires each table data element within the table row
        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];

        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2];

        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];

        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);
    }

}