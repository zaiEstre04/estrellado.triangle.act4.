function promptTriangle(){ // user input - asking users to input the sides of the triangle
    do {
        var a = prompt("Enter the first side of the triangle (cm):");
    } while (isNaN(a) || a <= 0); // 1st triangle side input
    
    do {
       var b = prompt("Enter the second side of the triangle (cm):");
    } while (isNaN(b) || b <= 0); // 2nd triangle side input
    
    do {
       var c = prompt("Enter the third side of the triangle (cm):");
    } while (isNaN(c) || c <= 0); // 3rd triangle side input
    
    determineTriangle(a,b,c); // calling the determineTriangle function
}
function determineTriangle(a, b, c) { 
    if (a === b && b === c) { // if sides are equal
        window.alert("The triangle is EQUILATERAL");
    } else if (a === b || a === c || b === c) { // if two sides are equal
        window.alert("The triangle is ISOSCELES");
    } else {
        window.alert("The triangle is SCALENE"); // if all sides are not equal
    }
}

