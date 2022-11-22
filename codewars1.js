// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
    let string ="("

    for (let i = 0; i < 3; i++){
        string += numbers[i];
    }

    string = string + ") "

    for (let i = 3; i < 6; i++){
        string += numbers[i];
    }

    string = string + "-"
    for (let i = 6; i < numbers.length; i++){
        string += numbers[i];
    }

    console.log(string)
    return (string)
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
// returns "(123) 456-7890"