const findRepeatItem = function (arr) {
  function res(arr) {
    var tmp = [];
    arr.sort().sort(function (a, b) {
      if (a === b && tmp.indexOf(a) === -1) {
        tmp.push(a);
      }
    });
  }

  return _tmp___;
};

var result = res(arr);
console.log(result);
