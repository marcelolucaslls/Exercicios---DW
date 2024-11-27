import { triangleChecker } from "./triangle-checker.js";


// verificando se eh equilateral
console.log(triangleChecker(2, 2, 2));
console.log("equilateral");

console.log(triangleChecker(10, 10, 10));
console.log("equilateral");

// verificando se eh isoceles
console.log(triangleChecker(3, 4, 4));
console.log("isosceles");

console.log(triangleChecker(4, 3, 4));
console.log("isosceles");

console.log(triangleChecker(4, 4, 3));
console.log("isosceles");

console.log(triangleChecker(10, 10, 2));
console.log("isosceles");

// verificando se eh escaleno 
console.log(triangleChecker(3, 4, 5));
console.log("escaleno");

console.log(triangleChecker(10, 11, 12));
console.log("escaleno");

console.log(triangleChecker(5, 4, 2));
console.log("escaleno");

// checando se eh none
console.log(triangleChecker(0, 0, 0));
console.log("none");

console.log(triangleChecker(3, 4, -5));
console.log("none");

console.log(triangleChecker(1, 1, 3));
console.log("none");

console.log(triangleChecker(2, 4, 2));
console.log("none");
