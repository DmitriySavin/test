const filter = function (array, callback) {
    const filteredData = [];
    for (const filterItem of array) {
        const filteredItem = callback(filterItem);
        if (filteredItem) {
            filteredData.push(filteredItem)
        }
    }
    return filteredData;
}
const callback = function (element) {
    return element >= 5;
}
const result = filter([3, 6, 9, 12], callback);
console.log(result);