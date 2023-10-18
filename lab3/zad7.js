function answer(arr) {
  return helper(arr);

  function helper(inArray, outArray = []) {
    if (inArray[0] !== undefined) {
      const obj = inArray[0];
      inArray.shift();
      const updatedObject = {[obj.name]: obj.likes, age: obj.name.length*10};
      return helper(inArray, [ ...outArray, updatedObject])
    } else {
      return outArray;
    }
  }
}


let myUsers = [
  { name: 'shark', likes: 'ocean' },
  { name: 'turtle', likes: 'pond' },
  { name: 'otter', likes: 'fish biscuits' }]
console.log(answer(myUsers));