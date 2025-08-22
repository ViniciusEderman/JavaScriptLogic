Array.prototype.even = function () {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (Number.isInteger(this[i]) && this[i] % 2 === 0) {
      result.push(this[i]);
    }
  }
  console.log(result);
  return result;
};

Array.prototype.odd = function () {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (Number.isInteger(this[i]) && this[i] % 2 !== 0) {
      result.push(this[i]);
    }
  }
  console.log(result);
  return result;
};

Array.prototype.under = function (value) {
  const result = [];

  for(let i = 0; i < this.length; i++) {
    if (Number.isInteger(this[i]) && this[i] < value) {
      result.push(this[i]);
    }
  }

  console.log(result);
  return result;
};

Array.prototype.over = function (value) {
  const result = [];

  for(let i = 0; i < this.length; i++) {
    if (Number.isInteger(this[i]) && this[i] > value) {
      result.push(this[i]);
    }
  }

  console.log(result);
  return result;
};

Array.prototype.inRange = function (value1, value2) {
  const result = [];

  for(let i = 0; i < this.length; i++) {
    if (Number.isInteger(this[i]) && this[i] >= value1 && this[i] <= value2) {
      result.push(this[i]);
    }
  }

  console.log(result);
  return result;
};

//[1,2,3,4,5].odd()
//[1,2,3,4,5].under(4)
//[1,2,3,4,5].over(4)
[1,2,3,4,5].inRange(4,6)