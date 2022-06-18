
//########
// Square section 
// ##########
const squareSide = 7;

const squarePerimeter = 4 * squareSide;

const squareArea = Math.pow(squareSide,2);
console.group('Squares');
console.log(`${squarePerimeter} cm`);
console.log(`${squareArea} cm2`);
console.groupEnd();

//########
// Triangle section 
// ##########
const triangleSideOne = 6;
const triangleSideTwo = 6;
const triangleBase = 4;
const triangleHeight = 5.5;

const trianglePerimeter = triangleSideOne + triangleSideTwo + triangleBase;

const triangleArea = (triangleHeight * triangleBase) / 2;

console.group('Triangles');
console.log(`${trianglePerimeter} cm`);
console.log(`${triangleArea} cm2`);
console.groupEnd();

//########
// Circles section 
// ##########
const PI = Math.PI;
const circleRadius = 4;

const circumference = 2 * PI * circleRadius;

const circleArea = (circleRadius ** 2)* PI;

console.group('Circles');
console.log(`${circumference} cm`);
console.log(`${circleArea} cm2`);
console.groupEnd();

