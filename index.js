
/**
 * Function to generate an array with elementsCount number of random elements from the passed array
 * @param {Array} array Array to get random elements
 * @param {Number} elementsCount Number of elements needed in the output array
 * @returns {Array}
 */

const getRandomElements = (array, elementsCount) => {

    if(isNaN(elementsCount)) {
        throw new Error("Expected elementCount of type number but received " + typeof elementsCount);
    }
    const arrayCopy = [...array];
    
    count = parseInt(elementsCount)
    if(count > arrayCopy.length) {
        throw new Error("elementCount cannot be greater than the array length");
    }
    const randomArray = [];

    while(count != 0) {
        const randomIndex = Math.floor(Math.random() * arrayCopy.length);
        const randomElement = arrayCopy.splice(randomIndex, 1);
        randomArray.push(...randomElement);
        count--;
    }

    return randomArray;
}

module.exports = getRandomElements;
