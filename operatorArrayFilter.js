 
var conditions = [ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ];

/**
 * Check if there is an array inside array
 * */
const includesArray = (value) => {
    if (Array.isArray(value)) {
        return true;
    }
};

/**
 * Convert An Array of 3 Into String
 * */
const convertArrToString = (data) => `(${data[1]} ${data[0]} ${data[2]})`;

/**
 * Main logic Loop
 * */
 let tmp;
function mainLoop (values, payload = []) {

    values.forEach((subValues) => {
        
        if (includesArray(subValues) && subValues.some(includesArray)) {
 
            tmp = convertArrToString(mainLoop(subValues, []));

            payload.push(tmp);

        } else if (Array.isArray(subValues)) {

            tmp = convertArrToString(subValues);
            payload.push(tmp);

        } else {

            payload.push(subValues);
        }
    });

    return payload;
}

const mResponse = mainLoop(conditions, []);
const finalString = convertArrToString(mResponse);

console.log('Input', conditions);
console.log('Output', finalString);