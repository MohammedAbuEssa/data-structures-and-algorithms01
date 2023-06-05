function rverseArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const newMax = arr.pull(Math.max(...arr));
    newArr.push(newMax);
  }
  return newMax;
}
