let arr = [5, 2, 6, 7, 3, 8, 0, 9, 4, -1];

function sortAndReverse(arr) {
  let n = arr.length;
  let temp;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < n / 2; i++) {
    temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
  return arr;
}
console.log("sortAndReverse: ", sortAndReverse(arr));

function onlyReverse(arr) {
  let n = arr.length;
  let temp;
  for (let i = 0; i < n / 2; i++) {
    temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
  return arr;
}
console.log("onlyReverse: ", onlyReverse(arr));

function onlySort(arr) {
  let n = arr.length;
  let temp;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i - 1; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
console.log("onlySort: ", onlySort(arr));

function findMaxValue(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}
console.log("findMaxValue: ", findMaxValue(arr));

function findMinValue(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}
console.log("findMinValue: ", findMinValue(arr));

function findSecondLargestValue(arr) {
  let n = arr.length;
  let temp;

  if (n < 2) {
    return null;
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[0]) {
      return arr[i];
    }
  }

  return null;
}
console.log("findSecondLargestValue: ", findSecondLargestValue(arr));

function sumOfArrayElements(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
console.log("sumOfArrayElements: ", sumOfArrayElements(arr));