// 1. Reassignment
console.log("----- Reassignment -----");

var city = "Karachi";
console.log("var city:", city);
city = "Lahore";
console.log("var city after reassigning:", city);

let marks = 70;
console.log("let marks:", marks);
marks = 85;
console.log("let marks after reassigning:", marks);

const PI = 3.14;
console.log("const PI:", PI);
try {
    PI = 3.14159;
} catch (error) {
    console.log("Error:", error.message); // Assignment to constant variable.
}
// Observation: var and let can be given new values, but const cannot.

// 2. Redeclaration
console.log("----- Redeclaration -----");

var course = "ICT";
var course = "Programming Fundamentals";
console.log("var course after redeclaring:", course);

// let semester = 1;
// let semester = 2;   // SyntaxError: Identifier 'semester' has already been declared
// A SyntaxError stops the whole file before it runs, so the lines above are
// commented out. eval runs them as separate code so the error can be shown here.
try {
    eval("let semester = 1; let semester = 2;");
} catch (error) {
    console.log("Error:", error.message);
}
// Observation: var allows the same name to be declared twice (the second one
// replaces the first), but let does not allow it and gives an error.

// 3. Block scope
console.log("----- Block Scope -----");

{
    var insideVar = "I am var";
    let insideLet = "I am let";
    console.log("Inside block:", insideVar, "|", insideLet);
}

console.log("Outside block, var:", insideVar);
try {
    console.log("Outside block, let:", insideLet);
} catch (error) {
    console.log("Error:", error.message); // insideLet is not defined
}
// Observation: var ignores the { } block, so insideVar can be used outside it.
// let only exists inside the block where it was declared.
