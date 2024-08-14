// Task: 1
/**
 * The `customSet` function creates a set from an array of numbers and strings, 
 * but removes all elements that are numbers.
 * arr - The array from which the set is created.
 * Returns - A new set containing only string elements.
 */
function customSet(arr) {
  let set = new Set(arr);
  for (let index of set) {
    if (typeof index === 'number') {
      set.delete(index);
    }
  }
  return set;
}
// Example usage of the customSet function
console.log("Task: 1 ==============================");
console.log(customSet([1, "a", 2, "b", 3, "c"]));
// Output: Set(3) { 'a', 'b', 'c' }

// Task: 2
/**
 * The `clearSet` function clears a set.
 * set - The set to be cleared.
 */
function clearSet(set) {
  if (set.size > 0) {
    set.clear();
    return `Set cleared`;
  } else {
    return `Set is already empty`;
  }
}

// Example usage of the clearSet function
console.log("Task: 2 ==============================");

console.log(clearSet(new Set([1, 2, 3])));
// Output:
// Set cleared.

// Task: 3
/**
 * The `addElements` function adds elements from an array to a set if they are not already present in the set.
 * mySet - The set to which elements will be added.
 * arr - The array containing elements to be added to the set.
 * Returns - The updated set with the new elements.
 */
function addElements(mySet, arr) {
  for (let item of arr) {
    mySet.add(item);
  }
  return mySet;
}

// Example usage of the addElements function
console.log("Task: 3 ==============================");
console.log(addElements(new Set(["a", "b", "c"]), ["d", "e", "f"]));
// Output: Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

// Task: 4
/**
 * The `filterAndAdd` function removes all numerical elements from a set and 
 * adds unique values from an array to the set if they are not already present.
 * As a result, we get a set containing only string values.
 *
 * mySet - The set from which numerical elements will be removed.
 * arr - The array from which unique elements will be added to the set.
 *
 * Returns - The updated set.
 */
function filterAndAdd(mySet, arr) {
  for (let item of mySet) {
    if (typeof(item) === 'number') {
      mySet.delete(item);
    }
  }
  for (let value of arr) {
    mySet.add(value);
  }
  return mySet;
}

// Example usage of the filterAndAdd function
console.log("Task: 4 ==============================");
console.log(filterAndAdd(new Set([1, 2, 3, "a", "b", "c"]), ["d", "e", "f"]));
// Output: Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

// Task: 5

/**
 * The `checkValueAndType` function checks if a set contains a specific value and outputs its type.
 *
 * mySet - The set in which the search will be conducted.
 * value - The value to be found.
 *
 * Returns - A string with a message about the presence of the value and its type.
 */
function checkValueAndType(mySet, value) {
  if (mySet.has(value)) {
    return `Set contains the value "${value}" of type "${typeof value}"`;
  } else {
    return `Set does not contain the value "${value}"`;
  }
}
// Example usage of the checkValueAndType function
console.log("Task: 5 ==============================");
console.log(checkValueAndType(new Set([1, 2, 3, "a", "b", "c"]), "b"));
// Output: Set contains the value "b" of type "string"

// Task: 6

/**
 * The `setToArray` function converts a set to an array, removes all numerical elements 
 * from the array, and sorts the string elements alphabetically.
 * mySet - The set that needs to be converted to an array and processed.
 * Returns - The sorted array of string elements.
 */
function setToArray(mySet) {
  let arr = [...mySet];
  arr = arr.filter((item) => typeof(item) === 'string');
  arr.sort();
  return arr;
}

// Example usage of the setToArray function
console.log("Task: 6 ==============================");
console.log(setToArray(new Set([1, 2, 3, "b", "a", "c"])));
// Output: ['a', 'b', 'c']

// Task: 7

/**
 * The `removeDuplicatesInPlace` function removes duplicates from an array without creating a new array.
 * arr - The array from which duplicates need to be removed.
 */
function removeDuplicatesInPlace(arr) {
  let uniqueSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (uniqueSet.has(arr[i])) {
      arr.splice(i, 1);
      i--;
    } else {
      uniqueSet.add(arr[i]);
    }
  }
  return uniqueSet;
}

// Example usage of the removeDuplicatesInPlace function
console.log("Task: 7 ==============================");

console.log(removeDuplicatesInPlace([1, 2, 2, 3, 3, 4, 5, 5]));
// Output: Set(5) { 1, 2, 3, 4, 5 }

// Task: 8

/**
 * The `areDisjoint` function checks if two sets are disjoint (do not have common elements).
 * set1 - The first set.
 * set2 - The second set.
 * Returns - true if the sets do not have common elements, otherwise false.
 */
function areDisjoint(set1, set2) {
  for (let item1 of set1) {
    if (set2.has(item1)) {
      return false;
    }
  }
  return true;
}

// Example usage of the areDisjoint function
console.log("Task: 8 ==============================");
console.log(areDisjoint(new Set([1, 2, 3]), new Set([3, 4, 5])));
// Output: false

// Task: 9

/**
 * The `getDifference` function returns a set containing elements that belong 
 * to the first set but do not belong to the second set.
 * set1 - The first set.
 * set2 - The second set.
 * Returns - A set with elements that belong to set1 but not to set2.
 */
function getDifference(set1, set2) {
  let differenceSet = new Set();
  for (let item1 of set1) {
    if (!set2.has(item1)) {
      differenceSet.add(item1);
    }
  }
  return differenceSet;
}

// Example usage of the getDifference function
console.log("Task: 9 ==============================");
console.log(getDifference(new Set([1, 2, 3, 4]), new Set([2, 3])));
// Output: Set(2) { 1, 4 }

// Task: 10

/**
 * The `getIntersection` function returns a set containing the common elements of two arrays.
 * arr1 - The first array.
 * arr2 - The second array.
 * Returns - A set with common elements.
 */
function getIntersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let intersectionSet = new Set();
  for (let item1 of set1) {
    if (set2.has(item1)) {
      intersectionSet.add(item1);
    }
  }
  return intersectionSet;
}

// Example usage of the getIntersection function
console.log("Task: 10 ==============================");
console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// Output: Set(2) { 3, 4 }

// Task: 11

/**
 * The `iterateSet` function iterates through a set and outputs the keys, values, and entries of each element.
 * set - The set to iterate through.
 */
function iterateSet(set) {
  let keys = set.keys();
  for (let key of keys) {
    console.log(key);
  }
  let values = set.values();
  for (let value of values) {
    console.log(value);
  }
  let entries = set.entries();
  for (let entry of entries) {
    console.log(entry);
  }
}

// Example usage of the iterateSet function
console.log("Task: 11 ==============================");
iterateSet(new Set(["a", "b", "c"]));
// Output:
// a
// b
// c
// a
// b
// c
// [ 'a', 'a' ]
// [ 'b', 'b' ]
// [ 'c', 'c' ]

// Task: 12

/**
 * The `sumNumbers` function calculates the sum of all numerical elements in a set.
 * set - The set in which the sum of numbers needs to be calculated.
 * Returns - The sum of numerical elements in the set.
 */
function sumNumbers(set) {
  let sum = 0;
  set.forEach(element => {
    if (typeof element === 'number') {
      sum += element;
    }
  });
  return sum;
}

// Example usage of the sumNumbers function
console.log("Task: 12 ==============================");
console.log(
  "Sum of numbers in the set:",
  sumNumbers(new Set([1, 2, "a", 3, "b", 4, 5]))
);
// Output: Sum of numbers in the set: 15
