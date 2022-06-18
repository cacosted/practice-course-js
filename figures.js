// DOM manipulation
const result = document.querySelector('#result')
const squareSide = document.querySelector('#square');
console.log(squareSide);
//########
// Square section 
// ##########
const squarePerimeter = () => {
    const side = squareSide.value;
    return (4 * side); 
};

const squareArea = () => {
    const side = squareSide.value;
    return (side ** 2)
};

const fillResult = (callback) => {
    result.innerHTML = callback()
}

// console.group('Squares');
// console.log(`${squarePerimeter} cm`);
// console.log(`${squareArea} cm2`);
// console.groupEnd();

//########
// Triangle section 
// ##########


const trianglePerimeter = (sideone,sideTwo,base) => sideOne + sideTwo + base;

const triangleArea = (height,base) => (height * base) / 2;

// Calculate area of isosceles
const isoTriangleHeight = (sideOne, sideTwo, base) => {
    if(sideOne === sideTwo) {
        const inner = (sideOne ** 2) - ((base ** 2)/4);
        const result = (sideOne * Math.sqrt(inner))/ 2
        return result;
    }
    else {
        return 'This is not an Isosceles, try again'
    }
}


//########
// Circles section 
// ##########
const PI = Math.PI;

const circumference = (radius) => 2 * PI * radius;

const circleArea = (radius) => (radius ** 2) * PI;

// console.group('Circles');
// console.log(`${circumference} cm`);
// console.log(`${circleArea} cm2`);
// console.groupEnd();

