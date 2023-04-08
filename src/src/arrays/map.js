const myMap = function (callback, thisArg) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    let returnValue = callback.call(thisArg, this[index], index, this);
    resultArray.push(returnValue);
  }
  return resultArray;
};
Array.prototype.myMap = myMap;

export { myMap };
