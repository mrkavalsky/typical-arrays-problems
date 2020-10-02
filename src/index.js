
exports.min = function min (array = 0) {
  if(array === undefined || !Array.isArray(array) || array.length == 0) return 0;
  let min = 0;
  for(let i of array){
    if(min > i) min = i;
  }
  return min;
}

exports.max = function max (array) {
  if(array === undefined || !Array.isArray(array) || array.length == 0) return 0;
  let max = array[1];
  for(let i of array){
    if(max < i) max = i;
  }
  return max;
}

exports.avg = function avg (array) {
  if(array === undefined || !Array.isArray(array) || array.length == 0) return 0;
  let avg = 0;
  for(let i of array){
    avg += i;
  }
  avg /= array.length;
  return avg;
}
