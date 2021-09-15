function worker(n) {
  let [prevFib,fibLessThanN] = fibLessThan(n);
  while (fibLessThanN * prevFib !== n) {
    [prevFib, fibLessThanN] = fibLessThan(fibLessThanN - 1);
    if (prevFib === 1 && n > 2) {
      return null;
    } 
  }

  if (fibLessThanN * prevFib === n) {
    return [fibLessThanN, prevFib];
  }

  return null;
}

// return pair [fib(index-1), fix(index)]
// where index is a number of 
function fibLessThan(n) {
  let prevFib = 1;
  let currentFib = 2;
  if (currentFib < n) {
    for (let index = 3; currentFib < n; index++) {
      const nextCurrentCandidate = fib(index);
      if (nextCurrentCandidate > n) {
        break;
      }
      prevFib = currentFib;
      currentFib = nextCurrentCandidate;
    }
  }

  return [prevFib, currentFib];
}

function fib(index) {
  if (index === 1) {
    return 1;
  }
  if (index === 2) {
    return 2;
  }
  return fib(index-1) + fib(index - 2);
}

console.log(worker(40));
console.log(worker(41));
console.log(worker(16));
console.log(worker(21 * 34));

// console.log(fib(7));
// console.log(fibLessThan(7));

// 1 2 3 5 8 13 21 34